### 感情パイチャート
```mermaid
pie showData
${{ if(github.event.inputs.type1) }}
"${{ github.event.inputs.type1 }}" : ${{ github.event.inputs.degree1 }}
${{ endif }}
${{ if(github.event.inputs.type2) }}
"${{ github.event.inputs.type2 }}" : ${{ github.event.inputs.degree2 }}
${{ endif }}
${{ if(github.event.inputs.type3) }}
"${{ github.event.inputs.type3 }}" : ${{ github.event.inputs.degree3 }}
${{ endif }}
${{ if(github.event.inputs.type4) }}
"${{ github.event.inputs.type4 }}" : ${{ github.event.inputs.degree4 }}
${{ endif }}
${{ if(github.event.inputs.type5) }}
"${{ github.event.inputs.type5 }}" : ${{ github.event.inputs.degree5 }}
${{ endif }}
```
