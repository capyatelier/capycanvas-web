---
title: "塗り込み"
description: "各形にクリッピングしたレイヤーで陰影と質感を加え、結果を書き出します。"
purpose: "塗り込みの工程では、形に光と影を与えます。陰影をクリッピングしたレイヤーに描けば、自動的に各形の内側に収まります。また、陰影は下塗りの色とは別のレイヤーにあるので、何も失わずに調整したり描き直したりできます。"
techniques: ["陰影レイヤーをRibbonにクリッピングします。", "陰影の強さを調整します。", "ほかの形にも陰影を付け、レイヤーを確認して書き出します。"]
figure: "1：Ribbonの上にあるRibbon textureとRibbon shading。2：Clip to layer below。3：陰影全体に効くレイヤーの不透明度。"
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1：Ribbonの上にあるRibbon textureとRibbon shading。2：Clip to layer below。3：陰影全体に効くレイヤーの不透明度。"}
---

## 1. クリッピングした陰影を加える

**Ribbon**を選択し、そのすぐ上に新しいレイヤーを追加して、**Ribbon shading**という名前を付けます。メニューを開き、**Layer Settings → Clip to layer below**を選びます。次に、**Watercolor Wash**でリボンの曲がった部分に影を描き、**Paintbrush**でセージグリーンのアクセントをいくつか加えます。表示されるのはリボンの内側だけなので、線がリボンの輪郭からはみ出してもかまいません。

陰影レイヤーの合成モードは、ひとまず**Normal**のままにします。下塗りの色はRibbonレイヤーに残っているので、陰影を消しても、その下の色が消えることはありません。

## 2. 強さを調整する

ブラシの不透明度は、これから描く線を変えます。**Ribbon shadingレイヤーの不透明度**は、すでに描いた陰影全体を変えます。どの影も濃すぎるように見える場合は、描き直さずに、レイヤーの不透明度を下げます。

ハイライト用に、Ribbon shadingのすぐ上に**Ribbon texture**を追加し、これもクリッピングします。小さな鉛筆や質感のあるブラシで、明るいタッチをいくつか加えます。これでレイヤーの順序は、上からRibbon texture、Ribbon shading、Ribbonになります。不透明度と流量については、[ブラシ設定](/ja/docs/advanced/brush-engine/)で詳しく説明しています。

## 3. 仕上げて書き出す

**Disc**と**Block**にも、それぞれ専用のクリッピングしたレイヤーを使って、同じように陰影を付けます。作例では、円の柔らかな陰影にAirbrushを、クリーム色の細かなハッチングにPencilを使っています。**Line art**は常にいちばん上に置きます。形の外側の輪郭を直す必要があるときはその形のマスクに描き、陰影だけがおかしいときは陰影レイヤーを修正します。[マスクとクリッピング](/ja/docs/layers/masks/)では、透明度ロックで線画の色を変える方法も紹介しています。

仕上がりに満足したら、ラフのレイヤーを非表示にして`.capy`ファイルを保存し、共有用に[画像を書き出します](/ja/docs/output/export/)。書き出したファイルを一度開き、思ったとおりに見えるか確認しましょう。
