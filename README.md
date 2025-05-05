# 日記テンプレート
日々のルーティン（瞑想や運動など）のログを記録するためのテンプレート置き場です。本テンプレートを使用して記録した内容は [日記](https://github.com/noraworld/diary) に連結されますが、[タイムカプセルシステム](https://github.com/noraworld/diary#%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%AB%E3%83%97%E3%82%BB%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0) により公開までのラグが生じます。

完全個人用途のため一般にはあまり役に立たないかもしれません。

## ワークフローディスパッチ動作検証用環境構築
```shell
cp -i .env.sample .env
cp -i tmp/github_event_path_sample.json tmp/github_event_path.json
node --env-file=.env app/comment_from_dispatch.js
```

## リンク集 [^link_note]
* [Issues テンプレート編集ページ](https://github.com/noraworld/diary-templates-assistant/issues/templates/edit) [^issue_template_edit_link]
* [リザーブド日記テンプレート一覧](https://github.com/noraworld/diary-templates/issues)

[^link_note]: 個人用途のためそれ以外の人はアクセスできません。

[^issue_template_edit_link]: 設定で issues を無効にしていてもリンクを直接踏めばアクセスはできるのでテンプレートを編集したい場合はここから行う。またはリポジトリのファイル編集画面から編集しても良い。なお、本リポジトリで issues を無効にしている理由は、テンプレートを別のリポジトリから参照しており、設定ミスやコーディング上のエンバグで本リポジトリに間違って issues が作成されてしまうのを防ぐため。
