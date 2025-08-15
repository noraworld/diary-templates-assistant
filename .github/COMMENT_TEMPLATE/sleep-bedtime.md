### 基本情報
| 就寝時刻 | 起床時刻 |
| :---: | :---: |
| ${{ github.event.inputs.night1 }} | ${{ github.event.inputs.morning1 }} |
${{ if(github.event.inputs.night2) }}
| ${{ github.event.inputs.night2 }} | ${{ github.event.inputs.morning2 }} |
${{ endif }}

### 所感
${{ github.event.inputs.impression || '特になし。' }}
