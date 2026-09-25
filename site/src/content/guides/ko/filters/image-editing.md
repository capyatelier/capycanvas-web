---
title: "사진 편집하기"
description: "사진을 열고, 편집 가능한 레이어로 색을 조정하고, 결과를 내보냅니다."
purpose: "Photo는 사진 보정을 위한 작업 공간입니다. 카메라나 휴대폰으로 찍은 사진을 바로 열어, 조정 레이어로 밝게 하거나 색을 바꾸고, 완성본을 내보낼 수 있습니다. 이 모든 과정에서 원본 파일은 바뀌지 않습니다."
techniques: ["사진을 열거나 기존 그림에 추가합니다.", "편집 가능한 필터 레이어로 조정합니다.", "편집 내용을 저장하고 사본을 내보냅니다."]
figure: "1: Photo 작업 공간. 2: 사진과 조정 레이어. 3: 조정의 Properties."
related: ["filters/overview", "selections/tonal-range", "output/export"]
image: {"light": "/assets/guides/filters-image-editing-light.webp", "dark": "/assets/guides/filters-image-editing-dark.webp", "alt": "1: Photo 작업 공간. 2: 사진과 조정 레이어. 3: 조정의 Properties."}
---

## 사진 열기

작업 공간 전환기에서 **Photo**를 고른 다음, <strong>File → Open…</strong>을 선택하고 사진을 고릅니다. Capy Canvas는 JPEG, PNG, TIFF, WebP, HEIC, AVIF, OpenEXR 파일을 열 수 있으므로, 대부분의 카메라와 휴대폰으로 찍은 사진을 바로 열 수 있습니다. 사진은 원래 크기와 원래 색 그대로 자기 탭에 열립니다.

이미 열려 있는 그림에 사진을 추가하려면 <strong>File → Import Image as Layer…</strong>를 선택하거나, 파일을 캔버스로 드래그합니다. 사진이 손잡이와 함께 나타나므로 위치와 크기를 조절할 수 있습니다. 자리를 잡았으면 **Apply**를 선택하고, 실제 크기로 쓰려면 <strong>Original Size (100%)</strong>를 선택합니다.

## 조정 추가하기

**Filters**를 열고 **Curves**, **Vibrance**, **Hue / Saturation** 같은 조정을 고릅니다. 조정은 사진 위에 새 레이어로 추가되고, 설정은 **Properties**에 나타납니다. 사진을 지켜보면서 설정을 조금씩 바꾸세요. 조정 레이어를 숨겼다가 다시 표시하면 결과를 원본과 비교할 수 있습니다.

조정은 별도 레이어에 있으므로 언제든 돌아와 바꾸거나 흔적 없이 삭제할 수 있습니다. 사진의 일부만 조정하려면 먼저 그 영역을 선택하세요. 예를 들어 [밝기로 선택하기](/ko/docs/selections/tonal-range/)로 하늘을 선택할 수 있습니다. 조정 범위를 제한하는 다른 방법은 [필터와 조정](/ko/docs/filters/overview/)에서 설명합니다.

## 저장하고 내보내기

편집한 사진을 저장하면 Capy Canvas는 모든 조정 레이어가 담긴 `.capy` 파일을 저장하며, 원본 사진은 절대 덮어쓰지 않습니다. 결과를 공유하려면 <strong>File → Export…</strong>를 선택해 JPEG이나 PNG로 저장합니다. 내보내기 설정은 [이미지 내보내기](/ko/docs/output/export/)에서 설명합니다.
