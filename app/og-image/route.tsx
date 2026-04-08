import { ImageResponse } from 'next/og'
import { SITE_URL } from '@/lib/siteConfig'
import { normalizeLang } from '@/lib/seo'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = normalizeLang(searchParams.get('lang'))
  const title = (searchParams.get('title') || 'SunGene Machinery').trim().slice(0, 80)
  const desc = (searchParams.get('desc') || 'Packaging machinery, food processing equipment, filling & sealing systems, and automation from Taiwan.').trim().slice(0, 160)
  const path = (searchParams.get('path') || '').trim().slice(0, 80)

  const logo = new URL('/logo/sungene.png', SITE_URL).toString()

  const langLabel: Record<string, string> = {
    en: 'Taiwan Manufacturer',
    zh: '台灣製造商',
    cn: '台湾制造商',
    fr: 'Fabricant à Taïwan',
    es: 'Fabricante de Taiwán',
    pt: 'Fabricante de Taiwan',
    ko: '대만 제조업체',
    ja: '台湾メーカー',
    ar: 'مصنّع من تايوان',
    th: 'ผู้ผลิตจากไต้หวัน',
    vi: 'Nhà sản xuất Đài Loan',
    de: 'Hersteller aus Taiwan',
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0b1220 0%, #0f1b36 45%, #0b1220 100%)',
          color: '#ffffff',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={logo} alt="" width={56} height={56} style={{ borderRadius: 12 }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 0.2 }}>SunGene Machinery</div>
              <div style={{ fontSize: 16, opacity: 0.85 }}>{langLabel[lang] || langLabel.en}</div>
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              padding: '8px 12px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              opacity: path ? 1 : 0,
            }}
          >
            {path}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.2 }}>{title}</div>
          <div style={{ fontSize: 26, lineHeight: 1.25, opacity: 0.88 }}>{desc}</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.9 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ fontSize: 16, padding: '10px 14px', borderRadius: 999, background: 'rgba(59,130,246,0.22)', border: '1px solid rgba(59,130,246,0.35)' }}>CE</div>
            <div style={{ fontSize: 16, padding: '10px 14px', borderRadius: 999, background: 'rgba(34,197,94,0.18)', border: '1px solid rgba(34,197,94,0.30)' }}>OEM/ODM</div>
            <div style={{ fontSize: 16, padding: '10px 14px', borderRadius: 999, background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.30)' }}>Factory Direct</div>
          </div>
          <div style={{ fontSize: 16 }}>sungene.net</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
