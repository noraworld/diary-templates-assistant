${{ if(github.event.inputs.minutes) }}
### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |

${{ endif }}
### 衣類
* ${{ github.event.inputs.clothes1 }}
${{ if(github.event.inputs.clothes2) }}
* ${{ github.event.inputs.clothes2 }}
${{ endif }}
${{ if(github.event.inputs.clothes3) }}
* ${{ github.event.inputs.clothes3 }}
${{ endif }}
${{ if(github.event.inputs.clothes4) }}
* ${{ github.event.inputs.clothes4 }}
${{ endif }}
${{ if(github.event.inputs.clothes5) }}
* ${{ github.event.inputs.clothes5 }}
${{ endif }}
${{ if(github.event.inputs.clothes6) }}
* ${{ github.event.inputs.clothes6 }}
${{ endif }}
${{ if(github.event.inputs.clothes7) }}
* ${{ github.event.inputs.clothes7 }}
${{ endif }}
${{ if(github.event.inputs.note) }}

### メモ
${{ github.event.inputs.note }}
${{ endif }}
