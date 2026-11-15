import argparse
import json
import os
from pathlib import Path
import urllib.error
import urllib.parse
import urllib.request

from listings import write_json
from assets import captures


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, file, code, message, headers, url):
        return None


class Apple:
    def __init__(self, token):
        self.token = token

    def request(self, method, path, body=None):
        if not path.startswith('/v1/'):
            raise ValueError('Expected an App Store Connect v1 resource')
        request = urllib.request.Request('https://api.appstoreconnect.apple.com' + path, method=method,
            headers={'Authorization': 'Bearer ' + self.token, 'Content-Type': 'application/json'},
            data=None if body is None else json.dumps(body).encode())
        try:
            with urllib.request.build_opener(NoRedirect()).open(request, timeout=60) as response:
                data = response.read()
                return json.loads(data) if data else {}
        except urllib.error.HTTPError as error:
            raise RuntimeError(f'App Store Connect {method} {path.split("?")[0]}: HTTP {error.code}') from None

    def list(self, path):
        result = []
        while path:
            page = self.request('GET', path)
            result.extend(page['data'])
            next_url = page.get('links', {}).get('next')
            if next_url:
                parsed = urllib.parse.urlsplit(next_url)
                if parsed.scheme != 'https' or parsed.netloc != 'api.appstoreconnect.apple.com':
                    raise ValueError('Unexpected pagination host')
                path = parsed.path + ('?' + parsed.query if parsed.query else '')
            else:
                path = None
        return result


def metadata_plan(api, app, version, platforms, languages):
    versions = api.list(f'/v1/apps/{app}/appStoreVersions?limit=200')
    selected = []
    for platform in platforms:
        matches = [v for v in versions if v['attributes']['versionString'] == version
                   and v['attributes']['platform'] == platform]
        if len(matches) != 1 or matches[0]['attributes']['appStoreState'] != 'PREPARE_FOR_SUBMISSION':
            raise ValueError(f'{platform} {version} must have one editable Prepare for Submission draft')
        selected.append(matches[0])
    infos = [i for i in api.list(f'/v1/apps/{app}/appInfos?limit=200')
             if i['attributes']['appStoreState'] == 'PREPARE_FOR_SUBMISSION']
    if len(infos) != 1:
        raise ValueError('Expected one editable app information record')
    operations = []

    def upsert(parent, relation, resource_type, attributes):
        existing = api.list(f"/v1/{parent['type']}/{parent['id']}/{resource_type}?limit=200")
        for row in languages:
            matches = [v for v in existing if v['attributes']['locale'] == row['apple']]
            if len(matches) > 1:
                raise ValueError('Duplicate Apple localization')
            desired = attributes(row)
            if matches:
                current = matches[0]
                delta = {k: v for k, v in desired.items() if current['attributes'].get(k) != v}
                if not delta:
                    continue
                data = {'type': resource_type, 'id': current['id'], 'attributes': delta}
                operations.append({'method': 'PATCH', 'path': f"/v1/{resource_type}/{current['id']}", 'body': {'data': data}})
            else:
                data = {'type': resource_type, 'attributes': {'locale': row['apple'], **desired},
                        'relationships': {relation: {'data': {'type': parent['type'], 'id': parent['id']}}}}
                operations.append({'method': 'POST', 'path': '/v1/' + resource_type, 'body': {'data': data}})

    upsert(infos[0], 'appInfo', 'appInfoLocalizations',
           lambda r: {'name': r['name'], 'subtitle': r['appleSubtitle'], 'privacyPolicyUrl': r['privacyPolicyUrl']})
    for draft in selected:
        upsert(draft, 'appStoreVersion', 'appStoreVersionLocalizations',
               lambda r: {'description': r['description'], 'keywords': ','.join(r['keywords']),
                          'marketingUrl': r['homepage'], 'supportUrl': r['support']})
    return operations


def screenshot_plan(manifest):
    images = captures(manifest, 'apple')
    groups = {}
    for image in images:
        if image['device'] not in ('mac', 'ipad', 'iphone'):
            raise ValueError('Expected a native Mac, iPad or iPhone capture')
        group = groups.setdefault((image['language'], image['device']), [])
        group.append({k: image[k] for k in ('file', 'width', 'height', 'sha256', 'scene', 'theme')})
    if any(len(items) > 10 for items in groups.values()):
        raise ValueError('Apple accepts at most ten screenshots per device size')
    return {'schema': 1, 'readyForUpload': False,
            'remaining': 'Resolve live screenshot specifications and draft localizations with apple_assets.py; this local handoff does not validate placement eligibility.',
            'groups': [{'language': key[0], 'device': key[1], 'images': value} for key, value in sorted(groups.items())]}


def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser(description='Prepare Apple metadata or a native screenshot handoff; never submit for review.')
    commands = parser.add_subparsers(dest='command', required=True)
    screenshots = commands.add_parser('screenshots')
    screenshots.add_argument('--captures', type=Path, required=True)
    screenshots.add_argument('--output', type=Path, required=True)
    metadata = commands.add_parser('metadata')
    metadata.add_argument('--listings', type=Path, required=True)
    metadata.add_argument('--app-id', required=True)
    metadata.add_argument('--version', required=True)
    metadata.add_argument('--platform', action='append', choices=['IOS', 'MAC_OS'], required=True)
    metadata.add_argument('--locale', action='append', required=True, help='Apple locale; repeat to select more')
    metadata.add_argument('--output', type=Path, required=True)
    metadata.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    if args.command == 'screenshots':
        write_json(args.output, screenshot_plan(args.captures))
        return
    if not args.app_id.isdecimal():
        parser.error('App ID must be numeric')
    rows = json.loads(args.listings.read_text(encoding='utf-8'))['languages']
    selected = [r for r in rows if r['apple'] in args.locale]
    if {r['apple'] for r in selected} != set(args.locale):
        parser.error('Unknown locale')
    api = Apple(os.environ['APP_STORE_CONNECT_TOKEN'])
    operations = metadata_plan(api, args.app_id, args.version, args.platform, selected)
    write_json(args.output, operations)
    if args.apply:
        if metadata_plan(api, args.app_id, args.version, args.platform, selected) != operations:
            raise ValueError('Apple metadata changed while preparing the plan')
        for operation in operations:
            api.request(operation['method'], operation['path'], operation['body'])
        if metadata_plan(api, args.app_id, args.version, args.platform, selected):
            raise ValueError('Apple readback differs from the intended metadata')
    print(f'{len(operations)} metadata operations {"saved and verified" if args.apply else "planned"}.')


if __name__ == '__main__':
    main()
