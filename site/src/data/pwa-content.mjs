// Browser menu wording is intentionally brief; support references are in README.md.
export const pwaContent = {
  en: {
    title: 'Progressive Web App', intro: 'The web version of Capy Canvas can be installed for offline use.',
    os: 'Operating system', browser: 'Browser', open: 'Open the web app.',
    systems: { windows: 'Windows', macos: 'macOS', linux: 'Linux', chromeos: 'ChromeOS', android: 'Android', ios: 'iOS/iPadOS', other: 'Other OS' },
    browsers: { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari', other: 'Other browser' },
    fallback: { chrome: 'Use Chrome to install on this device.', safari: 'Use Safari to install on this device.' },
    guides: {
      desktop: { step: 'Click the install icon in the address bar, then Install.', note: '' },
      android: { step: 'Menu (⋮) → Install and create shortcut → Install.', note: '' },
      safari: { step: 'Share → Add to Home Screen → Add. Enable Open as Web App if shown.', note: '' },
      chromeIos: { step: 'Share → Add to Home Screen → Add.', note: '' },
      mac: { step: 'File → Add to Dock → Add.', note: 'Requires macOS 14 or later. On older versions, use Chrome.' },
      firefoxWindows: { step: 'Click the web apps button in the address bar to install.', note: 'If the button is missing, update Firefox or use Chrome.' },
      firefoxAndroid: { step: 'Menu (⋮) → Install → Add to Home Screen.', note: '' },
      generic: { step: 'Use Chrome on a computer or Android, or Safari on iPhone/iPad. Choose Install or Add to Home Screen in the browser.', note: '' }
    }
  },
  ja: {
    title: 'プログレッシブウェブアプリ', intro: 'Capy Canvas のウェブ版は、インストールしてオフラインで使えます。',
    os: 'OS', browser: 'ブラウザー', open: 'ウェブアプリを開く。',
    systems: { windows: 'Windows', macos: 'macOS', linux: 'Linux', chromeos: 'ChromeOS', android: 'Android', ios: 'iOS/iPadOS', other: 'その他の OS' },
    browsers: { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari', other: 'その他' },
    fallback: { chrome: 'この端末では Chrome からインストールしてください。', safari: 'この端末では Safari からインストールしてください。' },
    guides: {
      desktop: { step: 'アドレスバーのインストールアイコンを押し、「インストール」を選びます。', note: '' },
      android: { step: 'メニュー（⋮）→「インストールとショートカットの作成」→「インストール」。', note: '' },
      safari: { step: '「共有」→「ホーム画面に追加」→「追加」。「ウェブアプリとして開く」が表示されたらオンにします。', note: '' },
      chromeIos: { step: '「共有」→「ホーム画面に追加」→「追加」。', note: '' },
      mac: { step: '「ファイル」→「Dock に追加」→「追加」。', note: 'macOS 14 以降が必要です。旧バージョンでは Chrome を使ってください。' },
      firefoxWindows: { step: 'アドレスバーのウェブアプリボタンを押してインストールします。', note: 'ボタンがない場合は Firefox を更新するか、Chrome を使ってください。' },
      firefoxAndroid: { step: 'メニュー（⋮）→「インストール」→「ホーム画面に追加」。', note: '' },
      generic: { step: 'パソコンや Android では Chrome、iPhone/iPad では Safari を使い、ブラウザーから「インストール」または「ホーム画面に追加」を選びます。', note: '' }
    }
  },
  zh: {
    title: '渐进式网页应用', intro: 'Capy Canvas 网页版可安装到设备上，供离线使用。',
    os: '操作系统', browser: '浏览器', open: '打开网页应用。',
    systems: { windows: 'Windows', macos: 'macOS', linux: 'Linux', chromeos: 'ChromeOS', android: 'Android', ios: 'iOS/iPadOS', other: '其他系统' },
    browsers: { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari', other: '其他浏览器' },
    fallback: { chrome: '请在此设备上使用 Chrome 安装。', safari: '请在此设备上使用 Safari 安装。' },
    guides: {
      desktop: { step: '点击地址栏中的安装图标，再选择“安装”。', note: '' },
      android: { step: '菜单（⋮）→“安装和创建快捷方式”→“安装”。', note: '' },
      safari: { step: '“共享”→“添加到主屏幕”→“添加”。如有“作为网页应用打开”选项，请将其开启。', note: '' },
      chromeIos: { step: '“共享”→“添加到主屏幕”→“添加”。', note: '' },
      mac: { step: '“文件”→“添加到程序坞”→“添加”。', note: '需要 macOS 14 或更新版本。旧版本请使用 Chrome。' },
      firefoxWindows: { step: '点击地址栏中的网页应用按钮进行安装。', note: '如果没有此按钮，请更新 Firefox 或使用 Chrome。' },
      firefoxAndroid: { step: '菜单（⋮）→“安装”→“添加到主屏幕”。', note: '' },
      generic: { step: '电脑或 Android 请使用 Chrome，iPhone/iPad 请使用 Safari。在浏览器中选择“安装”或“添加到主屏幕”。', note: '' }
    }
  },
  ko: {
    title: '프로그레시브 웹 앱', intro: 'Capy Canvas 웹 버전을 설치해 오프라인으로 사용할 수 있습니다.',
    os: '운영체제', browser: '브라우저', open: '웹 앱을 엽니다.',
    systems: { windows: 'Windows', macos: 'macOS', linux: 'Linux', chromeos: 'ChromeOS', android: 'Android', ios: 'iOS/iPadOS', other: '기타' },
    browsers: { chrome: 'Chrome', edge: 'Edge', firefox: 'Firefox', safari: 'Safari', other: '다른 브라우저' },
    fallback: { chrome: '이 기기에서는 Chrome으로 설치해 주세요.', safari: '이 기기에서는 Safari로 설치해 주세요.' },
    guides: {
      desktop: { step: '주소창의 설치 아이콘을 누른 다음 설치를 선택합니다.', note: '' },
      android: { step: '메뉴(⋮) → 설치 및 바로가기 만들기 → 설치.', note: '' },
      safari: { step: '공유 → 홈 화면에 추가 → 추가. 웹 앱으로 열기가 표시되면 켭니다.', note: '' },
      chromeIos: { step: '공유 → 홈 화면에 추가 → 추가.', note: '' },
      mac: { step: '파일 → Dock에 추가 → 추가.', note: 'macOS 14 이상이 필요합니다. 이전 버전에서는 Chrome을 사용해 주세요.' },
      firefoxWindows: { step: '주소창의 웹 앱 버튼을 눌러 설치합니다.', note: '버튼이 없으면 Firefox를 업데이트하거나 Chrome을 사용해 주세요.' },
      firefoxAndroid: { step: '메뉴(⋮) → 설치 → 홈 화면에 추가.', note: '' },
      generic: { step: '컴퓨터나 Android에서는 Chrome, iPhone/iPad에서는 Safari를 사용하세요. 브라우저에서 설치 또는 홈 화면에 추가를 선택합니다.', note: '' }
    }
  }
};
