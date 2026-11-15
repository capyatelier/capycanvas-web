import argparse
import hashlib
import json
from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[3]
LANG = '{http://www.w3.org/XML/1998/namespace}lang'


def configuration():
    return json.loads((ROOT / 'store/locales.json').read_text(encoding='utf-8'))


def text(nodes, locale):
    matches = [''.join(node.itertext()).strip() for node in nodes
               if node.get(LANG, 'en').replace('_', '-') == locale]
    if not matches:
        raise ValueError(f'Missing AppStream translation: {locale}')
    return list(dict.fromkeys(matches))


def generate(app_repo):
    path = Path(app_repo) / 'apps/layer-linux/art.capycanvas.CapyCanvas.metainfo.xml'
    source = path.read_bytes()
    component = ET.fromstring(source)
    config = configuration()
    urls = {node.get('type'): node.text.strip() for node in component.findall('url')}
    languages = []
    for mapping in config['locales']:
        locale = mapping['source']
        name = text(component.findall('name'), locale)[0]
        summary = text(component.findall('summary'), locale)[0]
        features = text(component.findall('screenshots/screenshot/caption'), locale)
        paragraphs = text(component.findall('description/p'), locale)
        punctuation = '。' if locale in ('ja', 'zh-CN', 'zh-TW') else '.'
        description = '\n\n'.join([summary.rstrip('.。') + punctuation, *paragraphs, '\n'.join(features)])
        row = {**mapping, 'name': name, 'summary': summary, 'description': description,
               'features': features, 'minimumHardware': config['minimumHardware'], 'keywords': text(component.findall('keywords/keyword'), locale),
               'homepage': urls['homepage'], 'support': urls['bugtracker'],
               'privacyPolicyUrl': config['privacyPolicyUrl'], 'windowsTitle': config['windowsTitle']}
        for field, limit in [('name', 30), ('summary', 80), ('description', 4000), ('appleSubtitle', 30)]:
            if not 0 < len(row[field]) <= limit:
                raise ValueError(f'{locale}: {field} exceeds {limit} characters')
        if len(','.join(row['keywords']).encode()) > 100:
            raise ValueError(f'{locale}: Apple keywords exceed 100 UTF-8 bytes')
        if len(row['keywords']) > 7 or any(len(v) > 30 for v in row['keywords']):
            raise ValueError(f'{locale}: Windows keyword limits')
        if len(features) > 20 or any(len(v) > 200 for v in features):
            raise ValueError(f'{locale}: Windows feature limits')
        languages.append(row)
    for key in ('source', 'ui', 'apple', 'play', 'windows'):
        if len({row[key] for row in languages}) != len(languages):
            raise ValueError(f'Duplicate {key} locale')
    return {'schema': 1, 'appstreamSha256': hashlib.sha256(source).hexdigest(), 'languages': languages}


def write_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open('x', encoding='utf-8') as handle:
        json.dump(value, handle, ensure_ascii=False, indent=2)
        handle.write('\n')


def main():
    parser = argparse.ArgumentParser(description='Generate store copy from the canonical AppStream translations.')
    parser.add_argument('--app-repo', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    write_json(args.output, generate(args.app_repo))


if __name__ == '__main__':
    main()
