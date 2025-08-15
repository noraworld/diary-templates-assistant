### パラメータ
| パラメータ | 値 |
| --- | :---: |
| 合計睡眠 | ${{ github.event.inputs.sleep }} |
| 効率 | ${{ github.event.inputs.efficiency }} |
| 安眠度 | ${{ github.event.inputs.restfulness }} |
| レム睡眠 | ${{ github.event.inputs.rem }} |
| 深い睡眠 | ${{ github.event.inputs.deep }} |
| 入眠潜時 | ${{ github.event.inputs.latency }} |
| タイミング | ${{ github.event.inputs.timing }} |

### 所感
${{ github.event.inputs.impression || '特になし。' }}
