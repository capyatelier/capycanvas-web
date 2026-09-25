---
title: "작업 공간 관리"
description: "작업 종류마다 다른 레이아웃과 브러시 설정을 보관합니다."
purpose: "작업 공간은 레이아웃과 브러시 설정을 함께 기억합니다. Sketch, Paint, Photo는 바로 쓸 수 있으며, 만화 펜선 작업이나 사진 보정처럼 자주 하는 다른 작업을 위해 나만의 작업 공간을 만들 수도 있습니다."
techniques: ["작업 공간을 전환하거나 새로 만듭니다.", "제목 표시줄에 표시할 작업 공간을 고릅니다.", "브러시는 초기화하지 않고 레이아웃을 복원합니다."]
figure: "1: Manage Workspaces 목록. 2: 미리 보기로 선택한 작업 공간. 3: Switch to Workspace와 Cancel."
related: ["workspace/customization", "advanced/custom-brushes", "tools/files"]
image: {"light": "/assets/guides/workspace-management-light.webp", "dark": "/assets/guides/workspace-management-dark.webp", "alt": "1: Manage Workspaces 목록. 2: 미리 보기로 선택한 작업 공간. 3: Switch to Workspace와 Cancel."}
---

## 작업 공간 전환하거나 만들기

제목 표시줄의 전환기에서 **Sketch**, **Paint**, **Photo** 사이를 오갈 수 있습니다. 각 작업 공간은 자체 패널 배치와 브러시 설정을 간직한 채, 두고 온 모습 그대로 돌아옵니다. 전환해도 열린 그림은 그대로 열려 있습니다.

새 작업 공간을 만들려면 <strong>Window → Workspaces → New Workspace…</strong>를 선택합니다. 새 작업 공간은 현재 작업 공간의 사본으로 시작하며, 배치를 바꾸고 이름을 붙일 수 있습니다. <strong>Window → Workspaces → Manage Workspaces…</strong>에는 모든 작업 공간이 표시됩니다. 하나를 선택해 미리 본 다음, 사용하려면 **Switch to Workspace**를, 그대로 있으려면 **Cancel**을 선택합니다.

## 전환기에 표시할 항목 고르기

**Manage Workspaces**에서 작업 공간의 메뉴를 열고 **Show in top bar**를 켜면 전환기에 추가되고, 끄면 숨겨집니다. 목록에서 작업 공간을 위아래로 드래그하면 전환기에서의 순서가 바뀝니다. 펜이나 손가락으로는 손잡이를 잡고 드래그합니다.

이 선택은 바로 저장됩니다. Sketch, Paint, Photo도 다른 작업 공간처럼 배치를 바꿀 수 있지만, 이름을 바꾸거나 삭제할 수는 없습니다.

## 필요한 부분만 복원하기

<strong>Restore Starting Layout…</strong>은 브러시 설정은 유지한 채 현재 작업 공간의 패널을 처음 위치로 되돌립니다. <strong>Reset All Brushes…</strong>는 그 반대로, 브러시를 초기화하고 레이아웃은 그대로 둡니다. 두 기능의 차이는 [브러시 설정 저장과 초기화](/ko/docs/advanced/custom-brushes/)에서 더 자세히 설명합니다.

작업 공간은 그림과 별도로 앱에 저장됩니다. 그림을 보관하려면 `.capy` 파일로 [저장](/ko/docs/tools/files/)하세요.
