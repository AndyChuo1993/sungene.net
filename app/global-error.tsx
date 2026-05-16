'use client'
import { useEffect } from 'react'

// App Router top-level error boundary. Replaces the root layout when a
// server/client component throws above any nested error boundary.
// Must include <html><body> because it replaces RootLayout.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', 'app_error', {
        error_message: (error?.message || 'unknown').slice(0, 150),
        error_digest: error?.digest || 'none',
        page_path: window.location.pathname,
      })
    }
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif', background: '#0c1a3d', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <div style={{ fontSize: 14, letterSpacing: 2, opacity: 0.6, marginBottom: 8 }}>SUNGENE</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 12px' }}>We hit a snag</h1>
          <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.85, margin: '0 0 24px' }}>
            Something went wrong while loading this page. Our team has been notified. You can try again, or head back to the homepage.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => reset()}
              style={{ background: '#fff', color: '#0c1a3d', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
            >
              Try again
            </button>
            <a
              href="/en"
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
            >
              Back to homepage
            </a>
          </div>
          {error?.digest && (
            <p style={{ marginTop: 24, fontSize: 12, opacity: 0.4, fontFamily: 'ui-monospace, monospace' }}>
              ref: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
