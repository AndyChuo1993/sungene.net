'use client'
/**
 * Client-side auth gate for /management pages.
 * Uses Supabase Auth — if no session, redirects to /management/login.
 *
 * We keep auth client-side (not middleware) because:
 *  1. Middleware would need the service_role to introspect sessions reliably
 *  2. This admin is single-user, low-traffic — client gate is sufficient
 *  3. Any write actually hits Supabase which enforces RLS server-side anyway
 */
import { useEffect, useState, type ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { getSupabaseBrowser, cmsEnabled } from '@/lib/supabase'

type Session = {
  email: string
} | null

export default function AdminGate({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [session, setSession] = useState<Session | 'loading'>('loading')

  useEffect(() => {
    if (!cmsEnabled()) {
      setSession(null)
      return
    }
    const supabase = getSupabaseBrowser()
    if (!supabase) {
      setSession(null)
      return
    }
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setSession({ email: data.session.user.email || '' })
      } else {
        setSession(null)
      }
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s ? { email: s.user.email || '' } : null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session === null && pathname !== '/management/login') {
      router.replace('/management/login')
    }
  }, [session, pathname, router])

  async function signOut() {
    const supabase = getSupabaseBrowser()
    await supabase?.auth.signOut()
    router.replace('/management/login')
  }

  if (session === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">
        Loading…
      </div>
    )
  }
  if (!session) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-60 flex-col border-r border-gray-200 bg-white md:flex">
        <div className="border-b border-gray-200 p-5">
          <div className="text-lg font-bold text-gray-950">SunGene</div>
          <div className="text-xs text-gray-500">Admin</div>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          <NavLink href="/management" label="Dashboard" />
          <NavLink href="/management/inquiries" label="Inquiries" />
          <NavLink href="/management/testimonials" label="Testimonials" />
          <NavLink href="/management/case-studies" label="Case Studies" />
          <NavLink href="/management/videos" label="Videos" />
        </nav>
        <div className="border-t border-gray-200 p-4 text-xs">
          <div className="truncate text-gray-700" title={session.email}>
            {session.email}
          </div>
          <button
            type="button"
            onClick={signOut}
            className="mt-2 text-gray-500 hover:text-gray-700"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-x-auto">{children}</main>
    </div>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/management' && pathname.startsWith(href))
  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
        active ? 'bg-accent-50 text-accent-700' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  )
}
