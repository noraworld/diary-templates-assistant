| 食べたもの | 分量 | 単位 |
| --- | :---: | :---: |
${{ if(github.event.inputs.food1) }}
| ${{ github.event.inputs.food1 }} | ${{ github.event.inputs.quantity1 }} | ${{ github.event.inputs.unit1 }} |
${{ endif }}
${{ if(github.event.inputs.food2) }}
| ${{ github.event.inputs.food2 }} | ${{ github.event.inputs.quantity2 }} | ${{ github.event.inputs.unit2 }} |
${{ endif }}
${{ if(github.event.inputs.food3) }}
| ${{ github.event.inputs.food3 }} | ${{ github.event.inputs.quantity3 }} | ${{ github.event.inputs.unit3 }} |
${{ endif }}
