import copy
import csv
import importlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'site/scripts/store'))
listings = importlib.import_module('listings')
windows = importlib.import_module('windows')
apple = importlib.import_module('apple')


class StorePreparation(unittest.TestCase):
    def test_appstream_translations_and_aliases_generate_without_english_fallback(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'apps/layer-linux/art.capycanvas.CapyCanvas.metainfo.xml'
            path.parent.mkdir(parents=True)
            rows = listings.configuration()['locales']
            def translated(tag, value):
                return ''.join(f'<{tag} xml:lang="{r["source"].replace("-", "_")}">{value}</{tag}>' for r in rows)
            body = '<component>' + translated('name', 'Capy Canvas') + translated('summary', 'Draw')
            body += '<description>' + translated('p', 'Paint and edit photos') + '</description><screenshots>'
            for value in ('Paint', 'Sketch', 'Photo'):
                body += '<screenshot>' + translated('caption', value) + '</screenshot>'
            body += '</screenshots><keywords>' + translated('keyword', 'Art') + '</keywords>'
            body += '<url type="homepage">https://example.com/</url><url type="bugtracker">https://example.com/help</url></component>'
            path.write_text(body)
            actual = listings.generate(directory)
            self.assertEqual(len(actual['languages']), 15)
            japanese = next(r for r in actual['languages'] if r['source'] == 'ja')
            self.assertEqual(japanese['description'], 'Draw。\n\nPaint and edit photos\n\nPaint\nSketch\nPhoto')
            path.write_text(body.replace('<name xml:lang="ja">Capy Canvas</name>', ''))
            with self.assertRaisesRegex(ValueError, 'Missing AppStream translation'):
                listings.generate(directory)

    def test_unicode_config_does_not_depend_on_the_windows_default_encoding(self):
        original = io.open
        def windows_open(file, mode='r', buffering=-1, encoding=None, *args, **kwargs):
            if 'b' not in mode and encoding in (None, 'locale'):
                encoding = 'cp1252'
            return original(file, mode, buffering, encoding, *args, **kwargs)
        with patch('io.open', windows_open):
            config = listings.configuration()
        self.assertEqual(next(r['appleSubtitle'] for r in config['locales'] if r['source'] == 'ja'), 'スケッチ・ペイント・写真編集')

    def export(self):
        headers = windows.FIXED + ['en-us', 'ja-jp', 'fr-fr']
        names = ['Title', 'ShortDescription', 'Description', 'Feature1', 'Feature2', 'SearchTerm1',
                 'MinimumHardwareReq1', 'RecommendedHardwareReq1', 'FutureField', 'DesktopScreenshot1', 'DesktopScreenshotCaption1']
        rows = []
        for index, field in enumerate(names):
            rows.append(dict(zip(headers, [field, str(index), 'Relative path' if field == 'DesktopScreenshot1' else 'Text', '', 'English', 'Japanese', 'French'])))
        rows[-2].update({'en-us': 'https://example.com/en.png', 'ja-jp': 'https://example.com/ja.png', 'fr-fr': 'https://example.com/fr.png'})
        return headers, rows

    def test_image_only_import_keeps_every_list_row_and_other_locale_asset(self):
        headers, original = self.export()
        row = {'windows': 'ja-jp', 'ui': 'ja', 'features': ['Painting', 'Sketch', 'Photo']}
        image = {'language': 'ja', 'scene': 'paint', 'theme': 'light', 'path': Path('fixture.png')}
        actual, files = windows.prepare(headers, original, [row], [image])
        expected = copy.deepcopy(original)
        expected[-2]['ja-jp'] = 'listing-import/assets/ja-jp-paint-light.png'
        expected[-1]['ja-jp'] = 'Painting'
        self.assertEqual(actual, expected)
        self.assertEqual(len(files), 1)
        self.assertEqual(original[3]['ja-jp'], 'Japanese')
        self.assertEqual(actual[6], original[6])

    def test_export_round_trip_preserves_multiline_text_bom_and_unknown_fields(self):
        headers, rows = self.export()
        rows[2]['ja-jp'] = '日本語,「説明」\n次の行'
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'export.csv'
            with path.open('w', encoding='utf-8-sig', newline='') as handle:
                writer = csv.DictWriter(handle, fieldnames=headers)
                writer.writeheader(); writer.writerows(rows)
            self.assertEqual(windows.read_export(path), (headers, rows))
            rows[-2]['fr-fr'] = '../private.png'
            with path.open('w', encoding='utf-8-sig', newline='') as handle:
                writer = csv.DictWriter(handle, fieldnames=headers)
                writer.writeheader(); writer.writerows(rows)
            with self.assertRaisesRegex(ValueError, 'Export again'):
                windows.read_export(path)

    def test_full_export_accepts_and_preserves_repeated_blank_template_rows(self):
        headers, rows = self.export()
        rows.extend([dict.fromkeys(headers, '') for _ in range(2)])
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'export.csv'
            with path.open('w', encoding='utf-8-sig', newline='') as handle:
                writer = csv.DictWriter(handle, fieldnames=headers)
                writer.writeheader(); writer.writerows(rows)
            self.assertEqual(windows.read_export(path), (headers, rows))
            actual, _ = windows.prepare(headers, rows, [{'windows': 'ja-jp', 'ui': 'ja'}])
            self.assertEqual(actual, rows)

    def test_missing_csv_locale_or_field_fails_instead_of_creating_a_sparse_import(self):
        headers, rows = self.export()
        with self.assertRaisesRegex(ValueError, 'Add de-de'):
            windows.prepare(headers, rows, [{'windows': 'de-de'}])
        with self.assertRaisesRegex(ValueError, 'Export lacks'):
            windows.prepare(headers, rows[:-2], [{'windows': 'ja-jp', 'ui': 'ja', 'features': ['Paint']}],
                            [{'language': 'ja', 'scene': 'paint', 'theme': 'light', 'path': Path('fixture.png')}])

    def test_apple_plan_discovers_ids_updates_selected_copy_and_ignores_builds(self):
        class API:
            def __init__(self): self.calls = []
            def list(self, path):
                self.calls.append(path)
                if '/appStoreVersions?' in path:
                    return [{'type': 'appStoreVersions', 'id': 'draft', 'attributes': {'platform': 'IOS', 'versionString': '2.3.4', 'appStoreState': 'PREPARE_FOR_SUBMISSION'}}]
                if '/appInfos?' in path:
                    return [{'type': 'appInfos', 'id': 'editable', 'attributes': {'appStoreState': 'PREPARE_FOR_SUBMISSION'}}]
                if '/appInfoLocalizations?' in path:
                    return [{'id': 'japanese', 'attributes': {'locale': 'ja', 'name': 'Before'}}]
                return []
        api = API()
        row = {'apple': 'ja', 'name': 'カピカン', 'appleSubtitle': '描画', 'privacyPolicyUrl': 'https://example.com/privacy',
               'description': 'Paint', 'keywords': ['Art'], 'homepage': 'https://example.com', 'support': 'https://example.com/help'}
        plan = apple.metadata_plan(api, '123', '2.3.4', ['IOS'], [row])
        self.assertEqual([p['method'] for p in plan], ['PATCH', 'POST'])
        self.assertEqual(plan[0]['path'], '/v1/appInfoLocalizations/japanese')
        self.assertEqual(plan[1]['body']['data']['relationships']['appStoreVersion']['data']['id'], 'draft')
        self.assertFalse(any('build' in path.lower() or 'submission' in path.lower() for path in api.calls))
        with self.assertRaisesRegex(ValueError, 'editable'):
            apple.metadata_plan(api, '123', '9.9.9', ['IOS'], [row])


if __name__ == '__main__':
    unittest.main()
