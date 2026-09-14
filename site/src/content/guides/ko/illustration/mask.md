---
title: "마스킹"
description: "리본, 원과 사각형에 편집 가능한 색 경계를 만듭니다."
purpose: "기본색 레이어에는 색을, 마스크에는 표시 경계를 둡니다. 마스크 뒤까지 채워 두면 나중에 범위를 조금 넓힐 때 다시 칠하지 않아도 됩니다."
techniques: ["올가미나 자동 선택으로 영역을 정합니다.", "선택으로 마스크를 만들고 밑의 레이어를 채웁니다.", "마스크 썸네일로 경계를 다듬습니다."]
figure: "1: Ribbon의 선택한 마스크 썸네일. 2: Line art 아래의 Ribbon, Disc, Block. 3: 마스크 범위를 드러내는 흰색."
related: ["layers/masks", "tools/selections", "painting/color"]
image: {"light": "/assets/guides/illustration-mask-light.webp", "dark": "/assets/guides/illustration-mask-dark.webp", "alt": "1: Ribbon의 선택한 마스크 썸네일. 2: Line art 아래의 Ribbon, Disc, Block. 3: 마스크 범위를 드러내는 흰색."}
---

## 1. 기본 모양 선택하기

**Sketch**와**Color rough**를 숨깁니다. 예제처럼**Lasso selection**으로 리본 윤곽을 선택합니다. 닫힌 선화라면**Line art**를 참조 레이어로 지정하고**Auto select → Reference**로 내부를 누를 수도 있습니다.

계속하기 전에 경계를 확인합니다. 필요하면 허용치, 틈 닫기, 확장을 조절해 다시 선택합니다. [선택과 채우기](/ko/docs/tools/selections/)에서 설명합니다.

## 2. 마스크 레이어 만들기

Line art 아래에**Ribbon**을 만듭니다. 픽셀 선택을 유지한 채 Ribbon의 문맥 메뉴에서**Mask: reveal selection**을 고릅니다. 남은 선택을 해제하고 Ribbon의**내용 썸네일**을 선택합니다.

기본색을 고르고**Select → Select all pixels**, **Edit → Fill selection**으로 레이어 전체를 채운 뒤**Deselect pixels**로 해제합니다. 마스크는 실루엣만 보이지만 숨겨진 영역에도 색이 남습니다. 색을 가져올 때만 Color rough를 잠시 표시하고 다시 숨깁니다.

## 3. 경계 다듬기

Ribbon의**마스크 썸네일**을 선택합니다. 검정으로 과한 부분을 숨기고 흰색으로 더 드러냅니다. 색을 바꾸기 전에 내용 썸네일로 돌아옵니다.

**Disc**와**Block**도 같은 방법으로 만듭니다. Ribbon 아래에 Disc를, Disc 아래에 Block을 두고 Line art는 세 도형 위에 유지합니다. 저장한 뒤[렌더링](/ko/docs/illustration/render/)에서 클리핑 음영을 더합니다.
