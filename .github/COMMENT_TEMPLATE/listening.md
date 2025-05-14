### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | ${{ github.event.inputs.type }} |
| 教材 | ${{ github.event.inputs.material }} |
| 字幕 | ${{ github.event.inputs.subtitle }} |
${{ if(github.event.inputs.comprehension) }}
| 理解度 | ${{ github.event.inputs.comprehension }} |
${{ endif }}

### 分析
${{ github.event.inputs.analysis || '特になし。' }}

### 学び
${{ github.event.inputs.knowledge || '特になし。' }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
