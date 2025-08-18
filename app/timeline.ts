const { basename } = require("node:path");
const fs = require('fs');
const { Octokit } = require('@octokit/rest');

interface ContentObject {
  existingContent: string | undefined;
  message: string;
  sha: string | undefined;
}

interface PushObject {
  owner: string;
  repo: string;
  path: string;
  message: string;
  content: string;
  committer: { name: string; email: string };
  author: { name: string; email: string };
  branch: string | undefined;
  sha: string | undefined;
}

class GitHub {
  constructor(
    private repoWithOwner: string,
    private path: string,
    private messageIfFileExists: string,
    private messageIfFileNotExists: string,
    private content: string,
    private committerName: string,
    private committerEmail: string,
    private branch: string | undefined = undefined,
    private token: string | undefined = process.env.GH_TOKEN,
  ) {}

  async push(): Promise<any> {
    const pushObject: PushObject = await this.buildPushObject();

    return await this.#octokit(this.token).repos.createOrUpdateFileContents(pushObject);
  }

  private get owner(): string {
    if (!this.repoWithOwner || !this.repoWithOwner.includes('/')) {
      throw new Error(`'${this.repoWithOwner}' is not a valid owner/repo format`);
    }

    return this.repoWithOwner.split('/')[0];
  }

  private get repo(): string {
    if (!this.repoWithOwner || !this.repoWithOwner.includes('/')) {
      throw new Error(`'${this.repoWithOwner}' is not a valid owner/repo format`);
    }

    return this.repoWithOwner.split('/')[1];
  }

  protected async buildPushObject(): Promise<PushObject> {
    const { existingContent, message, sha }: ContentObject = await this.#getContent();
    const content: string = (existingContent ? existingContent.replace(/\n?$/, '\n') : '') + this.content + '\n';
    const encodedContent: string = this.#convertToBase64(content);
    const pushObject: PushObject = {
      owner: this.owner,
      repo: this.repo,
      path: this.path,
      message: message,
      content: encodedContent,
      committer: { name: this.committerName, email: this.committerEmail },
      author: { name: this.committerName, email: this.committerEmail },
      branch: this.branch,
      sha: sha,
    }

    return pushObject;
  }

  async #getContent(): Promise<ContentObject> {
    let sha: string | undefined;
    let existingContent: string | undefined;

    try {
      const res = await this.#octokit(this.token).repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path: this.path,
        ref: this.branch,
      });

      if (!Array.isArray(res.data) && res.data.type === 'file') {
        sha = res.data.sha;
        existingContent = this.#convertFromBase64(res.data.content);
      }
      else {
        throw new Error(`'${this.path}' is not a file path`);
      }
    }
    catch (err: unknown) {
      if (!(typeof err === 'object' && err && 'status' in err && (err as any).status === 404)) {
        throw err;
      }
    }

    const message: string = sha
      ? this.#processCommitMessage(this.messageIfFileExists)
      : this.#processCommitMessage(this.messageIfFileNotExists);

    return { existingContent: existingContent, message: message, sha: sha };
  }

  #processCommitMessage(message: string): string {
    return message
      .replaceAll(
        '<FILEPATH>', this.path
      )
      .replaceAll(
        '<FILENAME>', basename(this.path)
      );
  }

  #convertFromBase64(buffer: string | Buffer): string {
    const s = Buffer.isBuffer(buffer) ? buffer.toString('utf8') : buffer;
    return Buffer.from(s, 'base64').toString('utf8');
  }

  #convertToBase64(content: string): string {
    return Buffer.isBuffer(content) ? content.toString('base64') : Buffer.from(content, 'utf8').toString('base64');
  }

  #octokit(auth: string | undefined) {
    if (!auth) throw new Error('token is not set');
    return new Octokit({ auth });
  }
}

