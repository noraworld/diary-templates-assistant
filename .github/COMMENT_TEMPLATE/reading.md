### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 書籍名 | ${{ github.event.inputs.title }} |
| 読了率 | ${{ github.event.inputs.percent }} % |
${{ if(github.event.inputs.timer) }}
| タイマー | ${{ github.event.inputs.timer }} 分 |
${{ endif }}

### チェックリスト
* [${{ github.event.inputs.sample }}] サンプル
* [${{ github.event.inputs.reread }}] 読み返し
* [${{ github.event.inputs.partial }}] 部分読み

### 感想・学び
${{ github.event.inputs.impression || '特になし。' }}
