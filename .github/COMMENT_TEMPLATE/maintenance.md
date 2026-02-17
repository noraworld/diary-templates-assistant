${{ if(github.event.inputs.minutes) }}
### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |

${{ endif }}
### 消耗品
* ${{ github.event.inputs.supplies1 }}
${{ if(github.event.inputs.supplies2) }}
* ${{ github.event.inputs.supplies2 }}
${{ endif }}
${{ if(github.event.inputs.supplies3) }}
* ${{ github.event.inputs.supplies3 }}
${{ endif }}
${{ if(github.event.inputs.supplies4) }}
* ${{ github.event.inputs.supplies4 }}
${{ endif }}
${{ if(github.event.inputs.supplies5) }}
* ${{ github.event.inputs.supplies5 }}
${{ endif }}
${{ if(github.event.inputs.supplies6) }}
* ${{ github.event.inputs.supplies6 }}
${{ endif }}
${{ if(github.event.inputs.supplies7) }}
* ${{ github.event.inputs.supplies7 }}
${{ endif }}
${{ if(github.event.inputs.note) }}

### メモ
${{ github.event.inputs.note }}
${{ endif }}
