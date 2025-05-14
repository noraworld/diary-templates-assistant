### チェックリスト
* [x] Money Forward

${{ if(github.event.inputs.expense1) }}
### 支出
| 支出 | 妥当性 |
| --- | :---: |
| ${{ github.event.inputs.expense1 }} | ${{ github.event.inputs.reasonable1 }} |
${{ endif }}
${{ if(github.event.inputs.expense2) }}
| ${{ github.event.inputs.expense2 }} | ${{ github.event.inputs.reasonable2 }} |
${{ endif }}
${{ if(github.event.inputs.expense3) }}
| ${{ github.event.inputs.expense3 }} | ${{ github.event.inputs.reasonable3 }} |
${{ endif }}
${{ if(github.event.inputs.expense4) }}
| ${{ github.event.inputs.expense4 }} | ${{ github.event.inputs.reasonable4 }} |
${{ endif }}

### 分析・所感
${{ github.event.inputs.impression || '特になし。' }}
