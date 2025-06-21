### 基本情報
| パラメータ | 値 |
| --- | :---: |
| 就寝時刻 | ${{ github.event.inputs.night }} |
| 起床時刻 | ${{ github.event.inputs.morning }} |
| 就寝時間 | ${{ github.event.inputs.bed }} |
| 睡眠時間 | ${{ github.event.inputs.sleep }} |
| 睡眠効率 | ${{ github.event.inputs.efficiency }} % |
| 安静時心拍数 | ${{ github.event.inputs.bpm }} bpm |
| 合計スコア | ${{ github.event.inputs.score }} 点 |

### 熟睡度・眠りの質に関する考察
${{ github.event.inputs.quality || '特になし。' }}
