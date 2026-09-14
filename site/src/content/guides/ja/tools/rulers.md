---
title: "定規とスナップ"
description: "手描きの線を一定方向や一点へ導きます。"
purpose: "定規は筆跡を制約するガイドです。描いた線は描画レイヤーに残ります。直線、平行、放射の定規を用途に合わせて選びます。"
techniques: ["直線、平行、放射の定規を置きます。", "表示とスナップを切り替えます。", "定規を移動・削除します。"]
figure: "1：定規の種類。2：キャンバス上の定規。3：表示、スナップ、削除の操作。"
related: ["tools/figures", "painting/brushes", "tools/transforms"]
image: {"light": "/assets/guides/tools-rulers-light.webp", "dark": "/assets/guides/tools-rulers-dark.webp", "alt": "1：定規の種類。2：キャンバス上の定規。3：表示、スナップ、削除の操作。"}
---

## 定規を置く

**Ruler**を選び、Tool Setで**Straight**、**Parallel**、**Radial**を選択します。ドラッグで位置と方向を決めます。Straightはその直線に沿わせ、Parallelは共通方向、Radialは中心へ向かう線を案内します。

位置を決めてから描画ツールへ戻ります。定規そのものは書き出す画像に描かれません。

## スナップして描く

**Snap to rulers**を有効にし、ペンやブラシでガイドの近くに描きます。サイズ、筆圧、色は引き続き筆跡を決めます。自由な線を加えるときはスナップを切ります。

**Show rulers**は表示を切り替えます。非表示の定規は線を制約しないため、効かない場合は表示とスナップの両方を確認します。

## ガイドを直す

RulerまたはOperationで定規を選び、胴体や端点を動かして位置と方向を調整します。**Delete ruler**で定規を削除しても、描いた線は残ります。

単独の幾何学図形には[Figure](/ja/docs/tools/figures/)、既存の筆跡の変更には[変形](/ja/docs/tools/transforms/)を使います。
