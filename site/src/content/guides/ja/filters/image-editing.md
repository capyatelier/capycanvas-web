---
title: "写真を編集する"
description: "写真を開き、編集できるレイヤーで色を調整して、結果を書き出します。"
purpose: "Photoは写真の調整のためのワークスペースです。カメラやスマートフォンの写真をそのまま開き、調整レイヤーで明るくしたり色味を変えたりして、仕上がったコピーを書き出せます。どの手順でも、元のファイルは変わりません。"
techniques: ["写真を開くか、既存のドキュメントに追加します。", "編集できるフィルターレイヤーで調整します。", "編集内容を保存し、コピーを書き出します。"]
figure: "1：Photoワークスペース。2：写真とその調整レイヤー。3：調整のProperties。"
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1：Photoワークスペース。2：写真とその調整レイヤー。3：調整のProperties。"}
---

## 写真を開く

ワークスペースの切り替えで**Photo**を選び、<strong>File → Open…</strong>を選んで写真を選択します。Capy CanvasはJPEG、PNG、TIFF、WebP、HEIC、AVIF、OpenEXRのファイルを開けるので、ほとんどのカメラやスマートフォンの写真をそのまま開けます。写真は元のサイズと元の色のまま、専用のタブで開きます。

すでに開いているドキュメントに写真を追加するには、<strong>File → Import Image as Layer…</strong>を選ぶか、ファイルをキャンバスにドラッグします。写真はハンドル付きで表示されるので、移動やサイズ変更ができます。位置が決まったら**Apply**を選択します。実際のサイズで使いたい場合は<strong>Original Size (100%)</strong>を選択します。

## 調整を加える

**Filters**を開き、**Curves**、**Vibrance**、**Hue / Saturation**などの調整を選びます。調整は写真の上に新しいレイヤーとして追加され、その設定が**Properties**に表示されます。写真を見ながら、少しずつ設定を変えましょう。調整レイヤーの表示と非表示を切り替えると、元の写真と見比べられます。

調整は専用のレイヤーにあるので、いつでも戻って変更したり、跡を残さずに削除したりできます。写真の一部だけを調整するには、先にその範囲を選択します。たとえば空なら、[明るさで選択する](/ja/docs/selections/tonal-range/)で選べます。調整の範囲を限定するほかの方法は、[フィルターと調整](/ja/docs/filters/overview/)で説明しています。

## 保存と書き出し

編集した写真を保存すると、すべての調整レイヤーを含む`.capy`ファイルが保存され、元の写真が上書きされることはありません。結果を共有するには、<strong>File → Export…</strong>を選んでJPEGまたはPNGを保存します。書き出しの設定は、[画像を書き出す](/ja/docs/output/export/)で説明しています。
