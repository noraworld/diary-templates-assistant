---
name: 18. Pile
about: 翌日やること整理 | 寝る前に翌日やることを決めることで睡眠の質が上がるという研究結果があります
title: "📆_[{{DATE}}]_pile_翌日やること整理"
labels: ''
assignees: noraworld

---

```
### チェックリスト
* [ ] 現在の課題を整理

### 明日やること
<ここにやることを挿入>

### 備考
<ここに備考を挿入>
```

<!-- スクリプトで取得するので上記のコードブロックは（一番最初の YAML フォーマットを除いて）必ず一番上に配置すること！ -->



### クイックリンク
* [今日の日記]([{{MAIN_REPO_TODAY_URL}}])
* [ワークフローディスパッチ](https://github.com/noraworld/diary-templates-assistant/actions/workflows/pile.yml)
* [昨日の記録](https://github.com/noraworld/diary-templates/blob/main/templates/pile/[{{YESTERDAY_YEAR}}]/[{{YESTERDAY_MONTH}}]/[{{YESTERDAY_DATE}}]-.md)
* やることリスト (原則最大 3 つ！ どんなに多くても 5 つ！！ 4 つ以上になったら備考欄に理由を記載！！！)
    * [Board](https://github.com/users/noraworld/projects/1)
    * [Issues](https://github.com/noraworld/to-do/issues)

<details>
<summary>追加しない場合</summary>

```
### チェックリスト
* [ ] 現在の課題を整理

### 明日やること
特になし。

### やらない理由


### 備考
特になし。
```
</details>



### 重要
**たとえ明日はタスクを積むつもりがなくてもタスクリストを毎日必ずチェックすること！** たとえ明日はやらなかったとしても、今現在どのような課題があるのかを毎日把握しておくことが重要である。

積むタスクの数は原則は 3 つを上限とする。どんなに多くても 5 つを超えてはいけない。

> 「デイリータスク」はいくつ選んでもいいのですが、あまりに多すぎると獣が混乱をきたしますし、第１章でも述べたとおり調教師は３つ以上の情報を一気に処理できません。とりあえず１日の作業は最大でも５つまでに収めておき、時間があまったらそのたびにつけたすのが無難です。
>
> 鈴木 祐. ヤバい集中力　1日ブッ通しでアタマが冴えわたる神ライフハック45 (Japanese Edition) (p. 80). (Function). Kindle Edition.



### 目的
明日やるべきタスクを整理（必要に応じて追加）しここに記録することで、仮に翌日サボってやらなくなった上にチェックリストから削除してもここに証拠が残るようにする。これにより証拠隠滅を防止する。



### 備考
特に優先順位の高いものがなければ、なんとなく気分的に「とりあえずこれやるか」と思ったものを明日のタスクとして積めば良い。あまりどれからやるかということにこだわらずに気分で決めて良い。そうじゃないと何をやるかを決めることに無駄な脳のリソースと時間を取られてしまうので。



### 手順
#### タスクの整理
* Todo リストをチェックして明日やるべきタスクを整理・追加する
    * 明日やるべきタスクには `tomorrow` ラベルを付与する

#### タスクの記録
* [GitHub Actions](https://github.com/noraworld/diary-templates-assistant/actions/workflows/pile.yml) を実行する
    * 明日のタスクを追加しない場合はなぜやらないのかを代わりにコメントする

<details>
<summary>ローカル実行版（旧）</summary>

* 以下のコマンドを実行して出力された結果をコピーしコメントとして投稿する
    * macOS の場合は自動的にクリップボードにコピーされるのでこちらを推奨する
    * 明日のタスクを追加しない場合はなぜやらないのかを代わりにコメントする

##### macOS
<details>
<summary>テンプレート全体をコピー</summary>

```shell
gh api "/repos/noraworld/diary-templates/contents/.github/ISSUE_TEMPLATE/pile.md" --jq .content |
  gbase64 --decode |
  awk '/^```/{f++; next} f==1' |
  while IFS= read -r line; do
    if [ "$line" = "<ここにやることを挿入>" ]; then
      gh issue list \
        --repo noraworld/to-do \
        --search "label:today,tomorrow" \
        --json title,url \
        --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' |
        gtac
    else
      echo "$line"
    fi
  done |
  ghead -c -1 |
  pbcopy &&
  exit
```
</details>

<details>
<summary>タスクリストのみコピー</summary>

```shell
gh issue list \
  --repo noraworld/to-do \
  --search "label:today,tomorrow" \
  --json title,url \
  --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' |
  gtac |
  ghead -c -2 |
  pbcopy &&
  exit
```
</details>

##### Linux
<details>
<summary>テンプレート全体をコピー</summary>

```shell
gh api "/repos/noraworld/diary-templates/contents/.github/ISSUE_TEMPLATE/pile.md" --jq .content |
  base64 --decode |
  awk '/^```/{f++; next} f==1' |
  while IFS= read -r line; do
    if [ "$line" = "<ここにやることを挿入>" ]; then
      gh issue list \
        --repo noraworld/to-do \
        --search "label:today,tomorrow" \
        --json title,url \
        --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' |
        tac
    else
      echo "$line"
    fi
  done
```
</details>

<details>
<summary>タスクリストのみコピー</summary>

```shell
gh issue list \
  --repo noraworld/to-do \
  --search "label:today,tomorrow" \
  --json title,url \
  --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' |
  tac
```
</details>
</details>
