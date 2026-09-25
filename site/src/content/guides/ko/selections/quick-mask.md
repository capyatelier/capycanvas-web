---
title: "Quick Mask와 선택 레이어"
description: "브러시로 선택 영역을 칠하고, 선택 영역을 저장해 두었다가 다시 씁니다."
purpose: "부드러운 머리카락, 구름, 흐릿한 배경처럼 윤곽을 따기보다 칠하는 편이 쉬운 영역이 있습니다. Quick Mask는 선택 영역을 색이 입혀진 오버레이로 보여 주며, 어떤 브러시로든 그 위에 칠할 수 있습니다. 선택 레이어는 선택 영역을 그림 안에 보관해 두었다가 필요할 때마다 다시 불러올 수 있게 합니다."
techniques: ["Quick Mask에서 브러시로 선택 영역을 다듬습니다.", "Paint selection으로 선택 영역을 직접 칠합니다.", "선택 영역을 선택 레이어로 저장하고 나중에 불러옵니다."]
figure: "1: 임시 Quick Mask 레이어. 2: 오버레이 색을 포함한 Quick Mask 설정. 3: 색 오버레이로 표시되고 브러시 획으로 넓힌 선택 영역."
related: ["tools/selections", "selections/tonal-range", "layers/masks"]
image: {"light": "/assets/guides/selections-quick-mask-light.webp", "dark": "/assets/guides/selections-quick-mask-dark.webp", "alt": "1: 임시 Quick Mask 레이어. 2: 오버레이 색을 포함한 Quick Mask 설정. 3: 색 오버레이로 표시되고 브러시 획으로 넓힌 선택 영역."}
---

## Quick Mask에서 선택 영역 다듬기

아무 선택 도구로나 대략 선택한 다음, **Select → Quick Mask**를 선택하거나 **Q**를 누릅니다. 선택 영역이 색 오버레이로 표시되고, Layers 패널 맨 위에 임시 **Quick Mask** 레이어가 나타납니다. 이제 아무 브러시로 칠하면 선택 영역에 더해지고, **Eraser**로 칠하면 선택 영역에서 빠집니다. 부드러운 브러시로 칠하면 가장자리도 부드러워지므로 털이나 나뭇잎에 딱 알맞습니다.

오버레이가 그림과 잘 구분되지 않으면 **Properties**에서 오버레이의 색이나 불투명도를 바꾸세요. 선택 영역이 마음에 들면 **Return to Artwork**를 선택해, 선택 영역이 살아 있는 상태로 그리기로 돌아갑니다.

## 선택 영역 직접 칠하기

첫 단계를 건너뛰고 싶다면 선택 도구 중에서 **Paint selection** 도구를 고르세요. 칠하는 획마다 선택 영역에 더해지고, 한 영역을 빙 둘러 칠하면 그 안쪽이 모두 선택됩니다. **Alt**를 누르고 있거나 Tool 패널에서 모드를 바꾸면, 선택 영역의 일부를 칠해서 다시 지울 수 있습니다.

## 선택 영역 저장해 두기

새로 선택하는 순간 이전 선택 영역은 사라지므로, 다시 필요할 선택 영역은 저장해 두세요. **Select → Save as Selection Layer**를 선택하거나, Quick Mask 레이어의 메뉴에서 **Save as Selection Layer**를 선택합니다. 선택 영역은 Layers 패널에 선택 레이어로 보관되며, 그림과 함께 저장됩니다.

다시 사용하려면 **Select → Load Selection**을 선택하거나, **Ctrl**을 누른 채 선택 레이어의 썸네일을 클릭합니다. 레이어 메뉴에서 현재 선택 영역과 합칠 수도 있습니다. Layers 패널 아래쪽의 **New Selection Layer** 버튼은 빈 선택 레이어를 만들며, 여기에 바로 칠해서 선택 영역을 만들 수 있습니다.
