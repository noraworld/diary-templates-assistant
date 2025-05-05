// https://chatgpt.com/c/68174cab-92bc-8004-9ed8-dd344ce1a27d

'use strict';

const fs = require('fs');
const { Octokit } = require('@octokit/rest');

async function run() {
  const template = fs.readFileSync(`.github/COMMENT_TEMPLATE/${process.env.TEMPLATE_NAME}.md`, 'utf-8');
  const regex = /\${{\s*github\.event\.inputs\.([a-zA-Z0-9_]+)(?:\s*\|\|\s*'([^']*)')?\s*}}/g;
  const replaced = template.replace(regex, (_match, key, fallback) => {
    return parseInputs(key, fallback);
  }).trim();
  const [ owner, repo ] = process.env.TEMPLATE_REPO.split('/');

  if (process.env.DRY_RUN !== 'true') {
    await getIssueNumber({ owner, repo })
    .then(issueNumber => comment({
      owner: owner,
      repo: repo,
      issueNumber: issueNumber,
      body: replaced,
    })).catch((err) => {
      console.error(err);
      process.exit(1);
    });
  } else {
    console.log(replaced);
  }
}

function parseInputs(key, fallback) {
  const json = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf-8'));
  const floatRegex = /^([0-9]+\.)+[0-9]+$/g;

  if (json.inputs.hasOwnProperty(key)) {
    if (floatRegex.test(json.inputs[key])) return formatTime(json.inputs[key]);

    switch (json.inputs[key]) {
      case true:
      case 'true':
        return 'x';
      case false:
      case 'false':
        return ' ';
      default:
        return json.inputs[key];
    }
  } else if (fallback !== undefined) {
    return fallback;
  } else {
    return '';
  }
}

// "1.20.30" => "1 時間 20 分 30 秒"
//   https://chatgpt.com/c/681841d7-69cc-8004-8b5c-c30807ded8b5
function formatTime(input) {
  const units = [' 秒', ' 分', ' 時間'];
  const parts = input.split('.').map(Number);

  const result = parts
    .reverse()
    .map((value, index) => {
      const unit = units[index] || '';
      return `${value}${unit}`;
    })
    .reverse()
    .join(' ');

  return result;
}

async function getIssueNumber({ owner, repo }) {
  const octokit = getToken();
  const q = `repo:${owner}/${repo} is:issue state:open ${process.env.SEARCH_QUERY}`;
  // DEPRECATED WARNING!
  // https://docs.github.com/rest/search/search#search-issues-and-pull-requests
  // https://github.blog/changelog/2025-03-06-github-issues-projects-api-support-for-issues-advanced-search-and-more/
  const result = await octokit.rest.search.issuesAndPullRequests({
    q,
    per_page: 1,
  });
  if (result.data.total_count === 0) throw new Error('No matching issues found');
  return result.data.items[0].number;
}

async function comment({ owner, repo, issueNumber, body }) {
  const octokit = getToken();
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
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
