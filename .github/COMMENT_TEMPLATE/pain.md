### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | 痛みダイアリー |
| 痛い部位 | ${{ github.event.inputs.pain }} |
| 痛みレベル | ${{ github.event.inputs.degree }} |
| 状況 | ${{ github.event.inputs.situation }} |
| 原因 | ${{ github.event.inputs.cause || '不明' }} |
| 対処 | ${{ github.event.inputs.coping || '特になし' }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
