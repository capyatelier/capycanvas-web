// Every locale is rendered to real HTML. Keep the shape identical across translations.
export const languages = { en: 'English', ja: '日本語', zh: '简体中文', ko: '한국어' };
export const content = {
  en: {
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { demo: 'Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: 'Capy Canvas on GitHub' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas is a fast, comfy, and cross-platform drawing app with powerful GPU accelerated brushes.',
      screenshot: 'Capy Canvas’s drawing workspace with three pressure-sensitive watercolor strokes.',
      meta: 'Capy Canvas is a fast, comfy, and cross-platform drawing app with powerful GPU accelerated brushes.'
    },
    download: {
      title: 'Download', intro: 'Native downloads are not available yet.',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: 'Planned platforms',
      meta: 'Capy Canvas downloads are coming soon for iPadOS, Android, Linux, Windows, and macOS.'
    },
    documentation: {
      title: 'Documentation', intro: 'Capy Canvas is in early development. Documentation is coming soon.',
      now: 'Completed', next: 'Next', focus: 'Focus',
      built: ['General editor framework', 'MVP brush library', 'Web and GTK ports'],
      planned: [
        'Core editor features, brushes, and tools expected in a drawing app.',
        'iOS/iPadOS and Android ports, including drawing tablets such as the Wacom MovinkPad Pro 14.'
      ],
      direction: 'Comics and illustration first, with realistic painting planned later.',
      meta: 'Capy Canvas development status: editor framework, MVP brushes, and web and GTK ports completed. Core editing tools and mobile ports are next.'
    },
    notFound: { title: 'Page not found', text: 'The requested page does not exist.', action: 'Home' }
  },
  ja: {
    lang: 'ja', locale: 'ja_JP', name: '日本語',
    nav: { demo: 'デモ', download: 'ダウンロード', documentation: 'ドキュメント', home: 'ホーム', language: '言語', main: 'メインナビゲーション', skip: '本文へ移動', github: 'GitHub の Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas は、強力な GPU 加速ブラシを備えた、速くて心地よいクロスプラットフォームのお絵かきアプリです。',
      screenshot: '筆圧を反映した 3 本の水彩の線がある Capy Canvas の作業画面。',
      meta: 'Capy Canvas は、強力な GPU 加速ブラシを備えた、速くて心地よいクロスプラットフォームのお絵かきアプリです。'
    },
    download: {
      title: 'ダウンロード', intro: 'ネイティブ版はまだダウンロードできません。',
      status: '公開予定', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '対応予定のプラットフォーム',
      meta: 'Capy Canvas の iPadOS、Android、Linux、Windows、macOS 版は公開準備中です。'
    },
    documentation: {
      title: 'ドキュメント', intro: 'Capy Canvas は開発初期の段階です。ドキュメントは準備中です。',
      now: '実装済み', next: '今後の予定', focus: '開発方針',
      built: ['エディターの基本フレームワーク', 'MVP ブラシライブラリ（初期の最小構成）', 'ウェブ版と GTK 版'],
      planned: [
        'お絵かきアプリに必要な基本編集機能、ブラシ、各種ツールの拡充。',
        'iOS/iPadOS と Android への移植。Wacom MovinkPad Pro 14 などの描画用タブレットにも対応予定。'
      ],
      direction: 'まずは漫画とイラスト向けの機能に重点を置き、将来的にはリアルな絵画表現にも対応する予定です。',
      meta: 'Capy Canvas の開発状況。基本フレームワーク、MVP ブラシ、ウェブ版、GTK 版は実装済み。次は基本編集ツールとモバイル版です。'
    },
    notFound: { title: 'ページが見つかりません', text: '指定されたページは存在しません。', action: 'ホーム' }
  },
  zh: {
    lang: 'zh-Hans', locale: 'zh_CN', name: '简体中文',
    nav: { demo: '在线体验', download: '下载', documentation: '文档', home: '首页', language: '语言', main: '主导航', skip: '跳转到正文', github: 'GitHub 上的 Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas 是一款快速、舒适的跨平台绘画应用，配备强大的 GPU 加速笔刷。',
      screenshot: 'Capy Canvas 的绘画界面，画布上有三条带压感变化的水彩笔触。',
      meta: 'Capy Canvas 是一款快速、舒适的跨平台绘画应用，配备强大的 GPU 加速笔刷。'
    },
    download: {
      title: '下载', intro: '原生版本暂未开放下载。',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '计划支持的平台',
      meta: 'Capy Canvas 的 iPadOS、Android、Linux、Windows 和 macOS 版即将推出。'
    },
    documentation: {
      title: '文档', intro: 'Capy Canvas 仍处于开发早期，文档正在筹备中。',
      now: '已完成', next: '下一步', focus: '开发方向',
      built: ['编辑器基础框架', 'MVP 笔刷库（初始最小可用版本）', '网页版和 GTK 版'],
      planned: [
        '完善绘画应用所需的核心编辑功能、笔刷及各类工具。',
        '移植至 iOS/iPadOS 和 Android，包括 Wacom MovinkPad Pro 14 等绘画平板。'
      ],
      direction: '优先面向漫画和插画创作，后续计划支持写实绘画。',
      meta: 'Capy Canvas 开发状态：编辑器框架、MVP 笔刷库、网页版和 GTK 版已完成。下一步是核心编辑工具和移动平台移植。'
    },
    notFound: { title: '页面不存在', text: '找不到所请求的页面。', action: '首页' }
  },
  ko: {
    lang: 'ko', locale: 'ko_KR', name: '한국어',
    nav: { demo: '데모', download: '다운로드', documentation: '문서', home: '홈', language: '언어', main: '주요 탐색', skip: '본문으로 건너뛰기', github: 'GitHub의 Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas는 강력한 GPU 가속 브러시를 갖춘 빠르고 편안한 크로스 플랫폼 드로잉 앱입니다.',
      screenshot: '필압 변화가 반영된 수채화 획 세 개가 있는 Capy Canvas 작업 화면.',
      meta: 'Capy Canvas는 강력한 GPU 가속 브러시를 갖춘 빠르고 편안한 크로스 플랫폼 드로잉 앱입니다.'
    },
    download: {
      title: '다운로드', intro: '네이티브 버전은 아직 다운로드할 수 없습니다.',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '지원 예정 플랫폼',
      meta: 'Capy Canvas의 iPadOS, Android, Linux, Windows, macOS 버전은 출시 예정입니다.'
    },
    documentation: {
      title: '문서', intro: 'Capy Canvas는 개발 초기 단계입니다. 문서는 준비 중입니다.',
      now: '완료', next: '다음 단계', focus: '개발 방향',
      built: ['에디터 기본 프레임워크', 'MVP 브러시 라이브러리(초기 최소 기능 버전)', '웹 및 GTK 버전'],
      planned: [
        '드로잉 앱에 필요한 핵심 편집 기능, 브러시 및 도구 확충.',
        'iOS/iPadOS 및 Android로 이식. Wacom MovinkPad Pro 14 같은 드로잉 태블릿도 지원할 예정입니다.'
      ],
      direction: '만화와 일러스트 도구에 먼저 집중하고, 사실적인 페인팅은 이후 지원할 계획입니다.',
      meta: 'Capy Canvas 개발 현황: 에디터 프레임워크, MVP 브러시, 웹 및 GTK 버전 완료. 다음 단계는 핵심 편집 도구와 모바일 버전입니다.'
    },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  }
};
