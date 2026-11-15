import argparse
import copy
import csv
import json
import os
from pathlib import Path
import re
import shutil

from assets import captures


FIXED = ['Field', 'ID', 'Type (Type)', 'default']


def read_export(path):
    with Path(path).open(encoding='utf-8-sig', newline='') as handle:
        reader = csv.DictReader(handle)
        headers, rows = reader.fieldnames, list(reader)
    if not headers or headers[:4] != FIXED or len(set(headers)) != len(headers):
        raise ValueError('Expected a complete Partner Center listing export')
    named = [r['Field'] for r in rows if r['Field']]
    if len(set(named)) != len(named) or any(None in r or any(v is None for v in r.values()) for r in rows):
        raise ValueError('Duplicate fields or malformed export rows')
    for row in rows:
        if row['Type (Type)'].startswith('Relative path'):
            if any(value and not value.startswith('https://') for key, value in row.items() if key in headers[3:]):
                raise ValueError('Export again: existing assets must be HTTPS URLs')
    if not {'Title', 'ShortDescription', 'Description', 'Feature1', 'SearchTerm1', 'MinimumHardwareReq1', 'RecommendedHardwareReq1', 'DesktopScreenshot1', 'DesktopScreenshotCaption1'} <= {r['Field'] for r in rows}:
        raise ValueError('The complete listing export is required, including screenshot and text rows')
    return headers, rows


def prepare(headers, original, languages, images=(), update_text=False):
    rows = copy.deepcopy(original)
    fields = {row['Field']: row for row in rows}
    changed = set()
    copies = {}

    def set_cell(field, locale, value):
        if field not in fields:
            raise ValueError(f'Export lacks {field}; export the full current listing')
        fields[field][locale] = value
        changed.add((field, locale))

    for row in languages:
        locale = row['windows']
        if locale not in headers[4:]:
            raise ValueError(f'Add {locale} in Partner Center before exporting the complete CSV')
        if update_text:
            for field, key in [('Title', 'windowsTitle'), ('ShortDescription', 'summary'), ('Description', 'description')]:
                set_cell(field, locale, row[key])
            for prefix, key in [('Feature', 'features'), ('SearchTerm', 'keywords'), ('MinimumHardwareReq', 'minimumHardware')]:
                slots = [field for field in fields if re.fullmatch(prefix + r'\d+', field)]
                if len(slots) < len(row[key]):
                    raise ValueError(f'Export has insufficient {prefix} rows')
                for field in slots:
                    index = int(field[len(prefix):]) - 1
                    set_cell(field, locale, row[key][index] if index < len(row[key]) else '')
        selected = [image for image in images if image['language'] == row['ui']]
        for index, image in enumerate(selected, 1):
            filename = f"{locale}-{image['scene']}-{image['theme']}.png"
            copies[filename] = image['path']
            set_cell(f'DesktopScreenshot{index}', locale, 'listing-import/assets/' + filename)
            set_cell(f'DesktopScreenshotCaption{index}', locale, row['features'][['paint', 'sketch', 'photo'].index(image['scene'])])
    for before, after in zip(original, rows):
        for column in headers:
            if before[column] != after[column] and (before['Field'], column) not in changed:
                raise ValueError('An unselected export cell changed')
    return rows, copies


def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser(description='Preserve a full Store export while changing selected listing cells.')
    parser.add_argument('--export', type=Path, required=True)
    parser.add_argument('--listings', type=Path, required=True)
    parser.add_argument('--locale', action='append', required=True, help='Windows locale; repeat to select more')
    parser.add_argument('--captures', type=Path)
    parser.add_argument('--limit', type=int, default=6, help='Screenshots per selected locale; 1 makes a small test import')
    parser.add_argument('--text', action='store_true', help='Update selected text, feature, keyword and minimum-hardware cells')
    parser.add_argument('--output', type=Path, required=True, help='New parent directory for listing-import/')
    args = parser.parse_args()
    if not 1 <= args.limit <= 6 or not (args.text or args.captures):
        parser.error('Choose --text and/or --captures; --limit must be 1–6')
    languages = json.loads(args.listings.read_text(encoding='utf-8'))['languages']
    selected = [r for r in languages if r['windows'] in args.locale]
    if {r['windows'] for r in selected} != set(args.locale):
        parser.error('Unknown locale')
    images = captures(args.captures, 'windows') if args.captures else []
    ordered = []
    for row in selected:
        variants = [i for i in images if i['language'] == row['ui']]
        variants.sort(key=lambda i: (['light', 'dark'].index(i['theme']), ['paint', 'sketch', 'photo'].index(i['scene'])))
        if args.captures and (len(variants) != 6 or any(i['device'] != 'desktop' for i in variants)):
            raise ValueError(f"Expected six native desktop captures for {row['ui']}")
        ordered.extend(variants[:args.limit])
    headers, original = read_export(args.export)
    rows, files = prepare(headers, original, selected, ordered, args.text)
    args.output.mkdir(parents=True, exist_ok=False)
    folder = args.output / 'listing-import'
    (folder / 'assets').mkdir(parents=True)
    for name, source in files.items():
        shutil.copyfile(source, folder / 'assets' / name)
    with (folder / 'store-listing.csv').open('w', encoding='utf-8-sig', newline='') as handle:
        writer = csv.DictWriter(handle, fieldnames=headers)
        writer.writeheader()
        writer.writerows(rows)
    print(f'Prepared {len(selected)} locales and {len(files)} PNGs; all other export cells are preserved.')


if __name__ == '__main__':
    main()