class DryRunGitHub extends GitHub {
  async push(): Promise<Object> {
    const pushObject: PushObject = await this.buildPushObject();
    console.info("[DRY-RUN] createOrUpdateFileContents", pushObject);

    const mockedResponse = {
      url: 'https://api.github.com/repos/octokit/octokit.js/contents/src/app.ts',
      status: 200,
      headers: [Object],
      data: {
        content: {
          name: 'app.ts',
          path: 'src/app.ts',
          sha: 'fc5998f4486327cb3ddb63bd50854bb5c08351e6',
          size: 427,
          url: 'https://api.github.com/repos/octokit/octokit.js/contents/src/app.ts?ref=main',
          html_url: 'https://github.com/octokit/octokit.js/blob/main/src/app.ts',
          git_url: 'https://api.github.com/repos/octokit/octokit.js/git/blobs/fc5998f4486327cb3ddb63bd50854bb5c08351e6',
          download_url: 'https://raw.githubusercontent.com/octokit/octokit.js/main/src/app.ts',
          type: 'file',
          _links: [Object]
        },
        commit: {
          sha: '924e1fdee435417005a2657a5967080559fafc05',
          node_id: '<NODE_ID>',
          url: 'https://api.github.com/repos/octokit/octokit.js/git/commits/924e1fdee435417005a2657a5967080559fafc05',
          html_url: 'https://github.com/octokit/octokit.js/commit/924e1fdee435417005a2657a5967080559fafc05',
          author: [Object],
          committer: [Object],
          tree: [Object],
          message: 'Update app.ts',
          parents: [Array],
          verification: [Object]
        }
      }
    }

    return mockedResponse;
  }
}

type JsonReplacer = Parameters<typeof JSON.stringify>[1];

class Timeline {
  private _date!: string;

  constructor(
    date: string,
    private event: string,
  ) {
    this.date = date;
  }

  json(replacer: JsonReplacer = null, space: number = 0): string {
    interface Json {
      date: string;
      event: string;
    }

    const json: Json = {
      date: this.date,
      event: this.event,
    }

    return JSON.stringify(json, replacer, space);
  }

  private get date(): string {
    return this._date;
  }

  private set date(value: string) {
    this.validateDateFormat(value);
    this._date = value;
  }

  private validateDateFormat(value: string) {
    const dateFormat: RegExp = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateFormat.test(value)) throw new Error(`date '${value}' is invalid`);
  }
}

interface Inputs {
  inputs: {
    timeline: string;
  };
}

class Utils {
  static getEnv(key: string): string {
    const value = process.env[key];
    if (!value) throw new Error(`env '${key}' is required`);
    return value;
  }

  static getInputs(): Inputs['inputs'] {
    const eventPath = this.getEnv('GITHUB_EVENT_PATH');
    const content: string = fs.readFileSync(eventPath, 'utf-8');
    const parsed: Inputs = JSON.parse(content);

    return parsed.inputs;
  }

  static getInputsProperty<K extends keyof Inputs['inputs']>(key: K) {
    const inputs: Inputs['inputs'] = this.getInputs();
    const value: Inputs['inputs'][K] = inputs[key];
    if (!value) throw new Error(`key '${key}' is not found in inputs`);

    return value;
  }
}

async function run() {
  const timeline = new Timeline(
    Utils.getEnv('DATE'),
    Utils.getInputsProperty('timeline'),
  );
  const content: string = timeline.json();

  const githubArgs: [string, string, string, string, string, string, string, string?, string?] = [
    Utils.getEnv('REPO'),
    Utils.getEnv('FILEPATH'),
    Utils.getEnv('MESSAGE_IF_FILE_EXISTS'),
    Utils.getEnv('MESSAGE_IF_FILE_NOT_EXISTS'),
    content,
    Utils.getEnv('COMMITTER_NAME'),
    Utils.getEnv('COMMITTER_EMAIL'),
  ];
  const github = process.env.CI ? new GitHub(...githubArgs) : new DryRunGitHub(...githubArgs);
  github.push();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
