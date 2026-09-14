---
title: "저장과 내보내기"
description: "편집용.capy를 보관하고 합성 PNG를 내보냅니다."
purpose: ".capy는 문서 구조를 보존해 다시 편집하게 하고 PNG는 보이는 이미지를 공유하게 합니다. 먼저 프로젝트를 저장해야 나중에 같은 레이어, 마스크, 효과로 수정할 수 있습니다."
techniques: ["프로젝트를 만들고 저장한 뒤 다시 엽니다.", "표시 이미지를 PNG로 내보냅니다.", "작업 공간 설정과 작품을 따로 저장합니다."]
figure: "1: File 메뉴. 2: Save와 Save As. 3: Export PNG."
related: ["filters/image-editing", "layers/basics", "illustration/render"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1: File 메뉴. 2: Save와 Save As. 3: Export PNG."}
---

## 편집 가능한 문서 저장하기

새 프로젝트나 다른 작업 사본에는<strong>File → Save As…</strong>를 사용합니다. 브라우저가 파일 핸들을 유지할 수 있으면**Save**는 현재 파일을 갱신합니다. 직접 접근이 불가능하면 다운로드 방식이므로 파일이 저장되었는지 확인합니다.

<strong>Open…</strong>은`.capy`를 엽니다. 일반 이미지를 현재 그림에 넣으려면 Layers의**Import image as layer**를 사용합니다.

## 표시 결과 내보내기

<strong>File → Export PNG…</strong>는 작업 레이어를 합치지 않고 합성 이미지를 만듭니다. 필요 없는 Sketch와 Color rough를 숨깁니다. 투명 배경이 필요하면 Paper 표시도 확인합니다.

PNG를 다시 열어 픽셀 크기, 가장자리, 배경을 확인합니다. 보기 확대와 회전은 내보내는 작품을 바꾸지 않습니다. 수정용`.capy`도 함께 보관합니다.

## 기기를 바꿀 때

작업 공간 변경은 브라우저에 따로 저장됩니다. 그림을 저장하거나 기기 간 파일을 동기화하지 않으며 백업을 대신하지 않습니다. `.capy`자체를 옮기고 원본을 지우기 전에 새 기기에서 열리는지 확인합니다.

New, Open, Close에서 미저장 변경을 확인하면 저장, 버리기, 취소를 선택합니다. 취소하면 현재 그림으로 돌아갑니다.
