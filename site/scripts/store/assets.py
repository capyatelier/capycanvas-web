import hashlib
import json
from pathlib import Path
import struct


def captures(path, platform):
    path = Path(path).resolve()
    manifest = json.loads(path.read_text(encoding='utf-8'))
    if manifest.get('schema') != 1 or manifest.get('platform') != platform:
        raise ValueError('Capture manifest schema or native platform differs')
    seen = set()
    result = []
    for image in manifest['captures']:
        key = tuple(image[field] for field in ('language', 'device', 'scene', 'theme'))
        if key in seen or image['theme'] not in ('light', 'dark'):
            raise ValueError(f'Duplicate or invalid variant: {key}')
        seen.add(key)
        relative = Path(image['file'])
        file = (path.parent / relative).resolve()
        if relative.is_absolute() or not file.is_relative_to(path.parent) or file.is_symlink():
            raise ValueError('Capture files must stay inside the manifest directory')
        data = file.read_bytes()
        if data[:8] != b'\x89PNG\r\n\x1a\n' or len(data) < 33:
            raise ValueError('Expected a PNG screenshot')
        width, height = struct.unpack('>II', data[16:24])
        if data[25] not in ((2, 6) if platform == 'windows' else (2,)):
            raise ValueError('Unexpected PNG color format for the selected store')
        if [width, height] != [image['width'], image['height']] or hashlib.sha256(data).hexdigest() != image['sha256']:
            raise ValueError('Capture dimensions or SHA-256 differ')
        if not all(isinstance(manifest.get(k), str) and len(manifest[k]) == length for k, length in [('appRevision', 40), ('recipeSha256', 64), ('binarySha256', 64)]):
            raise ValueError('App and recipe provenance are required')
        result.append({**image, 'path': file})
    if not result:
        raise ValueError('No native captures supplied')
    return result
