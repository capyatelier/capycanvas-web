---
title: "가져온 이미지 편집"
description: "이미지를 레이어로 가져와 조절하고 사본을 내보냅니다."
purpose: "Photo는 이미지 조정에 편한 배치를 제공합니다. 이미지 가져오기는 현재 문서에 레이어를 추가하고, .capy 열기는 편집 가능한 문서 전체를 복원합니다."
techniques: ["Photo로 이미지를 가져옵니다.", "편집 가능한 색 조정을 추가합니다.", "레이어가 있는 프로젝트와 PNG를 저장합니다."]
figure: "1: Photo 작업 공간. 2: 가져온 이미지와 효과 레이어. 3: 색 조정의 Properties."
related: ["filters/overview", "tools/transforms", "tools/files"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Photo 작업 공간. 2: 가져온 이미지와 효과 레이어. 3: 색 조정의 Properties."}
---

## 문서로 가져오기

**Photo**를 선택하고 필요한 크기로 문서를 만듭니다. **Layers**아래의**Import image as layer**에서 브라우저가 읽을 수 있는 이미지를 선택합니다. 새 이미지 레이어가 추가됩니다.

**Operation**이나**Scale / rotate**로 위치를 정합니다. 가져와도 문서 크기가 원본 이미지에 맞춰 바뀌지는 않습니다. 시험하는 동안 원본 파일을 보관합니다.

## 모습 조절하기

**Filters**에서**Curves**나**Hue / Saturation**을 추가합니다. 효과 레이어를 고르고**Properties**에서 조절한 뒤 표시를 전환해 원본과 비교합니다.

일부만 바꾸려면 마스크를 추가합니다. 무관한 내용에 작용하지 않도록 순서, 클리핑, 그룹을 확인합니다. 관계는[필터와 속성](/ko/docs/filters/overview/)에서 설명합니다.

## 저장과 내보내기

<strong>Save As…</strong>로 이미지와 편집 가능한 효과가 있는`.capy`를 저장합니다. <strong>Export PNG…</strong>는 공유용 합성 사본을 만듭니다. PNG를 열어 크기와 모습을 확인합니다.

이 절차는 현재 공통 도구를 사용합니다. RAW 현상, 복구 브러시, 색상 프로파일 작업은 포함하지 않습니다.
