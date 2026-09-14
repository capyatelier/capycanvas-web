---
title: "読み込んだ画像の編集"
description: "画像をレイヤーとして読み込み、調整して書き出します。"
purpose: "Photoは画像調整を使いやすく配置したワークスペースです。画像のレイヤー読み込みは現在のドキュメントに画像を追加し、.capyを開く操作は編集可能なドキュメント全体を復元します。"
techniques: ["Photoに画像を読み込みます。", "編集可能な色調補正を追加します。", "レイヤー付きプロジェクトとPNGを保存します。"]
figure: "1：Photoワークスペース。2：画像と効果のレイヤー。3：色調補正のProperties。"
related: ["filters/overview", "tools/transforms", "tools/files"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1：Photoワークスペース。2：画像と効果のレイヤー。3：色調補正のProperties。"}
---

## ドキュメントに読み込む

**Photo**を選び、必要な寸法でドキュメントを作成します。**Layers**下部の**Import image as layer**から、ブラウザーが読み取れる画像を選びます。新しい画像レイヤーとして追加されます。

**Operation**や**Scale / rotate**で配置します。読み込みによってドキュメントの寸法は変わりません。作業中も元画像を保管してください。

## 見た目を調整する

**Filters**で**Curves**や**Hue / Saturation**などを追加します。効果レイヤーを選び、**Properties**で調整します。表示の切り替えで元画像と比較します。

一部だけ変える場合はマスクを使います。無関係な内容への作用は、順序、クリッピング、グループを確認して調整します。[フィルターとプロパティ](/ja/docs/filters/overview/)で説明します。

## 保存と書き出し

<strong>Save As…</strong>で画像と編集可能な効果を含む`.capy`を保存します。<strong>Export PNG…</strong>で共有用の統合画像を作り、開き直して寸法と見た目を確認します。

この手順では現在の共通ツールを使います。RAW現像、修復ブラシ、カラープロファイルの操作は含みません。
