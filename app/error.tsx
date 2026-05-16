'use client'
import { useEffect } from 'react'
import Link from 'next/link'

// Nested error boundary — catches errors inside a route segment but allows
// the root layout (Header/Footer) to keep rendering. global-error.tsx covers
// catastrophic root-layout failures.
export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', 'route_error', {
        error_message: (error?.message || 'unknown').slice(0, 150),
        error_digest: error?.digest || 'none',
        page_path: window.location.pathname,
      })
    }
  }, [error])

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">Page error</div>
        <h1 className="mb-3 text-2xl font-bold text-gray-900">Something went wrong</h1>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          We couldn&rsquo;t load this section. Try again, or browse from the homepage.
        </p>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-brand-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Try again
          </button>
          <Link
            href="/en"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Homepage
          </Link>
        </div>
        {error?.digest && (
          <p className="mt-6 font-mono text-xs text-gray-400">ref: {error.digest}</p>
        )}
      </div>
    </div>
  )
}
