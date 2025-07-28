| 食べたもの | 分類 | 分量 | 単位 |
| --- | :---: | :---: | :---: |
${{ if(github.event.inputs.food1) }}
| ${{ github.event.inputs.food1 }} | ${{ github.event.inputs.category1 }} | ${{ github.event.inputs.quantity1 }} | ${{ github.event.inputs.unit1 }} |
${{ endif }}
${{ if(github.event.inputs.food2) }}
| ${{ github.event.inputs.food2 }} | ${{ github.event.inputs.category2 }} | ${{ github.event.inputs.quantity2 }} | ${{ github.event.inputs.unit2 }} |
${{ endif }}
