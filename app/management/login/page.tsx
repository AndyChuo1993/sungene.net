'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { getSupabaseBrowser, cmsEnabled } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!cmsEnabled()) {
      setError('Supabase 環境變數未設定。請在 Cloud Run 設定 NEXT_PUBLIC_SUPABASE_URL 與 NEXT_PUBLIC_SUPABASE_ANON_KEY。')
      return
    }
    const supabase = getSupabaseBrowser()
    if (!supabase) {
      setError('驗證用戶端無法使用。')
      return
    }
    setLoading(true)
    setError(null)
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (authError) {
      setError(authError.message)
      return
    }
    router.push('/management')
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h1 className="mt-4 text-xl font-bold text-gray-950">SunGene 後台管理</h1>
          <p className="mt-1 text-sm text-gray-500">請登入管理詢價、客戶評價、案例研究與影片。</p>
        </div>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">電子郵件</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </label>

        <label className="mt-4 block">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">密碼</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30"
          />
        </label>

        {error ? (
          <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? '登入中…' : '登入'}
        </button>

        <p className="mt-6 text-center text-xs text-gray-500">
          第一次使用？請至{' '}
          <a
            href="https://supabase.com/dashboard/project/ndnztfowkdhsltvghcuv/auth/users"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent-600 hover:underline"
          >
            Supabase → Authentication → Users
          </a>
          {' '}建立管理員帳號
        </p>
      </form>
    </main>
  )
}
