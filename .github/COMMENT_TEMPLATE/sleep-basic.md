### 基本情報
| パラメータ | 値 |
| --- | :---: |
| 就寝時間 | ${{ github.event.inputs.bed_hours }} 時間 ${{ github.event.inputs.bed_minutes }} 分 |
| 睡眠時間 | ${{ github.event.inputs.sleep_hours }} 時間 ${{ github.event.inputs.sleep_hours }} 分 |
| 睡眠効率 | ${{ github.event.inputs.efficiency }} % |
| 安静時心拍数 | ${{ github.event.inputs.bpm }} bpm |
| 合計スコア | ${{ github.event.inputs.score }} 点 |

### 所感
${{ github.event.inputs.impression || '特になし。' }}
