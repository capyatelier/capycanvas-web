export const docsUI = {
  "en": {
    "intro": "Capy Canvas is a free, open-source app for painting and image editing. It is inspired by the zen of capybaras.",
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
      "alt": "Paint workspace showing a teal ribbon, ochre disc and terracotta block with textured shading.",
      "sections": {
        "painting": {
          "title": "Painting",
          "text": "The GPU-powered brush engine lets us simulate the interaction between paint and physical media. Watercolor soaks into the paper’s fibers and dries. Oil brushes pick up and carry color as you paint.",
          "link": "Brushes and painting"
        },
        "workspace": {
          "title": "Your workspace",
          "text": "Capy Canvas was designed with customizability at its core. Every tool and panel in the workspace can be moved exactly how you like it. And if you just want a blank canvas with no distractions, click the Capybara to enter Zen mode!",
          "link": "Workspace and canvas"
        },
        "input": {
          "title": "Pen, touch and mouse",
          "text": "Capy Canvas’s interface was designed for pen and touch from the start. That includes drawing tablets from Wacom, XP-Pen and Huion, as well as pen and touch on iPad and Galaxy tablets. And if you prefer a mouse for photo editing, that works too.",
          "link": "Pen, touch and shortcuts"
        },
        "color": {
          "title": "Choosing colors",
          "text": "The color wheel uses OKLCH, which is based on how people perceive color. For photographers, 16-bit channels, HDR and advanced proofing workflows are planned to help every pixel come out right.",
          "link": "Color and eyedropper"
        },
        "responsive": {
          "title": "A responsive canvas",
          "text": "Capy Canvas’s compositor runs entirely on the GPU, with a target of smooth 120 Hz interaction. Even on modest hardware, it should feel smooth and snappy.",
          "link": "System architecture"
        },
        "native": {
          "title": "Desktop and tablet",
          "text": "Capy Canvas is being built for Linux, Windows, macOS, Android and iPadOS. These are compiled native apps, with performance and battery life in mind. Each version uses its platform’s own interface controls.",
          "link": "Downloads and availability"
        }
      },
      "start": "Capy Canvas can run entirely in your web browser. The shared engine is compiled for the web and uses WebGPU. If you want better performance, the download page will offer native builds as they become available.",
      "links": {
        "quickstart": "Quickstart",
        "illustration": "Illustration tutorial"
      },
      "notice": "Capy Canvas is in development. These guides currently cover the web editor."
    }
  },
  "ja": {
    "intro": "Capy Canvasは、無料でオープンソースの描画・画像編集アプリです。カピバラの禅のような穏やかさに着想を得ています。",
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
    "startTitle": "使い始めるには",
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
      "alt": "青緑のリボン、黄土色の円、テラコッタ色の四角形に質感のある陰影を加えたPaintワークスペース。",
      "sections": {
        "painting": {
          "title": "絵の具の表現",
          "text": "GPUで動くブラシエンジンにより、絵の具と紙などの画材との相互作用をシミュレーションしています。水彩は紙の繊維に染み込み、乾いていきます。油彩ブラシは、描きながら色を拾って運びます。",
          "link": "ブラシと描画"
        },
        "workspace": {
          "title": "自分のワークスペース",
          "text": "Capy Canvasは、最初からカスタマイズを大切にして設計されています。ワークスペースのツールやパネルは、すべて自分の好きな位置に動かせます。気を散らすもののない、まっさらなキャンバスだけが欲しいときは、カピバラをクリックしてZenモードへ！",
          "link": "ワークスペースとキャンバス"
        },
        "input": {
          "title": "ペン、タッチ、マウス",
          "text": "Capy Canvasの画面は、最初からペンとタッチでの操作を考えて設計されています。Wacom、XP-Pen、Huionのペンタブレットはもちろん、iPadやGalaxyタブレットでのペンとタッチも想定しています。写真編集にはマウスを使いたい、という方も大丈夫です。",
          "link": "ペン、タッチ、ショートカット"
        },
        "color": {
          "title": "色を選ぶ",
          "text": "カラーホイールには、人の色の感じ方に基づくOKLCHを使っています。写真を扱う方に向けては、16ビットのカラーチャンネル、HDR、高度なプルーフィングにも対応を予定しています。ひとつひとつのピクセルを、狙いどおりの仕上がりにするためです。",
          "link": "色とスポイト"
        },
        "responsive": {
          "title": "滑らかに応えるキャンバス",
          "text": "Capy Canvasの画面合成は、すべてGPUで処理されます。120 Hzでの滑らかな操作が目標です。控えめな性能のデバイスでも、きびきびと気持ちよく描けることを目指しています。",
          "link": "システムアーキテクチャ"
        },
        "native": {
          "title": "デスクトップとタブレット",
          "text": "Capy Canvasは、Linux、Windows、macOS、Android、iPadOS向けに開発中です。処理性能とバッテリー持続時間を考え、ネイティブアプリとしてコンパイルされます。操作部分には、それぞれのプラットフォームの標準コントロールを使っています。",
          "link": "ダウンロードと提供状況"
        }
      },
      "start": "Capy Canvasは、ウェブブラウザーだけでも動作します。共通の描画エンジンをウェブ向けにコンパイルし、WebGPUで動かしています。より高い性能を求める方には、準備が整ったネイティブ版からダウンロードページで提供していきます。",
      "links": {
        "quickstart": "クイックスタート",
        "illustration": "イラスト制作チュートリアル"
      },
      "notice": "Capy Canvasは開発中です。現在のガイドはウェブ版を対象としています。"
    }
  },
  "zh": {
    "intro": "Capy Canvas是一款免费、开源的绘画与图像编辑应用。它的灵感来自水豚的禅意。",
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
    "startTitle": "开始使用",
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
      "alt": "Paint工作区中的蓝绿色带状形、土黄色圆形和陶土色四边形，带有质感与阴影。",
      "sections": {
        "painting": {
          "title": "绘画",
          "text": "借助GPU驱动的笔刷引擎，我们能够模拟颜料与实体绘画介质之间的相互作用。水彩会渗入纸张纤维，逐渐干燥。油画笔刷则会在绘画时拾取并携带颜色。",
          "link": "笔刷与绘画"
        },
        "workspace": {
          "title": "你的工作区",
          "text": "Capy Canvas从设计之初就把可自定义性放在核心位置。工作区中的每个工具和面板都可以按你的喜好移动。如果你只想要一张空白画布，不受任何干扰，点击水豚就能进入Zen模式！",
          "link": "工作区与画布"
        },
        "input": {
          "title": "笔、触控与鼠标",
          "text": "Capy Canvas的界面从一开始就为笔和触控操作而设计。这包括Wacom、XP-Pen和Huion的绘图板，也包括iPad和Galaxy平板上的笔与触控。如果你更喜欢用鼠标编辑照片，也完全可以。",
          "link": "笔、触控与快捷键"
        },
        "color": {
          "title": "选择颜色",
          "text": "色轮使用OKLCH，它以人类对颜色的感知为基础。面向摄影师，我们计划支持16位颜色通道、HDR和高级打样工作流程，帮助每个像素都呈现出理想的效果。",
          "link": "颜色与吸管"
        },
        "responsive": {
          "title": "响应流畅的画布",
          "text": "Capy Canvas的合成器完全运行在GPU上，以流畅的120 Hz交互为目标。即使在性能不高的硬件上，也希望它能流畅、利落地响应。",
          "link": "系统架构"
        },
        "native": {
          "title": "桌面与平板",
          "text": "Capy Canvas正在为Linux、Windows、macOS、Android和iPadOS开发。各版本都会编译为原生应用，并兼顾性能与电池续航。每个版本都使用所在平台的原生界面控件。",
          "link": "下载与版本提供情况"
        }
      },
      "start": "Capy Canvas可以完全在网页浏览器中运行。共用的绘画引擎经过网页编译，并使用WebGPU。如果你希望获得更好的性能，原生版本准备好后会在下载页面提供。",
      "links": {
        "quickstart": "快速入门",
        "illustration": "插画教程"
      },
      "notice": "Capy Canvas仍在开发中。目前的指南以网页版为准。"
    }
  },
  "ko": {
    "intro": "Capy Canvas는 무료 오픈 소스 페인팅·이미지 편집 앱입니다. 카피바라의 선(禪) 같은 평온함에서 영감을 받았습니다.",
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
    "startTitle": "시작하기",
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
      "alt": "청록색 리본, 황토색 원, 테라코타색 사각형에 질감과 음영을 더한 Paint 작업 공간.",
      "sections": {
        "painting": {
          "title": "페인팅",
          "text": "GPU로 실행되는 브러시 엔진으로 물감과 실제 회화 재료 사이의 상호작용을 시뮬레이션할 수 있습니다. 수채 물감은 종이 섬유에 스며들고 마릅니다. 유화 브러시는 그리는 동안 색을 묻혀 옮깁니다.",
          "link": "브러시와 페인팅"
        },
        "workspace": {
          "title": "나만의 작업 공간",
          "text": "Capy Canvas는 처음부터 자유로운 커스터마이징을 중심에 두고 설계되었습니다. 작업 공간의 모든 도구와 패널을 원하는 위치로 옮길 수 있습니다. 방해 요소 없이 빈 캔버스만 보고 싶다면, 카피바라를 클릭해 Zen 모드로 들어가 보세요!",
          "link": "작업 공간과 캔버스"
        },
        "input": {
          "title": "펜, 터치와 마우스",
          "text": "Capy Canvas의 인터페이스는 처음부터 펜과 터치 조작을 고려해 설계되었습니다. Wacom, XP-Pen, Huion의 드로잉 태블릿은 물론 iPad와 Galaxy 태블릿의 펜과 터치도 포함됩니다. 사진 편집에는 마우스를 쓰는 게 편하다면, 그것도 가능합니다.",
          "link": "펜, 터치와 단축키"
        },
        "color": {
          "title": "색 고르기",
          "text": "색상환은 사람이 색을 인식하는 방식을 바탕으로 한 OKLCH를 사용합니다. 사진 작업을 위해서는 16비트 색상 채널, HDR과 고급 교정 워크플로를 지원할 계획입니다. 픽셀 하나하나를 원하는 결과로 완성하는 데 도움을 주기 위해서입니다.",
          "link": "색상과 스포이트"
        },
        "responsive": {
          "title": "부드럽게 반응하는 캔버스",
          "text": "Capy Canvas의 합성기는 전적으로 GPU에서 실행되며, 부드러운 120 Hz 조작을 목표로 합니다. 사양이 높지 않은 기기에서도 매끄럽고 경쾌하게 반응하도록 설계하고 있습니다.",
          "link": "시스템 아키텍처"
        },
        "native": {
          "title": "데스크톱과 태블릿",
          "text": "Capy Canvas는 Linux, Windows, macOS, Android, iPadOS용으로 개발 중입니다. 각 버전은 성능과 배터리 지속 시간을 고려한 네이티브 앱으로 컴파일됩니다. 인터페이스에는 각 플랫폼의 기본 조작부를 사용합니다.",
          "link": "다운로드와 제공 현황"
        }
      },
      "start": "Capy Canvas는 웹 브라우저 안에서만으로도 실행할 수 있습니다. 공통 엔진을 웹용으로 컴파일해 WebGPU와 함께 사용합니다. 더 높은 성능을 원한다면, 준비되는 네이티브 버전을 다운로드 페이지에서 받을 수 있습니다.",
      "links": {
        "quickstart": "빠른 시작",
        "illustration": "일러스트 튜토리얼"
      },
      "notice": "Capy Canvas는 개발 중입니다. 현재 가이드는 웹 편집기를 기준으로 합니다."
    }
  }
};
