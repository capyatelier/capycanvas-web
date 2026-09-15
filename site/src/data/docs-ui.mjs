export const docsUI = {
  "en": {
    "intro": "Capy Canvas is a free, open-source painting and image editor for taking an idea from sketch to finished work. Its GPU brush engine and compositor are designed for realistic painting and fluid interaction at 120 Hz on supported devices. Customizable workspaces provide familiar layouts for illustration and photo editing, while Zen mode hides the interface and leaves only the canvas.",
    "outline": "Draft",
    "notice": "These concise guides follow the current web editor. Native controls may differ while the ports are being completed.",
    "overview": "Overview",
    "contents": "Documentation contents",
    "onPage": "On this page",
    "groups": {
      "start": "Getting started",
      "drawing": "Drawing",
      "layers": "Layers and masks",
      "editing": "Selections and editing",
      "output": "Filters and output",
      "customize": "Customize",
      "illustration": "Illustration tutorial"
    },
    "startTitle": "Getting started",
    "figureSoon": "Image pending",
    "related": "See also",
    "previous": "Previous",
    "next": "Next",
    "platform": "Platform",
    "allPlatforms": "All platforms",
    "platformTitle": "Platform-specific input",
    "platformIntro": "The device selector shows notes for your current system. You can switch it to check another device.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "Check pen pressure in your tablet driver's settings if it fails in more than one app. With multiple displays, map the tablet to the display showing Capy Canvas.",
      "mac": "Check the display mapping in your tablet settings before adjusting the brush. When assigning shortcuts, treat Command and Control as different keys; do not copy a Windows shortcut assignment without checking it.",
      "linux": "For the web version, check tablet mapping in your desktop settings. When reporting missing pressure or a cursor offset, include your browser and whether your desktop uses Wayland or X11.",
      "ipad": "Check that your Apple Pencil model supports the pressure or tilt input you want to use. If your hand leaves marks, test pen and touch separately before changing the brush.",
      "android": "Check that the pen and device support pressure input; a generic touch stylus may act like a finger. If pen input works but touch interferes, compare pen-only drawing with touch navigation and check the device’s palm rejection."
    },
    "techniques": "What you'll learn",
    "imageOpen": "Open full-size screenshot",
    "imageHint": "Open the image to inspect the controls. Numbered outlines identify the controls described in the caption.",
    "landing": {
      "caption": "An abstract painting in the Paint workspace, with tools beside the canvas and editable layers.",
      "alt": "Paint workspace showing a teal ribbon, ochre disc and terracotta block with textured shading.",
      "sections": {
        "painting": {
          "title": "Paint, ink and watercolor",
          "text": "Watercolor spreads and mixes on the canvas; oil brushes pick up and carry color. Brushes, image effects and layer compositing run on the GPU, keeping demanding painting work on your device’s graphics hardware.",
          "link": "Brushes and painting"
        },
        "workspace": {
          "title": "Workspaces and Zen mode",
          "text": "Sketch, Paint and Photo are starting layouts for the same editor. Panels and toolbars can dock, float or collapse, and shortcuts are adjustable. Zen mode hides the controls without moving the artwork.",
          "link": "Workspace and canvas"
        },
        "color": {
          "title": "Color based on perception",
          "text": "The OKLCH color wheel describes color through hue, perceived lightness and colorfulness. These qualities can be adjusted independently, alongside familiar RGB values.",
          "link": "Color and eyedropper"
        },
        "native": {
          "title": "Native on desktop and tablet",
          "text": "Desktop and tablet versions share the painting engine and compile to native applications with controls built for each platform. The design aims to improve performance and battery life, especially on mobile devices.",
          "link": "Downloads and availability"
        }
      },
      "start": "Quickstart covers the first marks and a saved project. The illustration tutorial follows a drawing through sketching, ink, color and shading to an exported image.",
      "links": {
        "quickstart": "Quickstart",
        "illustration": "Illustration tutorial",
        "files": "Saving and exporting"
      },
      "notice": "Capy Canvas is in development. These guides currently cover the web editor."
    }
  },
  "ja": {
    "intro": "Capy Canvasは、アイデアを下描きから完成作品まで仕上げるための、無料でオープンソースの描画・画像編集アプリです。GPUブラシエンジンと合成処理は、実際の絵の具に近い描き心地と、対応するデバイスでの120 Hzの滑らかな操作を目指して設計されています。作業画面はイラスト制作や写真編集でなじみのある配置から調整でき、Zenモードでは操作部分が隠れ、キャンバスだけが残ります。",
    "outline": "草案",
    "notice": "この簡潔なガイドは現在のウェブ版に基づいています。移植作業中のネイティブ版では操作が異なる場合があります。",
    "overview": "目次",
    "contents": "ドキュメントの目次",
    "onPage": "このページの内容",
    "groups": {
      "start": "基本操作",
      "drawing": "描画",
      "layers": "レイヤーとマスク",
      "editing": "選択と編集",
      "output": "フィルターと書き出し",
      "customize": "カスタマイズ",
      "illustration": "イラスト制作チュートリアル"
    },
    "startTitle": "基本操作",
    "figureSoon": "画像未掲載",
    "related": "関連項目",
    "previous": "前へ",
    "next": "次へ",
    "platform": "プラットフォーム",
    "allPlatforms": "すべて",
    "platformTitle": "プラットフォーム別の入力",
    "platformIntro": "現在のシステムに対応する説明を表示します。選択を切り替えると、ほかのデバイスについても確認できます。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "複数のアプリで筆圧が使えない場合は、タブレットドライバーの設定で筆圧を確認します。複数画面を使う場合は、Capy Canvasを表示している画面にタブレットを割り当ててください。",
      "mac": "ブラシを調整する前に、タブレット設定の画面への割り当てを確認します。ショートカットのCommandとControlは別のキーなので、Windowsの割り当てをそのまま使わずに確認してください。",
      "linux": "ウェブ版では、デスクトップ設定のタブレットの割り当てを確認します。筆圧が届かない、カーソルがずれるといった問題の報告には、ブラウザー名と、デスクトップがWaylandかX11かを添えてください。",
      "ipad": "使っているApple Pencilのモデルが、必要な筆圧や傾きの入力に対応しているか確認します。手を置くと線が描かれる場合は、ブラシを変更する前にペンとタッチを別々に試してください。",
      "android": "ペンとデバイスが筆圧入力に対応しているか確認します。一般的なタッチ用スタイラスは、指と同じ入力になる場合があります。タッチが妨げになる場合は、ペンだけの描画とタッチでの表示操作を比較し、機器のパームリジェクションを確認してください。"
    },
    "techniques": "このページで学ぶこと",
    "imageOpen": "スクリーンショットを原寸で開く",
    "imageHint": "画像を開くと操作部分を詳しく確認できます。番号付きの枠はキャプションで説明する操作部分を示します。",
    "landing": {
      "caption": "Paintワークスペースで描いた抽象画。キャンバスの両側にツールと編集可能なレイヤーが並んでいます。",
      "alt": "青緑のリボン、黄土色の円、テラコッタ色の四角形に質感のある陰影を加えたPaintワークスペース。",
      "sections": {
        "painting": {
          "title": "絵の具、インク、水彩",
          "text": "水彩はキャンバス上で広がり混ざり合い、油彩ブラシは色を拾って運びます。ブラシ、画像効果、レイヤー合成はGPUで処理され、負荷の高い描画処理をデバイスのグラフィックス機能が担います。",
          "link": "ブラシと描画"
        },
        "workspace": {
          "title": "ワークスペースとZenモード",
          "text": "Sketch、Paint、Photoは、同じエディターを使うための初期レイアウトです。パネルやツールバーはドッキング、フローティング、折りたたみができ、ショートカットも調整できます。Zenモードは作品の位置を保ったまま操作部分を隠します。",
          "link": "ワークスペースとキャンバス"
        },
        "color": {
          "title": "人の知覚に基づく色選び",
          "text": "OKLCHのカラーホイールは、色相、知覚上の明るさ、色の鮮やかさで色を表します。それぞれを独立して調整でき、なじみのあるRGB値でも確認できます。",
          "link": "色とスポイト"
        },
        "native": {
          "title": "デスクトップとタブレットでネイティブに動作",
          "text": "デスクトップ版とタブレット版は描画エンジンを共有し、各プラットフォームの操作部を使うネイティブアプリとしてコンパイルされます。特にモバイル機器で、処理性能とバッテリー持続時間の向上を目指した設計です。",
          "link": "ダウンロードと提供状況"
        }
      },
      "start": "クイックスタートでは、最初の描画とプロジェクトの保存を説明します。イラスト制作チュートリアルは、下描きから線画、色、陰影を経て、画像を書き出すまでの流れを扱います。",
      "links": {
        "quickstart": "クイックスタート",
        "illustration": "イラスト制作チュートリアル",
        "files": "保存と書き出し"
      },
      "notice": "Capy Canvasは開発中です。現在のガイドはウェブ版を対象としています。"
    }
  },
  "zh": {
    "intro": "Capy Canvas是一款免费、开源的绘画与图像编辑应用，可将想法从草图发展为完成的作品。它的GPU笔刷引擎和合成器以真实的绘画体验及支持设备上的120 Hz流畅交互为设计目标。可自定义的工作区提供插画和照片编辑中熟悉的布局，Zen模式则隐藏界面，只留下画布。",
    "outline": "草案",
    "notice": "这些简明指南以当前网页版为准。原生版本仍在移植中，部分控件可能不同。",
    "overview": "概览",
    "contents": "文档目录",
    "onPage": "本页内容",
    "groups": {
      "start": "基本操作",
      "drawing": "绘画",
      "layers": "图层与蒙版",
      "editing": "选择与编辑",
      "output": "滤镜与输出",
      "customize": "自定义",
      "illustration": "插画教程"
    },
    "startTitle": "基本操作",
    "figureSoon": "图片待补充",
    "related": "另请参阅",
    "previous": "上一篇",
    "next": "下一篇",
    "platform": "平台",
    "allPlatforms": "所有平台",
    "platformTitle": "各平台的输入设置",
    "platformIntro": "设备选择器会显示当前系统的说明，也可以切换到其他设备进行查看。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "如果多个应用都无法使用压感，请在数位板驱动设置中检查笔压。使用多台显示器时，将数位板映射到显示Capy Canvas的屏幕。",
      "mac": "修改笔刷前，先检查数位板设置中的屏幕映射。设置快捷键时要区分Command和Control，不要未经检查就照搬Windows的按键分配。",
      "linux": "使用网页版时，在桌面设置中检查数位板映射。报告压感缺失或光标偏移时，请注明浏览器，以及桌面使用的是Wayland还是X11。",
      "ipad": "确认所用Apple Pencil型号支持需要的压感或倾斜输入。如果手掌接触屏幕会留下笔迹，请先分别测试笔与触控，再修改笔刷。",
      "android": "确认笔和设备支持压力输入；普通电容触控笔可能与手指输入相同。如果笔能正常工作但触控干扰绘画，请比较仅用笔绘画和触控导航，并检查设备的防误触功能。"
    },
    "techniques": "本页会学到什么",
    "imageOpen": "打开原尺寸截图",
    "imageHint": "打开图像可仔细查看控件。带编号的边框对应图注中说明的控件。",
    "landing": {
      "caption": "在Paint工作区中绘制的抽象画，画布两侧是工具和可编辑的图层。",
      "alt": "Paint工作区中的蓝绿色带状形、土黄色圆形和陶土色四边形，带有质感与阴影。",
      "sections": {
        "painting": {
          "title": "绘画、墨线与水彩",
          "text": "水彩在画布上扩散、混合，油画笔刷则拾取并携带颜色。笔刷、图像效果和图层合成都由GPU处理，让设备的图形硬件承担繁重的绘画运算。",
          "link": "笔刷与绘画"
        },
        "workspace": {
          "title": "工作区与Zen模式",
          "text": "Sketch、Paint和Photo是同一编辑器的起始布局。面板与工具栏可以停靠、浮动或折叠，快捷键也可调整。Zen模式隐藏控件，同时保持作品的位置不变。",
          "link": "工作区与画布"
        },
        "color": {
          "title": "基于人类感知的颜色选择",
          "text": "OKLCH色轮通过色相、感知明度和彩度描述颜色。这些属性可以独立调整，也可通过熟悉的RGB数值查看。",
          "link": "颜色与吸管"
        },
        "native": {
          "title": "桌面与平板上的原生应用",
          "text": "桌面版与平板版共享绘画引擎，并编译为使用各平台控件的原生应用。这一设计旨在提高性能与电池续航，尤其是在移动设备上。",
          "link": "下载与版本提供情况"
        }
      },
      "start": "快速入门介绍第一次绘画与项目保存。插画教程则从草稿、线稿、底色到阴影，完整呈现导出图像之前的制作过程。",
      "links": {
        "quickstart": "快速入门",
        "illustration": "插画教程",
        "files": "保存与导出"
      },
      "notice": "Capy Canvas仍在开发中。目前的指南以网页版为准。"
    }
  },
  "ko": {
    "intro": "Capy Canvas는 아이디어를 스케치에서 완성된 작품까지 발전시키는 무료 오픈 소스 페인팅·이미지 편집 앱입니다. GPU 브러시 엔진과 합성기는 실제 물감에 가까운 표현과 지원 기기에서의 부드러운 120 Hz 조작을 목표로 설계되었습니다. 작업 화면은 일러스트와 사진 편집에 익숙한 배치에서 조정할 수 있으며, Zen 모드에서는 조작부가 숨겨지고 캔버스만 남습니다.",
    "outline": "초안",
    "notice": "이 간단한 가이드는 현재 웹 편집기를 기준으로 합니다. 이식 중인 네이티브 버전에서는 일부 조작이 다를 수 있습니다.",
    "overview": "개요",
    "contents": "문서 목차",
    "onPage": "이 페이지의 내용",
    "groups": {
      "start": "기본 조작",
      "drawing": "그리기",
      "layers": "레이어와 마스크",
      "editing": "선택과 편집",
      "output": "필터와 출력",
      "customize": "사용자 설정",
      "illustration": "일러스트 튜토리얼"
    },
    "startTitle": "기본 조작",
    "figureSoon": "이미지 준비 중",
    "related": "관련 항목",
    "previous": "이전",
    "next": "다음",
    "platform": "플랫폼",
    "allPlatforms": "모든 플랫폼",
    "platformTitle": "플랫폼별 입력 설정",
    "platformIntro": "현재 시스템에 맞는 설명을 표시합니다. 다른 기기를 선택해 해당 설명을 확인할 수도 있습니다.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "여러 앱에서 필압이 작동하지 않으면 태블릿 드라이버 설정에서 압력을 확인합니다. 화면을 여러 개 쓴다면 Capy Canvas가 있는 화면에 태블릿을 매핑하세요.",
      "mac": "브러시를 조정하기 전에 태블릿 설정의 화면 매핑을 확인합니다. 단축키를 지정할 때 Command와 Control은 다른 키이므로 Windows의 할당을 그대로 옮기지 말고 확인하세요.",
      "linux": "웹 버전에서는 데스크톱 설정의 태블릿 매핑을 확인합니다. 필압이 없거나 커서가 어긋나는 문제를 보고할 때는 브라우저와 데스크톱의 Wayland 또는 X11 사용 여부를 적어 주세요.",
      "ipad": "사용하는 Apple Pencil 모델이 필요한 필압이나 기울기 입력을 지원하는지 확인합니다. 손을 올렸을 때 자국이 생기면 브러시를 바꾸기 전에 펜과 터치를 따로 시험합니다.",
      "android": "펜과 기기가 필압 입력을 지원하는지 확인합니다. 일반 터치용 스타일러스는 손가락처럼 입력될 수 있습니다. 펜은 정상인데 터치가 방해된다면 펜만 쓰는 그리기와 터치 탐색을 비교하고 기기의 팜 리젝션을 확인합니다."
    },
    "techniques": "이 페이지에서 배울 내용",
    "imageOpen": "원본 크기 스크린샷 열기",
    "imageHint": "이미지를 열어 조작부를 자세히 볼 수 있습니다. 번호가 붙은 테두리는 캡션에서 설명하는 조작부를 가리킵니다.",
    "landing": {
      "caption": "Paint 작업 공간에서 그린 추상화. 캔버스 양옆에 도구와 편집 가능한 레이어가 배치되어 있습니다.",
      "alt": "청록색 리본, 황토색 원, 테라코타색 사각형에 질감과 음영을 더한 Paint 작업 공간.",
      "sections": {
        "painting": {
          "title": "페인팅, 잉크와 수채화",
          "text": "수채화는 캔버스에서 번지고 섞이며, 유화 브러시는 색을 묻혀 옮깁니다. 브러시, 이미지 효과와 레이어 합성은 GPU에서 처리되어 기기의 그래픽 하드웨어가 연산량이 많은 그리기 작업을 담당합니다.",
          "link": "브러시와 페인팅"
        },
        "workspace": {
          "title": "작업 공간과 Zen 모드",
          "text": "Sketch, Paint, Photo는 같은 편집기를 위한 시작 배치입니다. 패널과 도구 모음은 도킹하거나 띄우고 접을 수 있으며 단축키도 조정할 수 있습니다. Zen 모드는 작품의 위치를 유지한 채 조작부를 숨깁니다.",
          "link": "작업 공간과 캔버스"
        },
        "color": {
          "title": "사람의 지각을 바탕으로 한 색 선택",
          "text": "OKLCH 색상환은 색상, 지각적 밝기와 색의 선명도로 색을 표현합니다. 각 속성을 독립적으로 조정하고 익숙한 RGB 값으로도 확인할 수 있습니다.",
          "link": "색상과 스포이트"
        },
        "native": {
          "title": "데스크톱과 태블릿의 네이티브 앱",
          "text": "데스크톱과 태블릿 버전은 같은 페인팅 엔진을 사용하며 각 플랫폼의 조작부를 갖춘 네이티브 앱으로 컴파일됩니다. 특히 모바일 기기에서 성능과 배터리 지속 시간을 높이는 것을 목표로 한 설계입니다.",
          "link": "다운로드와 제공 현황"
        }
      },
      "start": "빠른 시작에서는 첫 그림과 프로젝트 저장을 다룹니다. 일러스트 튜토리얼은 스케치, 선화, 색과 음영을 거쳐 이미지를 내보내기까지의 과정을 설명합니다.",
      "links": {
        "quickstart": "빠른 시작",
        "illustration": "일러스트 튜토리얼",
        "files": "저장과 내보내기"
      },
      "notice": "Capy Canvas는 개발 중입니다. 현재 가이드는 웹 편집기를 기준으로 합니다."
    }
  }
};
