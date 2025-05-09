### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 教材 | ${{ github.event.inputs.material }} |
| 単語数 | ${{ github.event.inputs.words }} |
| 進捗率 | ${{ github.event.inputs.progress }} % |
| 積極性 | ${{ github.event.inputs.activeness }} |

### 覚えるのに苦労した・すっかり忘れていた単語
* ${{ github.event.inputs.hardships1 || '特になし' }}
${{ if(github.event.inputs.hardships2) }}
* ${{ github.event.inputs.hardships2 }}
${{ endif }}
${{ if(github.event.inputs.hardships3) }}
* ${{ github.event.inputs.hardships3 }}
${{ endif }}
${{ if(github.event.inputs.hardships4) }}
* ${{ github.event.inputs.hardships4 }}
${{ endif }}
${{ if(github.event.inputs.hardships5) }}
* ${{ github.event.inputs.hardships5 }}
${{ endif }}

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
