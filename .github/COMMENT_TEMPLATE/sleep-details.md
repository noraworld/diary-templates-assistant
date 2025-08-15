### その他の情報
| パラメータ | 値 |
| --- | :---: |
| 昨日のストレス値 | ${{ github.event.inputs.stress1 }} |
| 昨日のストレス時間 | ${{ github.event.inputs.stressed_hours1 }} 時間 ${{ github.event.inputs.stressed_minutes1 }} 分 |
| 昨日の回復時間 | ${{ github.event.inputs.recovery_hours1 }} 時間 ${{ github.event.inputs.recovery_minutes1 }} 分 |
| レジリエンス | ${{ github.event.inputs.resilience2 }}（${{ github.event.inputs.tendency2 }}） |

### ストレス値に関する考察
${{ github.event.inputs.reason1 || '特になし。' }}

### レジリエンスに関する考察
${{ github.event.inputs.reason2 || '特になし。' }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
