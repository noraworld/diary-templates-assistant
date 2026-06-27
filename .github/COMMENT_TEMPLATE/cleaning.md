### 掃除
${{ if(github.event.inputs.minutes) }}
#### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

#### エリア
${{ if(github.event.inputs.areas1) }}
* ${{ github.event.inputs.areas1 }}
${{ endif }}
${{ if(github.event.inputs.areas2) }}
* ${{ github.event.inputs.areas2 }}
${{ endif }}
${{ if(github.event.inputs.areas3) }}
* ${{ github.event.inputs.areas3 }}
${{ endif }}
${{ if(github.event.inputs.areas4) }}
* ${{ github.event.inputs.areas4 }}
${{ endif }}
${{ if(github.event.inputs.areas5) }}
* ${{ github.event.inputs.areas5 }}
${{ endif }}
${{ if(github.event.inputs.areas6) }}
* ${{ github.event.inputs.areas6 }}
${{ endif }}
${{ if(github.event.inputs.areas7) }}
* ${{ github.event.inputs.areas7 }}
${{ endif }}
${{ if(github.event.inputs.areas8) }}
* ${{ github.event.inputs.areas8 }}
${{ endif }}
${{ if(github.event.inputs.areas9) }}
* ${{ github.event.inputs.areas9 }}
${{ endif }}
${{ if(github.event.inputs.areas10) }}
* ${{ github.event.inputs.areas10 }}
${{ endif }}
${{ if(github.event.inputs.areas11) }}
* ${{ github.event.inputs.areas11 }}
${{ endif }}
${{ if(github.event.inputs.areas12) }}
* ${{ github.event.inputs.areas12 }}
${{ endif }}
${{ if(github.event.inputs.areas13) }}
* ${{ github.event.inputs.areas13 }}
${{ endif }}
${{ if(github.event.inputs.areas14) }}
* ${{ github.event.inputs.areas14 }}
${{ endif }}
${{ if(github.event.inputs.areas15) }}
* ${{ github.event.inputs.areas15 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
#### メモ
${{ github.event.inputs.note }}
${{ endif }}
