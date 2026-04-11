/**
 * Supabase client factory.
 *
 * Three clients are exported:
 *  1. `supabase`        — anon client for Server Components + public pages.
 *                         Uses the RLS "published=true" policies. Safe to run
 *                         anywhere that accepts env vars.
 *  2. `supabaseBrowser` — anon client for use in 'use client' components
 *                         (Admin UI login). Cached singleton per session.
 *  3. `supabaseAdmin`   — service_role client. SERVER-ONLY. Bypasses RLS.
 *                         Use for: reading inquiries table, creating/updating
 *                         testimonials/case_studies/videos from admin UI.
 *
 * NEVER import `supabaseAdmin` from a client component — it will leak the
 * service_role key into the browser bundle.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Deliberately untyped at the Supabase client level — we keep our own Row /
// Insert / Update types in supabase.types.ts and cast at the fetch boundary.
// Supabase's own Database<> generic has a complex shape that doesn't compose
// cleanly with hand-rolled types; an `UntypedClient` is simpler and keeps
// full type safety at the app layer.
type UntypedClient = SupabaseClient

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

function ensureConfigured() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return false
  }
  return true
}

/** Anon client for Server Components (public data reads). */
export function getSupabase(): UntypedClient | null {
  if (!ensureConfigured()) return null
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/** Service-role client for admin / server-only writes. Bypasses RLS. */
export function getSupabaseAdmin(): UntypedClient | null {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/** Browser singleton for Admin UI client components (uses anon key). */
let browserSingleton: UntypedClient | null = null
export function getSupabaseBrowser(): UntypedClient | null {
  if (typeof window === 'undefined') return null
  if (!ensureConfigured()) return null
  if (!browserSingleton) {
    browserSingleton = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'sungene-admin-auth',
      },
    })
  }
  return browserSingleton
}

/** Convenience: is the CMS available (env vars set)? Use to gracefully
 *  degrade public pages that read testimonials / videos / case studies. */
export function cmsEnabled(): boolean {
  return ensureConfigured()
}
