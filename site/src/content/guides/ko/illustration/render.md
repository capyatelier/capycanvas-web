---
title: "렌더링"
description: "기본색에 클리핑한 별도 레이어로 음영과 질감을 더합니다."
purpose: "클리핑은 음영을 기본색의 표시 범위 안에 둡니다. 음영은 별도로 편집할 수 있고 바깥 경계는 기본색 마스크가 함께 제어합니다."
techniques: ["Ribbon 위에 Ribbon shading을 클리핑합니다.", "브러시와 레이어 불투명도를 구분합니다.", "질감을 더하고 순서를 확인해 내보냅니다."]
figure: "1: Ribbon 위의 Ribbon texture와 Ribbon shading. 2: Clip to layer below. 3: 전체 음영을 조절하는 레이어 불투명도."
related: ["layers/groups", "layers/masks", "tools/files"]
image: {"light": "/assets/guides/illustration-render-light.webp", "dark": "/assets/guides/illustration-render-dark.webp", "alt": "1: Ribbon 위의 Ribbon texture와 Ribbon shading. 2: Clip to layer below. 3: 전체 음영을 조절하는 레이어 불투명도."}
---

## 1. 클리핑 음영 추가하기

**Ribbon**을 선택하고 바로 위에**Ribbon shading**을 만든 뒤**Clip to layer below**를 켭니다. Watercolor Wash로 리본이 휘어지는 부분에 음영을 넣고 Paintbrush로 세이지 그린을 더합니다. 획은 실루엣을 넘어가도 보이는 결과는 기본색 범위 안에 남습니다.

처음에는**Normal**혼합을 사용합니다. 기본색은 Ribbon에 남으므로 음영을 지워도 기본색은 지워지지 않습니다.

## 2. 강도와 질감 조절하기

브러시 불투명도는 새 획에, **Ribbon shading의 레이어 불투명도**는 이미 그린 전체 음영에 작용합니다. 모두 진하면 후자를 낮춥니다.

Ribbon shading 바로 위에**Ribbon texture**를 만들고 클리핑을 다시 켭니다. 가는 연필이나 질감 있는 프리셋으로 밝은 부분을 더합니다. 위에서부터 Ribbon texture, Ribbon shading, Ribbon 순서입니다. [브러시 설정](/ko/docs/advanced/brush-engine/)에서 간격, 불투명도, 유량을 설명합니다.

## 3. 다른 영역 마무리하기

**Disc**와**Block**에도 클리핑 음영을 추가합니다. 원의 부드러운 음영에는 Airbrush를, 작은 크림색 빗금에는 Pencil을 사용합니다. **Line art**는 위에 둡니다. 공통 경계가 틀리면 기본색 마스크를, 음영만 틀리면 음영 레이어를 고칩니다. [마스크와 클리핑](/ko/docs/layers/masks/)은 선화 색을 바꾸는 알파 잠금도 설명합니다.

러프를 숨기고`.capy`를 저장한 뒤[PNG를 내보냅니다](/ko/docs/tools/files/). 공유 전에 내보낸 이미지를 확인합니다.
