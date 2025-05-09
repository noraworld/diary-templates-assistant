### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | アンガーログ |
| 怒りの原因 | ${{ github.event.inputs.cause }} |
| 怒りレベル | ${{ github.event.inputs.degree }} |
| 反応 | ${{ github.event.inputs.reaction }} |
| 反応の判断 | ${{ github.event.inputs.judgment }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
