---
title: "ワークスペースの管理"
description: "作業の種類ごとに、異なるレイアウトとブラシ設定を使い分けます。"
purpose: "ワークスペースは、レイアウトとブラシ設定をまとめて記憶します。Sketch、Paint、Photoはすぐに使え、漫画のペン入れや写真のレタッチなど、よく行うほかの作業のために自分のワークスペースを作ることもできます。"
techniques: ["ワークスペースを切り替えたり、新しく作ったりします。", "タイトルバーに表示するワークスペースを選びます。", "ブラシをリセットせずにレイアウトを元に戻します。"]
figure: "1：Manage Workspacesの一覧。2：プレビューのために選択したワークスペース。3：Switch to WorkspaceとCancel。"
related: ["workspace/customization", "advanced/custom-brushes", "tools/files"]
image: {"light": "/assets/guides/workspace-management-light.webp", "dark": "/assets/guides/workspace-management-dark.webp", "alt": "1：Manage Workspacesの一覧。2：プレビューのために選択したワークスペース。3：Switch to WorkspaceとCancel。"}
---

## ワークスペースを切り替える・作る

タイトルバーの切り替えを使って、**Sketch**、**Paint**、**Photo**を行き来します。各ワークスペースは独自のパネル配置とブラシ設定を持ち、離れたときのままの状態で戻ってきます。切り替えても、開いているドキュメントは開いたままです。

新しいワークスペースを作るには、<strong>Window → Workspaces → New Workspace…</strong>を選びます。新しいワークスペースは現在のワークスペースのコピーとして作られるので、そこから配置を変え、名前を付けます。<strong>Window → Workspaces → Manage Workspaces…</strong>には、すべてのワークスペースが一覧表示されます。1つ選択するとプレビューでき、**Switch to Workspace**を選ぶとそのワークスペースを使い始め、**Cancel**を選ぶと今のワークスペースにとどまります。

## 切り替えに表示する項目を選ぶ

**Manage Workspaces**でワークスペースのメニューを開き、**Show in top bar**をオンにすると切り替えに追加され、オフにすると非表示になります。一覧でワークスペースを上下にドラッグすると、切り替えでの並び順を変えられます。ペンや指の場合は、グリップをつかんでドラッグします。

これらの設定はすぐに保存されます。Sketch、Paint、Photoもほかのワークスペースと同じように配置を変えられますが、名前の変更や削除はできません。

## 必要な部分だけを元に戻す

<strong>Restore Starting Layout…</strong>は、現在のワークスペースのパネルを最初の位置に戻し、ブラシの設定は残します。<strong>Reset All Brushes…</strong>はその逆で、ブラシをリセットし、レイアウトはそのままにします。違いは[ブラシ設定の保存とリセット](/ja/docs/advanced/custom-brushes/)で詳しく説明しています。

ワークスペースはドキュメントとは別に、アプリの中に保存されます。絵を残すには、`.capy`ファイルとして[保存](/ja/docs/tools/files/)します。
