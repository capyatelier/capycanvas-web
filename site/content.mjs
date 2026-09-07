// Every locale is rendered to real HTML. Keep the shape identical across translations.
export const languages = { en: 'English', ja: '日本語', zh: '简体中文', ko: '한국어' };
export const content = {
  en: {
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { demo: 'Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: 'Capy Canvas on GitHub' },
    home: {
      title: 'A cozy place to make your mark.',
      description: 'Capy Canvas is a free, open-source drawing app taking shape across platforms. Quick strokes, natural brushes, and a quiet workspace that leaves room for you.',
      ambition: 'Still early. A little rough around the edges. Our goal is simple: the fastest, coziest free drawing app, wherever you like to draw.',
      eyebrow: 'A LITTLE CANVAS. A LOT OF POSSIBILITY.',
      screenshot: 'Capy Canvas’s drawing workspace, with brushes, layers, and three blue, green, and ochre watercolor squiggles on the canvas.',
      caption: 'A few watercolor strokes in the real app.',
      note: 'Free & open source. Happily in progress.',
      meta: 'Meet Capy Canvas: an early, free and open-source drawing app. Natural brushes, a quiet workspace, and a little more room to create.'
    },
    download: {
      title: 'A canvas for wherever you are.', eyebrow: 'DOWNLOAD',
      intro: 'Your desk. Your sofa. Your favorite sunny spot. We’re working toward bringing Capy Canvas along.',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'],
      platformsLabel: 'Planned platforms',
      note: 'Native downloads aren’t ready yet. All five platforms are planned; release dates and system requirements will follow as builds become ready.',
      callTitle: 'A little impatient? Start in your browser.',
      callText: 'The early web demo is ready to explore. Bring a few ideas and a browser with WebGPU support. Things are still changing, so keep a separate copy of anything important.',
      action: 'Try the demo', link: 'See what’s taking shape',
      meta: 'Capy Canvas downloads are coming soon for iPadOS, Android, Linux, Windows, and macOS. Try the early web demo in the meantime.'
    },
    documentation: {
      title: 'Getting to know Capy Canvas.', eyebrow: 'DOCUMENTATION',
      intro: 'The app is taking shape. The guidebook is next. Here’s a small look at where we are, and where we’d like to go.',
      status: 'Guides coming soon', now: 'Already taking shape', next: 'Up next',
      nowIntro: 'Working in the current prototypes, with plenty of room to refine.', nextIntro: 'Our direction, one thoughtful step at a time. Plans may change as we learn.',
      built: [
        ['A feel for your brush', 'Pressure-aware strokes and a growing set of drawing and painting brushes, powered by a GPU canvas.'],
        ['Room to find your flow', 'Layers, undo and redo, canvas navigation, movable panels, and a quiet Zen mode.'],
        ['A familiar little workspace', 'Light and dark appearances, pen preferences, and customizable keyboard shortcuts. Web and Linux prototypes share the same drawing core.']
      ],
      planned: [
        ['A smoother everyday experience', 'Keep improving brush feel, responsiveness, and reliability through real drawing sessions.'],
        ['More places to draw', 'Make downloadable builds ready, and bring the shared core to iPadOS, Android, Windows, and macOS.'],
        ['A friendly guidebook', 'Getting started, brushes and layers, keyboard shortcuts, and help for the moments when something feels unfamiliar.']
      ],
      callTitle: 'Small beginnings. A lovely place to grow.', callText: 'We’re aiming for the fastest, coziest free drawing app. Try the early demo, or visit GitHub for the source, technical notes, and ongoing development.',
      action: 'Explore the demo', link: 'Follow along on GitHub',
      meta: 'A high-level introduction to Capy Canvas: what works in the early prototypes, what’s planned, and the guides still to come.'
    },
    footer: 'Made with care by Capy Atelier.', early: 'Early software. Growing at its own pace.',
    notFound: { title: 'A little off the canvas.', text: 'This page isn’t here. Let’s get you back to a fresh start.', action: 'Back home' }
  },
  ja: {
    lang: 'ja', locale: 'ja_JP', name: '日本語',
    nav: { demo: 'デモ', download: 'ダウンロード', documentation: 'ドキュメント', home: 'ホーム', language: '言語', main: 'メインナビゲーション', skip: '本文へ移動', github: 'GitHub の Capy Canvas' },
    home: {
      title: '描く時間に、心地よい居場所を。',
      description: 'Capy Canvas は、さまざまなデバイスで使えることを目指す、無料のオープンソースお絵かきアプリです。軽やかな描き心地、自然なブラシ、そして創作に集中できる静かな作業空間を。',
      ambition: 'まだ開発の初期段階で、未完成なところもあります。目指すのは、どこで描いても、いちばん速くて心地よい無料のお絵かきアプリです。',
      eyebrow: '小さなキャンバスに、たくさんの可能性。',
      screenshot: 'ブラシとレイヤーのパネル、キャンバスに描いた青・緑・黄土色の水彩の線がある Capy Canvas の作業画面。',
      caption: '実際のアプリで描いた、いくつかの水彩の線。',
      note: '無料・オープンソース。こつこつ開発中。',
      meta: '無料・オープンソースのお絵かきアプリ Capy Canvas。自然なブラシと静かな作業空間を目指して、ただいま開発中です。'
    },
    download: {
      title: '好きな場所を、描く場所に。', eyebrow: 'ダウンロード',
      intro: '机でも、ソファでも、日当たりのいいお気に入りの場所でも。Capy Canvas を連れていけるよう、準備しています。',
      status: '準備中', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '対応予定のプラットフォーム',
      note: 'ネイティブアプリのダウンロードはまだ準備中です。5 つのプラットフォームへの対応を予定しています。公開時期と動作環境は、準備が整い次第お知らせします。',
      callTitle: '待ちきれないときは、ブラウザーから。',
      callText: '開発中のウェブ版デモをお試しいただけます。WebGPU に対応したブラウザーで、気軽に描いてみてください。まだ変更が多いため、大切な作品は別途コピーを保管してください。',
      action: 'デモを試す', link: '開発状況を見る',
      meta: 'Capy Canvas の iPadOS、Android、Linux、Windows、macOS 版は準備中です。まずは開発中のウェブ版デモをお試しください。'
    },
    documentation: {
      title: 'Capy Canvas を、少しずつ。', eyebrow: 'ドキュメント',
      intro: 'アプリは少しずつ形になっています。ガイドブックはこれから。今できることと、この先に目指すことをご紹介します。',
      status: 'ガイドは準備中', now: '今、形になっていること', next: 'これから取り組むこと',
      nowIntro: '現在の試作版で動いている機能です。使い心地はこれからも磨いていきます。', nextIntro: '一歩ずつ、丁寧に。開発を進めながら、計画が変わることもあります。',
      built: [
        ['手になじむブラシ', 'GPU キャンバスによる筆圧対応のストロークと、少しずつ増えている描画・ペイント用ブラシ。'],
        ['描くことに集中できる空間', 'レイヤー、元に戻す・やり直す、キャンバス操作、移動できるパネル、画面をすっきりさせる Zen モード。'],
        ['自分になじむ作業環境', 'ライト・ダーク表示、ペンの設定、変更できるキーボードショートカット。ウェブ版と Linux 試作版は同じ描画コアを使っています。']
      ],
      planned: [
        ['毎日の描き心地を、もっとなめらかに', '実際に描きながら、ブラシの感触、応答の速さ、安定性を改善していきます。'],
        ['もっといろいろな場所で', 'ダウンロード版を整え、共通の描画コアを iPadOS、Android、Windows、macOS に広げていきます。'],
        ['気軽に読めるガイドブック', 'はじめの一歩、ブラシとレイヤー、ショートカット、ちょっと困ったときのヒントをまとめる予定です。']
      ],
      callTitle: '小さなはじまりから、心地よい場所へ。', callText: '目指すのは、いちばん速くて心地よい無料のお絵かきアプリ。開発中のデモを試したり、GitHub でソースコードや技術資料、開発の様子をのぞいてみてください。',
      action: 'デモを開く', link: 'GitHub で開発を見る',
      meta: '開発初期の Capy Canvas をご紹介。試作版で使える機能、今後の予定、準備中のガイドについて。'
    },
    footer: 'Capy Atelier が心を込めて制作。', early: 'まだ開発の初期段階。少しずつ育てています。',
    notFound: { title: 'キャンバスの外に出てしまったようです。', text: 'このページは見つかりませんでした。ホームから、もう一度。', action: 'ホームへ' }
  },
  zh: {
    lang: 'zh-Hans', locale: 'zh_CN', name: '简体中文',
    nav: { demo: '在线体验', download: '下载', documentation: '文档', home: '首页', language: '语言', main: '主导航', skip: '跳转到正文', github: 'GitHub 上的 Capy Canvas' },
    home: {
      title: '让每一笔，都画得自在。',
      description: 'Capy Canvas 是一款免费、开源的绘画应用，正逐步走向更多平台。轻快的笔触、自然的画笔，还有一个安静的工作空间，让灵感慢慢展开。',
      ambition: '我们还在开发早期，也有不少待打磨的地方。目标很简单：无论你喜欢在哪里画画，都能用上最快、最舒心的免费绘画应用。',
      eyebrow: '小小画布，大有可能。',
      screenshot: 'Capy Canvas 的真实绘画界面，包含画笔、图层面板，以及画布上蓝色、绿色与赭色的三条水彩曲线。',
      caption: '在真实应用中，随手画几笔水彩。', note: '免费、开源，正在用心生长。',
      meta: '认识 Capy Canvas：一款处于开发早期的免费开源绘画应用。自然的画笔，安静的工作空间，让创作更自在。'
    },
    download: {
      title: '在哪里，都有你的画布。', eyebrow: '下载',
      intro: '书桌前、沙发上，或是阳光正好的角落。我们正努力让 Capy Canvas 陪你一起去。',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '计划支持的平台',
      note: '原生应用暂未开放下载。我们计划支持以上五个平台；待版本准备就绪后，会公布发布日期和系统要求。',
      callTitle: '想先画两笔？打开浏览器就好。',
      callText: '早期网页版已可体验。带上灵感，使用支持 WebGPU 的浏览器就能试试。应用仍在不断变化，请为重要作品另存一份副本。',
      action: '体验演示版', link: '看看开发进展',
      meta: 'Capy Canvas 的 iPadOS、Android、Linux、Windows 和 macOS 版即将推出。目前可以先体验早期网页版。'
    },
    documentation: {
      title: '慢慢认识 Capy Canvas。', eyebrow: '文档',
      intro: '应用正在成形，使用指南也在计划中。先来看看我们已经做了什么，以及接下来想做什么。',
      status: '指南筹备中', now: '已经初具模样', next: '接下来的小目标',
      nowIntro: '以下功能已在当前原型中运行，仍有许多值得打磨的细节。', nextIntro: '一步一步，用心做好。随着探索深入，计划也可能调整。',
      built: [
        ['顺手的画笔', '由 GPU 画布驱动的压感笔触，以及不断丰富的绘图与绘画笔刷。'],
        ['安心创作的空间', '图层、撤销与重做、画布导航、可移动面板，以及让界面安静下来的 Zen 模式。'],
        ['熟悉又自在的工作区', '明暗主题、画笔输入偏好和可自定义的快捷键。网页版与 Linux 原型共用同一绘画核心。']
      ],
      planned: [
        ['让日常绘画更流畅', '在真实绘画过程中，持续改善画笔手感、响应速度和稳定性。'],
        ['把画布带到更多地方', '准备可下载的版本，并将共用的核心带到 iPadOS、Android、Windows 和 macOS。'],
        ['一本友好的使用指南', '从入门、画笔与图层，到快捷键和遇到问题时的小提示，让每一步都更轻松。']
      ],
      callTitle: '从小小的开始，长成舒心的角落。', callText: '我们希望做出最快、最舒心的免费绘画应用。欢迎试用早期演示版，或前往 GitHub 查看源码、技术笔记和开发进展。',
      action: '打开演示版', link: '在 GitHub 关注进展',
      meta: '了解 Capy Canvas 的早期原型：已有功能、未来计划，以及正在筹备的使用指南。'
    },
    footer: '由 Capy Atelier 用心制作。', early: '仍在开发早期，按自己的节奏成长。',
    notFound: { title: '好像画到画布外面了。', text: '这里没有你要找的页面。回到首页，重新开始吧。', action: '返回首页' }
  },
  ko: {
    lang: 'ko', locale: 'ko_KR', name: '한국어',
    nav: { demo: '데모', download: '다운로드', documentation: '문서', home: '홈', language: '언어', main: '주요 탐색', skip: '본문으로 건너뛰기', github: 'GitHub의 Capy Canvas' },
    home: {
      title: '마음 편히, 나만의 선을 그리는 곳.',
      description: 'Capy Canvas는 다양한 플랫폼을 향해 자라나는 무료 오픈 소스 드로잉 앱입니다. 가벼운 터치, 자연스러운 브러시, 그리고 오롯이 그림에 집중할 수 있는 조용한 작업 공간을 만들고 있어요.',
      ambition: '아직 개발 초기라 다듬을 곳이 많아요. 목표는 단순합니다. 어디서 그리든, 가장 빠르고 아늑한 무료 드로잉 앱이 되는 것.',
      eyebrow: '작은 캔버스, 커다란 가능성.',
      screenshot: '브러시와 레이어 패널, 캔버스에 그린 파란색, 초록색, 황토색 수채화 곡선 세 개가 보이는 Capy Canvas의 실제 작업 화면.',
      caption: '실제 앱에서 가볍게 그린 수채화 선 몇 개.', note: '무료 오픈 소스. 차근차근 만드는 중.',
      meta: '개발 초기의 무료 오픈 소스 드로잉 앱, Capy Canvas를 만나 보세요. 자연스러운 브러시와 조용한 작업 공간을 만들어 갑니다.'
    },
    download: {
      title: '어디든, 나만의 캔버스와 함께.', eyebrow: '다운로드',
      intro: '책상에서도, 소파에서도, 햇살 좋은 한쪽 구석에서도. Capy Canvas와 함께 그릴 수 있도록 준비하고 있어요.',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '지원 예정 플랫폼',
      note: '아직 네이티브 앱을 다운로드할 수는 없어요. 다섯 플랫폼 모두 지원할 계획이며, 빌드가 준비되면 출시 일정과 시스템 요구 사항을 안내하겠습니다.',
      callTitle: '기다리기 아쉽다면, 브라우저에서 먼저.',
      callText: '초기 웹 데모를 둘러볼 수 있어요. WebGPU를 지원하는 브라우저에서 떠오른 생각을 가볍게 그려 보세요. 아직 변화가 많으니 중요한 작품은 별도로 복사해 보관해 주세요.',
      action: '데모 체험하기', link: '개발 현황 살펴보기',
      meta: 'Capy Canvas의 iPadOS, Android, Linux, Windows, macOS 버전을 준비하고 있습니다. 먼저 초기 웹 데모를 체험해 보세요.'
    },
    documentation: {
      title: 'Capy Canvas와 조금씩 친해지기.', eyebrow: '문서',
      intro: '앱은 조금씩 모습을 갖추고 있어요. 안내서는 이제부터입니다. 지금 가능한 일과 앞으로 하고 싶은 일을 소개할게요.',
      status: '안내서 준비 중', now: '지금 만들어진 것들', next: '다음으로 향할 곳',
      nowIntro: '현재 프로토타입에서 동작하는 기능이에요. 앞으로도 꾸준히 다듬어 갈 예정입니다.', nextIntro: '한 걸음씩, 정성스럽게. 만들어 가며 계획이 달라질 수도 있어요.',
      built: [
        ['손에 익는 브러시', 'GPU 캔버스 위의 필압을 반영하는 획과, 점점 다양해지는 드로잉 및 페인팅 브러시.'],
        ['그림에 몰입할 여유', '레이어, 실행 취소와 다시 실행, 캔버스 탐색, 이동 가능한 패널, 그리고 화면을 차분하게 만드는 Zen 모드.'],
        ['익숙하고 편안한 작업 공간', '밝은 테마와 어두운 테마, 펜 설정, 변경 가능한 키보드 단축키. 웹과 Linux 프로토타입은 같은 드로잉 코어를 사용합니다.']
      ],
      planned: [
        ['매일의 그림을 더 부드럽게', '실제로 그림을 그리며 브러시 감각, 반응 속도, 안정성을 계속 개선합니다.'],
        ['더 많은 곳에서 그리기', '다운로드할 수 있는 빌드를 준비하고, 공통 코어를 iPadOS, Android, Windows, macOS로 확장합니다.'],
        ['친절한 안내서', '시작하기, 브러시와 레이어, 키보드 단축키, 낯선 기능 앞에서 도움이 되는 팁을 정리할 예정이에요.']
      ],
      callTitle: '작은 시작에서, 아늑한 공간으로.', callText: '가장 빠르고 아늑한 무료 드로잉 앱을 목표로 하고 있어요. 초기 데모를 체험하거나 GitHub에서 소스 코드, 기술 문서, 개발 소식을 살펴보세요.',
      action: '데모 둘러보기', link: 'GitHub에서 지켜보기',
      meta: 'Capy Canvas의 초기 프로토타입을 소개합니다. 지금 동작하는 기능과 앞으로의 계획, 준비 중인 안내서를 살펴보세요.'
    },
    footer: 'Capy Atelier가 정성껏 만듭니다.', early: '아직 개발 초기. 우리만의 속도로 자라고 있어요.',
    notFound: { title: '캔버스를 조금 벗어났네요.', text: '이 페이지는 찾을 수 없어요. 홈에서 다시 시작해 볼까요?', action: '홈으로' }
  }
};
