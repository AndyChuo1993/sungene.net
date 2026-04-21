import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const LANGS = ['zh', 'en', 'cn', 'fr', 'es', 'pt', 'ko', 'ja', 'ar', 'th', 'vi', 'de']
const TARGET_NAMES = ['metaTitles', 'metaDescs']

function walk(dir) {
  const out = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next') continue
      out.push(...walk(full))
    } else {
      out.push(full)
    }
  }
  return out
}

function extractObjectLiteral(source, startIndex) {
  const openIndex = source.indexOf('{', startIndex)
  if (openIndex === -1) return null

  let i = openIndex
  let depth = 0
  let inSingle = false
  let inDouble = false
  let inTemplate = false
  let escaped = false

  for (; i < source.length; i++) {
    const ch = source[i]

    if (escaped) {
      escaped = false
      continue
    }
    if (ch === '\\') {
      escaped = true
      continue
    }

    if (!inDouble && !inTemplate && ch === "'" && !inSingle) {
      inSingle = true
      continue
    }
    if (inSingle && ch === "'") {
      inSingle = false
      continue
    }

    if (!inSingle && !inTemplate && ch === '"' && !inDouble) {
      inDouble = true
      continue
    }
    if (inDouble && ch === '"') {
      inDouble = false
      continue
    }

    if (!inSingle && !inDouble && ch === '`') {
      inTemplate = !inTemplate
      continue
    }

    if (inSingle || inDouble || inTemplate) continue

    if (ch === '{') depth++
    if (ch === '}') {
      depth--
      if (depth === 0) {
        return source.slice(openIndex, i + 1)
      }
    }
  }

  return null
}

function findLangKeys(objectLiteral) {
  const keys = new Set()
  const re = /^\s*([a-z]{2})\s*:/gm
  let m
  while ((m = re.exec(objectLiteral))) {
    keys.add(m[1])
  }
  return keys
}

function checkFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8')
  const issues = []

  for (const name of TARGET_NAMES) {
    const re = new RegExp(`\\bconst\\s+${name}\\b[\\s\\S]*?=\\s*\\{`, 'm')
    const match = re.exec(src)
    if (!match) continue

    const obj = extractObjectLiteral(src, match.index)
    if (!obj) continue

    const keys = findLangKeys(obj)
    if (keys.size === 0) continue

    const missing = LANGS.filter((l) => !keys.has(l))
    if (missing.length > 0) {
      issues.push({ name, missing })
    }
  }

  return issues
}

function main() {
  const root = process.cwd()
  const targetDir = path.join(root, 'app', '[lang]')
  const files = walk(targetDir).filter((p) => p.endsWith(`${path.sep}page.tsx`))

  const allIssues = []
  for (const f of files) {
    const issues = checkFile(f)
    if (issues.length > 0) {
      allIssues.push({ file: f, issues })
    }
  }

  if (allIssues.length === 0) {
    process.stdout.write('OK: metaTitles/metaDescs cover all languages in app/[lang] pages.\n')
    process.exit(0)
  }

  process.stdout.write('Missing meta language keys detected:\n')
  for (const entry of allIssues) {
    process.stdout.write(`- ${path.relative(root, entry.file)}\n`)
    for (const issue of entry.issues) {
      process.stdout.write(`  - ${issue.name}: missing ${issue.missing.join(', ')}\n`)
    }
  }
  process.exit(1)
}

main()

