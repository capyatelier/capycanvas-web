---
title: "마스킹"
description: "리본, 원, 사각형마다 경계를 편집할 수 있는 색 레이어를 만듭니다."
purpose: "이 단계에서는 도형마다 자기만의 색 레이어를 만듭니다. 색은 레이어 전체를 채우고, 마스크가 그중 어느 부분을 보여 줄지 정합니다. 지워지는 것이 없으므로, 나중에 마스크에 칠하기만 하면 어느 도형이든 경계를 조절할 수 있습니다."
techniques: ["올가미나 Auto select로 도형을 선택합니다.", "선택 영역을 마스크로 바꾸고 레이어를 색으로 채웁니다.", "마스크에 칠해 경계를 조절합니다."]
figure: "1: Ribbon의 선택된 마스크 썸네일. 2: Line art 아래의 Ribbon, Disc, Block. 3: 마스크의 일부를 숨기는 Eraser."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Ribbon의 선택된 마스크 썸네일. 2: Line art 아래의 Ribbon, Disc, Block. 3: 마스크의 일부를 숨기는 Eraser."}
---

## 1. 도형 선택하기

**Sketch**와 **Color rough**를 숨깁니다. **Lasso selection**을 고르고, 예제처럼 리본의 둘레를 조심스럽게 따라 그립니다.

선화가 도형을 빈틈없이 감싸고 있다면 **Auto select**로 한 번의 클릭만으로 선택할 수 있습니다. 먼저 **Line art**의 메뉴에서 **Layer Settings → Use as reference**를 선택해 참조 레이어로 지정합니다. 그런 다음 **Auto select**를 고르고, Tool 패널에서 **Sample reference layers**를 선택한 뒤 도형 안쪽을 클릭합니다. 선택 영역이 얼마나 퍼질지 조절하는 설정은 [선택 도구](/ko/docs/tools/selections/)에서 설명합니다.

## 2. 마스크가 있는 색 레이어 만들기

Line art 아래에 **Ribbon**이라는 새 레이어를 추가합니다. 선택 영역이 남아 있는 상태에서 Ribbon의 메뉴를 열고 **Mask → Mask: reveal selection**을 선택합니다. 이제 레이어에 리본 모양만 보여 주는 마스크가 생겼습니다.

Ribbon의 레이어 썸네일을 클릭하고 리본의 색을 고릅니다. **Select → Select all pixels**를 선택한 다음 **Edit → Fill selection**으로 레이어 전체를 색으로 채우고, 마지막으로 **Select → Deselect pixels**를 선택합니다. 화면에는 리본만 보이지만 색은 마스크 아래에서도 이어지므로, 나중에 모양을 넓히고 싶을 때 바로 쓸 수 있습니다.

## 3. 경계 조절하기

Ribbon의 마스크 썸네일을 클릭해 마스크를 편집합니다. 이제 어떤 브러시로 칠하든 칠한 곳에서 색이 더 드러나고, **Eraser**로 칠하면 다시 숨겨집니다. 색 자체를 바꾸고 싶을 때는 다시 레이어 썸네일을 클릭합니다.

**Disc**와 **Block**도 같은 방법으로 만듭니다. Disc는 Ribbon 아래에, Block은 Disc 아래에 두고, Line art는 세 레이어보다 위에 둡니다. 그림을 저장한 뒤 [렌더링](/ko/docs/illustration/render/)으로 넘어가세요.
