import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const contentType = 'image/png'

/**
 * Dynamic OG image card. Brand-styled gradient + title + tag chips.
 * Called as /og-image?lang=xx&title=...&desc=...&path=...
 */
const ACTIVE_LANGS = new Set(['en', 'zh', 'cn', 'fr', 'es'])

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  let lang = (searchParams.get('lang') || 'en').slice(0, 5)
  // Force fallback for dropped langs — saves SSR crashes and gives consistent share image
  if (!ACTIVE_LANGS.has(lang)) lang = 'en'
  const titleRaw = (searchParams.get('title') || 'SunGene — Taiwan-based Trading Company').replace(/★/g, '')
  const descRaw = (searchParams.get('desc') || 'Custom packaging, home & living, outdoor — pre-shipment AQL by in-house staff.').replace(/★/g, '')
  // Tighter slicing prevents Node satori crashes on long RTL strings
  const title = titleRaw.slice(0, 90)
  const desc = descRaw.slice(0, 180)
  try {

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          background:
            'linear-gradient(135deg, #0c1a3d 0%, #142554 40%, #1b3268 70%, #243d7a 100%)',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* accent glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(245,158,11,0.20) 0%, rgba(245,158,11,0) 70%)',
          }}
        />
        {/* accent glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(20,37,84,0.45) 0%, rgba(20,37,84,0) 70%)',
          }}
        />

        {/* top kicker row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, zIndex: 1 }}>
          <div style={{ width: 44, height: 4, background: '#f59e0b', borderRadius: 2 }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#fbbf24',
            }}
          >
            SUNGENE · TAICHUNG · XIAMEN
          </div>
        </div>

        {/* body title + desc */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, zIndex: 1, maxWidth: 1000 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 56 : 72,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {desc ? (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                color: '#cbd5e1',
                fontWeight: 400,
              }}
            >
              {desc}
            </div>
          ) : null}
        </div>

        {/* bottom trust chips row */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', zIndex: 1 }}>
          {[
            'Verified Alibaba storefront',
            'In-house staff AQL',
            'On-site QC',
            'MOQ USD 1,000',
            `sungene.net/${lang}`,
          ].map((c, i) => (
            <div
              key={i}
              style={{
                padding: '12px 22px',
                background: i === 4 ? '#f59e0b' : 'rgba(255,255,255,0.10)',
                color: i === 4 ? '#0c1a3d' : 'white',
                fontSize: 22,
                fontWeight: 700,
                borderRadius: 10,
                border: i === 4 ? 'none' : '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
  } catch (e) {
    // Fallback: return a static brand PNG redirect for any rendering failure
    return Response.redirect(new URL('/og/og.png', req.url).toString(), 302)
  }
}
