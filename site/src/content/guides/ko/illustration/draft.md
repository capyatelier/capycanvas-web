---
title: "스케치"
description: "연필로 스케치하고, 별도 레이어에서 색을 시험해 봅니다."
purpose: "스케치에서는 형태를 잡고, 컬러 러프에서는 색을 시험합니다. 둘을 별도 레이어에 두면 연필선을 건드리지 않고 색을 몇 번이고 바꿀 수 있습니다."
techniques: ["연필과 필압으로 그립니다.", "스케치의 일부를 선택해 고칩니다.", "스케치 아래 레이어에 대략적인 색을 칠합니다."]
figure: "1: 연필 브러시. 2: Layers에서 Color rough 위에 있는 Sketch. 3: 연필 크기와 불투명도."
related: ["tools/selections", "tools/transforms", "painting/color"]
image: {"light": "/assets/guides/illustration-draft-light.webp", "dark": "/assets/guides/illustration-draft-dark.webp", "alt": "1: 연필 브러시. 2: Layers에서 Color rough 위에 있는 Sketch. 3: 연필 크기와 불투명도."}
---

## 1. 스케치 그리기

새 레이어를 추가하고 이름을 **Sketch**로 정합니다. **Pencil** 도구를 고르고 Tool Set에서 연필 하나를 선택합니다. 먼저 가벼운 선으로 원, 휘어진 리본, 기울어진 사각형의 자리를 잡은 다음, 남기고 싶은 윤곽은 더 세게 눌러 확실하게 그립니다. 연필 크기는 Tool 패널에서 정합니다.

도형 주위에 여백을 조금 남겨 두세요. 각 도형이 어디서 끝나는지 분명하게 보이므로 이후 단계가 더 쉬워집니다.

## 2. 어색한 부분 고치기

어떤 부분의 위치나 크기가 맞지 않아도 다시 그릴 필요는 없습니다. **Lasso selection**을 고르고 그 부분을 빙 둘러 그립니다. 그런 다음 **Scale / rotate**를 선택해 그 부분을 제자리로 드래그하거나 크기를 바꾸고, **Apply transform**을 선택합니다. 계속 그리기 전에 **Select → Deselect pixels**를 선택하세요.

이 도구들은 [선택 도구](/ko/docs/tools/selections/)와 [이동과 변형](/ko/docs/tools/transforms/)에서 더 자세히 설명합니다. 변경이 잘못되었다면 그냥 실행 취소하면 됩니다.

## 3. 색 시험하기

**Color rough**라는 레이어를 하나 더 추가하고 Sketch 아래로 드래그합니다. 도형마다 색을 고르고, **Lasso selection**으로 도형을 둘러 그린 다음 **Edit → Fill selection**을 선택합니다. 예제에서는 리본에 청록색, 원에 황토색, 사각형에 테라코타를 썼습니다. 대략적인 색이므로 가장자리가 깔끔하지 않아도 됩니다. 연필선이 잘 보이도록 레이어 불투명도를 조금 낮추세요.

스케치만 보고 싶을 때는 언제든 Color rough를 잠시 숨깁니다. 그림을 저장한 뒤 [선화](/ko/docs/illustration/ink/)로 넘어가세요.
