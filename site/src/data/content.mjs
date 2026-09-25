// Every locale is rendered to real HTML. Keep the shape identical across translations.
import { pwaContent } from './pwa-content.mjs';
export const languages = { en: 'English', ja: '日本語', zh: '简体中文', ko: '한국어' };
export const content = {
  en: {
    footer: { madeBy: 'Made by Capy Atelier' },
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { privacy: 'Privacy', webDemo: 'Web Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: 'Capy Canvas on GitHub' },
    home: {
      title: 'Capy Canvas',
      description: 'Capy Canvas is a cross-platform app for sketching, painting and photo editing, with a GPU accelerated painting engine.',
      workspaces: 'Workspace',
      slides: {
        sketch: 'An ink drawing of a train beneath a large tree in the Sketch workspace, where the drawing fills the screen and a few tools sit at the edges.',
        paint: 'An oil painting of a house by the sea at sunset in the Paint workspace, with brushes, colors and layers beside the canvas.',
        photo: 'A photograph of a small terrarium in the Photo workspace, with the Tonal range tool ready to select by brightness, and Curves and Vibrance adjustment layers.'
      },
      meta: 'Capy Canvas is a cross-platform app for sketching, painting and photo editing, with a GPU accelerated painting engine.'
    },
    download: {
      title: 'Download', intro: 'Native downloads are not available yet.',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: 'Planned platforms',
      pwa: pwaContent.en,
      meta: 'Install Capy Canvas as a web app for offline use. Native downloads are coming soon.'
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
      description: 'Capy Canvas は、GPU で加速されたペイントエンジンを備えた、スケッチ、ペイント、写真編集のためのクロスプラットフォームアプリです。',
      workspaces: 'ワークスペース',
      slides: {
        sketch: 'Sketchワークスペースで表示した、大きな木の下の電車を描いたペン画。絵が画面いっぱいに広がり、道具は画面の端にまとまっています。',
        paint: 'Paintワークスペースで表示した、夕暮れの海辺の家を描いた油彩。キャンバスの横にブラシ、色、レイヤーが並んでいます。',
        photo: 'Photoワークスペースで表示した、小さなテラリウムの写真。明るさで範囲を選ぶTonal rangeツールと、CurvesとVibranceの調整レイヤーが表示されています。'
      },
      meta: 'Capy Canvas は、GPU で加速されたペイントエンジンを備えた、スケッチ、ペイント、写真編集のためのクロスプラットフォームアプリです。'
    },
    download: {
      title: 'ダウンロード', intro: 'ネイティブ版はまだダウンロードできません。',
      status: '公開予定', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '対応予定のプラットフォーム',
      pwa: pwaContent.ja,
      meta: 'Capy Canvas のウェブ版をインストールしてオフラインで使えます。ネイティブ版は公開準備中です。'
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
      description: 'Capy Canvas 是一款跨平台应用，配备 GPU 加速的绘画引擎，适用于速写、绘画和照片编辑。',
      workspaces: '工作区',
      slides: {
        sketch: 'Sketch工作区中的一幅钢笔画：大树下的一节电车。画面铺满整个屏幕，少量工具位于屏幕边缘。',
        paint: 'Paint工作区中的一幅油画：日落时分海边的房子，画布旁边是笔刷、颜色和图层。',
        photo: 'Photo工作区中的一张小型生态缸照片，显示按亮度选择区域的Tonal range工具，以及Curves和Vibrance调整图层。'
      },
      meta: 'Capy Canvas 是一款跨平台应用，配备 GPU 加速的绘画引擎，适用于速写、绘画和照片编辑。'
    },
    download: {
      title: '下载', intro: '原生版本暂未开放下载。',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '计划支持的平台',
      pwa: pwaContent.zh,
      meta: '安装 Capy Canvas 网页应用，即可离线使用。原生版本即将推出。'
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
      description: 'Capy Canvas는 GPU 가속 페인팅 엔진을 갖춘, 스케치와 페인팅, 사진 편집을 위한 크로스 플랫폼 앱입니다.',
      workspaces: '작업 공간',
      slides: {
        sketch: 'Sketch 작업 공간에 표시한, 큰 나무 아래의 전차를 그린 펜화. 그림이 화면을 가득 채우고 몇 가지 도구만 가장자리에 있습니다.',
        paint: 'Paint 작업 공간에 표시한, 해 질 녘 바닷가의 집을 그린 유화. 캔버스 옆에 브러시, 색상, 레이어가 있습니다.',
        photo: 'Photo 작업 공간에 표시한 작은 테라리움 사진. 밝기로 영역을 선택하는 Tonal range 도구와 Curves, Vibrance 조정 레이어가 보입니다.'
      },
      meta: 'Capy Canvas는 GPU 가속 페인팅 엔진을 갖춘, 스케치와 페인팅, 사진 편집을 위한 크로스 플랫폼 앱입니다.'
    },
    download: {
      title: '다운로드', intro: '네이티브 버전은 아직 다운로드할 수 없습니다.',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '지원 예정 플랫폼',
      pwa: pwaContent.ko,
      meta: 'Capy Canvas 웹 앱을 설치해 오프라인으로 사용하세요. 네이티브 버전은 출시 예정입니다.'
    },
    documentation: {
      title: '문서',
      meta: 'Capy Canvas 문서: 작업 공간, 브러시, 색상, 레이어, 선택 영역, 사진 편집, 일러스트 튜토리얼.'
    },
    privacy: { title: '개인정보 처리방침', effectiveDate: '시행일', meta: 'Capy Canvas의 앱 데이터, 호스팅, 진단 정보 및 문의 처리 방침.' },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  }
};
