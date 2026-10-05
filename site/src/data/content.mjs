// Every locale is rendered to real HTML. Keep the shape identical across translations.
import { pwaContent } from './pwa-content.mjs';
import { additionalContent } from './additional-content.mjs';
export const languages = {
  en: 'English', ja: '日本語', zh: '简体中文', ko: '한국어',
  es: 'Español', 'pt-BR': 'Português (Brasil)', id: 'Bahasa Indonesia',
  fr: 'Français', de: 'Deutsch', ru: 'Русский', th: 'ไทย',
  vi: 'Tiếng Việt', tr: 'Türkçe', it: 'Italiano',
};
export const content = {
  en: {
    footer: { madeBy: 'Made by Capy Atelier' },
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { privacy: 'Privacy', webDemo: 'Web Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: 'Capy Canvas on GitHub' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas is a cross-platform app for sketching, illustration, and photography, with a powerful GPU-accelerated painting engine.',
      workspaces: 'Workspace',
      slides: {
        sketch: 'An ink drawing of a train beneath a large tree in the Sketch workspace, where the drawing fills the screen and a few tools sit at the edges.',
        paint: 'An oil painting of a house by the sea at sunset in the Paint workspace, with brushes, colors and layers beside the canvas.',
        photo: 'A photograph of a small terrarium in the Photo workspace, with the Tonal range tool ready to select by brightness, and Curves and Vibrance adjustment layers.'
      },
      meta: 'Capy Canvas is a cross-platform app for sketching, illustration, and photography, with a powerful GPU-accelerated painting engine.'
    },
    download: {
      title: 'Download', intro: 'Betas for iPad and Android tablets are available. Other native downloads are coming soon.',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: 'Platforms', joinBeta: 'Join the beta', downloadFor: 'Download for {platform}', openWebApp: 'Open the web app',
      pwa: pwaContent.en,
      released: 'Version {version}, released {date}', get: 'Download',
      checksums: "Each file's fingerprint is listed in {file}, so you can check that a download is complete and unchanged.",
      pastVersions: 'Past versions', allReleases: 'Releases on GitHub',
      notes: "What's new in {version}", notesLanguage: 'Release notes are in English.',
      metaReleased: 'Download Capy Canvas, or install it as a web app for offline use.',
      meta: 'Install Capy Canvas as a web app for offline use. Native downloads are coming soon.'
    },
    versions: {
      title: 'Past versions', intro: 'Every released version of Capy Canvas, newest first.',
      empty: 'No versions have been released yet.',
      version: 'Version {version}', released: 'Released {date}', latest: 'Latest', files: 'Files',
      meta: 'Every released version of Capy Canvas, with release notes and download links.'
    },
    ipadBeta: {
      title: 'iPad beta',
      intro: 'Try new versions of Capy Canvas on your iPad before they reach the App Store.',
      steps: ["Install Apple's TestFlight app from the App Store.", 'On your iPad, open the {invitation}.', 'Tap Accept, then Install.'],
      links: { invitation: 'Capy Canvas beta invitation' },
      meta: 'How to install the Capy Canvas beta on your iPad with TestFlight.'
    },
    androidBeta: {
      title: 'Android tablet beta',
      intro: 'Try new versions of Capy Canvas on your Android tablet before they are released.',
      note: 'Sign in with the Google account you use on your tablet.',
      steps: ['Join the {group}.', 'Open the {test} and accept the invitation.', 'Install Capy Canvas from Google Play on your tablet.'],
      links: { group: 'Capy Canvas beta group', test: 'beta page on Google Play' },
      meta: 'How to install the Capy Canvas beta on your Android tablet from Google Play.'
    },
    documentation: {
      title: 'Documentation',
      meta: 'Capy Canvas documentation: workspaces, brushes, color, layers, selections, photo editing and an illustration tutorial.'
    },
    privacy: { title: 'Privacy Policy', effectiveDate: 'Effective date', meta: 'How Capy Canvas handles app data, hosting, diagnostics, and support requests.' },
    notFound: { title: 'Page not found', text: 'The requested page does not exist.', action: 'Home' }
  },
  ja: {
    footer: { madeBy: '制作：Capy Atelier' },
    lang: 'ja', locale: 'ja_JP', name: '日本語',
    nav: { privacy: 'プライバシー', webDemo: 'ウェブデモ', download: 'ダウンロード', documentation: 'ドキュメント', home: 'ホーム', language: '言語', main: 'メインナビゲーション', skip: '本文へ移動', github: 'GitHub の Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas は、強力な GPU 加速ペイントエンジンを備えた、スケッチ、イラスト、写真のためのクロスプラットフォームアプリです。',
      workspaces: 'ワークスペース',
      slides: {
        sketch: 'Sketchワークスペースで表示した、大きな木の下の電車を描いたペン画。絵が画面いっぱいに広がり、道具は画面の端にまとまっています。',
        paint: 'Paintワークスペースで表示した、夕暮れの海辺の家を描いた油彩。キャンバスの横にブラシ、色、レイヤーが並んでいます。',
        photo: 'Photoワークスペースで表示した、小さなテラリウムの写真。明るさで範囲を選ぶTonal rangeツールと、CurvesとVibranceの調整レイヤーが表示されています。'
      },
      meta: 'Capy Canvas は、強力な GPU 加速ペイントエンジンを備えた、スケッチ、イラスト、写真のためのクロスプラットフォームアプリです。'
    },
    download: {
      title: 'ダウンロード', intro: 'iPad と Android タブレット向けのベータ版を配布しています。その他のネイティブ版は公開予定です。',
      status: '公開予定', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: 'プラットフォーム', joinBeta: 'ベータに参加', downloadFor: '{platform} 版をダウンロード', openWebApp: 'ウェブアプリを開く',
      pwa: pwaContent.ja,
      released: 'バージョン {version}（{date} 公開）', get: 'ダウンロード',
      checksums: '各ファイルの指紋（フィンガープリント）は {file} に載っています。ダウンロードしたファイルが欠けたり変えられたりしていないかを確かめられます。',
      pastVersions: '過去のバージョン', allReleases: 'GitHub のリリース',
      notes: '{version} の変更点', notesLanguage: 'リリースノートは英語です。',
      metaReleased: 'Capy Canvas をダウンロードするか、ウェブアプリとしてインストールしてオフラインで使えます。',
      meta: 'Capy Canvas のウェブ版をインストールしてオフラインで使えます。ネイティブ版は公開準備中です。'
    },
    versions: {
      title: '過去のバージョン', intro: 'これまでに公開した Capy Canvas のすべてのバージョンを、新しい順に掲載しています。',
      empty: '公開済みのバージョンはまだありません。',
      version: 'バージョン {version}', released: '{date} 公開', latest: '最新', files: 'ファイル',
      meta: 'これまでに公開した Capy Canvas のすべてのバージョンと、リリースノート、ダウンロードリンク。'
    },
    ipadBeta: {
      title: 'iPad ベータ版',
      intro: 'App Store で公開される前の新しい Capy Canvas を iPad で試せます。',
      steps: ['App Store から Apple の TestFlight アプリをインストールします。', 'iPad で{invitation}を開きます。', '招待を承諾して、Capy Canvas をインストールします。'],
      links: { invitation: 'Capy Canvas ベータ版への招待リンク' },
      meta: 'TestFlight を使って iPad に Capy Canvas のベータ版をインストールする方法。'
    },
    androidBeta: {
      title: 'Android タブレット ベータ版',
      intro: '一般公開される前の新しい Capy Canvas を Android タブレットで試せます。',
      note: 'タブレットで使っている Google アカウントでログインしてください。',
      steps: ['{group}に参加します。', '{test}を開き、招待を承諾します。', 'タブレットの Google Play から Capy Canvas をインストールします。'],
      links: { group: 'Capy Canvas ベータ版グループ', test: 'Google Play のベータ版ページ' },
      meta: 'Google Play から Android タブレットに Capy Canvas のベータ版をインストールする方法。'
    },
    documentation: {
      title: 'ドキュメント',
      meta: 'Capy Canvas のドキュメント。ワークスペース、ブラシ、色、レイヤー、選択範囲、写真編集、イラスト制作チュートリアル。'
    },
    privacy: { title: 'プライバシーポリシー', effectiveDate: '施行日', meta: 'Capy Canvas のアプリデータ、ホスティング、診断情報、お問い合わせの取り扱い。' },
    notFound: { title: 'ページが見つかりません', text: '指定されたページは存在しません。', action: 'ホーム' }
  },
  zh: {
    footer: { madeBy: '由 Capy Atelier 制作' },
    lang: 'zh-Hans', locale: 'zh_CN', name: '简体中文',
    nav: { privacy: '隐私', webDemo: '网页演示', download: '下载', documentation: '文档', home: '首页', language: '语言', main: '主导航', skip: '跳转到正文', github: 'GitHub 上的 Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas 是一款跨平台应用，配备强大的 GPU 加速绘画引擎，适用于速写、插画和摄影。',
      workspaces: '工作区',
      slides: {
        sketch: 'Sketch工作区中的一幅钢笔画：大树下的一节电车。画面铺满整个屏幕，少量工具位于屏幕边缘。',
        paint: 'Paint工作区中的一幅油画：日落时分海边的房子，画布旁边是笔刷、颜色和图层。',
        photo: 'Photo工作区中的一张小型生态缸照片，显示按亮度选择区域的Tonal range工具，以及Curves和Vibrance调整图层。'
      },
      meta: 'Capy Canvas 是一款跨平台应用，配备强大的 GPU 加速绘画引擎，适用于速写、插画和摄影。'
    },
    download: {
      title: '下载', intro: '已提供 iPad 和 Android 平板电脑的测试版，其他原生版本即将推出。',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '平台', joinBeta: '加入测试', downloadFor: '下载 {platform} 版', openWebApp: '打开网页应用',
      pwa: pwaContent.zh,
      released: '版本 {version}，发布于 {date}', get: '下载',
      checksums: '{file} 列出了每个文件的指纹，可用来确认下载的文件完整且未被改动。',
      pastVersions: '历史版本', allReleases: 'GitHub 上的发布页面',
      notes: '{version} 的新内容', notesLanguage: '发布说明为英文。',
      metaReleased: '下载 Capy Canvas，或将其安装为网页应用以便离线使用。',
      meta: '安装 Capy Canvas 网页应用，即可离线使用。原生版本即将推出。'
    },
    versions: {
      title: '历史版本', intro: 'Capy Canvas 已发布的所有版本，按从新到旧排列。',
      empty: '目前还没有发布任何版本。',
      version: '版本 {version}', released: '发布于 {date}', latest: '最新', files: '文件',
      meta: 'Capy Canvas 已发布的所有版本，附发布说明和下载链接。'
    },
    ipadBeta: {
      title: 'iPad 测试版',
      intro: '在新版本登陆 App Store 之前，先在 iPad 上试用 Capy Canvas。',
      steps: ['从 App Store 安装 Apple 的 TestFlight 应用。', '在 iPad 上打开{invitation}。', '接受邀请，然后安装 Capy Canvas。'],
      links: { invitation: 'Capy Canvas 测试版邀请链接' },
      meta: '如何通过 TestFlight 在 iPad 上安装 Capy Canvas 测试版。'
    },
    androidBeta: {
      title: 'Android 平板测试版',
      intro: '在新版本正式发布之前，先在 Android 平板上试用 Capy Canvas。',
      note: '请登录你在平板上使用的 Google 账号。',
      steps: ['加入{group}。', '打开{test}并接受邀请。', '在平板上从 Google Play 安装 Capy Canvas。'],
      links: { group: 'Capy Canvas 测试版群组', test: 'Google Play 测试版页面' },
      meta: '如何从 Google Play 在 Android 平板上安装 Capy Canvas 测试版。'
    },
    documentation: {
      title: '文档',
      meta: 'Capy Canvas文档：工作区、笔刷、颜色、图层、选区、照片编辑与插画教程。'
    },
    privacy: { title: '隐私政策', effectiveDate: '生效日期', meta: 'Capy Canvas 如何处理应用数据、网站托管、诊断信息和支持请求。' },
    notFound: { title: '页面不存在', text: '找不到所请求的页面。', action: '首页' }
  },
  ko: {
    footer: { madeBy: 'Capy Atelier 제작' },
    lang: 'ko', locale: 'ko_KR', name: '한국어',
    nav: { privacy: '개인정보', webDemo: '웹 데모', download: '다운로드', documentation: '문서', home: '홈', language: '언어', main: '주요 탐색', skip: '본문으로 건너뛰기', github: 'GitHub의 Capy Canvas' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas는 강력한 GPU 가속 페인팅 엔진을 갖춘, 스케치와 일러스트, 사진을 위한 크로스 플랫폼 앱입니다.',
      workspaces: '작업 공간',
      slides: {
        sketch: 'Sketch 작업 공간에 표시한, 큰 나무 아래의 전차를 그린 펜화. 그림이 화면을 가득 채우고 몇 가지 도구만 가장자리에 있습니다.',
        paint: 'Paint 작업 공간에 표시한, 해 질 녘 바닷가의 집을 그린 유화. 캔버스 옆에 브러시, 색상, 레이어가 있습니다.',
        photo: 'Photo 작업 공간에 표시한 작은 테라리움 사진. 밝기로 영역을 선택하는 Tonal range 도구와 Curves, Vibrance 조정 레이어가 보입니다.'
      },
      meta: 'Capy Canvas는 강력한 GPU 가속 페인팅 엔진을 갖춘, 스케치와 일러스트, 사진을 위한 크로스 플랫폼 앱입니다.'
    },
    download: {
      title: '다운로드', intro: 'iPad와 Android 태블릿용 베타를 받을 수 있습니다. 다른 네이티브 버전은 출시 예정입니다.',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '플랫폼', joinBeta: '베타 참여', downloadFor: '{platform}용 다운로드', openWebApp: '웹 앱 열기',
      pwa: pwaContent.ko,
      released: '버전 {version}, {date} 출시', get: '다운로드',
      checksums: '{file}에 각 파일의 지문이 있어, 다운로드한 파일이 온전하고 바뀌지 않았는지 확인할 수 있습니다.',
      pastVersions: '이전 버전', allReleases: 'GitHub 릴리스',
      notes: '{version} 변경 사항', notesLanguage: '릴리스 노트는 영어로 제공됩니다.',
      metaReleased: 'Capy Canvas를 다운로드하거나 웹 앱으로 설치해 오프라인으로 사용하세요.',
      meta: 'Capy Canvas 웹 앱을 설치해 오프라인으로 사용하세요. 네이티브 버전은 출시 예정입니다.'
    },
    versions: {
      title: '이전 버전', intro: '지금까지 출시된 Capy Canvas의 모든 버전을 최신순으로 보여 줍니다.',
      empty: '아직 출시된 버전이 없습니다.',
      version: '버전 {version}', released: '{date} 출시', latest: '최신', files: '파일',
      meta: '지금까지 출시된 Capy Canvas의 모든 버전과 릴리스 노트, 다운로드 링크.'
    },
    ipadBeta: {
      title: 'iPad 베타',
      intro: 'App Store에 출시되기 전에 새 버전의 Capy Canvas를 iPad에서 사용해 보세요.',
      steps: ['App Store에서 Apple의 TestFlight 앱을 설치합니다.', 'iPad에서 {invitation}를 엽니다.', '초대를 수락하고 Capy Canvas를 설치합니다.'],
      links: { invitation: 'Capy Canvas 베타 초대 링크' },
      meta: 'TestFlight로 iPad에 Capy Canvas 베타를 설치하는 방법.'
    },
    androidBeta: {
      title: 'Android 태블릿 베타',
      intro: '정식 출시 전에 새 버전의 Capy Canvas를 Android 태블릿에서 사용해 보세요.',
      note: '태블릿에서 사용하는 Google 계정으로 로그인하세요.',
      steps: ['{group}에 가입합니다.', '{test}를 열고 초대를 수락합니다.', '태블릿의 Google Play에서 Capy Canvas를 설치합니다.'],
      links: { group: 'Capy Canvas 베타 그룹', test: 'Google Play 베타 페이지' },
      meta: 'Google Play에서 Android 태블릿에 Capy Canvas 베타를 설치하는 방법.'
    },
    documentation: {
      title: '문서',
      meta: 'Capy Canvas 문서: 작업 공간, 브러시, 색상, 레이어, 선택 영역, 사진 편집, 일러스트 튜토리얼.'
    },
    privacy: { title: '개인정보 처리방침', effectiveDate: '시행일', meta: 'Capy Canvas의 앱 데이터, 호스팅, 진단 정보 및 문의 처리 방침.' },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  },
  ...additionalContent
};
