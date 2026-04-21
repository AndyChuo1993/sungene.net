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
})()
