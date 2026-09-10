// Every locale is rendered to real HTML. Keep the shape identical across translations.
import { pwaContent } from './pwa-content.mjs';
export const languages = { en: 'English', ja: '日本語', zh: '简体中文', ko: '한국어' };
export const content = {
  en: {
    lang: 'en', locale: 'en_US', name: 'English',
    nav: { webDemo: 'Web Demo', download: 'Download', documentation: 'Documentation', home: 'Home', language: 'Language', main: 'Main navigation', skip: 'Skip to content', github: 'Capy Canvas on GitHub' },
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
      meta: 'Capy Canvas guides: quickstart, workspace, a four-phase illustration tutorial, layers, tools, and advanced brush settings.'
    },
    notFound: { title: 'Page not found', text: 'The requested page does not exist.', action: 'Home' }
  },
  ja: {
    lang: 'ja', locale: 'ja_JP', name: '日本語',
    nav: { webDemo: 'ウェブデモ', download: 'ダウンロード', documentation: 'ドキュメント', home: 'ホーム', language: '言語', main: 'メインナビゲーション', skip: '本文へ移動', github: 'GitHub の Capy Canvas' },
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
      meta: 'Capy Canvas のガイド。はじめの操作、作業画面、4工程のイラスト制作、レイヤー、ツール、ブラシの詳細設定。'
    },
    notFound: { title: 'ページが見つかりません', text: '指定されたページは存在しません。', action: 'ホーム' }
  },
  zh: {
    lang: 'zh-Hans', locale: 'zh_CN', name: '简体中文',
    nav: { webDemo: '网页演示', download: '下载', documentation: '文档', home: '首页', language: '语言', main: '主导航', skip: '跳转到正文', github: 'GitHub 上的 Capy Canvas' },
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
      meta: 'Capy Canvas指南：快速上手、工作区、四阶段插画教程、图层、工具与进阶笔刷设置。'
    },
    notFound: { title: '页面不存在', text: '找不到所请求的页面。', action: '首页' }
  },
  ko: {
    lang: 'ko', locale: 'ko_KR', name: '한국어',
    nav: { webDemo: '웹 데모', download: '다운로드', documentation: '문서', home: '홈', language: '언어', main: '주요 탐색', skip: '본문으로 건너뛰기', github: 'GitHub의 Capy Canvas' },
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
      meta: 'Capy Canvas 가이드: 빠른 시작, 작업 화면, 네 단계 일러스트, 레이어, 도구와 고급 브러시 설정.'
    },
    notFound: { title: '페이지를 찾을 수 없습니다', text: '요청한 페이지가 존재하지 않습니다.', action: '홈' }
  }
};
