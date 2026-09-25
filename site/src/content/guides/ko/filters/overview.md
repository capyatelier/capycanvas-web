---
title: "필터와 조정"
description: "편집 가능한 필터를 추가하고, 언제든 설정을 바꿉니다."
purpose: "필터는 간단한 밝기 조정과 색 조정부터 흐림 효과와 예술적 효과까지, 아래에 있는 레이어의 모습을 바꿉니다. 필터마다 별도의 레이어이므로, 아래 그림은 건드리지 않고 나중에 조정하거나, 숨기거나, 삭제할 수 있습니다."
techniques: ["필터를 찾아 추가합니다.", "Properties에서 설정을 바꿉니다.", "필터를 그림의 일부에만 적용합니다."]
figure: "1: Filters 패널. 2: Layers의 조정 레이어. 3: 조정 레이어를 편집하는 Properties 탭."
related: ["filters/image-editing", "layers/masks", "layers/groups"]
image: {"light": "/assets/guides/filters-overview-light.webp", "dark": "/assets/guides/filters-overview-dark.webp", "alt": "1: Filters 패널. 2: Layers의 조정 레이어. 3: 조정 레이어를 편집하는 Properties 탭."}
---

## 필터 추가하기

필터를 올려놓을 레이어를 선택한 다음 **Filters** 패널을 엽니다. 필터는 Tone, Color, Blur, Artistic 같은 그룹으로 나뉘어 있으며, 검색 상자에 **Curves**나 **Gaussian Blur** 같은 이름을 입력해 찾을 수도 있습니다. 필터를 고르면 새 레이어로 추가됩니다. 창 위쪽의 **Filter** 메뉴에도 같은 필터가 있습니다.

Sketch에서는 제목 표시줄의 **Filters** 버튼을 누르면 대신 서랍이 열립니다. 왼쪽에서 그룹을 고르고 이어서 필터를 고르면, 오른쪽에 설정이 나타납니다.

## 설정 바꾸기

필터 레이어를 선택하고 **Properties**를 열면 설정이 보입니다. 슬라이더를 쓰는 필터도 있고, 곡선이나 색을 쓰는 필터도 있습니다. 설정은 하나씩 바꾸면서 그림을 지켜보세요. 작업하는 동안 이미지의 톤이 어떻게 분포되어 있는지 보고 싶다면 <strong>View → Histogram…</strong>을 엽니다.

필터 레이어를 숨겼다가 다시 표시하며 결과를 원본과 비교하거나, 불투명도를 낮춰 효과 전체를 은은하게 만들 수 있습니다. 언제든 Properties로 돌아와 설정을 다시 바꿀 수 있습니다.

## 적용 범위 제한하기

필터는 레이어 목록에서 자기 아래에 있는 모든 것에 영향을 줍니다. 그림의 일부에 적용되지 않게 하려면 필터 레이어에 [마스크](/ko/docs/layers/masks/)를 추가하거나, 필터를 그룹 안에 넣어 그 그룹의 레이어에만 영향을 주도록 합니다. 선화처럼 바뀌지 않았으면 하는 세부는 필터 위에 두세요.

필터를 여러 개 쓸 때는 순서에 따라 결과가 달라지므로, 기대한 결과가 나오지 않으면 필터를 위아래로 옮겨 보세요. 사진으로 처음부터 끝까지 해 보는 예는 [사진 편집하기](/ko/docs/filters/image-editing/)를 참고하세요.
