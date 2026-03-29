"""
Replace hardcoded 'https://sungene.net' with SITE_URL from siteConfig
across all app/ TypeScript source files.

Rules:
  - Template literal: `https://sungene.net/...  ->  `${SITE_URL}/...
  - String literal:  'https://sungene.net/path' -> `${SITE_URL}/path`
  - Bare const:      const baseUrl = 'https://sungene.net' -> const baseUrl = SITE_URL
  - Standalone str:  'https://sungene.net'  -> SITE_URL
  - Emails (contact@sungene.net) are NOT touched.
  - lib/siteConfig.ts itself is excluded.
  - Informational content routes (llms.txt) are excluded.
"""

import os
import re

IMPORT_LINE = "import { SITE_URL } from '@/lib/siteConfig'"

SKIP_PATHS = [
    'lib/siteConfig.ts',
    'scripts/',
    'node_modules',
    '.next',
    '.git',
    'llms.txt',          # static informational content, keep literal URL
]

def should_skip(path: str) -> bool:
    norm = path.replace('\\', '/')
    return any(s in norm for s in SKIP_PATHS)

def process(content: str) -> str:
    # 1. const baseUrl = 'https://sungene.net'  →  const baseUrl = SITE_URL
    content = content.replace(
        "const baseUrl = 'https://sungene.net'",
        "const baseUrl = SITE_URL"
    )

    # 2. Template literals: `https://sungene.net/  →  `${SITE_URL}/
    content = re.sub(r'`https://sungene\.net/', '`${SITE_URL}/', content)

    # 3. String literals with path:
    #    'https://sungene.net/foo'  →  `${SITE_URL}/foo`
    #    "https://sungene.net/foo"  →  `${SITE_URL}/foo`
    content = re.sub(r"'https://sungene\.net(/[^']*)'",
                     lambda m: f'`${{SITE_URL}}{m.group(1)}`', content)
    content = re.sub(r'"https://sungene\.net(/[^"]*)"',
                     lambda m: f'`${{SITE_URL}}{m.group(1)}`', content)

    # 4. Standalone string (no path):
    #    'https://sungene.net'  →  SITE_URL
    content = content.replace("'https://sungene.net'", 'SITE_URL')
    content = content.replace('"https://sungene.net"', 'SITE_URL')

    return content

def ensure_import(content: str) -> str:
    if IMPORT_LINE in content:
        return content
    # Find position after the last import line
    lines = content.split('\n')
    last_import = -1
    for i, line in enumerate(lines):
        if line.startswith('import '):
            last_import = i
    if last_import >= 0:
        lines.insert(last_import + 1, IMPORT_LINE)
    else:
        lines.insert(0, IMPORT_LINE)
    return '\n'.join(lines)

changed = []

for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in ('node_modules', '.next', '.git')]
    for fname in files:
        if not fname.endswith(('.ts', '.tsx')):
            continue
        filepath = os.path.join(root, fname)
        if should_skip(filepath):
            continue
        with open(filepath, encoding='utf-8') as f:
            original = f.read()
        if 'https://sungene.net' not in original:
            continue
        updated = process(original)
        if updated != original:
            # Only add import if SITE_URL or ${SITE_URL} now appears in the file
            if 'SITE_URL' in updated:
                updated = ensure_import(updated)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(updated)
            changed.append(filepath)
            print(f'  updated: {filepath}')

print(f'\n{len(changed)} file(s) updated.')
