import { brandTranslations } from './branding.mjs';
import { additionalDocsUI } from './additional-docs.mjs';
export const docsUI = brandTranslations({
  "en": {
    "intro": "{appName} is a free, open-source app for sketching, painting and photo editing. It is inspired by the zen of capybaras.",
    "overview": "Overview",
    "contents": "Documentation contents",
    "onPage": "On this page",
    "groups": {
      "start": "Getting started",
      "files": "Files",
      "drawing": "Drawing tools",
      "brushes": "Brush settings",
      "color": "Color",
      "layers": "Layers",
      "filters": "Filters",
      "selections": "Selections",
      "transform": "Transform and image",
      "retouch": "Retouching",
      "colorManagement": "Color management",
      "customize": "Customizing",
      "input": "Input",
      "illustration": "Illustration tutorial",
      "photo": "Photo editing tutorial"
    },
    "startTitle": "Getting started",
    "figureSoon": "Image pending",
    "related": "See also",
    "previous": "Previous",
    "next": "Next",
    "platform": "Platform",
    "allPlatforms": "All platforms",
    "platformTitle": "Tips for your device",
    "platformIntro": "Choose your device to see a few tips for it.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName} uses Windows Ink for the pen. On Windows, Pen buttons lists one side button, the Lower side button.",
      "mac": "If the pen lands in the wrong place, check which screen your tablet is mapped to in its settings. Use Command wherever these guides say Ctrl, and Option wherever they say Alt.",
      "linux": "The Linux app needs a Wayland session and a graphics card that supports Vulkan. If pressure doesn't work or the cursor lands in the wrong place, check your desktop's tablet settings.",
      "ipad": "Most Apple Pencil models support pressure and tilt, but Apple Pencil (USB-C) doesn't support pressure. Fingers and palms never draw.",
      "android": "Use a pen that supports pressure. A rubber-tipped stylus counts as a finger, and fingers never draw."
    },
    "imageOpen": "Open full-size screenshot",
    "landing": {
      "sections": {
        "sketch": {
          "title": "Sketch",
          "text": "My first foray into the digital art world (like many others) was with Procreate over a decade ago. Back when the apple pencil first came out, it was magic. Even though the hardware was slow by today's standards, it was so well done that it gave a real pen-to-paper feeling.\n\nThis was the first time a drawing app was ever fully optimized for a mobile device, using predictive pen tracking and GPU powered brush+rendering engines. Then they dropped a clean and minimalist UI on top of it, which has become ubiquitious for all modern drawing apps.\n\nThe Sketch workspace is a tribute to our roots. The place where everyone starts out.",
          "image": {
            "shot": "showcase/sketch",
            "alt": "An ink drawing of a train beneath a large tree in Sketch, with the drawing filling the screen and tools at the edges."
          },
          "links": [
            {
              "title": "Brush tools",
              "slug": "drawing/brush-tools"
            },
            {
              "title": "Pen",
              "slug": "input/pen"
            },
            {
              "title": "Zen mode",
              "slug": "customize/zen"
            }
          ]
        },
        "paint": {
          "title": "Paint",
          "text": "Once you get into proper comic/manga work, the simple tools don't cut it anymore. Lasso fill is your best friend, and you learn to live with the necessary evil of masks.\n\nThere are many tools out there that solve this problem, CSP and medibang are often what people learn first. And they are great, easy-to-use and inuitive software. All you have to do is follow the process and it usually turns out OK.\n\nWhile they are true workhorses, they are slow, built for an era where all rendering and compositing was done on the CPU instead of the GPU. So they never were able to match the powerful, realistic paintbrush engines in modern apps like Fresco and Rebelle.\n\nThe Paint workspace brings simulated physical media to digital illustration.",
          "image": {
            "shot": "showcase/paint",
            "alt": "An oil painting of a house by the sea at sunset in Paint, with brushes, colors and layers beside the canvas."
          },
          "links": [
            {
              "title": "Illustration tutorial",
              "slug": "illustration"
            },
            {
              "title": "Fill tools",
              "slug": "drawing/fill"
            },
            {
              "title": "Masks",
              "slug": "layers/masks"
            },
            {
              "title": "Mixing, bleed and bristles",
              "slug": "brushes/wet-media"
            }
          ]
        },
        "photo": {
          "title": "Photo",
          "text": "Mobile devices are becoming more capable every day. It seems like OLED screens are everywhere, and my old phone saves its images in P3 HDR format by default. SRGB is a thing of the past.\n\nTo this date, the only painting app that properly supports wide gamut HDR is Krita. HDR is a complicated beast and is hard to get right. When you publish HDR and wide-gamut images online, you need control over the gain mapping, so that it still looks good on SDR devices. Of course you also need the basics (proofing, effect chains, the whole enchilada)\n\nThe Photo workspace enables stunning visuals for a new generation of wide-gamut screens.",
          "image": {
            "shot": "showcase/photo",
            "alt": "A terrarium photograph in Photo, with the Tonal range selection tool and Curves and Vibrance adjustment layers."
          },
          "links": [
            {
              "title": "Photo editing tutorial",
              "slug": "photo"
            },
            {
              "title": "HDR",
              "slug": "color-management/hdr"
            },
            {
              "title": "How filters apply",
              "slug": "filters/how-filters-apply"
            },
            {
              "title": "Proof",
              "slug": "color-management/proof"
            }
          ]
        }
      },
      "tools": {
        "title": "Tools",
        "columns": [
          "Area",
          "Tools and operations"
        ],
        "rows": [
          {
            "areas": [
              {
                "title": "Brushes",
                "slug": "drawing/brush-tools"
              }
            ],
            "text": "Pencil, charcoal, ink, bristle, watercolor, oil and airbrush; pressure and tilt, paper grain, textured tips and color mixing."
          },
          {
            "areas": [
              {
                "title": "Layers",
                "slug": "layers/types"
              }
            ],
            "text": "Groups, clipping layers, layer masks, blend modes, editable color and gradient fills, and selection layers."
          },
          {
            "areas": [
              {
                "title": "Selections",
                "slug": "selections/tools"
              }
            ],
            "text": "Rectangle, ellipse, lasso, polygon, contiguous color and tonal range; Quick Mask, feathering and saved selections."
          },
          {
            "areas": [
              {
                "title": "Effects",
                "slug": "filters/how-filters-apply"
              }
            ],
            "text": "Linked non-destructive effect chains, adjustment layers and effect masks; Curves, Levels, color grading, blur, sharpening, halftone and painterly effects."
          },
          {
            "areas": [
              {
                "title": "Retouching",
                "slug": "retouch/clone-heal"
              }
            ],
            "text": "Clone Stamp, Healing and Spot Healing, dodge and burn, blending and liquify."
          },
          {
            "areas": [
              {
                "title": "Color",
                "slug": "color-management/color-spaces"
              }
            ],
            "text": "sRGB, Display P3, Adobe RGB and ProPhoto RGB; ICC profiles, 8/16-bit SDR, 16/32-bit float HDR, print proofing and gamut warnings."
          },
          {
            "areas": [
              {
                "title": "Drawing",
                "slug": "drawing/fill"
              },
              {
                "title": "transforms",
                "slug": "transform/move-transform"
              }
            ],
            "text": "Reference-layer fills, Enclose and Fill, gradients, rulers, crop, resize, perspective and mesh warp."
          },
          {
            "areas": [
              {
                "title": "Workspace",
                "slug": "customize/workspaces"
              }
            ],
            "text": "Docked or floating panels, tab groups, configurable toolbars and shortcuts, saved layouts and Zen mode."
          }
        ]
      }
    }
  },
  "ja": {
    "intro": "{appName}は、スケッチ、ペイント、写真編集のための、無料でオープンソースのアプリです。カピバラの禅のような穏やかさに着想を得ています。",
    "overview": "目次",
    "contents": "ドキュメントの目次",
    "onPage": "このページの内容",
    "groups": {
      "start": "基本操作",
      "files": "ファイル",
      "drawing": "描画ツール",
      "brushes": "ブラシ設定",
      "color": "色",
      "layers": "レイヤー",
      "filters": "フィルター",
      "selections": "選択範囲",
      "transform": "変形と画像",
      "retouch": "レタッチ",
      "colorManagement": "カラーマネジメント",
      "customize": "カスタマイズ",
      "input": "入力",
      "illustration": "イラストのチュートリアル",
      "photo": "写真編集のチュートリアル"
    },
    "startTitle": "使い始めるには",
    "figureSoon": "画像未掲載",
    "related": "関連項目",
    "previous": "前へ",
    "next": "次へ",
    "platform": "プラットフォーム",
    "allPlatforms": "すべて",
    "platformTitle": "デバイス別のヒント",
    "platformIntro": "お使いのデバイスを選ぶと、そのデバイス向けのヒントが表示されます。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}はペンにWindows Inkを使います。Windowsでは、「ペンボタン」に表示されるサイドボタンは「下のサイドボタン」の1つだけです。",
      "mac": "ペンの位置がずれる場合は、タブレットの設定で割り当てている画面を確認してください。このガイドでCtrlと書かれている箇所ではCommandを、Altと書かれている箇所ではOptionを使ってください。",
      "linux": "Linux版のアプリには、Waylandセッションと、Vulkanに対応したグラフィックカードが必要です。筆圧が効かない、またはカーソルの位置がずれる場合は、デスクトップのタブレット設定を確認してください。",
      "ipad": "ほとんどのApple Pencilは筆圧と傾きに対応していますが、Apple Pencil（USB-C）は筆圧に対応していません。指や手のひらでは描画されません。",
      "android": "筆圧に対応したペンを使ってください。先端がゴムのスタイラスは指として扱われ、指では描画されません。"
    },
    "imageOpen": "スクリーンショットを原寸で開く",
    "landing": {
      "alt": "青緑のリボン、黄土色の円、テラコッタ色の四角形に質感のある陰影を加えたPaintワークスペース。",
      "sections": {
        "painting": {
          "title": "絵の具の表現",
          "text": "GPUで動くブラシエンジンにより、絵の具と紙などの画材との相互作用をシミュレーションしています。水彩は紙の繊維に染み込み、油彩ブラシは色を拾って運び、鉛筆は紙目をとらえます。",
          "link": "ブラシツール"
        },
        "workspace": {
          "title": "自分のワークスペース",
          "text": "{appName}には、スケッチ、ペイント、写真編集のためのなじみやすいレイアウトが用意されていて、ツールやパネルはすべて好きな位置に動かせます。気を散らすもののない、まっさらなキャンバスだけが欲しいときは、カピバラをクリックしてZenモードへ！",
          "link": "ワークスペース"
        },
        "input": {
          "title": "ペン、タッチ、マウス",
          "text": "画面は、最初からペンとタッチでの操作を考えて設計されています。Wacom、XP-Pen、Huionのペンタブレットに加え、iPadやGalaxyタブレットも想定しています。キャンバスは120 Hzをフルに活かし、ペンの遅延を減らします。マウス派の方も大丈夫です。",
          "link": "ペン"
        },
        "color": {
          "title": "色を選ぶ",
          "text": "カラーホイールには、人の色の感じ方に基づくOKLCHを使っています。パレットでお気に入りの色を手元に置けるほか、写真を扱う方に向けて広色域、16ビット、HDR、印刷用のプルーフにも対応しています。",
          "link": "色パネル"
        },
        "photo": {
          "title": "写真の編集",
          "text": "カメラやスマートフォンの写真をそのまま開き、切り抜きとレタッチをして、どの範囲もあとから調整し直せるフィルターで仕上げられます。",
          "link": "写真編集のチュートリアル"
        },
        "native": {
          "title": "デスクトップとタブレット",
          "text": "{appName}は、Linux、Windows、macOS、Android、iPadOS向けのベータ版を公開しています。各バージョンはコンパイルされたネイティブアプリで、プラットフォーム標準のUIツールキットを使っています。これにより、どのデバイスでも性能とバッテリー持続時間が向上します。",
          "link": "システムアーキテクチャ"
        }
      },
      "start": "{appName}は、ウェブブラウザーだけでも、オフラインでも動作します。手軽にすぐ使い始められる方法です。現在ベータ版のデスクトップ版とタブレット版のアプリでは、最高の性能とハードウェアとの互換性が得られます。",
      "links": {
        "quickstart": "クイックスタート",
        "illustration": "イラストのチュートリアル"
      }
    }
  },
  "zh": {
    "intro": "{appName}是一款免费、开源的速写、绘画与照片编辑应用。它的灵感来自水豚的禅意。",
    "overview": "概览",
    "contents": "文档目录",
    "onPage": "本页内容",
    "groups": {
      "start": "开始使用",
      "files": "文件",
      "drawing": "绘画工具",
      "brushes": "画笔设置",
      "color": "颜色",
      "layers": "图层",
      "filters": "滤镜",
      "selections": "选区",
      "transform": "变换和图像",
      "retouch": "修饰",
      "colorManagement": "色彩管理",
      "customize": "自定义",
      "input": "输入",
      "illustration": "插画教程",
      "photo": "照片编辑教程"
    },
    "startTitle": "开始使用",
    "figureSoon": "图片待补充",
    "related": "另请参阅",
    "previous": "上一篇",
    "next": "下一篇",
    "platform": "平台",
    "allPlatforms": "所有平台",
    "platformTitle": "设备小贴士",
    "platformIntro": "选择你的设备，查看适用于它的几条提示。",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}使用Windows Ink处理笔输入。在Windows上，“笔按钮”中只列出一个侧按钮，即“下侧按钮”。",
      "mac": "如果笔的落点不对，请在数位板设置中检查它映射到了哪个屏幕。本指南中写作Ctrl的地方请使用Command，写作Alt的地方请使用Option。",
      "linux": "Linux版应用需要Wayland会话和支持Vulkan的显卡。如果压感不起作用或光标位置不对，请检查桌面环境中的数位板设置。",
      "ipad": "大多数Apple Pencil都支持压感和倾斜，但Apple Pencil（USB-C）不支持压感。手指和手掌不会画出笔画。",
      "android": "请使用支持压感的笔。橡胶头触控笔会被当作手指，而手指不会画出笔画。"
    },
    "imageOpen": "打开原尺寸截图",
    "landing": {
      "alt": "Paint工作区中的蓝绿色带状形、土黄色圆形和陶土色四边形，带有质感与阴影。",
      "sections": {
        "painting": {
          "title": "绘画",
          "text": "借助GPU驱动的笔刷引擎，我们能够模拟颜料与实体绘画介质之间的相互作用。水彩会渗入纸张纤维，油画笔刷会拾取并携带颜色，铅笔则会表现出纸纹。",
          "link": "画笔工具"
        },
        "workspace": {
          "title": "你的工作区",
          "text": "{appName}为速写、绘画和照片编辑准备了熟悉的布局，每个工具和面板都可以按你的喜好移动。如果你只想要一张空白画布，不受任何干扰，点击水豚就能进入Zen模式！",
          "link": "工作区"
        },
        "input": {
          "title": "笔、触控与鼠标",
          "text": "界面从一开始就为笔和触控操作而设计，包括Wacom、XP-Pen和Huion的绘图板，以及iPad和Galaxy平板。画布以完整的120 Hz运行，减少笔输入延迟。如果你更喜欢用鼠标，也完全可以。",
          "link": "笔"
        },
        "color": {
          "title": "选择颜色",
          "text": "色轮使用OKLCH，它以人类对颜色的感知为基础。调色板让喜欢的颜色随手可用；面向摄影师，还支持广色域、16位、HDR和打印打样。",
          "link": "颜色面板"
        },
        "photo": {
          "title": "编辑照片",
          "text": "直接打开相机或手机拍摄的照片，进行裁剪和修饰，再用随时可以重新调整的滤镜处理任意区域。",
          "link": "照片编辑教程"
        },
        "native": {
          "title": "桌面与平板",
          "text": "{appName}已推出适用于Linux、Windows、macOS、Android和iPadOS的测试版。这些都是经过编译的原生应用，并使用平台原生UI工具包。这意味着每台设备都能获得更好的性能和电池续航。",
          "link": "系统架构"
        }
      },
      "start": "{appName}可以完全在网页浏览器中运行，也能离线使用。这是一种快速、轻松的入门方式。目前处于测试阶段的桌面版和平板版应用可提供最佳性能和硬件兼容性。",
      "links": {
        "quickstart": "快速入门",
        "illustration": "插画教程"
      }
    }
  },
  "ko": {
    "intro": "{appName}는 스케치, 페인팅, 사진 편집을 위한 무료 오픈 소스 앱입니다. 카피바라의 선(禪) 같은 평온함에서 영감을 받았습니다.",
    "overview": "개요",
    "contents": "문서 목차",
    "onPage": "이 페이지의 내용",
    "groups": {
      "start": "시작하기",
      "files": "파일",
      "drawing": "그리기 도구",
      "brushes": "브러시 설정",
      "color": "색상",
      "layers": "레이어",
      "filters": "필터",
      "selections": "선택 영역",
      "transform": "변형과 이미지",
      "retouch": "보정",
      "colorManagement": "색상 관리",
      "customize": "사용자 지정",
      "input": "입력",
      "illustration": "일러스트 튜토리얼",
      "photo": "사진 편집 튜토리얼"
    },
    "startTitle": "시작하기",
    "figureSoon": "이미지 준비 중",
    "related": "관련 항목",
    "previous": "이전",
    "next": "다음",
    "platform": "플랫폼",
    "allPlatforms": "모든 플랫폼",
    "platformTitle": "기기별 도움말",
    "platformIntro": "사용 중인 기기를 선택하면 그 기기에 맞는 도움말을 볼 수 있습니다.",
    "systems": {
      "windows": "Windows",
      "mac": "macOS",
      "linux": "Linux",
      "ipad": "iOS / iPadOS",
      "android": "Android"
    },
    "platformNotes": {
      "windows": "{appName}는 펜 입력에 Windows Ink를 사용합니다. Windows의 펜 버튼에는 측면 버튼으로 아래쪽 측면 버튼 하나만 표시됩니다.",
      "mac": "펜이 엉뚱한 위치에 찍히면 태블릿 설정에서 어느 화면에 연결되어 있는지 확인하세요. 이 가이드에서 Ctrl로 표시된 곳은 Command를, Alt로 표시된 곳은 Option을 사용하세요.",
      "linux": "Linux 앱에는 Wayland 세션과 Vulkan을 지원하는 그래픽 카드가 필요합니다. 필압이 작동하지 않거나 커서 위치가 어긋나면 데스크톱의 태블릿 설정을 확인하세요.",
      "ipad": "대부분의 Apple Pencil은 필압과 기울기를 지원하지만, Apple Pencil(USB-C)은 필압을 지원하지 않습니다. 손가락과 손바닥으로는 그려지지 않습니다.",
      "android": "필압을 지원하는 펜을 사용하세요. 끝이 고무로 된 스타일러스는 손가락으로 인식되며, 손가락으로는 그려지지 않습니다."
    },
    "imageOpen": "원본 크기 스크린샷 열기",
    "landing": {
      "alt": "청록색 리본, 황토색 원, 테라코타색 사각형에 질감과 음영을 더한 Paint 작업 공간.",
      "sections": {
        "painting": {
          "title": "페인팅",
          "text": "GPU로 실행되는 브러시 엔진으로 물감과 실제 회화 재료 사이의 상호작용을 시뮬레이션할 수 있습니다. 수채 물감은 종이 섬유에 스며들고, 유화 브러시는 색을 묻혀 옮기며, 연필은 종이결을 드러냅니다.",
          "link": "브러시 도구"
        },
        "workspace": {
          "title": "나만의 작업 공간",
          "text": "{appName}에는 스케치, 페인팅, 사진 편집을 위한 익숙한 레이아웃이 준비되어 있고, 모든 도구와 패널을 원하는 위치로 옮길 수 있습니다. 방해 요소 없이 빈 캔버스만 보고 싶다면, 카피바라를 클릭해 Zen 모드로 들어가 보세요!",
          "link": "작업 영역"
        },
        "input": {
          "title": "펜, 터치와 마우스",
          "text": "인터페이스는 처음부터 펜과 터치 조작을 고려해 설계되었습니다. Wacom, XP-Pen, Huion 드로잉 태블릿은 물론 iPad와 Galaxy 태블릿도 포함됩니다. 캔버스는 120 Hz를 온전히 활용해 펜 입력 지연을 줄입니다. 마우스를 써도 괜찮습니다.",
          "link": "펜"
        },
        "color": {
          "title": "색 고르기",
          "text": "색상환은 사람이 색을 인식하는 방식을 바탕으로 한 OKLCH를 사용합니다. 팔레트로 좋아하는 색을 가까이 둘 수 있고, 사진 작업을 위해 넓은 색 영역, 16비트, HDR과 인쇄 교정도 지원합니다.",
          "link": "색상 패널"
        },
        "photo": {
          "title": "사진 편집",
          "text": "카메라나 휴대폰으로 찍은 사진을 그대로 열고, 자르기와 보정을 한 다음, 나중에 다시 조정할 수 있는 필터로 원하는 영역을 다듬어 보세요.",
          "link": "사진 편집 튜토리얼"
        },
        "native": {
          "title": "데스크톱과 태블릿",
          "text": "{appName}는 Linux, Windows, macOS, Android, iPadOS용 베타로 제공됩니다. 각 버전은 컴파일된 네이티브 앱으로, 플랫폼 고유의 UI 툴킷을 사용합니다. 따라서 모든 기기에서 더 나은 성능과 배터리 지속 시간을 제공합니다.",
          "link": "시스템 아키텍처"
        }
      },
      "start": "{appName}는 웹 브라우저 안에서, 오프라인에서도 실행할 수 있습니다. 빠르고 간편하게 시작할 수 있는 방법입니다. 현재 베타인 데스크톱과 태블릿 앱은 최고의 성능과 하드웨어 호환성을 제공합니다.",
      "links": {
        "quickstart": "빠른 시작",
        "illustration": "일러스트 튜토리얼"
      }
    }
  },
  ...additionalDocsUI
});
