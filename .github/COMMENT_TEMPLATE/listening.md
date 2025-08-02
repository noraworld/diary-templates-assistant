### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | ${{ github.event.inputs.category }} |
| 教材 | ${{ github.event.inputs.material }} |
${{ if(github.event.inputs.subtitle) }}
| 字幕 | ${{ github.event.inputs.subtitle }} |
${{ endif }}
${{ if(github.event.inputs.comprehension) }}
| 理解度 | ${{ github.event.inputs.comprehension }} |
${{ endif }}

### 分析
${{ github.event.inputs.analysis || '特になし。' }}

### 学び
${{ github.event.inputs.knowledge || '特になし。' }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
