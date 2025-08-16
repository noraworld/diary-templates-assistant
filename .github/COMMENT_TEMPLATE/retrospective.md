### 基本情報
| 項目 | 内容 |
| :---: | :---: |
| 今日のタスクのやる気 | ${{ github.event.inputs.motivation }} |
| 今日のタスクの生産性 | ${{ github.event.inputs.productivity }} |

### タイムラインへの記録
${{ github.event.inputs.timeline || '特になし。' }}

### 今日の振り返り
${{ github.event.inputs.retrospective || '特になし。' }}
