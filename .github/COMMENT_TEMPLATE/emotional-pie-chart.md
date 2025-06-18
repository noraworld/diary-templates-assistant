### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 出来事 | ${{ github.event.inputs.event }} |
| 気分レベル | ${{ github.event.inputs.mood }} |

${{ if(github.event.inputs.type1) }}
### 感情パイチャート
```mermaid
pie showData
"${{ github.event.inputs.type1 }}" : ${{ github.event.inputs.degree1 }}
${{ endif }}
${{ if(github.event.inputs.type2) }}
"${{ github.event.inputs.type2 }}" : ${{ github.event.inputs.degree2 }}
${{ endif }}
${{ if(github.event.inputs.type3) }}
"${{ github.event.inputs.type3 }}" : ${{ github.event.inputs.degree3 }}
${{ endif }}
${{ if(github.event.inputs.type4) }}
"${{ github.event.inputs.type4 }}" : ${{ github.event.inputs.degree4 }}
${{ endif }}
${{ if(github.event.inputs.type1) }}
```
${{ endif }}
