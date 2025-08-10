### 基本情報
| 項目 | 内容 |
| --- | :---: |
| クリップ | ${{ github.event.inputs.site }} |
| 種別 | ${{ github.event.inputs.category }} |
${{ if(github.event.inputs.progress) }}
| 進捗 | ${{ github.event.inputs.progress }} |
${{ endif }}

### 感想
${{ github.event.inputs.impression || '特になし。' }}
