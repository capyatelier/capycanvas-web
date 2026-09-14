---
title: "선택과 채우기"
description: "영역과 경계 출처를 정하고 원하는 레이어에 채웁니다."
purpose: "픽셀 선택은 편집 가능한 범위를 제한하지만 편집 레이어를 고르지는 않습니다. 한 레이어의 윤곽을 읽고 다른 레이어에 색을 넣을 수 있습니다."
techniques: ["올가미나 자동 선택을 사용합니다.", "표시 이미지, 편집 레이어, 참조 레이어를 고릅니다.", "허용치와 가장자리를 조절하고 선택을 해제합니다."]
figure: "1: Auto select와 출처 선택. 2: 허용치와 가장자리 조작부. 3: 경계 출처와 별개인 편집 레이어."
related: ["tools/transforms", "layers/masks", "illustration/mask"]
image: {"light": "/assets/guides/tools-selections-light.webp", "dark": "/assets/guides/tools-selections-dark.webp", "alt": "1: Auto select와 출처 선택. 2: 허용치와 가장자리 조작부. 3: 경계 출처와 별개인 편집 레이어."}
---

## 선택 방법 고르기

**Lasso selection**으로 직접 경계를 그리거나**Auto select**로 기존 이미지의 영역을 읽습니다. Tool Set에서 표시 이미지, 편집 레이어, 참조 레이어 중 출처를 고릅니다. Line art를 참조하려면 행을 선택하고 Layers의**Use selected layers as references**를 사용합니다.

채우기 전에 대상 레이어로 돌아옵니다. **Lasso Fill**은 자유형 영역을 바로 그리고 채우며, 픽셀 선택을 유지하는 올가미와 다른 도구입니다.

## 윤곽과 가장자리 조절하기

**Fill**은 감지한 영역을 바로 채우고, **Auto select**는 먼저 선택을 확인하게 합니다. **Tool**에**Tolerance**, **Close gaps**, **Expansion**, **Edge smoothing**이 있습니다.

색 변화로 영역이 나뉘면 허용치를 높입니다. 밖으로 새면 윤곽을 확인하고 작은 틈을 닫아 봅니다. 약간 확장하면 안티앨리어싱된 선 아래까지 채울 수 있습니다. 이 설정은 다음 영역 작업에 적용됩니다.

## 마무리하기

**Fill selection**으로 편집 레이어의 선택 픽셀을 채우거나[레이어 마스크](/ko/docs/layers/masks/)로 바꿉니다. 채우기나[변형](/ko/docs/tools/transforms/) 후**Select → Deselect pixels**로 해제해야 다음 획이 제한되지 않습니다.
