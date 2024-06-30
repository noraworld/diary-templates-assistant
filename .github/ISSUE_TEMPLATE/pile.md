---
name: Pile
about: 就寝前タスク整理 | 寝る前に翌日やることを決めることで睡眠の質が上がるという研究結果があります
title: "[{{DATE}}]_pile_就寝前タスク整理"
labels: ''
assignees: noraworld

---

```
## チェックリスト
* [ ] 現在の課題をチェック

## 明日やること


## 備考
特になし。
```



<details>
<summary>追加しない場合</summary>

```
## チェックリスト
* [ ] 現在の課題をチェック

## 明日やること
特になし。

## やらない理由


## 備考
特になし。
```
</details>



## リンク
* [Board](https://github.com/users/noraworld/projects/1)
* [Issues](https://github.com/noraworld/to-do/issues)



## 重要
**たとえ明日はタスクを積むつもりがなくてもタスクリストを毎日必ずチェックすること！** たとえ明日はやらなかったとしても、今現在どのような課題があるのかを毎日把握しておくことが重要である。



## 目的
明日やるべきタスクを整理（必要に応じて追加）しここに記録することで、仮に翌日サボってやらなくなった上にチェックリストから削除してもここに証拠が残るようにする。これにより証拠隠滅を防止する。



## 手順
### タスクの整理
* Todo リストをチェックして明日やるべきタスクを整理・追加する
    * 明日やるべきタスクには `tomorrow` ラベルを付与する

### タスクの記録
* 以下のコマンドを実行して出力された結果をコピーしコメントとして投稿する
    * macOS の場合は自動的にクリップボードにコピーされる
    * 明日のタスクを追加しない場合はなぜやらないのかを代わりにコメントする

#### Linux
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | tac 
```

#### macOS
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | gtac | gtee >(pbcopy) 
```
