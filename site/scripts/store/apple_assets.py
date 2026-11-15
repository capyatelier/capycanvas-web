import argparse
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import json
import os
from pathlib import Path
import time
import urllib.error
import urllib.parse
import urllib.request

from apple import Apple, NoRedirect
from assets import captures
from listings import configuration, write_json


PLATFORMS = {'mac': 'MAC_APP_STORE', 'ipad': 'IPAD_APP_STORE', 'iphone': 'IPHONE_APP_STORE'}
PROCESSED = {'PREPARE_FOR_SUBMISSION', 'READY_FOR_REVIEW', 'WAITING_FOR_REVIEW', 'IN_REVIEW', 'ACCEPTED', 'APPROVED'}
ORDER = {(scene, theme): index for index, (theme, scene) in enumerate(
    (theme, scene) for theme in ('light', 'dark') for scene in ('paint', 'sketch', 'photo'))}


def image_key(image):
    return image['device'], image['language'], image['scene'], image['theme']


def load_images(manifests):
    images = {}
    for manifest in manifests:
        for item in captures(manifest, 'apple'):
            key = image_key(item)
            if key in images or item['device'] not in PLATFORMS or (item['scene'], item['theme']) not in ORDER:
                raise ValueError(f'Duplicate or unsupported native capture: {key}')
            images[key] = item
    return list(images.values())


def specification(reference, image):
    platform = PLATFORMS[image['device']]
    feature = next(f for f in reference['features'] if f['featureId'] == 'APP_STORE_VERSIONS')
    policy = next(p for p in feature['placementPolicies'] if p['placementType'] == 'APP_SCREENSHOT')
    limits = {group: entry['maxCount'] for entry in policy['groupLimits'] for group in entry['groupIds']}
    groups = {g['placementProfileGroupId'] for g in reference['placementProfileGroups'] if g['platform'] == platform}
    type_info = next(t for t in reference['placementTypes'] if t['placementTypeId'] == 'APP_SCREENSHOT')
    if 'APP_SCREENSHOTS_AND_PREVIEWS' not in type_info['acceptsAssetCategories']:
        raise ValueError('Screenshot assets are unavailable for this app')
    matches = []
    size = image['path'].stat().st_size
    for spec in reference['imageSpecs']:
        dimensions = spec['dimensions']
        if not (dimensions['minWidth'] <= image['width'] <= dimensions['maxWidth'] and
                dimensions['minHeight'] <= image['height'] <= dimensions['maxHeight'] and
                'APP_SCREENSHOT' in spec['compatiblePlacementTypes'] and '.png' in spec['fileExtensions'] and
                size <= spec['maxFileSize']):
            continue
        for mapping in type_info['specMappings']:
            group = mapping['placementGroupId']
            if group in groups and group in limits and spec['specId'] in mapping['specs']:
                matches.append({'spec_id': spec['specId'], 'placement_group': group, 'limit': limits[group]})
    if len(matches) != 1:
        raise ValueError(f'Expected one live screenshot specification for {image_key(image)}; found {len(matches)}')
    return matches[0]


def discover(api, app, version, images, languages):
    if not app.isdecimal():
        raise ValueError('App ID must be numeric')
    versions = api.list(f'/v1/apps/{app}/appStoreVersions?limit=200')
    parents = {}
    for platform in {('MAC_OS' if i['device'] == 'mac' else 'IOS') for i in images}:
        matching = [v for v in versions if v['attributes']['platform'] == platform and v['attributes']['versionString'] == version]
        if len(matching) != 1 or matching[0]['attributes']['appStoreState'] != 'PREPARE_FOR_SUBMISSION':
            raise ValueError(f'{platform} {version} must have one editable draft')
        parents[platform] = matching[0]
    library = api.request('GET', f'/v1/apps/{app}/assetLibrary')['data']
    reference = api.list('/v1/appAssetLibraryRefData')[0]['attributes']
    localizations = {platform: {row['attributes']['locale']: row['id'] for row in api.list(
        f"/v1/appStoreVersions/{parent['id']}/appStoreVersionLocalizations?limit=200")} for platform, parent in parents.items()}
    locale_map = {row['ui']: row['apple'] for row in languages}
    plan = []
    for image in images:
        locale = locale_map[image['language']]
        platform = 'MAC_OS' if image['device'] == 'mac' else 'IOS'
        if locale not in localizations[platform]:
            raise ValueError(f'Create the {platform}/{locale} text localization before placing screenshots')
        plan.append({**image, **specification(reference, image), 'locale': locale,
                     'localization_id': localizations[platform][locale], 'version_id': parents[platform]['id'], 'platform': platform})
    return library['id'], plan


