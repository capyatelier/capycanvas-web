---
title: "フィルターとプロパティ"
description: "編集可能なフィルターを追加し、設定を変えます。"
purpose: "Filtersで効果を選び、Propertiesで選択中の効果を調整します。効果を独立したレイヤーにしておけば、後から修正できます。"
techniques: ["分類や検索で効果を探します。", "Propertiesで設定を変えます。", "表示、不透明度、マスクで効果を調整します。"]
figure: "1：Filtersの一覧。2：Layersで選択した効果。3：効果を編集するPropertiesタブ。"
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1：Filtersの一覧。2：Layersで選択した効果。3：効果を編集するPropertiesタブ。"}
---

## 効果を追加する

調整を加える位置のレイヤーを選び、**Filters**を開きます。分類から探すか、**Curves**、**Hue / Saturation**、**Gaussian Blur**などの名前を検索し、効果レイヤーを追加します。

**Layers**で位置を確認します。順序、グループ、クリッピングの関係によって作用先が変わります。影響させたくない線画や前景の細部は、必要に応じて効果より上に置きます。

## Propertiesで調整する

効果レイヤーを選び、**Properties**を開きます。効果によって数値、色、カーブなどの設定が表示されます。1項目ずつ変え、画像を比較します。

表示を切り替えて調整前後を確認し、全体に強すぎる場合はレイヤー不透明度を下げます。元の塗りは別に残り、後から再調整できます。

## 作用範囲を限定する

[マスク](/ja/docs/layers/masks/)で画像の一部に限定するか、クリッピングやグループで作用先を調整します。複数の効果は順序を変えると結果も変わるため、その都度確認します。

[読み込んだ画像の編集](/ja/docs/filters/image-editing/)で、読み込みから書き出しまでを試せます。
