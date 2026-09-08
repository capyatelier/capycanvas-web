// Browser menu wording is intentionally brief; support references are in README.md.
export const pwaContent = {
  en: {
    title: 'Progressive Web App', intro: 'Install the web version for offline use.',
    browser: 'Browser', open: 'Open the web app.',
    offline: 'Open the installed app once online before using it offline.',
    fallback: { chrome: 'Use Chrome to install on this device.', safari: 'Use Safari to install on this device.' },
    guides: {
      desktop: { label: 'Chrome / Edge · computer', step: 'Click the install icon in the address bar, then Install.', note: '' },
      android: { label: 'Chrome · Android', step: 'Menu (⋮) → Install and create shortcut → Install.', note: '' },
      safari: { label: 'Safari · iPhone / iPad', step: 'Share → Add to Home Screen → Add. Enable Open as Web App if shown.', note: '' },
      chromeIos: { label: 'Chrome · iPhone / iPad', step: 'Share → Add to Home Screen → Add.', note: '' },
      mac: { label: 'Safari · Mac', step: 'File → Add to Dock → Add.', note: 'Requires macOS 14 or later. On older versions, use Chrome.' },
      firefoxWindows: { label: 'Firefox · Windows', step: 'Click the web apps button in the address bar to install.', note: 'If the button is missing, update Firefox or use Chrome.' },
      firefoxAndroid: { label: 'Firefox · Android', step: 'Menu (⋮) → Install → Add to Home Screen.', note: '' },
      generic: { label: 'Other browser', step: 'Use Chrome on a computer or Android, or Safari on iPhone/iPad. Choose Install or Add to Home Screen in the browser.', note: '' }
    }
  },
  ja: {
    title: 'プログレッシブウェブアプリ', intro: 'ウェブ版をインストールすると、オフラインでも使えます。',
    browser: 'ブラウザー', open: 'ウェブアプリを開く。',
    offline: 'オフラインで使う前に、インストールしたアプリを一度オンラインで開いてください。',
    fallback: { chrome: 'この端末では Chrome からインストールしてください。', safari: 'この端末では Safari からインストールしてください。' },
    guides: {
      desktop: { label: 'Chrome / Edge · パソコン', step: 'アドレスバーのインストールアイコンを押し、「インストール」を選びます。', note: '' },
      android: { label: 'Chrome · Android', step: 'メニュー（⋮）→「インストールとショートカットの作成」→「インストール」。', note: '' },
      safari: { label: 'Safari · iPhone / iPad', step: '「共有」→「ホーム画面に追加」→「追加」。「ウェブアプリとして開く」が表示されたらオンにします。', note: '' },
      chromeIos: { label: 'Chrome · iPhone / iPad', step: '「共有」→「ホーム画面に追加」→「追加」。', note: '' },
      mac: { label: 'Safari · Mac', step: '「ファイル」→「Dock に追加」→「追加」。', note: 'macOS 14 以降が必要です。旧バージョンでは Chrome を使ってください。' },
      firefoxWindows: { label: 'Firefox · Windows', step: 'アドレスバーのウェブアプリボタンを押してインストールします。', note: 'ボタンがない場合は Firefox を更新するか、Chrome を使ってください。' },
      firefoxAndroid: { label: 'Firefox · Android', step: 'メニュー（⋮）→「インストール」→「ホーム画面に追加」。', note: '' },
      generic: { label: 'その他のブラウザー', step: 'パソコンや Android では Chrome、iPhone/iPad では Safari を使い、ブラウザーから「インストール」または「ホーム画面に追加」を選びます。', note: '' }
    }
  },
  zh: {
    title: '渐进式网页应用', intro: '安装网页版后，即可离线使用。',
    browser: '浏览器', open: '打开网页应用。',
    offline: '离线使用前，请先联网打开一次已安装的应用。',
    fallback: { chrome: '请在此设备上使用 Chrome 安装。', safari: '请在此设备上使用 Safari 安装。' },
    guides: {
      desktop: { label: 'Chrome / Edge · 电脑', step: '点击地址栏中的安装图标，再选择“安装”。', note: '' },
      android: { label: 'Chrome · Android', step: '菜单（⋮）→“安装和创建快捷方式”→“安装”。', note: '' },
      safari: { label: 'Safari · iPhone / iPad', step: '“共享”→“添加到主屏幕”→“添加”。如有“作为网页应用打开”选项，请将其开启。', note: '' },
      chromeIos: { label: 'Chrome · iPhone / iPad', step: '“共享”→“添加到主屏幕”→“添加”。', note: '' },
      mac: { label: 'Safari · Mac', step: '“文件”→“添加到程序坞”→“添加”。', note: '需要 macOS 14 或更新版本。旧版本请使用 Chrome。' },
      firefoxWindows: { label: 'Firefox · Windows', step: '点击地址栏中的网页应用按钮进行安装。', note: '如果没有此按钮，请更新 Firefox 或使用 Chrome。' },
      firefoxAndroid: { label: 'Firefox · Android', step: '菜单（⋮）→“安装”→“添加到主屏幕”。', note: '' },
      generic: { label: '其他浏览器', step: '电脑或 Android 请使用 Chrome，iPhone/iPad 请使用 Safari。在浏览器中选择“安装”或“添加到主屏幕”。', note: '' }
    }
  },
  ko: {
    title: '프로그레시브 웹 앱', intro: '웹 버전을 설치하면 오프라인에서도 사용할 수 있습니다.',
    browser: '브라우저', open: '웹 앱을 엽니다.',
    offline: '오프라인으로 사용하기 전에 설치한 앱을 온라인에서 한 번 열어 주세요.',
    fallback: { chrome: '이 기기에서는 Chrome으로 설치해 주세요.', safari: '이 기기에서는 Safari로 설치해 주세요.' },
    guides: {
      desktop: { label: 'Chrome / Edge · 컴퓨터', step: '주소창의 설치 아이콘을 누른 다음 설치를 선택합니다.', note: '' },
      android: { label: 'Chrome · Android', step: '메뉴(⋮) → 설치 및 바로가기 만들기 → 설치.', note: '' },
      safari: { label: 'Safari · iPhone / iPad', step: '공유 → 홈 화면에 추가 → 추가. 웹 앱으로 열기가 표시되면 켭니다.', note: '' },
      chromeIos: { label: 'Chrome · iPhone / iPad', step: '공유 → 홈 화면에 추가 → 추가.', note: '' },
      mac: { label: 'Safari · Mac', step: '파일 → Dock에 추가 → 추가.', note: 'macOS 14 이상이 필요합니다. 이전 버전에서는 Chrome을 사용해 주세요.' },
      firefoxWindows: { label: 'Firefox · Windows', step: '주소창의 웹 앱 버튼을 눌러 설치합니다.', note: '버튼이 없으면 Firefox를 업데이트하거나 Chrome을 사용해 주세요.' },
      firefoxAndroid: { label: 'Firefox · Android', step: '메뉴(⋮) → 설치 → 홈 화면에 추가.', note: '' },
      generic: { label: '다른 브라우저', step: '컴퓨터나 Android에서는 Chrome, iPhone/iPad에서는 Safari를 사용하세요. 브라우저에서 설치 또는 홈 화면에 추가를 선택합니다.', note: '' }
    }
  }
};