def reference_name(image):
    return 'store-screenshot-' + image['sha256']


def send_part(operation, data):
    parsed = urllib.parse.urlsplit(operation['url'])
    if parsed.scheme != 'https' or parsed.username or parsed.password:
        raise ValueError('Apple upload operations must use HTTPS')
    headers = {h['name']: h['value'] for h in operation['requestHeaders']}
    if any(name.lower() in ('authorization', 'cookie') for name in headers):
        raise ValueError('Media upload operations must not carry account credentials')
    request = urllib.request.Request(operation['url'], data=data, method=operation['method'], headers=headers)
    try:
        with urllib.request.build_opener(NoRedirect()).open(request, timeout=180) as response:
            if not 200 <= response.status < 300:
                raise RuntimeError(f'Apple media transfer returned HTTP {response.status}')
    except urllib.error.HTTPError as error:
        raise RuntimeError(f'Apple media transfer returned HTTP {error.code}') from None


def transfer(operations, data, transmit=send_part):
    position = 0
    for operation in sorted(operations, key=lambda o: o['offset']):
        offset, length = operation['offset'], operation['length']
        if offset != position or length <= 0 or offset + length > len(data):
            raise ValueError('Upload operations must exactly cover the image without overlap')
        position += length
    if position != len(data):
        raise ValueError('Upload operations do not cover the image')
    for operation in operations:
        transmit(operation, data[operation['offset']:operation['offset'] + operation['length']])


def prepare_image(api, library, image, existing=None, transmit=send_part, pause=time.sleep, timeout=180):
    data = image['path'].read_bytes()
    if hashlib.sha256(data).hexdigest() != image['sha256']:
        raise ValueError('Screenshot changed after validation')
    resource = existing
    if resource is None:
        resource = api.request('POST', '/v1/appAssetLibraryImages', {'data': {
            'type': 'appAssetLibraryImages', 'attributes': {
                'fileName': f"{image['device']}-{image['language']}-{image['scene']}-{image['theme']}.png",
                'fileSize': len(data), 'category': 'APP_SCREENSHOTS_AND_PREVIEWS', 'referenceName': reference_name(image)},
            'relationships': {'assetLibrary': {'data': {'type': 'appAssetLibraries', 'id': library}}}}})['data']
    else:
        resource = api.request('GET', '/v1/appAssetLibraryImages/' + resource['id'])['data']
    path = '/v1/appAssetLibraryImages/' + resource['id']
    attributes = resource['attributes']
    if attributes['referenceName'] != reference_name(image) or attributes['fileSize'] != len(data):
        raise ValueError('Existing asset does not match the intended screenshot')
    if attributes['state'] == 'AWAITING_UPLOAD':
        transfer(attributes['uploadOperations'], data, transmit)
        api.request('PATCH', path, {'data': {'type': 'appAssetLibraryImages', 'id': resource['id'],
                                          'attributes': {'uploaded': True}}})
        resource = api.request('GET', path)['data']
    deadline = time.monotonic() + timeout
    while resource['attributes']['state'] not in PROCESSED:
        state = resource['attributes']['state']
        if state in {'FAILED', 'REJECTED', 'ARCHIVED'}:
            raise ValueError(f"Screenshot {resource['id']} is {state}; inspect its stateDetails before changing the asset")
        if time.monotonic() >= deadline:
            raise TimeoutError(f"Apple image {resource['id']} has not reached a usable state: {state}")
        pause(1)
        resource = api.request('GET', path)['data']
    attributes = resource['attributes']
    if attributes['specId'] != image['spec_id'] or [attributes['imageAsset']['width'], attributes['imageAsset']['height']] != [image['width'], image['height']]:
        raise ValueError('Apple processed the image under an unexpected specification')
    return {'id': resource['id'], 'sha256': image['sha256'], 'spec_id': attributes['specId'], 'state': attributes['state']}


