import { defineHastPlugin } from 'satteri';
import { capture, capturePair, captureScale } from './captures.mjs';

export function shotFigures() {
  const optional = process.env.DOCS_SHOTS_OPTIONAL === '1';
  const element = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });
  const isShot = node => node?.type === 'element' && node.tagName === 'img' && String(node.properties?.src).startsWith('shot:');
  const figure = (image, locale) => {
    const name = String(image.properties.src).slice('shot:'.length);
    const shot = `docs/${name}`;
    const found = capture(shot, locale, 'light') && capture(shot, locale, 'dark');
    if (!found && !optional) throw new Error(`Missing editor capture: ${name} (${locale})`);
    if (!image.properties.alt) throw new Error(`Capture needs alt text: ${name}`);
    const caption = image.properties.title ? [element('figcaption', {}, [{ type: 'text', value: String(image.properties.title) }])] : [];
    let picture = element('div', { className: ['guide-image-slot'], dataShot: name }, [{ type: 'text', value: String(image.properties.alt) }]);
    if (found) {
      const { light, dark, size } = capturePair(shot, locale);
      picture = element('a', { className: ['guide-image-link'], href: light, dataLight: light, dataDark: dark }, [
        element('picture', {}, [
          element('source', { media: '(prefers-color-scheme: dark)', srcSet: `${dark} ${captureScale}x` }),
          element('img', { src: light, srcSet: `${light} ${captureScale}x`, alt: image.properties.alt, width: size[0], height: size[1], loading: 'lazy', decoding: 'async' }),
        ]),
      ]);
    }
    return element('figure', { className: ['guide-figure', 'guide-shot'] }, [picture, ...caption]);
  };
  return ({ fileURL, source }) => {
    const locale = fileURL?.pathname.match(/\/content\/guides\/([^/]+)\//)?.[1];
    if (!locale) {
      if (source.includes('](shot:')) throw new Error(`Captures are only supported in guides: ${fileURL}`);
      return null;
    }
    return defineHastPlugin({
      name: 'capy-shot-figures',
      element: [
        {
          filter: ['p'],
          visit(node, ctx) {
            const content = node.children.filter(child => !(child.type === 'text' && !child.value.trim()));
            if (content.length === 1 && isShot(content[0])) ctx.replaceNode(node, figure(content[0], locale));
            else if (node.children.some(isShot)) throw new Error(`Put each capture in its own paragraph: ${ctx.textContent(node)}`);
          },
        },
      ],
    });
  };
}
