#!/usr/bin/env node
import { cp, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

async function exists(p) {
  try {
    await stat(p)
    return true
  } catch {
    return false
  }
}

async function ensureDir(p) {
  await mkdir(p, { recursive: true })
}

async function copyDir(src, dest) {
  if (!(await exists(src))) return false
  await ensureDir(dest)
  await cp(src, dest, { recursive: true, force: true })
  return true
}

;(async () => {
  const root = process.cwd()
  const standaloneRoot = path.join(root, '.next', 'standalone')
  if (!(await exists(standaloneRoot))) {
    console.error('✖ Missing .next/standalone. Run `npm run build` first.')
    process.exit(1)
  }

  const copiedPublic = await copyDir(path.join(root, 'public'), path.join(standaloneRoot, 'public'))
  const copiedStatic = await copyDir(path.join(root, '.next', 'static'), path.join(standaloneRoot, '.next', 'static'))

  if (!copiedPublic) console.warn('⚠ No public/ directory found to copy.')
  if (!copiedStatic) console.warn('⚠ No .next/static directory found to copy.')

  // Sync runtime env files into standalone — required because server.js does
  // `process.chdir(__dirname)` on startup (verified at .next/standalone/server.js:6),
  // so Next.js reads .env relative to .next/standalone/ NOT project root. Without
  // this copy, `next build` would wipe any prior manual sync and the running
  // process would silently read stale env values. Discovered 2026-06-04 (Wave 14j-17
  // verifier-flagged): server-side .env retarget of INQUIRY_TO from contact@sungenelite.com
  // to andy@sungene.net,contact@sungene.net was applied to project-root .env only,
  // and the running standalone process never picked it up — admin inquiry emails
  // continued going to the parked legacy Elite domain. This copy makes the
  // build-and-deploy pipeline consistent with the running cwd.
  const envFiles = ['.env', '.env.production', '.env.production.local', '.env.local']
  for (const name of envFiles) {
    const src = path.join(root, name)
    if (await exists(src)) {
      const dest = path.join(standaloneRoot, name)
      await cp(src, dest)
      console.log(`✓ Synced ${name} → standalone`)
    }
  }
})()
