---
title: "選択ツール"
description: "絵の一部を選択し、その範囲だけに変更が及ぶようにします。"
purpose: "選択範囲は、絵の中で作業したい部分を示します。選択範囲があるあいだは、描画、塗りつぶし、変形が選択した部分にだけ適用されるので、ほかの部分に影響しません。Capy Canvasには、単純な図形、フリーハンドの輪郭、似た色の範囲を選ぶための選択ツールがあります。"
techniques: ["目的に合った選択ツールを選びます。", "選択範囲に追加したり、選択範囲から一部を除いたりします。", "選択範囲を塗りつぶし、終わったら解除します。"]
figure: "1：Tool Setの選択ツール。2：選択モード、ぼかし、形のオプション。3：円を囲む楕円の選択範囲。"
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1：Tool Setの選択ツール。2：選択モード、ぼかし、形のオプション。3：円を囲む楕円の選択範囲。"}
---

## 選択ツールを選ぶ

Paintでは、ツールバーで**Lasso selection**か**Auto select**を選ぶと、Tool Setにすべての選択ツールが表示されます。Sketchでは**Select**ボタンの中にあり、Photoではほとんどの選択ツールがツールバーに並んでいます。

**Rectangle select**と**Ellipse select**は、単純な形の範囲を選択します。**Shift**を押しながらドラッグすると正方形や正円に、**Alt**を押しながらドラッグすると中心から描けます。**Lasso selection**はペンの動きをそのままたどり、**Polygonal lasso**はクリックした点のあいだを直線で結びます。範囲を閉じるには、最初の点をもう一度クリックするか、**Enter**を押します。**Auto select**は1回のクリックで似た色の範囲を選び、**Select by color**はその色の範囲をすべて一度に選びます。**Paint selection**と**Tonal range**の2つのツールについては、それぞれ[クイックマスクと選択レイヤー](/ja/docs/selections/quick-mask/)と[明るさで選択する](/ja/docs/selections/tonal-range/)のページで説明しています。

## 選択範囲を組み合わせる・ぼかす

**Tool**パネル上部にある4つのボタンで、次に範囲を選択したときの動作を選びます。現在の選択範囲を置き換える、追加する、一部を除く、2つが重なる部分だけを残す、のいずれかです。ボタンを切り替えずに、**Shift**を押しながら選択して追加したり、**Alt**を押しながら選択して除いたりすることもできます。

**Feather radius**は選択範囲の境界をぼかします。塗りや調整が硬い線でぴたりと止まらず、徐々に薄れていくようになります。Auto selectでは、**Tolerance**でどれくらい違う色まで範囲に含めるかを決め、**Close gaps**で線画の小さな途切れから選択範囲が漏れ出すのを防ぎます。

## 選択範囲を使う

選択範囲があるあいだは、自由に描いても、線は範囲の内側にだけ描かれます。**Edit → Fill selection**を選ぶと現在の色で塗りつぶせるほか、選択範囲を[レイヤーマスク](/ja/docs/layers/masks/)にすることもできます。**Select**メニューでは、選択範囲を反転したり、数ピクセル単位で広げたり狭めたりできるほか、**Reselect**で直前の選択範囲を呼び戻せます。

終わったら**Select → Deselect pixels**を選び、次の線をどこにでも描けるようにします。
