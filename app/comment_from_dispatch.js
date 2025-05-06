// https://chatgpt.com/c/68174cab-92bc-8004-9ed8-dd344ce1a27d

'use strict';

const fs = require('fs');
const { Octokit } = require('@octokit/rest');

async function run() {
  const template = fs.readFileSync(`.github/COMMENT_TEMPLATE/${process.env.TEMPLATE_NAME}.md`, 'utf-8');
  const json = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf-8'));
  const ifRegex = /\${{\s*if\(github\.event\.inputs\.([a-zA-Z0-9_]+)\)\s*}}([\s\S]*?)\${{\s*endif\s*}}[\r|\n|\r\n]?/g;
  const inputRegex = /\${{\s*github\.event\.inputs\.([a-zA-Z0-9_]+)(?:\s*\|\|\s*'([^']*)')?\s*}}/g;
  const replaced = template
    .replace(ifRegex, (_match, key, content) => {
      return json.inputs?.[key] ? content.trimStart() : '';
    })
    .replace(inputRegex, (_match, key, fallback) => {
      return parseInputs(json, key, fallback);
    })
    .trim();
  const [ owner, repo ] = process.env.TEMPLATE_REPO.split('/');

  await getIssueNumber({ owner, repo })
  .then(issueNumber => comment({
    owner: owner,
    repo: repo,
    issueNumber: issueNumber,
    body: replaced,
  }))
  .then(res => {
    if (process.env.DRY_RUN === 'true') {
      console.info(replaced, '\n');
    }
    console.info(res.data.html_url);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

function parseInputs(json, key, fallback) {
  const floatRegex = /^[0-9]+\.0$/g;

  if (json.inputs.hasOwnProperty(key)) {
    if (floatRegex.test(json.inputs[key])) return json.inputs[key].split('.')[0];

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

async function getIssueNumber({ owner, repo }) {
  const octokit = getToken();
  const q = `repo:${owner}/${repo} is:issue state:open ${process.env.SEARCH_QUERY}`;

  if (process.env.DRY_RUN === 'true') {
    console.info('INFO: Getting an issue number skipped');
    return 7141;
  }

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

  if (process.env.DRY_RUN === 'true') {
    console.info('INFO: Creating a comment was skipped');
    return commentResponse();
  }

  return await octokit.issues.createComment({
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

function commentResponse() {
  return {
    status: 201,
    data: {
      html_url: 'https://github.com/noraworld/diary-templates/issues/7141#issuecomment-2854679866',
    },
  };
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
