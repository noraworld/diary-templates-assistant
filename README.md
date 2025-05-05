# 日記テンプレート
```shell
cp -i .env.sample .env
cp -i tmp/github_event_path_sample.json tmp/github_event_path.json
node --env-file=.env app/comment_from_dispatch.js
```

## リンク集
* [Issues テンプレート編集ページ](https://github.com/noraworld/diary-templates-assistant/issues/templates/edit) [^issue_template_edit_link]
* [リザーブド日記テンプレート一覧](https://github.com/noraworld/diary-templates/issues)

[^issue_template_edit_link]: 設定で issues を無効にしていてもリンクを直接踏めばアクセスはできるのでテンプレートを編集したい場合はここから行う。またはリポジトリのファイル編集画面から編集しても良い。なお、本リポジトリで issues を無効にしている理由は、テンプレートを別のリポジトリから参照しており、設定ミスやコーディング上のエンバグで本リポジトリに間違って issues が作成されてしまうのを防ぐため。
