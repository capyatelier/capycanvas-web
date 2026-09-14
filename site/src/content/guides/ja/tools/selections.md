---
title: "選択範囲と塗りつぶし"
description: "境界を読む対象と、塗りを置くレイヤーを選びます。"
purpose: "画素の選択範囲は編集できる場所を制限しますが、編集レイヤーは選びません。この違いにより、線画から境界を読み、別レイヤーへ色を置けます。"
techniques: ["投げ縄またはAuto selectで範囲を選びます。", "Visible・Editing・Referenceから参照元を選びます。", "許容値と境界を調整し、最後に選択を解除します。"]
figure: "1：Auto selectと参照元。2：許容値と境界設定。3：参照元とは別の編集レイヤー。"
related: ["tools/transforms", "layers/masks", "illustration/mask"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1：Auto selectと参照元。2：許容値と境界設定。3：参照元とは別の編集レイヤー。"}
---

## 方法を選ぶ

自分で境界を描くときは**Lasso selection**、画像の領域から判断するときは**Auto select**を使います。Tool Setで表示画像、編集中レイヤー、参照レイヤーを選びます。Line artを参照元にするには、その行を選択して**Use selected layers as references**を使います。

塗りつぶす前に目的の描画レイヤーへ戻ります。**Lasso Fill**は描いた境界をすぐ塗りつぶす別のサブツールで、保持される画素選択とは異なります。

## 輪郭と境界を調整する

**Fill**は検出した領域を直接塗り、**Auto select**は塗る前に選択を確認できます。Toolには**Tolerance**、**Close gaps**、**Expansion**、**Edge smoothing**があります。

色の変化で領域が分かれる場合は許容値を上げます。小さな開口部は隙間を閉じる設定で補えますが、大きく漏れる場合は輪郭を確認します。少量の拡張はアンチエイリアスの線の下まで色を届かせます。設定は次の領域操作に適用されます。

## 編集を終える

**Fill selection**で編集レイヤーの選択画素を塗るか、選択から[レイヤーマスク](/ja/docs/layers/masks/)を作ります。塗りつぶしや[変形](/ja/docs/tools/transforms/)の後は、**Select → Deselect pixels**で選択を解除してください。
