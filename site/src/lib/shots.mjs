import { readFileSync } from 'node:fs';
import { defineHastPlugin } from 'satteri';

export function shotFigures() {
  const manifest = JSON.parse(readFileSync(new URL('../../public/assets/capture.json', import.meta.url), 'utf8'));
  const sizes = new Map(manifest.captures.map(capture => [capture.file, capture.size]));
  const scale = manifest.scale;
  const optional = process.env.DOCS_SHOTS_OPTIONAL === '1';
  const element = (tagName, properties, children = []) => ({ type: 'element', tagName, properties, children });
  const isShot = node => node?.type === 'element' && node.tagName === 'img' && String(node.properties?.src).startsWith('shot:');
  const figure = image => {
    const name = String(image.properties.src).slice('shot:'.length);
    const light = `/assets/docs/${name}-light.webp`, dark = `/assets/docs/${name}-dark.webp`;
    const size = sizes.get(`docs/${name}-light.webp`);
    if (!size && !optional) throw new Error(`Missing editor capture: ${name}`);
    if (!image.properties.alt) throw new Error(`Capture needs alt text: ${name}`);
    const caption = image.properties.title ? [element('figcaption', {}, [{ type: 'text', value: String(image.properties.title) }])] : [];
    const picture = size
      ? element('a', { className: ['guide-image-link'], href: light, dataLight: light, dataDark: dark }, [
        element('picture', {}, [
          element('source', { media: '(prefers-color-scheme: dark)', srcSet: `${dark} ${scale}x` }),
          element('img', { src: light, srcSet: `${light} ${scale}x`, alt: image.properties.alt, width: size[0], height: size[1], loading: 'lazy', decoding: 'async' }),
        ]),
      ])
      : element('div', { className: ['guide-image-slot'], dataShot: name }, [{ type: 'text', value: String(image.properties.alt) }]);
    return element('figure', { className: ['guide-figure', 'guide-shot'] }, [picture, ...caption]);
  };
  return defineHastPlugin({
    name: 'capy-shot-figures',
    element: [
      {
        filter: ['p'],
        visit(node, ctx) {
          const content = node.children.filter(child => !(child.type === 'text' && !child.value.trim()));
          if (content.length === 1 && isShot(content[0])) ctx.replaceNode(node, figure(content[0]));
          else if (node.children.some(isShot)) throw new Error(`Put each capture in its own paragraph: ${ctx.textContent(node)}`);
        },
      },
    ],
  });
}
