---
title: "マスク作成"
description: "リボン、円、四角形のそれぞれに、境界を編集できる専用の色レイヤーを作ります。"
purpose: "この工程では、形ごとに専用の色レイヤーを作ります。色はレイヤー全体を塗りつぶし、そのどの部分を見せるかをマスクが決めます。何も消していないので、あとからマスクに描くだけで、どの形の境界でも調整できます。"
techniques: ["投げ縄かAuto selectで形を選択します。", "選択範囲をマスクにし、レイヤーを色で塗りつぶします。", "マスクに描いて境界を調整します。"]
figure: "1：選択されたRibbonのマスクのサムネイル。2：Line artの下にあるRibbon、Disc、Block。3：マスクの一部を隠すEraser。"
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1：選択されたRibbonのマスクのサムネイル。2：Line artの下にあるRibbon、Disc、Block。3：マスクの一部を隠すEraser。"}
---

## 1. 形を選択する

**Sketch**と**Color rough**を非表示にします。**Lasso selection**を選び、作例のようにリボンの周りを丁寧になぞります。

線画が形の周りで閉じていれば、**Auto select**を使って1回のクリックで選択することもできます。まず、**Line art**のメニューで**Layer Settings → Use as reference**を選び、参照レイヤーに設定します。次に**Auto select**を選び、Toolパネルで**Sample reference layers**を選んでから、形の内側をクリックします。選択範囲がどこまで広がるかを決める設定は、[選択ツール](/ja/docs/tools/selections/)で説明しています。

## 2. マスク付きの色レイヤーを作る

Line artの下に新しいレイヤーを追加し、**Ribbon**という名前を付けます。選択範囲を残したまま、Ribbonのメニューを開いて**Mask → Mask: reveal selection**を選びます。これでこのレイヤーに、リボンの形だけを表示するマスクが付きます。

Ribbonの塗りのサムネイルをクリックし、リボンの色を選びます。**Select → Select all pixels**、**Edit → Fill selection**の順に選んでレイヤー全体を色で塗りつぶし、最後に**Select → Deselect pixels**を選びます。表示されるのはリボンの部分だけですが、色はマスクの下にも続いているので、あとで形を広げたくなったときにそのまま対応できます。

## 3. 境界を調整する

Ribbonのマスクのサムネイルをクリックして、マスクを編集します。この状態では、どのブラシでも描いたところの色がさらに表示され、**Eraser**で描いたところは再び隠れます。色そのものを変えたいときは、もう一度塗りのサムネイルをクリックします。

同じ方法で**Disc**と**Block**も作ります。DiscはRibbonの下に、BlockはDiscの下に置き、Line artは3つすべての上に置きます。ドキュメントを保存したら、[塗り込み](/ja/docs/illustration/render/)に進みます。
