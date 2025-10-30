### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 食べたもの | ${{ github.event.inputs.food }} |
| 分類 | ${{ github.event.inputs.category }} |
| 分量 | ${{ github.event.inputs.quantity }} ${{ github.event.inputs.unit }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
