### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 触れたこと | ${{ github.event.inputs.activity }} |
| どう進めたか | ${{ github.event.inputs.mode }} |
${{ if(github.event.inputs.sessions) }}
| セッションの長さ | ${{ github.event.inputs.sessions }} |
${{ endif }}
${{ if(github.event.inputs.duration) }}
| 何セッション触れたか | ${{ github.event.inputs.duration }} |
${{ endif }}
${{ if(github.event.inputs.milestone) }}
| どこまで進んだか | ${{ github.event.inputs.milestone }} |
${{ endif }}

### チェックリスト
* [${{ github.event.inputs.engagement }}] 自分のやりたいことに一歩触れた？

### 今日のひとこと
${{ github.event.inputs.note || '特になし。' }}
