---
title: "HDR"
description: "HDR 畫作、它們在螢幕上的顯示方式以及它們的 SDR 版本。"
related: ["color-management/proof", "color-management/color-spaces", "color/color-panel", "files/export"]
---

在 HDR 畫作中，可以繪製比 SDR 白色更亮的色彩。位元深度為 **16 位元浮點 HDR** 或 **32 位元浮點 HDR** 的畫作就是 HDR 畫作。

## HDR 畫作

要得到 HDR 畫作，執行以下任一操作：

- 選擇**檔案 > 新增…**，然後選擇 **HDR 繪畫**預設或浮點**位元深度**。
- 選擇**編輯 > 變更位元深度…**，然後選擇浮點位元深度。
- 開啟 HDR PNG（BT.2020 PQ）或 HDR AVIF 檔案（16 位元浮點 HDR），或 OpenEXR 檔案（32 位元浮點 HDR）。
- 在[偏好設定](/zh-Hant/docs/preferences/)的**色彩**頁面中將**位元深度**設為浮點位元深度，新畫作即為 HDR。

在 HDR 畫作中：

- [色彩面板](/zh-Hant/docs/color/color-panel/)和[編輯色彩](/zh-Hant/docs/color/edit-color/)以 EV 設定顏料強度。
- [色彩混合](/zh-Hant/docs/color-management/color-spaces/)始終為線性光。
- [混合模式](/zh-Hant/docs/layers/blend-modes/)中不提供疊加、柔光、強光、色彩加深、色彩減淡、亮光、實色疊印和排除。
- 曲線有**對數 HDR** 域和 **HDR 範圍**。
- [明暗範圍](/zh-Hant/docs/selections/tonal-range/)工具提供**明亮 HDR · 高於 +1 級**。
- 直方圖會標出 SDR 白色。
- [匯出](/zh-Hant/docs/files/export/)提供 HDR 格式。

在網頁版編輯器中，無法開啟大於 1200 萬像素的 HDR 畫作。

## 螢幕上的 HDR

在能顯示 HDR 的螢幕上，如果[校樣](/zh-Hant/docs/color-management/proof/)面板中選擇了**關閉**且色域警告已關閉，畫布和導航會以 HDR 顯示 HDR 畫作。否則，它們顯示畫作的 SDR 版本，色彩控制元件也是如此。在網頁版編輯器中，HDR 需要瀏覽器報告螢幕支援 HDR。

底欄左側的提示標籤顯示目前看到的是哪個版本。選擇它可檢視詳細資料。

| 提示標籤 | 顯示條件 |
| --- | --- |
| 「HDR」 | 畫作以 HDR 顯示。 |
| 「SDR 預覽」 | 畫作在能顯示 HDR 的螢幕上處於 SDR 模式。 |
| 「正在顯示 SDR」 | 螢幕不顯示 HDR。 |

## SDR 版本

每幅 HDR 畫作都儲存有一個 SDR 版本，用於：

- 不支援 HDR 的螢幕以及 SDR 模式；
- 圖層縮圖；
- 列印校樣；
- SDR 匯出，以及 HDR JPEG 和 HDR AVIF 匯出的 SDR 基礎影像。

可以調整 SDR 版本而不改變 HDR 像素。執行以下任一操作：

- 選擇**檢視 > SDR 校樣**（Windows 上沒有）。
- 在命令搜尋中選擇 **SDR 校樣**。
- 選擇校樣面板頂部的 **SDR**。

![校樣面板的 SDR 頁面，帶有調節平衡、對比、亮度和色彩強度的轉盤。](shot:color-management/proof-panel-sdr)

面板中的轉盤設定四個值。轉盤中心顯示固定的示意圖，而不是畫作。按兩下或輕點兩下轉盤的某個部分可重置其數值，選擇右上角的**重設 SDR 顯示效果**可重置全部四個值。轉盤獲得焦點時，方向鍵按步長調整數值，按住 **Shift** 步長更大。**Escape** 可取消拖動。每次拖動算作一個復原步驟，並隨畫作儲存。

### 平衡

左右拖動轉盤中心，範圍為 −100% 到 +100%。向左側重大塊形狀，向右側重細微紋理。

### 對比

上下拖動轉盤中心，範圍為 50% 到 200%。

### 亮度

拖動頂部弧線，範圍為 −50% 到 +50%。

### 色彩強度

拖動底部弧線，從 0% 的白色到 100% 的全綵。預設值為 30%。

## 預覽 SDR

無需開啟校樣面板，即可在 HDR 和 SDR 版本之間切換。在命令搜尋中選擇**預覽 SDR**，或在[鍵盤快捷鍵](/zh-Hant/docs/input/keyboard/)頁面為它指定一個鍵。

**預覽 SDR** 只對 HDR 畫作有效，並且螢幕要能顯示 HDR，列印校樣和色域警告都要關閉。
