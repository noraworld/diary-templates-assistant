${{ if(github.event.inputs.minutes) }}
### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 | ${{ github.event.inputs.minutes }} 分 ${{ github.event.inputs.seconds }} 秒 |
${{ endif }}

### チェックリスト
* [${{ github.event.inputs.dish }}] 皿洗い
* [${{ github.event.inputs.laundry }}] 洗濯機
* [${{ github.event.inputs.cleaning }}] 掃除
* [${{ github.event.inputs.flesh }}] ホルダー洗浄

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
