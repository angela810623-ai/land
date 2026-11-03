"""Publish this project using the user's normal Git Credential Manager login.

Credentials are used only in memory. This script never prints tokens, changes
global Git settings, force-pushes, or overwrites an unrelated GitHub repository.
"""
import json
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPO_NAME = 'land'
PROJECT_ID = json.loads((ROOT / '.openai/hosting.json').read_text(encoding='utf-8'))['project_id']

def git(*args, input_text=None, check=True):
    result = subprocess.run(['git', '-c', f'safe.directory={ROOT.as_posix()}', *args],
                            cwd=ROOT, input=input_text, text=True, capture_output=True)
    if check and result.returncode:
        raise RuntimeError(result.stderr.strip() or 'Git operation failed')
    return result

credential = git('-c', 'credential.interactive=never', 'credential', 'fill',
                 input_text='protocol=https\nhost=github.com\n\n', check=False)
fields = dict(line.split('=', 1) for line in credential.stdout.splitlines() if '=' in line)
token = fields.get('password')
if not token:
    print(json.dumps({'status': 'needs_login', 'message': 'Complete GitHub device authentication first.'}))
    sys.exit(2)

def api(method, path, body=None, allow_404=False):
    request = urllib.request.Request('https://api.github.com' + path,
        data=json.dumps(body).encode() if body is not None else None, method=method,
        headers={'Authorization': 'Bearer ' + token, 'Accept': 'application/vnd.github+json',
                 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'terrain-marble-publisher',
                 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(request, timeout=40) as response:
            return json.loads(response.read() or b'{}')
    except urllib.error.HTTPError as error:
        if error.code == 404 and allow_404:
            return None
        payload = json.loads(error.read() or b'{}')
        raise RuntimeError(f'GitHub HTTP {error.code}: {payload.get("message", "Request failed")}') from None

user = api('GET', '/user')
owner = user['login']
base = f'/repos/{owner}/{REPO_NAME}'
repo = api('GET', base, allow_404=True)
if repo:
    marker = api('GET', base + '/contents/.openai/hosting.json', allow_404=True)
    if marker:
        import base64
        existing = json.loads(base64.b64decode(marker['content']))
        if existing.get('project_id') != PROJECT_ID:
            raise RuntimeError('An unrelated repository already uses this name. No files were changed.')
    elif repo.get('size', 0):
        raise RuntimeError('An unrelated repository already uses this name. No files were changed.')
else:
    repo = api('POST', '/user/repos', {'name': REPO_NAME, 'private': False,
        'description': '地形彈珠賽：五人展場互動遊戲，捏地形、答題集彈珠、落球決賽。',
        'homepage': 'https://terrain-marble-festival.workspace-503122.chatgpt.site/',
        'auto_init': False})

remote = repo['clone_url']
existing_remote = git('remote', 'get-url', 'github', check=False)
if existing_remote.returncode == 0 and existing_remote.stdout.strip() != remote:
    raise RuntimeError('The github remote points to another repository. No remote was overwritten.')
if existing_remote.returncode:
    git('remote', 'add', 'github', remote)

git('add', '--', 'README.md', 'GITHUB-PAGES.txt', 'docs', 'scripts/publish-github.py')
if git('diff', '--cached', '--quiet', check=False).returncode == 1:
    git('-c', f'user.name={owner}', '-c', f'user.email={user["id"]}+{owner}@users.noreply.github.com',
        'commit', '-m', 'Add GitHub Pages game entrance and publishing documentation')
git('push', 'github', 'HEAD:main')
head = git('rev-parse', 'HEAD').stdout.strip()
print(json.dumps({'status': 'source_pushed', 'repository': repo['html_url'], 'commit': head}), flush=True)

pages = api('GET', base + '/pages', allow_404=True)
source = {'branch': 'main', 'path': '/docs'}
if pages:
    if pages.get('source') != source or pages.get('build_type') != 'legacy':
        api('PUT', base + '/pages', {'source': source, 'build_type': 'legacy'})
else:
    api('POST', base + '/pages', {'source': source, 'build_type': 'legacy'})
pages = api('GET', base + '/pages')
page_url = pages['html_url']
print(json.dumps({'status': 'pages_enabled', 'repository': repo['html_url'], 'url': page_url}), flush=True)

for attempt in range(36):
    build = api('GET', base + '/pages/builds/latest', allow_404=True)
    if build and build.get('status') == 'errored':
        raise RuntimeError('GitHub Pages build failed: ' + str(build.get('error', {}).get('message')))
    if build and build.get('status') == 'built':
        with urllib.request.urlopen(page_url, timeout=40) as response:
            html = response.read().decode('utf-8')
            if response.status != 200 or '地形彈珠賽' not in html:
                raise RuntimeError('Pages URL is reachable but the game entrance could not be verified.')
        print(json.dumps({'status': 'published', 'repository': repo['html_url'], 'url': page_url,
                          'commit': head, 'http_status': 200}), flush=True)
        break
    time.sleep(10)
else:
    print(json.dumps({'status': 'build_pending', 'repository': repo['html_url'], 'url': page_url}), flush=True)