def upload_images(api, library, images, workers=4, report=lambda value: None):
    known = {}
    for resource in api.list(f'/v1/appAssetLibraries/{library}/images?limit=200'):
        name = resource['attributes'].get('referenceName')
        if not isinstance(name, str) or not name.startswith('store-screenshot-'):
            continue
        if name in known:
            raise ValueError('Duplicate asset reference names; inspect the library before writing')
        known[name] = resource
    unique = {image['sha256']: image for image in images}
    result = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        tasks = {pool.submit(prepare_image, api, library, image, known.get(reference_name(image))): digest
                 for digest, image in unique.items()}
        try:
            for task in as_completed(tasks):
                digest = tasks[task]
                result[digest] = task.result()
                report(dict(result))
        except BaseException:
            for task in tasks:
                task.cancel()
            raise
    return result


def placements(api, localization, group):
    query = urllib.parse.urlencode({'filter[placementType]': 'APP_SCREENSHOT', 'filter[placementGroup]': group,
                                    'include': 'image', 'sort': 'placementGroupPosition', 'limit': 200})
    return api.list(f'/v1/appStoreVersionLocalizations/{localization}/placements?{query}')


def require_draft(api, image):
    parent = api.request('GET', f"/v1/appStoreVersionLocalizations/{image['localization_id']}?include=appStoreVersion")
    version = next((r for r in parent.get('included', []) if r['type'] == 'appStoreVersions' and r['id'] == image['version_id']), None)
    if version is None or version['attributes']['appStoreState'] != 'PREPARE_FOR_SUBMISSION':
        raise ValueError('The screenshot parent is no longer the selected editable draft')


def verify_bindings(rows, group):
    for row in rows:
        attributes = row['attributes']
        if attributes.get('placementType') != 'APP_SCREENSHOT' or attributes.get('placementGroup') != group or attributes.get('mediaType') != 'IMAGE':
            raise ValueError('Apple returned a placement outside the selected screenshot group')
        if attributes['state'] not in {'ACTIVE', 'PARENT_PREPARE_FOR_SUBMISSION'}:
            raise ValueError('A screenshot placement is not an active binding in the selected draft')


def place_group(api, images, uploaded, replace=False, expected_before=None):
    images = sorted(images, key=lambda image: ORDER[(image['scene'], image['theme'])])
    if {(image['scene'], image['theme']) for image in images} != set(ORDER) or len(images) != 6:
        raise ValueError('Each selected localization/device group needs all six reviewed scene/theme variants')
    first = images[0]
    group, localization = first['placement_group'], first['localization_id']
    if any(i['placement_group'] != group or i['localization_id'] != localization or i['version_id'] != first['version_id'] for i in images) or len(images) > first['limit']:
        raise ValueError('Screenshot placement group or live count limit differs')
    require_draft(api, first)
    desired = [uploaded[image['sha256']]['id'] for image in images]
    before = placements(api, localization, group)
    if expected_before is not None and before != expected_before:
        raise ValueError('Screenshot group changed since the upload plan was prepared')
    verify_bindings(before, group)
    existing = {p['relationships']['image']['data']['id']: p for p in before}
    if len(existing) != len(before):
        raise ValueError('Duplicate image placements need inspection')
    if [p['relationships']['image']['data']['id'] for p in before] == desired:
        return {'localization': localization, 'group': group, 'image_ids': desired,
                'placement_ids': [p['id'] for p in before], 'verified': True}
    obsolete = [p for key, p in existing.items() if key not in desired]
    if obsolete and not replace:
        raise ValueError('Existing screenshots differ; inspect the current group before selecting --replace')
    if placements(api, localization, group) != before:
        raise ValueError('Screenshot group changed while preparing its update')
    for resource in obsolete:
        api.request('DELETE', '/v1/appAssetLibraryPlacements/' + resource['id'])
    ordered = []
    for asset in desired:
        if asset in existing:
            resource = existing[asset]
        else:
            resource = api.request('POST', '/v1/appAssetLibraryPlacements', {'data': {
                'type': 'appAssetLibraryPlacements', 'attributes': {'placementType': 'APP_SCREENSHOT', 'placementGroup': group},
                'relationships': {'image': {'data': {'type': 'appAssetLibraryImages', 'id': asset}},
                                  'appStoreVersionLocalization': {'data': {'type': 'appStoreVersionLocalizations', 'id': localization}}}}})['data']
        ordered.append(resource['id'])
    api.request('POST', '/v1/appAssetLibraryPlacementOrderingRequests', {'data': {
        'type': 'appAssetLibraryPlacementOrderingRequests', 'attributes': {'placementGroup': group},
        'relationships': {'orderedPlacements': {'data': [{'type': 'appAssetLibraryPlacements', 'id': identity} for identity in ordered]},
                          'appStoreVersionLocalization': {'data': {'type': 'appStoreVersionLocalizations', 'id': localization}}}}})
    actual = placements(api, localization, group)
    if [p['relationships']['image']['data']['id'] for p in actual] != desired:
        raise ValueError('Saved Apple screenshot order differs from the reviewed pack')
    verify_bindings(actual, group)
    require_draft(api, first)
    return {'localization': localization, 'group': group, 'image_ids': desired, 'placement_ids': ordered, 'verified': True}


