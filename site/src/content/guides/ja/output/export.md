---
title: "画像を書き出す"
description: "共有や印刷のために、絵のPNG、JPEG、TIFFのコピーを保存します。"
purpose: "書き出しを使うと、絵から一般的な画像ファイルを作れます。オンラインへの投稿、ほかの人への送付、印刷にそのまま使えます。.capyファイルはすべてのレイヤーを保ったまま残るので、いつでも絵を修正して書き出し直せます。"
techniques: ["用途に合ったプリセットを選びます。", "ファイル形式とサイズを選びます。", "書き出した画像を保存します。"]
figure: "1：用途別のプリセット。2：形式、カラープロファイル、ビット深度。3：何も描かれていない部分の保存方法を決めるTransparency。"
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1：用途別のプリセット。2：形式、カラープロファイル、ビット深度。3：何も描かれていない部分の保存方法を決めるTransparency。"}
---

## 画像の用途を選ぶ

<strong>File → Export…</strong>を選ぶと、**Export image**ダイアログが開きます。まずは**Destination**から始めるのが簡単で、用途に合った設定をまとめて選んでくれます。**Web / Share**は、どのブラウザーやアプリでも正しく表示される標準的な画像を作ります。**Wide-color image**は最近の画面で表示できる鮮やかな色を保ち、**Further editing**はほかの編集ソフトで開けるように、できるだけ多くの情報を残します。

書き出されるのは表示中のレイヤーだけです。完成画像に含めたくない下描きや資料のレイヤーは、先に非表示にしておきましょう。

## 細かく設定する

さらに細かく調整したい場合は、Destinationの下にある設定を変更します。**Format**では、PNG、JPEG、TIFFから選べます。くっきりした輪郭や透明な部分のあるイラストにはPNGが向いており、写真ならJPEGのほうがファイルサイズを小さくできます。**Output profile**と**Bit depth**は、ふつうはDestinationで設定されたままでかまいません。

**Transparency**は、絵の何も描かれていない部分をどう扱うかを決めます。対応している形式なら透明のまま残せるほか、白や黒で塗りつぶすこともできます。**Pixel size**を使うと、ウェブサイト用などに縮小したコピーを作れます。気に入った設定の組み合わせは、自分用のプリセットとして保存できます。

## ファイルを保存する

保存する前に結果を確認したい場合は**Preview Output**を選択します。次に<strong>Choose File…</strong>を選択し、画像の名前と保存場所を決めます。書き出したファイルを一度開き、思ったとおりに見えるか確認しましょう。

HDRのドキュメントでは、**Dynamic range**で選べる項目が増えます。たとえばHDR JPEGやAVIFのファイルは、HDR対応の画面では明るく表示され、通常の画面でも正しく見えます。使いどころは[色空間、HDR、プルーフ](/ja/docs/color/management/)で説明しています。
