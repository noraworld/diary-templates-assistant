# 日記テンプレート
日々のルーティン（瞑想や運動など）のログを記録するためのテンプレート置き場です。本テンプレートを使用して記録した内容は [日記](https://github.com/noraworld/diary) に連結され将来的には公開されますが、[タイムカプセルシステム](https://github.com/noraworld/diary#%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%AB%E3%83%97%E3%82%BB%E3%83%AB%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0) により公開までのラグが生じます。

完全個人用途のため一般にはあまり役に立たないかもしれません。

## ワークフローディスパッチ動作検証用環境構築
### 全般
```shell
cp -i .env.sample .env
cp -i tmp/github_event_path_sample.json tmp/github_event_path.json
```

### Node.js
```shell
node --env-file=.env app/<FILENAME>.js
```

### TypeScript
```shell
npx tsc app/<FILENAME>.ts --noEmit && npx tsx --env-file=.env app/<FILENAME>.ts
```

* 初回実行時や `npx` のキャッシュが切れたときには `tsx` のインストールを求められるのでそのままエンターキーを押してインストールを続行する
* `npx tsx app/<FILENAME>.ts` だけだと型チェックをしないまま実行するので事前に `npx tsc app/<FILENAME>.ts --noEmit` を実行する
    * `--noEmit` は型チェックのみを行うオプションで、これを外すと `app/<FILENAME>.js` を生成する
    * ローカルでは JavaScript ファイルを生成する必要はないので、うっかりコミットしてしまわないように通常は `--noEmit` を付与して実行する
* ファイルに変更がない状態で連続して `tsc` コマンド（`--noEmit` なし）を実行しても JavaScript ファイルは生成されない
    * https://chatgpt.com/s/t_68a24a833804819198cd68195959649c
    * https://chatgpt.com/s/t_68a24afe457881919f08405f6f90a9ee
    * まあローカルでは JavaScript ファイルを生成する必要はないのだが

### Python
```shell
pipenv install
pipenv run python app/<FILENAME>.py
```

## 各テンプレートのワークフローにおけるバージョンルールについて
蓄積する JSON Lines のオブジェクトの形式が途中で変更された場合でも集計や分析の際に差異を吸収できるよう、各テンプレートのワークフロー `.github/workflows/<TEMPLATE_NAME>.yml` の `jobs.<TEMPLATE_NAME>.with.version` でバージョン管理を行っています。

以下にメジャーバージョン・マイナーバージョン・パッチバージョンのそれぞれを上げる際の基準について明記します。[セマンティックバージョニング](https://semver.org/lang/ja/) を参考にしていますが、完全には準拠していない点に注意してください。

| バージョン | ルール |
| :---: | --- |
| メジャー | スクリプト `jsonl.js` の仕様変更によるデフォルトオブジェクトやシステムオブジェクトの変更、または全テンプレートに影響する抜本的な変更等 |
| マイナー | 特定のテンプレートにおける後方互換性がないキー名の変更やオブジェクトの構造の変更等 |
| パッチ | 後方互換性を持つ軽微な変更や `choice` 型の `options` の中身の変更等 |
