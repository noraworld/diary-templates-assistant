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

### チェックリスト
* [${{ github.event.inputs.toner }}] 化粧水
* [${{ github.event.inputs.shaved }}] 髭剃り
* [${{ github.event.inputs.shampoo }}] シャンプー
* [${{ github.event.inputs.bathed }}] 洗体
* [${{ github.event.inputs.bath }}] 入浴

### 所感・その他
${{ github.event.inputs.impression || '特になし。' }}
