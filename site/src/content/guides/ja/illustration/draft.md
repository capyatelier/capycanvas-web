---
title: "下描き"
description: "鉛筆で下描きをし、別のレイヤーで色を試します。"
purpose: "下描きでは形を決め、色ラフでは色を試します。2つを別々のレイヤーにしておけば、鉛筆の線に触れることなく、何度でも色を変えられます。"
techniques: ["鉛筆と筆圧で描きます。", "下描きの一部を選択して直します。", "下描きの下のレイヤーに大まかな色を置きます。"]
figure: "1：鉛筆のブラシ。2：LayersでColor roughの上にあるSketch。3：鉛筆のサイズと不透明度。"
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1：鉛筆のブラシ。2：LayersでColor roughの上にあるSketch。3：鉛筆のサイズと不透明度。"}
---

## 1. 下描きをする

新しいレイヤーを追加し、**Sketch**という名前を付けます。**Pencil**ツールを選び、Tool Setで鉛筆を1つ選びます。まずは軽い線で円、曲がったリボン、傾いた四角形の形を探り、残したい輪郭は強めに押してはっきりさせます。鉛筆のサイズはToolパネルで設定します。

形の周りには少し余白を残しておきましょう。それぞれの形がどこで終わるのかがはっきり見えるので、後の工程が楽になります。ときどき上部のツールバーで**Flip view horizontally**を選択し、下描きを左右反転して見てみましょう。そうすると、形のバランスの狂いにずっと気づきやすくなります。

## 2. うまくいかない部分を直す

一部の位置や大きさが違っていても、描き直す必要はありません。**Lasso selection**を選び、その部分をぐるりと囲みます。次に**Scale / rotate**を選び、その部分をドラッグして正しい位置に動かすか、サイズを変えてから、**Apply transform**を選択します。描き続ける前に、**Select → Deselect pixels**を選びます。

これらのツールについては、[選択ツール](/ja/docs/tools/selections/)と[移動と変形](/ja/docs/tools/transforms/)のガイドで詳しく説明しています。変更がうまくいかなかったら、元に戻すだけで大丈夫です。

## 3. 色を試す

**Color rough**という名前のレイヤーをもう1枚追加し、Sketchの下にドラッグします。形ごとに色を選び、**Lasso selection**で形の周りを囲んで、**Edit → Fill selection**を選びます。作例では、リボンに青緑、円に黄土色、四角形にテラコッタを使っています。色ラフなので、輪郭がきれいでなくてもかまいません。鉛筆の線が見やすいように、レイヤーの不透明度を少し下げておきます。

下描きだけを見たいときは、一時的にColor roughを非表示にします。ドキュメントを保存したら、[線画](/ja/docs/illustration/ink/)に進みます。
