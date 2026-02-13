### 基本情報
| 項目 | 内容 |
| --- | :---: |
| どう進めたか | ${{ github.event.inputs.mode }} |
${{ if(github.event.inputs.milestone) }}
| どこまで進んだか | ${{ github.event.inputs.milestone }} |
${{ endif }}
${{ if(github.event.inputs.duration) }}
| 1 セッションの長さ | ${{ github.event.inputs.duration }} 分 |
${{ endif }}
${{ if(github.event.inputs.sessions) }}
| 何セッション触れたか | ${{ github.event.inputs.sessions }} セッション |
${{ endif }}

### 触れたこと
* ${{ github.event.inputs.activity1 }}
* ${{ github.event.inputs.activity2 }}
* ${{ github.event.inputs.activity3 }}
* ${{ github.event.inputs.activity4 }}

### チェックリスト
* [${{ github.event.inputs.engagement }}] 自分のやりたいことに一歩触れた？

### 今日のひとこと
${{ github.event.inputs.note || '特になし。' }}
