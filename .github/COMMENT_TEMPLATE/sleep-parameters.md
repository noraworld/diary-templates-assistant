### 低いパラメータ
${{ if(github.event.inputs.sleep) }}
* 合計睡眠
${{ endif }}
${{ if(github.event.inputs.efficiency) }}
* 効率
${{ endif }}
${{ if(github.event.inputs.restfulness) }}
* 安眠度
${{ endif }}
${{ if(github.event.inputs.rem) }}
* レム睡眠
${{ endif }}
${{ if(github.event.inputs.deep) }}
* 深い睡眠
${{ endif }}
${{ if(github.event.inputs.latency) }}
* 入眠潜時
${{ endif }}
${{ if(github.event.inputs.timing) }}
* タイミング
${{ endif }}
