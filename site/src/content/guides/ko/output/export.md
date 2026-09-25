---
title: "이미지 내보내기"
description: "공유하거나 인쇄할 수 있도록 그림을 PNG, JPEG, TIFF 사본으로 저장합니다."
purpose: "내보내기는 그림을 일반 이미지로 만들어, 온라인에 올리거나 다른 사람에게 보내거나 인쇄할 수 있게 합니다. .capy 파일은 모든 레이어와 함께 그대로 남으므로, 언제든 그림을 고쳐 다시 내보낼 수 있습니다."
techniques: ["이미지 용도에 맞는 프리셋을 고릅니다.", "파일 형식, 색상 프로파일, 비트 심도를 정합니다.", "내보낸 이미지를 저장합니다."]
figure: "1: Destination 프리셋. 2: 형식, 색상 프로파일, 비트 심도. 3: 빈 영역의 저장 방식을 정하는 Transparency."
related: ["tools/files", "color/management", "filters/image-editing"]
image: {"light": "/assets/guides/output-export-light.webp", "dark": "/assets/guides/output-export-dark.webp", "alt": "1: Destination 프리셋. 2: 형식, 색상 프로파일, 비트 심도. 3: 빈 영역의 저장 방식을 정하는 Transparency."}
---

## 이미지 용도 고르기

<strong>File → Export…</strong>를 선택하면 **Export image** 대화 상자가 열립니다. 가장 쉬운 출발점은 **Destination**으로, 알맞은 설정을 알아서 채워 줍니다. **Web / Share**는 어떤 브라우저나 앱에서도 제대로 보이는 표준 이미지를 만듭니다. **Wide-color image**는 최신 화면이 표시할 수 있는 더 생생한 색을 유지하고, **Further editing**은 다른 편집기에서 열 수 있도록 세부 정보를 최대한 보존합니다.

내보내기에는 보이는 레이어만 포함되므로, 최종 이미지에 넣고 싶지 않은 스케치나 참고 레이어는 미리 숨겨 두세요.

## 세부 설정 조절하기

더 세밀하게 조절하고 싶다면 Destination 아래의 설정을 바꿉니다. **Format**에서는 PNG, JPEG, TIFF 중 하나를 고릅니다. PNG는 가장자리가 선명하거나 투명한 부분이 있는 작품에 알맞고, JPEG은 사진을 더 작은 파일로 저장합니다. **Output profile**은 파일의 색 공간을, **Bit depth**는 색을 얼마나 세밀하게 저장할지를 정합니다.

**Transparency**는 그림의 빈 영역을 어떻게 처리할지 정합니다. 투명도를 지원하는 형식에서는 빈 영역을 투명하게 둘 수 있고, 흰색이나 검은색으로 채울 수도 있습니다. **Pixel size**를 사용하면 웹사이트용처럼 더 작은 사본을 만들 수 있습니다. 마음에 드는 설정 조합은 나만의 프리셋으로 저장해 둘 수 있습니다.

## 파일 저장하기

저장하기 전에 결과를 보고 싶다면 **Preview Output**을 선택하고, <strong>Choose File…</strong>을 선택해 이미지의 이름과 저장 위치를 정합니다. 내보낸 파일을 한 번 열어 예상대로 보이는지 확인하세요.

HDR 그림은 **Dynamic range**에서 더 많은 선택지를 고를 수 있습니다. HDR 화면에서는 밝게 빛나고 일반 화면에서도 제대로 보이는 HDR JPEG과 AVIF 파일도 여기에 포함됩니다. 언제 사용하면 좋은지는 [색 공간, HDR과 교정](/ko/docs/color/management/)에서 설명합니다.
