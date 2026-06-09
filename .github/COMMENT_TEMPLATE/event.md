### イベント
${{ if(github.event.inputs.event1) }}
* ${{ github.event.inputs.event1 }}
${{ endif }}
${{ if(github.event.inputs.event2) }}
* ${{ github.event.inputs.event2 }}
${{ endif }}
${{ if(github.event.inputs.event3) }}
* ${{ github.event.inputs.event3 }}
${{ endif }}
${{ if(github.event.inputs.event4) }}
* ${{ github.event.inputs.event4 }}
${{ endif }}
${{ if(github.event.inputs.event5) }}
* ${{ github.event.inputs.event5 }}
${{ endif }}
${{ if(github.event.inputs.event6) }}
* ${{ github.event.inputs.event6 }}
${{ endif }}
${{ if(github.event.inputs.event7) }}
* ${{ github.event.inputs.event7 }}
${{ endif }}
${{ if(github.event.inputs.event8) }}
* ${{ github.event.inputs.event8 }}
${{ endif }}

${{ if(github.event.inputs.note) }}
### メモ
${{ github.event.inputs.note }}
${{ endif }}
