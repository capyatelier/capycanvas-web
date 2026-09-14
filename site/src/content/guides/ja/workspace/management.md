---
title: "ワークスペース管理"
description: "作業ごとに配置とツール設定を保持します。"
purpose: "ワークスペースは配置と作業用ツール設定を保存します。Sketch、Paint、Photoも編集可能な開始点です。切り替えてもドキュメントは開いたままです。"
techniques: ["切り替えや複製を行います。", "上部に表示する項目と順序を決めます。", "ブラシを初期化せず配置を復元します。"]
figure: "1：Manage Workspacesの一覧。2：プレビューするワークスペース。3：切り替えとキャンセル。"
related: ["workspace/customization", "advanced/custom-brushes", "tools/files"]
image: {"light": "/assets/guides/workspace-management-light.webp", "dark": "/assets/guides/workspace-management-dark.webp", "alt": "1：Manage Workspacesの一覧。2：プレビューするワークスペース。3：切り替えとキャンセル。"}
---

## 切り替える・コピーする

上部の**Sketch**、**Paint**、**Photo**を選ぶと、それぞれ最後に保存した設定へ戻ります。毎回初期プリセットに戻るわけではありません。**New Workspace**は現在の配置とツールを別名でコピーします。

**Manage Workspaces**でプレビューし、**Switch to Workspace**で適用します。**Cancel**は現在の配置を保ちます。別ウィンドウですでに使用中の場合は、そのウィンドウに移ることがあります。

## 上部の項目を選ぶ

行のメニューの**Show in top bar**で表示を切り替えます。行を並べ替えると上部の順序も変わります。タッチやペンではグリップを直接ドラッグするか、行を長押しします。マウスは行を直接ドラッグできます。

表示と順序はすぐ保存され、プレビューのキャンセルでは戻りません。組み込みワークスペースは名前変更・削除できません。

## 必要な部分を復元する

<strong>Restore Starting Layout…</strong>は、組み込みでは最新の標準配置、カスタムでは保存した開始配置に戻します。作業用ツール設定は保持します。<strong>Reset All Brushes…</strong>はブラシの変更を初期化します。

作品は別に保存します。[Save](/ja/docs/tools/files/)で編集可能な`.capy`を残してください。
