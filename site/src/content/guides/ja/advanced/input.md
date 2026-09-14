---
title: "ペン・タッチ・ショートカット"
description: "筆圧を確認し、頻繁な操作を使いやすくします。"
purpose: "ブラシを変える前に機器の入力を確認します。筆圧が機能したら、設定とショートカットで繰り返す操作を調整します。"
techniques: ["鉛筆で筆圧を試します。", "筆圧応答とストローク予測を比較します。", "キーを割り当て、ペンとタッチを区別します。"]
figure: "1：Preferencesの分類。2：Input設定。3：Keyboard Shortcuts。"
related: ["painting/brushes", "advanced/brush-engine", "workspace"]
image: {"light": "/assets/guides/advanced-input-light.webp", "dark": "/assets/guides/advanced-input-dark.webp", "alt": "1：Preferencesの分類。2：Input設定。3：Keyboard Shortcuts。"}
---

## ペンを確認する

組み込みの鉛筆で、弱く始めて力を加え、最後に抜く線を描きます。均一な場合は別の描画アプリでも試します。両方で反映されない場合は機器やドライバー、ここだけなら入力とプリセット設定を確認します。

板型タブレットは正しい画面へ割り当て、縦横比を保持します。液晶タブレットは中央と端でカーソル位置を確認します。筆圧と傾きには機器側の対応が必要です。

## 応答を調整する

**Preferences**の入力設定を開きます。**Pressure response**は受信した筆圧の対応を変えます。**Enable stroke prediction**は次のペン位置を推定します。**Use browser stroke prediction**はブラウザーの予測を使い、利用可能な場合は**Prediction amount**で編集ソフト側の予測量を調整します。予測を強めると表示の遅れを減らせますが、曲がり角を行き過ぎることがあります。同じ曲線で1項目ずつ比較します。

タッチで移動、ピンチ、回転ができます。手を置くと描かれる場合は機器のタッチ動作を確認します。プリセット固有の項目は[ブラシ設定](/ja/docs/advanced/brush-engine/)を参照してください。

## ショートカットを設定する

**Keyboard Shortcuts**でコマンドを選び、キーを追加します。競合表示は適用前に解決します。主な初期値は**Ctrl+Z**で元に戻す、**Space＋ドラッグ**で移動、**F**で全体表示、**Tab**でZenです。Apple環境では対応する操作にCommandを使えます。

必要に応じてタブレットのドライバーでペンボタンにキーを割り当てます。
