### 食器洗い
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 食器
* ${{ github.event.inputs.dishes1 }}
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

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
