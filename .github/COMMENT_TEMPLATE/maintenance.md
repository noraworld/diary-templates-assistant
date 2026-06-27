### メンテナンス
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 消耗品
${{ if(github.event.inputs.supplies1) }}
* ${{ github.event.inputs.supplies1 }}
${{ endif }}
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
${{ if(github.event.inputs.supplies8) }}
* ${{ github.event.inputs.supplies8 }}
${{ endif }}
${{ if(github.event.inputs.supplies9) }}
* ${{ github.event.inputs.supplies9 }}
${{ endif }}
${{ if(github.event.inputs.supplies10) }}
* ${{ github.event.inputs.supplies10 }}
${{ endif }}
${{ if(github.event.inputs.supplies11) }}
* ${{ github.event.inputs.supplies11 }}
${{ endif }}
${{ if(github.event.inputs.supplies12) }}
* ${{ github.event.inputs.supplies12 }}
${{ endif }}
${{ if(github.event.inputs.supplies13) }}
* ${{ github.event.inputs.supplies13 }}
${{ endif }}
${{ if(github.event.inputs.supplies14) }}
* ${{ github.event.inputs.supplies14 }}
${{ endif }}
${{ if(github.event.inputs.supplies15) }}
* ${{ github.event.inputs.supplies15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
