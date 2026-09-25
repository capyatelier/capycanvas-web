---
title: "색 공간, HDR과 교정"
description: "그림이 색을 저장하는 방식을 정하고, HDR로 작업하고, 인쇄했을 때의 모습을 미리 봅니다."
purpose: "대부분의 그림은 기본 설정으로도 충분히 멋지게 보입니다. 사진을 편집하거나, 인쇄할 작품을 준비하거나, 최신 화면의 생생한 색을 쓰고 싶을 때는 그림이 담을 수 있는 색의 폭을 정하고, 다른 곳에서 어떻게 보일지 미리 확인할 수 있습니다."
techniques: ["새 그림의 색 공간과 비트 심도를 고릅니다.", "HDR로 칠하고 편집합니다.", "Proof로 인쇄될 색을 미리 봅니다."]
figure: "1: 그림 프리셋. 2: 색 공간과 비트 심도. 3: 새 그림을 여는 Create."
related: ["output/export", "filters/image-editing", "painting/color"]
image: {"light": "/assets/guides/color-management-light.webp", "dark": "/assets/guides/color-management-dark.webp", "alt": "1: 그림 프리셋. 2: 색 공간과 비트 심도. 3: 새 그림을 여는 Create."}
---

## 새 그림의 색 정하기

<strong>File → New…</strong>를 선택하면 **Preset** 메뉴에서 몇 가지 출발점을 고를 수 있습니다. **Standard drawing**은 대부분의 작품과 온라인에 공유할 그림에 알맞습니다. **Wide color**는 요즘 많은 화면이 표시하는 더 생생한 색을 담을 수 있고, **Photo editing**은 정밀도를 높여서 강하게 조정해도 부드러운 그레이디언트에 밴딩(계단 현상)이 생기지 않게 합니다.

**Color space**는 그림이 담을 수 있는 색의 범위를, **Bit depth**는 각 색을 얼마나 세밀하게 저장할지를 정합니다. 나중에 마음이 바뀌면 <strong>Edit → Convert Color Space…</strong>나 <strong>Edit → Change Bit Depth…</strong>를 사용하세요. 사진은 촬영했을 때의 색을 그대로 유지하므로, 사진을 열 때 따로 설정할 것이 없습니다.

## HDR로 작업하기

비트 심도로 **16-bit float HDR**이나 **32-bit float HDR**을 고르면 HDR 그림이 만들어집니다. HDR 그림은 햇빛이나 빛나는 조명처럼 흰색보다 밝은 색을 담을 수 있습니다. HDR 그림을 편집할 때는 색상환 아래에 강도 호가 나타나므로, 흰색보다 밝은 색으로도 칠할 수 있습니다.

브라우저와 디스플레이가 지원하면 HDR이 최대 밝기로 표시됩니다. 다른 화면에서는 대신 이미지의 표준 버전이 보입니다. HDR 그림을 내보낼 때는 일반 화면에서도 제대로 보이는 HDR JPEG이나 AVIF로 저장할 수 있으며, 자세한 내용은 [이미지 내보내기](/ko/docs/output/export/)에서 설명합니다.

## Proof로 미리 보기

작품을 인쇄하러 보내기 전에 **View → Proof**를 선택하면 종이에 인쇄했을 때 색이 어떻게 보일지 미리 볼 수 있습니다. **Proof** 패널에서 **Print**를 선택한 다음, 프린터나 인쇄 서비스의 색상 프로파일을 고르거나 추가합니다. **Gamut warning**은 프린터가 재현할 수 없는 색을 표시해 주므로, 인쇄하기 전에 그 색을 조정할 수 있습니다.

HDR 그림에서는 같은 패널의 **SDR** 옵션으로 일반 화면에서 이미지가 어떻게 보일지 확인하고, 그 버전의 밝기와 대비를 세밀하게 조정할 수 있습니다.
