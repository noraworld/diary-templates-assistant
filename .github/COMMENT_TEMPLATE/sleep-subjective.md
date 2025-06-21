### 主観情報
| パラメータ | 値 |
| --- | :---: |
| 寝起きの気分 | ${{ github.event.inputs.mood }} |
| 主観就寝時刻 | ${{ github.event.inputs.night }} |
| 主観起床時刻 | ${{ github.event.inputs.morning }} |

### 夢日記
${{ github.event.inputs.dream || '見ていない。' }}

### 寝起きの気分に関する考察
${{ github.event.inputs.emotion || '特になし。' }}

### 就寝・目覚め・起床の動向
${{ github.event.inputs.window || '特になし。' }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
