### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | ミックス |
| トレーナー | ${{ github.event.inputs.trainer }} |
| ストリーク | ${{ github.event.inputs.streaks }} 日 |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
| 消費カロリー | ${{ github.event.inputs.burned }} kcal |
| 所感強度 | ${{ github.event.inputs.strength }} |
| 動きやすさ | ${{ github.event.inputs.comfortable }} |

### 所感・その他
${{ github.event.inputs.impression || '特になし。' }}
