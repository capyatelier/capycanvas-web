---
title: "図形"
description: "Figureで直線、長方形、楕円を描きます。"
purpose: "Figureは描画レイヤーに幾何学的な形を描きます。形と描画モードを選び、輪郭、塗り、または両方を使います。"
techniques: ["Line、Rectangle、Ellipseを選びます。", "輪郭、塗り、輪郭＋塗りを切り替えます。", "ブラシサイズ、2色、選択範囲を使います。"]
figure: "1：Figureの形と描画モード。2：サイズと不透明度。3：前景色と背景色。"
related: ["tools/rulers", "painting/color", "tools/selections"]
image: {"light": "/assets/guides/tools-figures-light.webp", "dark": "/assets/guides/tools-figures-dark.webp", "alt": "1：Figureの形と描画モード。2：サイズと不透明度。3：前景色と背景色。"}
---

## 形を選ぶ

**Figure**を選び、Tool Setで**Line**、**Rectangle**、**Ellipse**を選択します。Lineは輪郭線を描きます。長方形と楕円には**Outline**、**Fill**、**Outline + fill**があります。

先に描画先レイヤーを選びます。別レイヤーに描けば、下描きを変えずに図形を移動・消去できます。

## 見た目を設定して描く

ブラシサイズで輪郭の太さ、不透明度で透け方を決めます。輪郭だけ、または塗りだけの場合は前景色を使います。**Outline + fill**は輪郭に前景色、内部に背景色を使います。

キャンバスをドラッグして形を決めます。**Shift**を押すと形を制約でき、例えば楕円を正円にできます。離すと確定します。大きさが違う場合は元に戻して描き直します。

## 他のツールと組み合わせる

[ピクセル選択](/ja/docs/tools/selections/)で描画範囲を制限できます。次の線を別の場所に描く前に選択を解除します。既存の図形を移す場合はScale / rotateを使います。

一定方向や消失点に沿って繰り返し手描きする場合は、[定規とスナップ](/ja/docs/tools/rulers/)を使います。
