### 基本情報
| 項目 | 内容 |
| --- | :---: |
| かたち | ${{ github.event.inputs.shape }} |
| 色 | ${{ github.event.inputs.color }} |
| 量 | ${{ github.event.inputs.amount }} |
| におい | ${{ github.event.inputs.smell }} |
| すっきり感 | ${{ github.event.inputs.relief }} |
${{ if(github.event.inputs.duration) }}
| ふんばりタイム | ${{ github.event.inputs.duration }} 分 |
${{ endif }}

### 詳細
* [${{ github.event.inputs.float }}] ぷかぷか
* [${{ github.event.inputs.pain }}] はらいた

### メモ
${{ github.event.inputs.impression || '特になし。' }}
