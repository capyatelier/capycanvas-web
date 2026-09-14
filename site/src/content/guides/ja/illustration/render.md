---
title: "塗り込み"
description: "下塗りにクリッピングしたレイヤーで陰影と質感を加えます。"
purpose: "クリッピングは陰影を下塗りの表示範囲内に保ちます。陰影は独立して編集でき、外側の境界は下塗りのマスクで共有します。"
techniques: ["Hairの上にHair shadingをクリッピングします。", "ブラシとレイヤーの不透明度を使い分けます。", "質感を加え、順序を確認して書き出します。"]
figure: "1：Hairの上のHair shadingとHair texture。2：Clip to layer below。3：陰影全体のレイヤー不透明度。"
related: ["layers/groups", "layers/masks", "tools/files"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1：Hairの上のHair shadingとHair texture。2：Clip to layer below。3：陰影全体のレイヤー不透明度。"}
---

## 1. 陰影をクリッピングする

**Hair**を選び、すぐ上に**Hair shading**を追加して**Clip to layer below**を有効にします。描画ブラシで髪の両側に暗い色を加えます。外形を越える筆跡も、表示は下塗りの範囲内に収まります。

最初は合成モードを**Normal**にします。Hairに下塗りが残るため、陰影を消しても元の色は消えません。

## 2. 強さと質感を調整する

ブラシ不透明度は新しい筆跡、**Hair shadingのレイヤー不透明度**は描いた陰影全体を変えます。全体に濃すぎる場合は後者を下げます。

Hair shadingのすぐ上に**Hair texture**を追加し、これもクリッピングします。細い鉛筆や質感のあるブラシでハイライトを加えます。上からHair texture、Hair shading、Hairです。[ブラシ設定](/ja/docs/advanced/brush-engine/)で間隔、不透明度、流量を説明します。

## 3. 他の領域を仕上げる

**Skin**と**Clothing**にも同じように陰影を追加します。**Line art**は上に保ちます。共通の輪郭は下塗りのマスク、陰影だけの修正は陰影レイヤーを編集します。[マスクとクリッピング](/ja/docs/layers/masks/)では線画の色替えに使う透明度ロックも説明します。

ラフを隠し、`.capy`を保存して[PNGを書き出します](/ja/docs/tools/files/)。共有前に画像を開いて確認します。
