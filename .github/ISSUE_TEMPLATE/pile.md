---
name: Pile
about: 就寝前タスク整理 | 寝る前に翌日やることを決めることで睡眠の質が上がるという研究結果があります
title: "[{{DATE}}]_pile_就寝前タスク整理"
labels: ''
assignees: noraworld

---

## 目的
明日やるべきタスクを整理（必要に応じて追加）しここに記録することで、仮に翌日サボってやらなくなった上にチェックリストから削除してもここに証拠が残るようにする。これにより証拠隠滅を防止する。



## 方法
以下のコマンドを実行して出力された結果をコピーしコメントとして投稿する。macOS の場合は自動的にクリップボードにコピーされる。

### Linux
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | tac 
```

### macOS
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | gtac | gtee >(pbcopy) 
```
