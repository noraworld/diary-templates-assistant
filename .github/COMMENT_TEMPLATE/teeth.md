### 基本情報
| 項目 | 内容 |
| --- | :---: |
| 時間 [^gum] | ${{ github.event.inputs.time }} |
| 食後からの経過時間 | ${{ github.event.inputs.elapsed }} |

[^gum]: キシリトールガムを噛んでいる時間はカウントしていない。歯ブラシ、デンタルフロス、歯間ブラシの時間を計測している。

### チェックリスト
* [${{ github.event.inputs.health }}] Health アプリへの保存
* [${{ github.event.inputs.toothpaste }}] 歯磨き粉
* [${{ github.event.inputs.xylitol }}] キシリトールガム
* [${{ github.event.inputs.floss }}] デンタルフロス
* [${{ github.event.inputs.interdental }}] 歯間ブラシ

### 感想・その他
${{ github.event.inputs.impression || '特になし。' }}
