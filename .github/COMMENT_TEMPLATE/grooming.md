${{ if(github.event.inputs.minutes) }}
### 基本情報
| 項目 | 内容 |
| --- | :---: |
${{ endif }}
${{ if(github.event.inputs.timer) }}
| タイマー | ${{ github.event.inputs.timer }} 分 |
${{ endif }}
${{ if(github.event.inputs.minutes) }}
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 身だしなみ
* ${{ github.event.inputs.grooming1 }}
${{ if(github.event.inputs.grooming2) }}
* ${{ github.event.inputs.grooming2 }}
${{ endif }}
${{ if(github.event.inputs.grooming3) }}
* ${{ github.event.inputs.grooming3 }}
${{ endif }}
${{ if(github.event.inputs.grooming4) }}
* ${{ github.event.inputs.grooming4 }}
${{ endif }}
${{ if(github.event.inputs.grooming5) }}
* ${{ github.event.inputs.grooming5 }}
${{ endif }}
${{ if(github.event.inputs.grooming6) }}
* ${{ github.event.inputs.grooming6 }}
${{ endif }}
${{ if(github.event.inputs.grooming7) }}
* ${{ github.event.inputs.grooming7 }}
${{ endif }}
${{ if(github.event.inputs.grooming8) }}
* ${{ github.event.inputs.grooming8 }}
${{ endif }}
${{ if(github.event.inputs.grooming9) }}
* ${{ github.event.inputs.grooming9 }}
${{ endif }}
${{ if(github.event.inputs.grooming10) }}
* ${{ github.event.inputs.grooming10 }}
${{ endif }}
${{ if(github.event.inputs.grooming11) }}
* ${{ github.event.inputs.grooming11 }}
${{ endif }}
${{ if(github.event.inputs.grooming12) }}
* ${{ github.event.inputs.grooming12 }}
${{ endif }}
${{ if(github.event.inputs.grooming13) }}
* ${{ github.event.inputs.grooming13 }}
${{ endif }}
${{ if(github.event.inputs.grooming14) }}
* ${{ github.event.inputs.grooming14 }}
${{ endif }}
${{ if(github.event.inputs.grooming15) }}
* ${{ github.event.inputs.grooming15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
