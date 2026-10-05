import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

export const releasesUrl = 'https://github.com/capyatelier/capycanvas/releases';
export const releasesApiUrl = 'https://api.github.com/repos/capyatelier/capycanvas/releases?per_page=100';
export const platformFiles = {
  android: version => `capycanvas-${version}-android.apk`,
  linux: version => `capycanvas-${version}-linux-x86_64.AppImage`,
  windows: version => `capycanvas-${version}-windows-x64-setup.exe`,
  mac: version => `capycanvas-${version}-macos-arm64.dmg`,
};
const notesHeadingLevel = 3;

export async function fetchReleases({ token = process.env.GITHUB_TOKEN, fetch = globalThis.fetch } = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'capycanvas-web',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  const releases = [];
  for (let url = releasesApiUrl; url;) {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error(`GitHub releases request failed with ${response.status} ${response.statusText}: ${url}`);
    releases.push(...await response.json());
    url = response.headers.get('link')?.match(/<([^>]+)>;\s*rel="next"/)?.[1];
  }
  return releases;
}

export function publishedReleases(releases) {
  return releases
    .filter(release => !release.draft && !release.prerelease && release.published_at)
    .sort((a, b) => b.published_at.localeCompare(a.published_at))
    .map(release => {
      const version = release.tag_name.replace(/^v/, '');
      const file = name => {
        const asset = release.assets.find(asset => asset.name === name && asset.state === 'uploaded');
        return asset && { name: asset.name, url: asset.browser_download_url, size: asset.size };
      };
      return {
        version,
        date: release.published_at.slice(0, 10),
        notes: renderNotes(release.body ?? '', { base: release.html_url, prefix: `notes-${version.replace(/[^\w-]/g, '-')}-` }),
        files: Object.fromEntries(Object.entries(platformFiles).flatMap(([platform, name]) => {
          const found = file(name(version));
          return found ? [[platform, found]] : [];
        })),
        checksums: file('SHA256SUMS'),
      };
    });
}

export function renderNotes(markdown, { base, prefix }) {
  return String(unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true, clobberPrefix: '' })
    .use(rehypeRaw)
    .use(rehypeSanitize, { ...defaultSchema, clobberPrefix: prefix, strip: [...defaultSchema.strip, 'style'] })
    .use(fitNotesIntoPage, { base, prefix })
    .use(rehypeStringify)
    .processSync(markdown));
}

function fitNotesIntoPage({ base, prefix }) {
  return tree => {
    const elements = [];
    const collect = node => {
      if (node.type === 'element') elements.push(node);
      node.children?.forEach(collect);
    };
    collect(tree);
    const headings = elements.filter(node => /^h[1-6]$/.test(node.tagName));
    const shift = notesHeadingLevel - Math.min(...headings.map(node => Number(node.tagName[1])));
    for (const heading of headings) heading.tagName = `h${Math.min(6, Number(heading.tagName[1]) + shift)}`;
    for (const node of elements) {
      for (const attribute of ['href', 'src']) {
        const value = node.properties[attribute];
        if (typeof value !== 'string') continue;
        if (value.startsWith('#')) node.properties[attribute] = `#${prefix}${value.slice(1)}`;
        else if (URL.canParse(value, base)) node.properties[attribute] = new URL(value, base).href;
        else delete node.properties[attribute];
      }
    }
  };
}
