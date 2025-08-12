### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 教材 | ${{ github.event.inputs.material }} |
| 累計時間 | ${{ github.event.inputs.minutes }} 分 |
| ストリーク | ${{ github.event.inputs.streaks }} 日 |
| 経験値 | ${{ github.event.inputs.points }} XP |
| 積極性 | ${{ github.event.inputs.activeness }} |
| 出来 | ${{ github.event.inputs.workmanship }} |

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
