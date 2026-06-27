### 食器洗い
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 食器
${{ if(github.event.inputs.dishes1) }}
* ${{ github.event.inputs.dishes1 }}
${{ endif }}
${{ if(github.event.inputs.dishes2) }}
* ${{ github.event.inputs.dishes2 }}
${{ endif }}
${{ if(github.event.inputs.dishes3) }}
* ${{ github.event.inputs.dishes3 }}
${{ endif }}
${{ if(github.event.inputs.dishes4) }}
* ${{ github.event.inputs.dishes4 }}
${{ endif }}
${{ if(github.event.inputs.dishes5) }}
* ${{ github.event.inputs.dishes5 }}
${{ endif }}
${{ if(github.event.inputs.dishes6) }}
* ${{ github.event.inputs.dishes6 }}
${{ endif }}
${{ if(github.event.inputs.dishes7) }}
* ${{ github.event.inputs.dishes7 }}
${{ endif }}
${{ if(github.event.inputs.dishes8) }}
* ${{ github.event.inputs.dishes8 }}
${{ endif }}
${{ if(github.event.inputs.dishes9) }}
* ${{ github.event.inputs.dishes9 }}
${{ endif }}
${{ if(github.event.inputs.dishes10) }}
* ${{ github.event.inputs.dishes10 }}
${{ endif }}
${{ if(github.event.inputs.dishes11) }}
* ${{ github.event.inputs.dishes11 }}
${{ endif }}
${{ if(github.event.inputs.dishes12) }}
* ${{ github.event.inputs.dishes12 }}
${{ endif }}
${{ if(github.event.inputs.dishes13) }}
* ${{ github.event.inputs.dishes13 }}
${{ endif }}
${{ if(github.event.inputs.dishes14) }}
* ${{ github.event.inputs.dishes14 }}
${{ endif }}
${{ if(github.event.inputs.dishes15) }}
* ${{ github.event.inputs.dishes15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
