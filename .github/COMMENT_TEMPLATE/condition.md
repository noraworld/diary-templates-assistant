### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | 体調記録 |
| 身体の状態 | ${{ github.event.inputs.condition }} |
| 不快レベル | ${{ github.event.inputs.discomfort }} |
| 状況 | ${{ github.event.inputs.situation }} |
| 原因 | ${{ github.event.inputs.cause || '不明' }} |
| 対処 | ${{ github.event.inputs.coping || '特になし' }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
