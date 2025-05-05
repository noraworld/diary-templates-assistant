# 日記テンプレート
```shell
cp -i .env.sample .env
cp -i tmp/github_event_path_sample.json tmp/github_event_path.json
node --env-file=.env app/comment_from_dispatch.js
```
