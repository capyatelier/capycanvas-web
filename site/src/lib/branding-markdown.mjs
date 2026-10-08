import { defineMdastPlugin } from 'satteri';
import { brandCopy } from '../data/branding.mjs';

export function appNameMarkdown() {
  return ({ fileURL, source }) => {
    const match = fileURL?.pathname.match(/\/content\/(?:guides\/([^/]+)\/|policies\/([^/]+)\.md$)/);
    const locale = match?.[1] ?? match?.[2];
    if (!locale) {
      if (source.includes('{appName}')) throw new Error(`App name needs a content locale: ${fileURL}`);
      return null;
    }
    const text = node => node.value.includes('{appName}') ? { ...node, value: brandCopy(locale, node.value) } : undefined;
    return defineMdastPlugin({
      name: 'capy-app-name', text, inlineCode: text, html: text,
      link: node => ({ ...node, title: brandCopy(locale, node.title) }),
      definition: node => ({ ...node, title: brandCopy(locale, node.title) }),
      imageReference: node => ({ ...node, alt: brandCopy(locale, node.alt) }),
      image: node => ({ ...node, alt: brandCopy(locale, node.alt), title: brandCopy(locale, node.title) }),
    });
  };
}
