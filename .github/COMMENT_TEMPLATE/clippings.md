### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 種別 | ${{ github.event.inputs.category }} |
${{ if(github.event.inputs.progress) }}
| 進捗 | ${{ github.event.inputs.progress }} |
${{ endif }}

### クリップ
* ${{ github.event.inputs.site1 }}
${{ if(github.event.inputs.site2) }}
* ${{ github.event.inputs.site2 }}
${{ endif }}
${{ if(github.event.inputs.site3) }}
* ${{ github.event.inputs.site3 }}
${{ endif }}
${{ if(github.event.inputs.site4) }}
* ${{ github.event.inputs.site4 }}
${{ endif }}
${{ if(github.event.inputs.site5) }}
* ${{ github.event.inputs.site5 }}
${{ endif }}
${{ if(github.event.inputs.site6) }}
* ${{ github.event.inputs.site6 }}
${{ endif }}
${{ if(github.event.inputs.site7) }}
* ${{ github.event.inputs.site7 }}
${{ endif }}

### 感想
${{ github.event.inputs.impression || '特になし。' }}
