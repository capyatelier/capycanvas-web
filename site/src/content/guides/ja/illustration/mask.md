---
title: "マスク作成"
description: "髪、肌、服の色の境界を後から編集できるようにします。"
purpose: "下塗りレイヤーが色を持ち、マスクが表示範囲を決めます。マスクの後ろまで塗れば、後から少し広げるときに全体を塗り直さずに済みます。"
techniques: ["投げ縄や自動選択で範囲を決めます。", "選択範囲からマスクを作り、内容を塗りつぶします。", "マスクサムネイルで輪郭を直します。"]
figure: "1：Hairの選択中マスク。2：Line artの下のHair、Skin、Clothing。3：マスクを広げる白。"
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1：Hairの選択中マスク。2：Line artの下のHair、Skin、Clothing。3：マスクを広げる白。"}
---

## 1. 下塗りの形を選ぶ

**Sketch**と**Color rough**を隠します。作例では**Lasso selection**で髪の外形を囲みます。閉じた線画なら、**Line art**を参照レイヤーにし、**Auto select → Reference**で内部をクリックする方法もあります。

先へ進む前に境界を確認します。必要なら許容差、隙間の閉じ、拡張を調整して選択し直します。[選択と塗りつぶし](/ja/docs/tools/selections/)で説明します。

## 2. マスク付きレイヤーを作る

Line artの下に**Hair**を作ります。選択範囲を保ったままHairのコンテキストメニューで**Mask: reveal selection**を選びます。残る選択範囲があれば解除し、Hairの**内容サムネイル**を選びます。

下塗り色を選び、**Select → Select all pixels**、**Edit → Fill selection**でレイヤー全体を塗り、**Deselect pixels**で解除します。マスクが外形だけを表示し、その外にも色が残ります。色の採取にはColor roughを一時表示し、後で隠します。

## 3. 輪郭を整える

Hairの**マスクサムネイル**を選び、黒で隠し、白で表示を広げます。色を変える前に内容サムネイルへ戻します。

**Skin**と**Clothing**も同様に作り、Line artより下の順序を確認します。作例のマフラーはClothingに描いています。保存し、クリッピングを使う[塗り込み](/ja/docs/illustration/render/)へ進みます。
