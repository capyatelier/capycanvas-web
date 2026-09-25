---
title: "렌더링"
description: "도형마다 클리핑한 레이어에 음영과 질감을 더하고, 결과를 내보냅니다."
purpose: "렌더링은 도형에 빛과 그림자를 입히는 단계입니다. 클리핑한 레이어에 음영을 칠하면 음영이 저절로 각 도형 안에 머물고, 음영이 밑색과 분리되어 있으므로 아무것도 잃지 않고 조절하거나 다시 칠할 수 있습니다."
techniques: ["Ribbon에 음영 레이어를 클리핑합니다.", "음영의 강도를 조절합니다.", "다른 도형에도 음영을 넣고, 레이어를 확인한 뒤 내보냅니다."]
figure: "1: Ribbon 위의 Ribbon texture와 Ribbon shading. 2: Clip to layer below. 3: 음영 작업 전체를 조절하는 레이어 불투명도."
related: ["layers/groups", "layers/masks", "output/export"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Ribbon 위의 Ribbon texture와 Ribbon shading. 2: Clip to layer below. 3: 음영 작업 전체를 조절하는 레이어 불투명도."}
---

## 1. 클리핑 음영 추가하기

**Ribbon**을 선택하고 바로 위에 새 레이어를 추가해 이름을 **Ribbon shading**으로 정합니다. 레이어 메뉴를 열고 **Layer Settings → Clip to layer below**를 선택합니다. 이제 **Watercolor Wash**로 리본이 휘어지는 곳에 그림자를 칠하고, **Paintbrush**로 세이지 그린 포인트를 몇 군데 더합니다. 리본 안쪽 부분만 보이므로 획이 리본 가장자리를 넘어가도 괜찮습니다.

음영 레이어의 혼합 모드는 일단 **Normal**로 둡니다. 밑색은 Ribbon 레이어에 안전하게 남아 있으므로, 음영을 지워도 그 아래의 색이 지워지는 일은 없습니다.

## 2. 강도 조절하기

브러시 불투명도는 앞으로 칠할 획을 바꿉니다. **Ribbon shading 레이어의 불투명도**는 이미 칠한 음영 전체를 바꿉니다. 모든 그림자가 너무 진해 보인다면 다시 칠하지 말고 레이어 불투명도를 낮추세요.

하이라이트를 넣으려면 Ribbon shading 바로 위에 **Ribbon texture**를 추가하고 이 레이어도 클리핑합니다. 작은 연필이나 질감 있는 브러시로 밝은 자국을 몇 개 더합니다. 이제 레이어 순서는 위에서부터 Ribbon texture, Ribbon shading, Ribbon입니다. 불투명도와 유량은 [브러시 설정](/ko/docs/advanced/brush-engine/)에서 더 자세히 설명합니다.

## 3. 마무리하고 내보내기

**Disc**와 **Block**에도 각각 클리핑 레이어를 만들어 같은 방법으로 음영을 넣습니다. 예제에서는 원의 부드러운 음영에 Airbrush를, 작은 크림색 해칭에 Pencil을 사용했습니다. **Line art**는 언제나 맨 위에 둡니다. 도형의 바깥 경계를 고쳐야 한다면 그 도형의 마스크에 칠하고, 음영만 잘못되었다면 음영 레이어를 고칩니다. [마스크와 클리핑](/ko/docs/layers/masks/)에서는 알파 잠금으로 선화의 색을 바꾸는 방법도 설명합니다.

그림이 마음에 들면 러프 레이어를 숨기고, `.capy` 파일을 저장한 다음, 공유할 [이미지를 내보냅니다](/ko/docs/output/export/). 내보낸 파일을 한 번 열어 예상대로 보이는지 확인하세요.
