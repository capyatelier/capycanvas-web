---
title: "이동과 변형"
description: "레이어나 선택 픽셀을 이동, 확대·축소, 회전합니다."
purpose: "Operation은 기존 내용을 옮깁니다. Scale / rotate는 크기와 각도를 바꾸는 손잡이를 제공합니다. 보기 이동과 달리 저장되는 작품을 바꿉니다."
techniques: ["레이어와 필요한 픽셀 영역을 선택합니다.", "손잡이로 이동, 크기, 회전을 조절합니다.", "미리보기를 적용하거나 취소합니다."]
figure: "1: Tool의 위치 조작부. 2: 캔버스의 변형 미리보기. 3: 편집 레이어."
related: ["tools/selections", "workspace", "illustration/draft"]
image: {"light": "/assets/guides/tools-transforms-light.webp", "dark": "/assets/guides/tools-transforms-dark.webp", "alt": "1: Tool의 위치 조작부. 2: 캔버스의 변형 미리보기. 3: 편집 레이어."}
---

## 바꿀 대상 고르기

대상 레이어의 내용 썸네일을 선택합니다. 일부만 바꾸려면 먼저[픽셀 영역](/ko/docs/tools/selections/)을 선택합니다. **Operation**은 편집 대상을 옮기고**Scale / rotate**는 변형 손잡이를 표시합니다.

드래그 전에 썸네일을 확인합니다. 마스크를 선택하면 표시 경계가 바뀝니다. 연결된 마스크는 레이어와 같이 움직이므로 마스크만 옮길 때만 연결을 풉니다.

## 미리보기 조절하기

내용을 드래그해 이동하고 주변 손잡이로 크기를, 회전 손잡이로 각도를 바꿉니다. 비율을 유지하려면**Keep proportions**를 켭니다. Tool에 조작부가 표시되며 조절 중에는 미리보기가 대기 상태로 남습니다.

관련 변경은 한 미리보기 안에서 처리합니다. 래스터 변형을 반복 적용하면 가장자리가 부드러워질 수 있으므로 여러 배치를 비교하려면 원본을 복제합니다.

## 적용 또는 취소하기

**Apply transform**은 변경을 보관하고**Cancel transform**은 원래 상태로 돌아갑니다. 다른 곳에 그리기 전에 픽셀 선택을 해제합니다.

그릴 각도만 편하게 바꾸려면 Navigator나[보기 조작부](/ko/docs/workspace/)를 사용합니다. 현재 절차는 이동, 크기, 회전을 다루며 원근 왜곡 절차는 제공하지 않습니다.
