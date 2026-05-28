### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.hours }} 時間 ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
| 距離 | ${{ github.event.inputs.distance }} km |
| 消費カロリー | ${{ github.event.inputs.burned }} kcal |
| 平均ペース | ${{ github.event.inputs.pace }} / km |
| 平均心拍数 | ${{ github.event.inputs.heart }} bpm |
| 天気 | ${{ github.event.inputs.weather }} |
| 体感気温 | ${{ github.event.inputs.temperature }} |
| 行き先 | ${{ github.event.inputs.destination }} |
| 外出意欲 | ${{ github.event.inputs.motivation }} |
| 気分レベル | ${{ github.event.inputs.mood }} |

### チェックリスト
* [${{ github.event.inputs.loving_kindness }}] 慈経行
* [${{ github.event.inputs.mail_check }}] 郵便物の確認
* [${{ github.event.inputs.mail_collection }}] 郵便物の回収
* [${{ github.event.inputs.garbage }}] ゴミ捨て
* [${{ github.event.inputs.music }}] 音楽
* [${{ github.event.inputs.pokemon }}] ポケモン GO

### 気分の変化
${{ github.event.inputs.feeling }}

### 畏経行
${{ github.event.inputs.awe_inspiring || '特になし。' }}

### 郵便物
${{ github.event.inputs.mail || '特になし。' }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
