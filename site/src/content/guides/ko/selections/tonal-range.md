---
title: "밝기로 선택하기"
description: "Tonal range 도구로 이미지의 어두운 영역, 중간 톤, 밝은 영역을 선택합니다."
purpose: "사진가는 어두운 부분을 밝히거나 너무 밝은 하늘을 차분하게 가라앉히는 것처럼, 사진의 어둡거나 밝은 부분만 조정하고 싶을 때가 많습니다. Tonal range 도구는 밝고 어두운 정도에 따라 영역을 선택하며, 가장자리가 부드러워 조정이 자연스럽게 어우러집니다."
techniques: ["프리셋으로 톤 범위를 고릅니다.", "이미지에서 원하는 범위를 직접 고릅니다.", "선택 영역을 부드럽게 하고 조정에 사용합니다."]
figure: "1: Shadows부터 Highlights까지의 톤 프리셋. 2: Softness와 Feather. 3: 캔버스에서 선택된 중간 톤."
related: ["tools/selections", "filters/overview", "filters/image-editing"]
image: {"light": "/assets/guides/selections-tonal-range-light.webp", "dark": "/assets/guides/selections-tonal-range-dark.webp", "alt": "1: Shadows부터 Highlights까지의 톤 프리셋. 2: Softness와 Feather. 3: 캔버스에서 선택된 중간 톤."}
---

## 톤 범위 고르기

선택 도구 중에서 **Tonal range**를 고릅니다. Tool 패널에 **Shadows**부터 **Midtones**를 거쳐 **Highlights**까지 이어지는 프리셋이 한 줄로 표시됩니다. 하나를 선택하면 이미지에서 그에 맞는 부분이 바로 선택됩니다.

원하는 범위를 직접 정하려면 **Custom**을 선택한 다음, 이미지에서 맞추고 싶은 부분을 클릭하거나 드래그합니다. 그런 다음 원하는 톤만 선택될 때까지 범위의 양 끝을 조절합니다.

## 가장자리 부드럽게 하기

**Softness**는 고른 톤과 그 주변 톤 사이에서 선택 영역이 얼마나 서서히 사라질지를 정합니다. 값을 높이면 부드럽고 자연스럽게 이어지므로 대개 사진에 가장 잘 맞습니다. **Feather**는 선택된 영역의 바깥 가장자리를 한층 더 부드럽게 만듭니다. 다른 선택 도구와 마찬가지로 Tool 패널 위쪽의 버튼으로 톤 선택 영역을 더하거나 뺄 수 있습니다.

## 선택 영역 사용하기

선택 영역이 있는 상태에서 [필터와 조정](/ko/docs/filters/overview/)에 있는 **Curves**나 **Exposure** 같은 조정을 추가합니다. 조정은 선택한 톤에만 적용됩니다. 예를 들어 어두운 영역을 선택해 밝히면 숨어 있던 세부가 드러나고, 밝은 영역을 선택해 낮추면 하얗게 날아간 하늘을 되살릴 수 있습니다.

선택 영역을 나중에 쓰려면 [Quick Mask와 선택 레이어](/ko/docs/selections/quick-mask/)에서 설명한 대로 선택 레이어로 저장하세요.
