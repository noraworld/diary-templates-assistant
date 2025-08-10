// https://chatgpt.com/share/688d2d71-4330-8004-a942-d007c9416d44
// https://chatgpt.com/share/688e2bdb-3ea4-8004-a13a-62225996589c

'use strict';

const fs = require('fs');
const { ObjectId } = require('bson');
const { Octokit } = require('@octokit/rest');
const choiceMap = {
  '☆☆☆☆☆☆☆☆☆☆': 0,
  '★☆☆☆☆☆☆☆☆☆': 1,
  '★★☆☆☆☆☆☆☆☆': 2,
  '★★★☆☆☆☆☆☆☆': 3,
  '★★★★☆☆☆☆☆☆': 4,
  '★★★★★☆☆☆☆☆': 5,
  '★★★★★★☆☆☆☆': 6,
  '★★★★★★★☆☆☆': 7,
  '★★★★★★★★☆☆': 8,
  '★★★★★★★★★☆': 9,
  '★★★★★★★★★★': 10,
}

async function run() {
  const [ owner, repo ] = process.env.TEMPLATE_REPO.split('/');
  const issue = await getIssue();
  const value = buildObject(issue);
  const space = 0;
  const json = JSON.stringify(value, null, space);

  if (process.env.DRY_RUN) {
    console.info(`DEBUG: owner  = ${owner}`);
    console.info(`DEBUG: repo   = ${repo}`);
    console.info(`DEBUG: number = ${issue.number}`);
    console.info(`DEBUG: body   = ${json}`);
    console.info();
    console.info('DEBUG: pretty format of body:');
    console.info(value);
  }
  else {
    comment({
      owner: owner,
      repo: repo,
      number: issue.number,
      body: json,
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  }
}

function buildObject(issue) {
  let obj = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf-8')).inputs;

  if (obj.hours || obj.minutes || obj.seconds) {
    const hours   = obj.hours   ? Number(obj.hours)   : 0;
    const minutes = obj.minutes ? Number(obj.minutes) : 0;
    const seconds = obj.seconds ? Number(obj.seconds) : 0;

    obj.duration = {
      total: hours * 3_600 + minutes * 60 + seconds,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }

    delete obj.hours;
    delete obj.minutes;
    delete obj.seconds;
  }

  // Note that each process will be conducted only once for a single key and value within this loop (keyword: 'continue.')
  const markdownLinkRegex = /^\[([^\]]+)\]\(([^)]+)\)$/;
  for (const [key, value] of Object.entries(obj)) {
    // to avoid 'value.match is not a function'
    if (typeof value !== 'string') continue;

    // before:
    //   { "site": "[Google](https://www.google.com)" }
    // after:
    //   { "site": { "link": "[Google](https://www.google.com)", "title": "Google", "url": "https://www.google.com" } }
    const match = value.match(markdownLinkRegex);
    if (match) {
      obj[key] = {
        link: value,
        title: match[1],
        url: match[2],
      }
      continue;
    }

    // before:
    //   { "productivity": "★★★★★★★★☆☆" }
    // after:
    //   { "productivity": 8 }
    if (choiceMap[value]) {
      obj[key] = choiceMap[value];
      continue;
    }

    // before:
    //   { "minutes": "15" }
    // after:
    //   { "minutes": 15 }
    if (Number.isFinite(Number(value))) {
      obj[key] = Number(value);
      continue;
    }

    // before:
    //   { "completed": "true", archived: "false" }
    // after:
    //   { "completed": true, archived: false }
    if (value === 'true') {
      obj[key] = true;
      continue;
    }
    if (value === 'false') {
      obj[key] = false;
      continue;
    }

    // before:
    //   { "impression": "I had a blast with my friend<span dir="auto">{private}Kevin{/private}</span>." }
    // after:
    //   { "impression": "I had a blast with my friend." }
    if (process.env.PARTIAL_CONTENT_START_STRING && process.env.PARTIAL_CONTENT_END_STRING) {
      const partialStringRegExp = new RegExp(
        '(' + process.env.PARTIAL_CONTENT_START_STRING + '.*?' + process.env.PARTIAL_CONTENT_END_STRING + ')', 'gs'
      );
      obj[key] = value.replace(partialStringRegExp, '');
      continue;
    }
  }

  const defaultObj = {
    id:         new ObjectId().toHexString(),
    date:       issue.title.split('_')[1],
    created_at: new Date().toISOString(),
    version:    process.env.VERSION,
    type:       process.env.TEMPLATE_NAME,
  }

  return Object.assign(defaultObj, groupRepeatedObject(obj));
}

// https://chatgpt.com/s/t_688ea4c19a8c8191854a262100823fb3
function groupRepeatedObject(obj) {
  const output = {};
  const grouped = {};

  for (const [key, value] of Object.entries(obj)) {
    const match = key.match(/^([a-zA-Z_]+)(\d+)$/);

    if (match) {
      const base = match[1];
      const index = match[2];

      if (!grouped[index]) grouped[index] = {};
      grouped[index][base] = value;
    }
    else {
      output[key] = value;
    }
  }

  if (Object.values(grouped).length) {
    const listKeyname = `${process.env.TEMPLATE_NAME.replace(/-/g, '_')}_list`;
    Object.assign(output, { [listKeyname]: Object.values(grouped) });
  }

  return output;
}

async function getIssue() {
  const octokit = getToken();
  const q = `repo:${process.env.TEMPLATE_REPO} is:issue state:open ${process.env.SEARCH_QUERY}`;

  if (process.env.DRY_RUN === 'true') {
    console.info('INFO: Getting an issue number skipped\n');
    return {
      number: 9082,
      title: '🎯_2025-08-02_readiness_心構え',
    };
  }

  const result = await octokit.request('GET /search/issues', {
    q: q,
    per_page: 1,
    advanced_search: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  });

  if (result.data.total_count === 0) throw new Error('No matching issues found');

  return result.data.items[0];
}

async function comment({ owner, repo, number, body }) {
  const octokit = getToken();

  return await octokit.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body,
  });
}

function getToken() {
  const token = process.env.GH_TOKEN;
  if (!token) throw new Error('GH_TOKEN is not set in environment variables');
  return new Octokit({ auth: token });
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
