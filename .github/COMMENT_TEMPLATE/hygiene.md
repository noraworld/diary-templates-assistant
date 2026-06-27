### 衛生
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### 使用器具
${{ if(github.event.inputs.toys1) }}
* ${{ github.event.inputs.toys1 }}
${{ endif }}
${{ if(github.event.inputs.toys2) }}
* ${{ github.event.inputs.toys2 }}
${{ endif }}
${{ if(github.event.inputs.toys3) }}
* ${{ github.event.inputs.toys3 }}
${{ endif }}
${{ if(github.event.inputs.toys4) }}
* ${{ github.event.inputs.toys4 }}
${{ endif }}
${{ if(github.event.inputs.toys5) }}
* ${{ github.event.inputs.toys5 }}
${{ endif }}
${{ if(github.event.inputs.toys6) }}
* ${{ github.event.inputs.toys6 }}
${{ endif }}
${{ if(github.event.inputs.toys7) }}
* ${{ github.event.inputs.toys7 }}
${{ endif }}
${{ if(github.event.inputs.toys8) }}
* ${{ github.event.inputs.toys8 }}
${{ endif }}
${{ if(github.event.inputs.toys9) }}
* ${{ github.event.inputs.toys9 }}
${{ endif }}
${{ if(github.event.inputs.toys10) }}
* ${{ github.event.inputs.toys10 }}
${{ endif }}
${{ if(github.event.inputs.toys11) }}
* ${{ github.event.inputs.toys11 }}
${{ endif }}
${{ if(github.event.inputs.toys12) }}
* ${{ github.event.inputs.toys12 }}
${{ endif }}
${{ if(github.event.inputs.toys13) }}
* ${{ github.event.inputs.toys13 }}
${{ endif }}
${{ if(github.event.inputs.toys14) }}
* ${{ github.event.inputs.toys14 }}
${{ endif }}
${{ if(github.event.inputs.toys15) }}
* ${{ github.event.inputs.toys15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
