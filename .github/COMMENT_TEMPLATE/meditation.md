### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | ${{ github.event.inputs.type }} |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
| 集中レベル | ${{ github.event.inputs.focused }} |
| リラックスレベル | ${{ github.event.inputs.relaxed }} |
| 気分レベル | ${{ github.event.inputs.mood }} |

### 気がそれたときに考えていたことやそのときの感情
${{ github.event.inputs.thoughts || '特になし。' }}

### 身体の感覚の変化や痛み
${{ github.event.inputs.sensation || '特になし。' }}

### 気持ちや感情の変化
${{ github.event.inputs.feelings || '特になし。' }}

### 所感・その他
${{ github.event.inputs.impression || '特になし。' }}