def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser(description='Plan or upload native Apple screenshots into editable drafts without submitting review.')
    parser.add_argument('--app-id', required=True)
    parser.add_argument('--version', required=True)
    parser.add_argument('--manifest', type=Path, action='append', required=True)
    parser.add_argument('--locale', action='append', help='Apple locale; omit to select all supplied captures')
    parser.add_argument('--phase', choices=['images', 'all'], default='all')
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--replace', action='store_true', help='Replace existing screenshots only in selected groups')
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    languages = configuration()['locales']
    images = load_images(args.manifest)
    if args.locale:
        selected = [row for row in languages if row['apple'] in args.locale]
        if {row['apple'] for row in selected} != set(args.locale):
            parser.error('Unknown Apple locale')
        languages = selected
        images = [image for image in images if image['language'] in {row['ui'] for row in languages}]
    if not images:
        parser.error('No selected captures')
    api = Apple(os.environ['APP_STORE_CONNECT_TOKEN'])
    library, plan = discover(api, args.app_id, args.version, images, languages)
    groups = defaultdict(list)
    for image in plan:
        groups[(image['localization_id'], image['placement_group'])].append(image)
    before = {}
    resources = None
    if args.phase == 'all':
        for key, group in groups.items():
            if len(group) != 6 or {(i['scene'], i['theme']) for i in group} != set(ORDER):
                parser.error('Every selected placement group needs all six scene/theme variants; use --phase images for staging only')
            before[key] = placements(api, *key)
            if before[key] and not args.replace:
                wanted = {reference_name(image) for image in group}
                if resources is None:
                    resources = {r['id']: r for r in api.list(f'/v1/appAssetLibraries/{library}/images?limit=200')}
                if any(resources[p['relationships']['image']['data']['id']]['attributes'].get('referenceName') not in wanted for p in before[key]):
                    parser.error('Existing screenshots differ; inspect the current group before selecting --replace')
    result = {'app': args.app_id, 'version': args.version, 'phase': args.phase, 'apply': args.apply,
              'images': [{k: value for k, value in image.items() if k != 'path'} for image in plan],
              'before': [{'localization': key[0], 'group': key[1], 'placements': value} for key, value in before.items()],
              'uploaded': {}, 'placements': []}
    write_json(args.output, result)
    if not args.apply:
        print(f'Planned {len(images)} images and {len(before)} placement groups.')
        return
    def save():
        temporary = args.output.with_name(args.output.name + '.tmp')
        with temporary.open('x', encoding='utf-8') as handle:
            json.dump(result, handle, indent=2, ensure_ascii=False)
            handle.write('\n')
        temporary.replace(args.output)
    def progress(uploaded):
        result['uploaded'] = uploaded
        save()
        if len(uploaded) % 10 == 0 or len(uploaded) == len(images):
            print(f'Processed {len(uploaded)}/{len(images)} images', flush=True)
    uploaded = upload_images(api, library, plan, report=progress)
    if args.phase == 'all':
        for key, group in groups.items():
            result['placements'].append(place_group(api, group, uploaded, args.replace, before[key]))
            save()
    print(f'Verified {len(uploaded)} image assets and {len(result["placements"])} screenshot groups. Draft remains unsubmitted.')


if __name__ == '__main__':
    main()
