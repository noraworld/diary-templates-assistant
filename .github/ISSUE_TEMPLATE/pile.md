---
name: Pile
about: 就寝前タスク整理 | 寝る前に翌日やることを決めることで睡眠の質が上がるという研究結果があります
title: "[{{DATE}}]_pile_就寝前タスク整理"
labels: ''
assignees: noraworld

---

## Linux
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | tac 
```

## macOS
```shell
gh issue list --repo noraworld/to-do --search "label:today,tomorrow" --json title,url --template '{{range.}}* [{{.title}}]({{.url}}){{"\r\n"}}{{end}}' | gtac | gtee >(pbcopy) 
```
