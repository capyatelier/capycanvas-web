---
title: "下描き"
description: "色ラフと鉛筆の下描きを別レイヤーに描きます。"
purpose: "下描きは形を記録し、色ラフは配色を比較するために使います。分けておけば、鉛筆の線を塗り直さずに色を試せます。"
techniques: ["鉛筆と筆圧で描きます。", "一部を選択して変形します。", "色ラフを下描きの下に置きます。"]
figure: "1：鉛筆プリセット。2：Color roughの上にあるSketch。3：鉛筆のサイズと不透明度。"
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1：鉛筆プリセット。2：Color roughの上にあるSketch。3：鉛筆のサイズと不透明度。"}
---

## 1. 下描きする

**Sketch**という描画レイヤーを作り、Tool Setで**Pencil**を選びます。頭、髪、服を軽い補助線で描き、輪郭を整えます。Toolでサイズを調整し、強い線には筆圧を使います。

作例はコートとマフラーのある人物画です。周囲に余白を残すと、後の選択範囲や筆跡を確認しやすくなります。

## 2. 一部を直す

**Lasso selection**で移す部分を囲み、**Scale / rotate**を選びます。移動や拡大縮小後に**Apply transform**を選び、別の場所に描く前に**Deselect pixels**を使います。

[選択](/ja/docs/tools/selections/)と[変形](/ja/docs/tools/transforms/)のページで編集対象とプレビューを説明します。うまくいかなければ、その変更を元に戻します。

## 3. 色ラフを加える

Sketchの下に**Color rough**を追加します。太いブラシや**Lasso Fill**で髪、肌、服の色を試します。配色の検討なので輪郭はラフで構いません。鉛筆の線はSketchに保持します。

見づらければColor roughを一時的に隠します。`.capy`を保存し、2枚を分けたまま[線画](/ja/docs/illustration/ink/)へ進みます。
