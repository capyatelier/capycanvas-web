---
title: "対応デバイス"
description: "ネイティブアプリとWebエディターのOS、ブラウザー、グラフィックス要件。"
related: ["quickstart", "input/pen", "input/touch"]
---

{appName}はデバイスのグラフィックスプロセッサーを使ってキャンバスを描画、表示します。対応状況はアプリまたはブラウザー、OS、グラフィックスハードウェアの組み合わせで決まります。

## ネイティブアプリ

デスクトップアプリはWindows、macOS、Linuxに対応しています。ネイティブiPadアプリにはiPadOS 17.5以降が必要です。AndroidアプリにはAndroid 12以降が必要です。

iPadとAndroidのアプリはベータ版です。OSの要件を満たしていても、すべてのグラフィックスプロセッサーやペンの動作を保証するものではありません。

## Webエディター

Webエディターは次のブラウザーで動作します。

| システム | ブラウザー |
| --- | --- |
| Windows | Chrome、Edge、Firefox 141以降 |
| macOS | Chrome、Edge、Safari 26以降、AppleシリコンのFirefox 147以降 |
| Waylandを使うLinux | Chrome、Edge |
| iPadOS 26以降 | Safari |
| Android 12以降 | Chrome |

ネイティブiPadアプリの最低要件であるiPadOS 17.5はSafariには適用されません。WebエディターはiPadOS 26で提供されるブラウザーのグラフィックス機能を使うため、iPadOS 26以降が必要です。

## グラフィックス対応

キャンバスを起動できない場合、{appName}は不足するグラフィックス機能を示すメッセージを表示します。まずOS、ブラウザー、グラフィックスドライバーを更新してください。メッセージが残る場合は、その正確な文面とデバイス、グラフィックスの機種を問題報告に含めてください。
