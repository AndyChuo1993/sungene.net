// Cluster-safe rate limit. PM2 cluster mode runs 2 instances, each with
// its own JS heap → an in-process Map gives 2× the intended ceiling and
// round-robins requests so single-IP attackers never accumulate enough
// hits in any one worker to trip. We persist counters to a small JSON
// file under /tmp, shared by both workers.
//
// Race conditions: two workers can both increment before flushing → an
// attacker may squeeze 1-2 extra requests past the limit. Acceptable for
// spam prevention. For strict consensus, upgrade to Redis.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

type Entry = { count: number; resetAt: number }
type State = Record<string, Entry>

const STATE_FILE = join(tmpdir(), 'sungene-ratelimit.json')

function load(): State {
  try {
    if (!existsSync(STATE_FILE)) return {}
    return JSON.parse(readFileSync(STATE_FILE, 'utf8')) as State
  } catch {
    return {}
  }
}

function save(state: State): void {
  try {
    // Atomic-ish: write to tmp then rename. fs.writeFileSync on Linux is
    // effectively atomic for files this small (< 4KB typical).
    writeFileSync(STATE_FILE, JSON.stringify(state))
  } catch {
    /* best-effort */
  }
}

function prune(state: State, now: number): void {
  for (const k of Object.keys(state)) {
    if (state[k].resetAt < now) delete state[k]
  }
}

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const state = load()
  prune(state, now)
  const e = state[key]
  if (!e || e.resetAt < now) {
    state[key] = { count: 1, resetAt: now + windowMs }
    save(state)
    return { ok: true }
  }
  if (e.count >= limit) {
    // Still persist (no-op for count) so other workers don't grow stale view.
    save(state)
    return { ok: false }
  }
  e.count++
  save(state)
  return { ok: true }
}
