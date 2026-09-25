---
title: "선택 도구"
description: "그림의 일부를 선택해 그 영역에만 변경이 적용되게 합니다."
purpose: "선택 영역은 그림에서 작업할 부분을 표시합니다. 선택 영역이 있는 동안에는 칠하기, 채우기, 변형이 선택한 영역에만 적용되므로 나머지 그림은 안전하게 남습니다. Capy Canvas에는 단순한 도형, 자유로운 윤곽, 비슷한 색의 영역을 선택하는 도구가 있습니다."
techniques: ["알맞은 선택 도구를 고릅니다.", "선택 영역을 더하거나 뺍니다.", "선택 영역을 채우고, 끝나면 선택을 해제합니다."]
figure: "1: Tool Set의 선택 도구. 2: 선택 모드, 페더, 모양 옵션. 3: 원 둘레의 타원 선택 영역."
related: ["selections/quick-mask", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Tool Set의 선택 도구. 2: 선택 모드, 페더, 모양 옵션. 3: 원 둘레의 타원 선택 영역."}
---

## 선택 도구 고르기

Paint에서 도구 모음의 **Lasso selection**이나 **Auto select**를 고르면 Tool Set에 모든 선택 도구가 표시됩니다. Sketch에서는 **Select** 버튼 아래에 선택 도구가 있고, Photo에서는 대부분의 선택 도구가 도구 모음에 있습니다.

**Rectangle select**와 **Ellipse select**는 단순한 도형으로 선택합니다. **Shift**를 누르고 있으면 정사각형이나 원이 되고, **Alt**를 누르고 있으면 중심에서부터 그려집니다. **Lasso selection**은 펜이 움직이는 대로 자유롭게 따라가고, **Polygonal lasso**는 클릭한 점 사이를 직선으로 잇습니다. 첫 점을 다시 클릭하거나 **Enter**를 누르면 선택 영역이 닫힙니다. **Auto select**는 한 번의 클릭으로 비슷한 색의 영역을 선택하고, **Select by color**는 같은 색의 영역을 한꺼번에 모두 선택합니다. 나머지 두 도구인 **Paint selection**과 **Tonal range**는 각각 [Quick Mask와 선택 레이어](/ko/docs/selections/quick-mask/), [밝기로 선택하기](/ko/docs/selections/tonal-range/)에서 따로 설명합니다.

## 선택 영역 합치고 부드럽게 하기

**Tool** 패널 위쪽의 버튼 네 개는 선택을 새로 할 때 어떻게 처리할지 정합니다. 현재 선택 영역을 새것으로 바꾸거나, 더하거나, 빼거나, 두 영역이 겹치는 부분만 남길 수 있습니다. 버튼을 바꾸지 않고도 **Shift**를 누르고 있으면 더하고, **Alt**를 누르고 있으면 뺄 수 있습니다.

**Feather radius**는 선택 영역의 가장자리를 부드럽게 해서, 칠이나 조정이 딱딱한 경계에서 끊기지 않고 서서히 사라지게 합니다. Auto select에서 **Tolerance**는 색이 얼마나 달라도 선택에 포함할지를 정하고, **Close gaps**는 선화의 작은 틈으로 선택 영역이 새어 나가지 않게 막아 줍니다.

## 선택 영역 사용하기

선택 영역이 있는 동안에는 마음껏 칠해도 획이 그 안에만 남습니다. **Edit → Fill selection**을 선택하면 현재 색으로 채울 수 있고, 선택 영역을 [레이어 마스크](/ko/docs/layers/masks/)로 바꿀 수도 있습니다. **Select** 메뉴에서는 선택 영역을 반전하거나, 몇 픽셀 넓히거나 좁히거나, **Reselect**로 마지막 선택 영역을 되살릴 수도 있습니다.

작업이 끝나면 **Select → Deselect pixels**를 선택해 다음 획을 다시 어디에나 그릴 수 있게 합니다.
