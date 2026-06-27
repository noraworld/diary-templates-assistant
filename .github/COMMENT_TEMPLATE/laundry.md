### 洗濯
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 衣類
${{ if(github.event.inputs.clothes1) }}
* ${{ github.event.inputs.clothes1 }}
${{ endif }}
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
${{ if(github.event.inputs.clothes8) }}
* ${{ github.event.inputs.clothes8 }}
${{ endif }}
${{ if(github.event.inputs.clothes9) }}
* ${{ github.event.inputs.clothes9 }}
${{ endif }}
${{ if(github.event.inputs.clothes10) }}
* ${{ github.event.inputs.clothes10 }}
${{ endif }}
${{ if(github.event.inputs.clothes11) }}
* ${{ github.event.inputs.clothes11 }}
${{ endif }}
${{ if(github.event.inputs.clothes12) }}
* ${{ github.event.inputs.clothes12 }}
${{ endif }}
${{ if(github.event.inputs.clothes13) }}
* ${{ github.event.inputs.clothes13 }}
${{ endif }}
${{ if(github.event.inputs.clothes14) }}
* ${{ github.event.inputs.clothes14 }}
${{ endif }}
${{ if(github.event.inputs.clothes15) }}
* ${{ github.event.inputs.clothes15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
