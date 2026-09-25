---
title: "開く・保存・復元"
description: "絵や写真を開き、複数のドキュメントを同時に扱い、作業内容を守ります。"
purpose: "Capy Canvasの絵は.capyファイルとして保存されます。レイヤー、マスク、調整がすべて残るので、あとから続きを編集できます。複数のドキュメントをそれぞれのタブで同時に開いておけるほか、保存する前に何か問題が起きたときのために、編集画面が復元用のコピーを保持します。"
techniques: [".capyファイルや写真を開きます。", "タブで開いているドキュメントを切り替えます。", "作品を保存し、未保存の変更を復元します。"]
figure: "1：Fileメニュー。2：開いているドキュメントのタブ。3：Open、Import Image as Layer、Save、Save As。"
related: ["output/export", "filters/image-editing", "workspace/management"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1：Fileメニュー。2：開いているドキュメントのタブ。3：Open、Import Image as Layer、Save、Save As。"}
---

## 絵や写真を開く

<strong>File → Open…</strong>を選ぶと、`.capy`ファイルを開けます。写真やその他の画像も同じ方法で開けます。対応している形式は、JPEG、PNG、TIFF、WebP、HEIC、AVIF、OpenEXRなどです。写真は元のサイズのまま新しいドキュメントとして開き、色も撮影したときのまま保たれます。

すでに開いているドキュメントに画像を取り込むには、代わりに<strong>File → Import Image as Layer…</strong>を選ぶか、画像ファイルをキャンバスにドラッグします。どちらの方法も、[写真を編集する](/ja/docs/filters/image-editing/)で詳しく説明しています。

## 複数のドキュメントを扱う

PaintとPhotoでは、開いたり作成したりしたドキュメントごとに、ウィンドウ上部にタブが付きます。タブをクリックするとそのドキュメントに切り替わり、ドラッグすると並び順を変えられます。名前の横にある点は、まだ保存していない変更があるという印です。<strong>File → Drawings…</strong>を使うと、どのワークスペースでも、開いているすべてのドキュメントを一覧で確認できます。

ドキュメントを閉じるには、タブのボタンか**File → Close**を使います。未保存の変更がある場合は、先に保存するかどうかを確認するメッセージが表示されます。

## 保存と復元

初めて保存するときは<strong>File → Save As…</strong>を選び、その後は**File → Save**を選ぶと同じファイルが更新されます。開いた写真を保存するときは、新しい`.capy`ファイルの保存先を尋ねられ、元の写真はそのまま残ります。

保存する前にブラウザーが閉じてしまった場合は、次にCapy Canvasを開いたときに、ドキュメントを復元するかどうかを確認されます。これはあくまで万一のための備えなので、`.capy`ファイルはこまめに保存し、大切なファイルはコピーを取っておきましょう。

共有や印刷用の画像を作るには、[画像を書き出す](/ja/docs/output/export/)を参照してください。
