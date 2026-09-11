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
      description: 'Capy Canvas is a fast, familiar, and cross-platform drawing app with powerful GPU accelerated brushes.',
      screenshot: 'Capy Canvas’s drawing workspace with three pressure-sensitive watercolor strokes.',
      meta: 'Capy Canvas is a fast, familiar, and cross-platform drawing app with powerful GPU accelerated brushes.'
    },
    download: {
      title: 'Download', intro: 'Native downloads are not available yet.',
      status: 'Coming soon', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: 'Planned platforms',
      pwa: pwaContent.en,
      meta: 'Install Capy Canvas as a web app for offline use. Native downloads are coming soon.'
    },
    documentation: {
      title: 'Documentation',
      meta: 'Capy Canvas documentation: workspace, sketching, line art, masking, rendering, layers, and brush settings.'
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
      description: 'Capy Canvas は、強力な GPU 加速ブラシを備えた、速くて親しみやすいクロスプラットフォームのお絵かきアプリです。',
      screenshot: '筆圧を反映した 3 本の水彩の線がある Capy Canvas の作業画面。',
      meta: 'Capy Canvas は、強力な GPU 加速ブラシを備えた、速くて親しみやすいクロスプラットフォームのお絵かきアプリです。'
    },
    download: {
      title: 'ダウンロード', intro: 'ネイティブ版はまだダウンロードできません。',
      status: '公開予定', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '対応予定のプラットフォーム',
      pwa: pwaContent.ja,
      meta: 'Capy Canvas のウェブ版をインストールしてオフラインで使えます。ネイティブ版は公開準備中です。'
    },
    documentation: {
      title: 'ドキュメント',
      meta: 'Capy Canvas のドキュメント。作業画面、下描き、線画、マスク作成、塗り込み、レイヤー、ブラシ設定。'
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
      description: 'Capy Canvas 是一款快速、操作熟悉的跨平台绘画应用，配备强大的 GPU 加速笔刷。',
      screenshot: 'Capy Canvas 的绘画界面，画布上有三条带压感变化的水彩笔触。',
      meta: 'Capy Canvas 是一款快速、操作熟悉的跨平台绘画应用，配备强大的 GPU 加速笔刷。'
    },
    download: {
      title: '下载', intro: '原生版本暂未开放下载。',
      status: '即将推出', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '计划支持的平台',
      pwa: pwaContent.zh,
      meta: '安装 Capy Canvas 网页应用，即可离线使用。原生版本即将推出。'
    },
    documentation: {
      title: '文档',
      meta: 'Capy Canvas文档：工作区、草稿、线稿、蒙版、细化、图层与笔刷设置。'
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
      description: 'Capy Canvas는 강력한 GPU 가속 브러시를 갖춘 빠르고 익숙한 크로스 플랫폼 드로잉 앱입니다.',
      screenshot: '필압 변화가 반영된 수채화 획 세 개가 있는 Capy Canvas 작업 화면.',
      meta: 'Capy Canvas는 강력한 GPU 가속 브러시를 갖춘 빠르고 익숙한 크로스 플랫폼 드로잉 앱입니다.'
    },
    download: {
      title: '다운로드', intro: '네이티브 버전은 아직 다운로드할 수 없습니다.',
      status: '출시 예정', platforms: ['iPadOS', 'Android', 'Linux', 'Windows', 'macOS'], platformsLabel: '지원 예정 플랫폼',
      pwa: pwaContent.ko,
      meta: 'Capy Canvas 웹 앱을 설치해 오프라인으로 사용하세요. 네이티브 버전은 출시 예정입니다.'
    },
    documentation: {
      title: '문서',
      meta: 'Capy Canvas 문서: 작업 화면, 스케치, 선화, 마스킹, 렌더링, 레이어 및 브러시 설정.'
    },
    privacy: { title: '개인정보 처리방침', effectiveDate: '시행일', meta: 'Capy Canvas의 앱 데이터, 호스팅, 진단 정보 및 문의 처리 방침.' },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  }
};
