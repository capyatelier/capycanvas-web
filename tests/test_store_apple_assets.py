import copy
import hashlib
import importlib
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'site/scripts/store'))
assets = importlib.import_module('apple_assets')


class AppleAssets(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        path = Path(self.directory.name) / 'screenshot.png'
        path.write_bytes(b'reviewed-native-pixels')
        self.image = dict(path=path, device='iphone', language='ja', scene='paint', theme='light',
                          width=1206, height=2622, sha256=hashlib.sha256(path.read_bytes()).hexdigest(),
                          spec_id='live-spec', placement_group='CURRENT_PHONE_GROUP', localization_id='localized', version_id='draft', limit=10)

    def test_specifications_and_groups_come_from_live_reference_data(self):
        reference = {'features': [{'featureId': 'APP_STORE_VERSIONS', 'placementPolicies': [
            {'placementType': 'APP_SCREENSHOT', 'groupLimits': [{'groupIds': ['CURRENT_PHONE_GROUP'], 'maxCount': 10}]}]}],
            'placementProfileGroups': [{'placementProfileGroupId': 'CURRENT_PHONE_GROUP', 'platform': 'IPHONE_APP_STORE'}],
            'placementTypes': [{'placementTypeId': 'APP_SCREENSHOT', 'acceptsAssetCategories': ['APP_SCREENSHOTS_AND_PREVIEWS'],
                                'specMappings': [{'placementGroupId': 'CURRENT_PHONE_GROUP', 'specs': ['live-spec']}]}],
            'imageSpecs': [{'specId': 'live-spec', 'dimensions': {'minWidth': 1206, 'maxWidth': 1206, 'minHeight': 2622, 'maxHeight': 2622},
                            'compatiblePlacementTypes': ['APP_SCREENSHOT'], 'fileExtensions': ['.png'], 'maxFileSize': 1000}]}
        result = assets.specification(reference, self.image)
        self.assertEqual(result, {'spec_id': 'live-spec', 'placement_group': 'CURRENT_PHONE_GROUP', 'limit': 10})
        with self.assertRaisesRegex(ValueError, 'found 0'):
            assets.specification(reference, dict(self.image, height=2556))

    def test_multipart_transfer_checks_complete_nonoverlapping_coverage_before_writing(self):
        sent = []
        parts = [{'offset': 3, 'length': 3}, {'offset': 0, 'length': 3}]
        assets.transfer(parts, b'abcdef', lambda operation, data: sent.append(data))
        self.assertEqual(sent, [b'def', b'abc'])
        sent.clear()
        with self.assertRaisesRegex(ValueError, 'without overlap'):
            assets.transfer([{'offset': 0, 'length': 4}, {'offset': 3, 'length': 3}], b'abcdef', lambda *args: sent.append(args))
        self.assertFalse(sent)

    def test_upload_reserves_transfers_commits_then_verifies_processing_without_legacy_checksum(self):
        image = self.image
        resource = {'type': 'appAssetLibraryImages', 'id': 'reserved', 'attributes': {
            'referenceName': assets.reference_name(image), 'fileSize': image['path'].stat().st_size,
            'state': 'AWAITING_UPLOAD', 'uploadOperations': [{'offset': 0, 'length': image['path'].stat().st_size,
                'method': 'PUT', 'url': 'https://uploads.example.test/image', 'requestHeaders': [{'name': 'Content-Type', 'value': 'image/png'}]}]}}
        calls, transfers = [], []
        class API:
            def request(self, method, path, body=None):
                calls.append((method, path, body))
                if method == 'PATCH': resource['attributes']['state'] = 'COMPLETE'
                if method == 'GET':
                    self.reads = getattr(self, 'reads', 0) + 1
                    resource['attributes'].update(state='COMPLETE' if self.reads == 1 else 'PREPARE_FOR_SUBMISSION', specId='live-spec', imageAsset={'width': 1206, 'height': 2622})
                return {'data': copy.deepcopy(resource)}
        result = assets.prepare_image(API(), 'library', image,
                                      transmit=lambda op, data: transfers.append((op, data)), pause=lambda seconds: None)
        self.assertEqual(result['state'], 'PREPARE_FOR_SUBMISSION')
        self.assertEqual(transfers[0][1], image['path'].read_bytes())
        patch = next(body for method, path, body in calls if method == 'PATCH')
        self.assertEqual(patch['data']['attributes'], {'uploaded': True})
        self.assertTrue(all('/appAssetLibraryImages' in path for method, path, body in calls if method != 'GET'))
        calls.clear()
        assets.prepare_image(API(), 'library', image, existing=resource)
        self.assertTrue(all(method == 'GET' for method, path, body in calls))

    def test_failed_processing_is_reported_without_reserving_or_deleting_other_assets(self):
        image = self.image
        resource = {'id': 'failed', 'attributes': {'referenceName': assets.reference_name(image),
                    'fileSize': image['path'].stat().st_size, 'state': 'FAILED'}}
        calls = []
        class API:
            def request(self, method, path, body=None):
                calls.append((method, path)); return {'data': resource}
        with self.assertRaisesRegex(ValueError, 'FAILED'):
            assets.prepare_image(API(), 'library', image, existing=resource)
        self.assertEqual(calls, [('GET', '/v1/appAssetLibraryImages/failed')])

    def group_fixture(self):
        images, uploaded = [], {}
        for scene, theme in assets.ORDER:
            image = dict(self.image, scene=scene, theme=theme, sha256=scene + theme)
            images.append(image); uploaded[image['sha256']] = {'id': 'image-' + image['sha256']}
        records, calls = [], []
        class API:
            def list(self, path): return copy.deepcopy(records)
            def request(self, method, path, body=None):
                calls.append((method, path, body))
                if method == 'GET':
                    return {'data': {'id': 'localized'}, 'included': [{'type': 'appStoreVersions', 'id': 'draft', 'attributes': {'appStoreState': 'PREPARE_FOR_SUBMISSION'}}]}
                if path == '/v1/appAssetLibraryPlacements':
                    resource = {'id': 'placement-' + str(len(records)), 'attributes': {'state': 'ACTIVE', 'mediaType': 'IMAGE', **body['data']['attributes']},
                                'relationships': body['data']['relationships']}
                    records.append(resource); return {'data': copy.deepcopy(resource)}
                if path == '/v1/appAssetLibraryPlacementOrderingRequests':
                    order = [r['id'] for r in body['data']['relationships']['orderedPlacements']['data']]
                    records.sort(key=lambda r: order.index(r['id']))
                return {}
        return API(), images, uploaded, records, calls

    def test_placement_order_is_explicit_and_other_store_resources_are_never_mutated(self):
        api, images, uploaded, records, calls = self.group_fixture()
        result = assets.place_group(api, list(reversed(images)), uploaded)
        self.assertTrue(result['verified'])
        self.assertEqual([r['relationships']['image']['data']['id'] for r in records], [uploaded[i['sha256']]['id'] for i in images])
        self.assertEqual([c for c in calls if c[0] != 'GET'][-1][1], '/v1/appAssetLibraryPlacementOrderingRequests')
        self.assertTrue(all(path in ['/v1/appAssetLibraryPlacements', '/v1/appAssetLibraryPlacementOrderingRequests'] for method, path, body in calls if method != 'GET'))
        calls.clear()
        self.assertTrue(assets.place_group(api, images, uploaded)['verified'])
        self.assertTrue(all(method == 'GET' for method, path, body in calls))

    def test_partial_or_unreviewed_existing_groups_fail_before_writing(self):
        api, images, uploaded, records, calls = self.group_fixture()
        with self.assertRaisesRegex(ValueError, 'all six'):
            assets.place_group(api, images[:-1], uploaded)
        records.append({'id': 'existing', 'attributes': {'state': 'ACTIVE', 'mediaType': 'IMAGE', 'placementType': 'APP_SCREENSHOT', 'placementGroup': 'CURRENT_PHONE_GROUP'}, 'relationships': {'image': {'data': {'id': 'unrelated'}}}})
        with self.assertRaisesRegex(ValueError, 'Existing screenshots differ'):
            assets.place_group(api, images, uploaded)
        self.assertFalse([c for c in calls if c[0] != 'GET'])

    def test_replacement_refuses_changes_after_the_plan_before_deleting_anything(self):
        api, images, uploaded, records, calls = self.group_fixture()
        records.append({'id': 'other', 'attributes': {'state': 'ACTIVE', 'mediaType': 'IMAGE', 'placementType': 'APP_SCREENSHOT', 'placementGroup': 'CURRENT_PHONE_GROUP'},
                        'relationships': {'image': {'data': {'id': 'other-image'}}}})
        with self.assertRaisesRegex(ValueError, 'changed since the upload plan'):
            assets.place_group(api, images, uploaded, replace=True, expected_before=[])
        self.assertFalse([c for c in calls if c[0] != 'GET'])

    def test_other_screenshot_groups_are_rejected_before_replacement(self):
        api, images, uploaded, records, calls = self.group_fixture()
        records.append({'id': 'other', 'attributes': {'state': 'ACTIVE', 'mediaType': 'IMAGE', 'placementType': 'APP_SCREENSHOT', 'placementGroup': 'OTHER_GROUP'},
                        'relationships': {'image': {'data': {'id': 'other-image'}}}})
        with self.assertRaisesRegex(ValueError, 'outside the selected screenshot group'):
            assets.place_group(api, images, uploaded, replace=True)
        self.assertFalse([c for c in calls if c[0] != 'GET'])

    def test_reviewed_parent_is_rejected_before_placement_writes(self):
        api, images, uploaded, records, calls = self.group_fixture()
        class ReviewedAPI:
            def request(self, method, path, body=None):
                calls.append((method, path, body))
                return {'data': {'id': 'localized'}, 'included': [{'type': 'appStoreVersions', 'id': 'draft', 'attributes': {'appStoreState': 'WAITING_FOR_REVIEW'}}]}
        with self.assertRaisesRegex(ValueError, 'no longer the selected editable draft'):
            assets.place_group(ReviewedAPI(), images, uploaded)
        self.assertEqual([c[0] for c in calls], ['GET'])


if __name__ == '__main__':
    unittest.main()
