---
title: "快速入門"
description: "開啟 {appName}，在第一幅空白畫作上繪畫，將其儲存為 .capy 檔案並匯出 PNG。"
related: ["start/workspaces", "files/open-save", "files/export", "input/keyboard"]
---

## 開啟 {appName}

執行以下任一操作：

- 在 [editor.capycanvas.art](https://editor.capycanvas.art/) 開啟網頁版編輯器。
- 在[下載](/zh-Hant/download/)頁面獲取桌面應用程式、iPad 或 Android 測試版，或者檢視將網頁版編輯器安裝為應用程式的步驟。

網頁版編輯器支援以下瀏覽器：

| 系統 | 瀏覽器 |
| --- | --- |
| Windows | Chrome、Edge、Firefox 141 或更高版本 |
| macOS | Chrome、Edge、Safari 26 或更高版本、Firefox 147 或更高版本（Apple 晶片） |
| Linux（Wayland） | Chrome、Edge |
| iPadOS 26 或更高版本 | Safari |
| Android 12 或更高版本 | Chrome |

首次造訪之後，網頁版編輯器在沒有網路連線時也能開啟。

## 第一幅畫作

![新畫作的圖層面板，目前墨色位於紙張上方。](shot:files/new-layers)

首次開啟 {appName} 時，會顯示[「繪畫」](/zh-Hant/docs/start/workspaces/)工作區和一幅空白畫作，標題列顯示「未命名 · 2048 × 1536」。已選取的**目前墨色**是一個空的繪畫圖層，位於白色填色圖層**紙張**上方。目前工具為**鋼筆**，筆刷為 **G 筆**，色彩接近黑色。

之後再開啟 {appName} 時，會進入上次使用的工作區，並開啟上次開啟的畫作。

## 繪畫

用數位筆或滑鼠在畫布上拖動。要使用其他工具，請在視窗左邊緣的「工具」工具列中選擇。在「素描」中，選擇標題列中的**筆刷**。

> **備註**：手指不會繪畫。兩根手指在畫布上可以平移、縮放和旋轉檢視。

要復原一筆，選擇**編輯 > 復原**、按 **Ctrl+Z** 或用兩根手指輕點畫布（參見[復原和重做](/zh-Hant/docs/start/undo/)）。

## macOS 和 iPad 上的按鍵

本手冊按 Windows 和 Linux 的方式書寫按鍵。在 macOS 和 iPad 上，手冊中寫 **Ctrl** 的地方請按 **Command**（⌘）。在網頁版編輯器和 macOS 應用程式中，**Ctrl** 同樣有效。

網頁版編輯器中所有快捷鍵都標為 **Ctrl**。瀏覽器會保留 **F5**、**F11**、**F12**，以及 **Ctrl** 或 **Ctrl+Shift** 與 **W**、**T**、**N**、**R**、**L**、**Q** 或 **P** 的組合。使用這些按鍵的命令在網頁版編輯器中沒有快捷鍵，請從選單或[命令搜尋](/zh-Hant/docs/start/command-search/)中選擇。

## 新建另一幅畫作

選擇**檔案 > 新增…**，然後在[新建繪畫](/zh-Hant/docs/files/new/)對話方塊中選擇**建立**。新畫作在第一幅畫作旁邊的獨立分頁中開啟。

## 儲存畫作

![檔案選單，包含新增…、開啟…、儲存、另存新檔…和匯出…。](shot:files/file-menu)

要儲存包含所有圖層的畫作：

1. 選擇**檔案 > 儲存**，或按 **Ctrl+S**。
2. 選擇資料夾和名稱。建議的名稱為「未命名.capy」。

之後標題列會顯示檔名。在 Firefox 和 Safari 中，只有在**下載檔案**對話方塊中選擇**下載**，再選擇**檔案已儲存**之後，畫作才算已儲存。

## 匯出 PNG

![匯出影像對話方塊，用途設為網頁 / 分享。](shot:files/export-dialog)

要匯出畫作的拼合 PNG 副本：

1. 選擇**檔案 > 匯出…**，或按 **Ctrl+Shift+E**。
2. 保持**用途**為**網頁 / 分享**，然後選擇**選擇檔案…**。
3. 選擇資料夾和名稱。建議的名稱為「未命名.png」。

**網頁 / 分享**按畫作的完整尺寸寫入 8 位元 sRGB PNG。匯出不會更改或儲存畫作。
