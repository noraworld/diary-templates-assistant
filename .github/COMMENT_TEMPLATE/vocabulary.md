### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 教材 | ${{ github.event.inputs.material }} |
| 単語数 | ${{ github.event.inputs.words }} 単語 |
| 進捗率 | ${{ github.event.inputs.progress }} % |
| 経験値 | ${{ github.event.inputs.points }} XP |
| ストリーク | ${{ github.event.inputs.streaks }} 日 |
| 積極性 | ${{ github.event.inputs.activeness }} |

### チェックリスト
* [${{ github.event.inputs.practice }}] 発音練習

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
