---
title: "保存と書き出し"
description: "編集用の.capyと統合したPNGを保存します。"
purpose: ".capyは再編集のためにドキュメント構造を保持します。PNGは表示画像を共有する形式です。先にプロジェクトを保存すると、後から同じレイヤー、マスク、効果を使って修正できます。"
techniques: ["プロジェクトを作成・保存・再読み込みします。", "表示画像をPNGに書き出します。", "ワークスペース設定と作品を別に保存します。"]
figure: "1：Fileメニュー。2：SaveとSave As。3：Export PNG。"
related: ["filters/image-editing", "layers/basics", "illustration/render"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1：Fileメニュー。2：SaveとSave As。3：Export PNG。"}
---

## 編集可能なドキュメントを保存する

新規プロジェクトや別の作業用コピーには<strong>File → Save As…</strong>を使います。ブラウザーがファイルハンドルを保持できる場合、**Save**は現在のファイルを更新します。直接アクセスできない環境ではダウンロードになるため、保存できたことを確認してください。

<strong>Open…</strong>は`.capy`を開きます。通常の画像を現在の絵に追加する場合は、Layersの**Import image as layer**を使います。

## 表示結果を書き出す

<strong>File → Export PNG…</strong>は作業中のレイヤーを統合せず、統合画像を出力します。不要なSketchやColor roughを非表示にします。透明な背景が必要ならPaperの表示も確認します。

PNGを開き直し、寸法、輪郭、背景を確認します。キャンバス表示の倍率や回転は書き出す画素を変えません。修正用の`.capy`も保管します。

## 機器を移るとき

ワークスペースの変更はブラウザーに別途保存されます。絵の保存や機器間同期、バックアップの代わりにはなりません。`.capy`自体を移し、元ファイルを削除する前に移動先で開けることを確認します。

New、Open、Closeで未保存の変更を確認されたら、保存、破棄、キャンセルを選びます。キャンセルすると現在の絵に戻ります。
