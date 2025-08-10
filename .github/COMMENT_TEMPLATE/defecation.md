### 基本情報
| 項目 | 内容 |
| --- | :---: |
| かたち | ${{ github.event.inputs.shape }} |
| 色 | ${{ github.event.inputs.color }} |
| 量 | ${{ github.event.inputs.amount }} g |
| におい | ${{ github.event.inputs.smell }} |
| すっきり感 | ${{ github.event.inputs.relief }} |
| ふんばりタイム | ${{ github.event.inputs.minutes }} 分前後 |

### 詳細
* [${{ github.event.inputs.float }}] ぷかぷか
* [${{ github.event.inputs.pain }}] はらいた

### メモ
${{ github.event.inputs.impression || '特になし。' }}
