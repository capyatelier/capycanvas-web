---
title: "열기, 저장과 복구"
description: "그림과 사진을 열고, 여러 그림을 동시에 다루며, 작업을 안전하게 보관합니다."
purpose: "Capy Canvas의 그림은 .capy 파일로 저장됩니다. 이 파일에는 레이어, 마스크, 조정이 모두 담겨 있어 나중에도 계속 편집할 수 있습니다. 여러 그림을 각각의 탭에 동시에 열어 둘 수 있으며, 저장하기 전에 문제가 생길 때를 대비해 편집기가 복구용 사본을 보관합니다."
techniques: [".capy 파일이나 사진을 엽니다.", "탭으로 열린 그림 사이를 전환합니다.", "작업을 저장하고 저장하지 않은 변경 사항을 복구합니다."]
figure: "1: File 메뉴. 2: 열린 그림의 탭. 3: Open, Import Image as Layer, Save, Save As."
related: ["output/export", "filters/image-editing", "workspace/management"]
image: {"light": "/assets/guides/tools-files-light.webp", "dark": "/assets/guides/tools-files-dark.webp", "alt": "1: File 메뉴. 2: 열린 그림의 탭. 3: Open, Import Image as Layer, Save, Save As."}
---

## 그림이나 사진 열기

<strong>File → Open…</strong>을 선택해 `.capy` 파일을 엽니다. 사진과 다른 이미지도 같은 방법으로 열 수 있으며, JPEG, PNG, TIFF, WebP, HEIC, AVIF, OpenEXR 파일을 지원합니다. 사진은 원래 크기의 새 그림으로 열리고, 색은 촬영했을 때 그대로 유지됩니다.

이미 열려 있는 그림에 이미지를 넣으려면 대신 <strong>File → Import Image as Layer…</strong>를 선택하거나, 이미지 파일을 캔버스로 드래그합니다. 두 방법 모두 [사진 편집하기](/ko/docs/filters/image-editing/)에서 더 자세히 설명합니다.

## 여러 그림으로 작업하기

Paint와 Photo에서는 열거나 새로 만든 그림마다 창 위쪽에 자기 탭이 생깁니다. 탭을 클릭하면 그 그림으로 전환되고, 탭을 드래그하면 순서를 바꿀 수 있습니다. 이름 옆에 점이 있으면 아직 저장하지 않은 변경 사항이 있다는 뜻입니다. <strong>File → Drawings…</strong>를 선택하면 어느 작업 공간에서든 열려 있는 모든 그림을 볼 수 있습니다.

그림은 탭에 있는 버튼이나 **File → Close**로 닫습니다. 저장하지 않은 변경 사항이 있으면 Capy Canvas가 먼저 저장할지 물어봅니다.

## 작업 저장하고 복구하기

그림을 처음 저장할 때는 <strong>File → Save As…</strong>를, 그다음부터는 **File → Save**를 선택해 같은 파일을 업데이트합니다. 열어 둔 사진을 저장하면 Capy Canvas가 새 `.capy` 파일을 저장할 위치를 묻고, 원본 사진은 그대로 둡니다.

저장하기 전에 브라우저가 닫히면, 다음에 Capy Canvas를 열 때 그림을 복구할지 물어봅니다. 이 기능은 만일을 위한 안전장치일 뿐이므로, `.capy` 파일을 자주 저장하고 중요한 파일은 사본을 따로 보관하세요.

공유하거나 인쇄할 이미지를 만들려면 [이미지 내보내기](/ko/docs/output/export/)를 참고하세요.
