### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 食べたもの | ${{ github.event.inputs.food }} |
| 分類 | ${{ github.event.inputs.category }} |
| 分量 | ${{ github.event.inputs.quantity }} ${{ github.event.inputs.unit }} |
| MIND スコア | ${{ github.event.inputs.score }} |
| 調味料 | ${{ github.event.inputs.seasoning || 'なし' }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
