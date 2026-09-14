---
title: "線画"
description: "薄くした下描きの上に新しいレイヤーでペン入れします。"
purpose: "完成用の輪郭を下描きと分けます。下描きを変えずに線を消したり色を変えたりでき、最終的な色を下に置けます。"
techniques: ["Sketchを薄くし、Line artを選びます。", "ペンと表示回転を使います。", "自動選択する領域の輪郭を閉じます。"]
figure: "1：薄いSketchの上のLine art。2：Navigatorの表示操作。3：Tool Setのペン。"
related: ["layers/basics", "advanced/input", "workspace"]
image: {"light": "/assets/guides/illustration-ink-light.webp", "dark": "/assets/guides/illustration-ink-dark.webp", "alt": "1：薄いSketchの上のLine art。2：Navigatorの表示操作。3：Tool Setのペン。"}
---

## 1. 線画を分ける

**Sketch**を選び、次の線を邪魔しない程度にレイヤー不透明度を下げます。**Color rough**を隠し、Sketchの上に**Line art**を追加します。描く前に内容サムネイルを選びます。

**Pen → G-Pen**などを選び、普段の筆圧で太さを試します。Sketchを薄くするだけでは描画先は切り替わりません。

## 2. 描いて修正する

形の輪郭、輪を描く自由な線、短いハッチングを描きます。描きにくい曲線はNavigatorやタッチで表示を回転します。保存する画素は回転しません。

Eraserや元に戻す操作でLine artを直します。表示がペンに遅れる場合は[入力設定](/ja/docs/advanced/input/)で予測を比較し、同じ曲線を試します。予測が強すぎると意図した曲がり角を行き過ぎる場合があります。

## 3. 輪郭を確認する

Sketchを隠して線画だけを見ます。自動選択に使う領域の意図しない隙間を閉じます。投げ縄で下塗りを定義する部分では、内部の線が開いていても構いません。

後の工程でもLine artを色より上に置きます。保存して[マスク作成](/ja/docs/illustration/mask/)へ進みます。画像ではレイヤーの分離が分かるよう、薄い下描きを表示しています。
