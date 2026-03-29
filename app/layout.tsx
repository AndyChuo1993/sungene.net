import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'
import Script from 'next/script'

export const metadata = {
  title: 'SunGene | Industrial Machinery Manufacturer & Exporter from Taiwan',
  description: 'SunGene manufactures and exports packaging machinery, food processing equipment, filling & sealing systems, and automated production lines. CE certified, export to 50+ countries. Factory-direct pricing from Taiwan.',
  keywords: ['packaging machinery manufacturer', 'food processing equipment', 'filling machine supplier', 'industrial machinery Taiwan', 'packaging machine exporter'],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const h = await headers()
  const lang = h.get('x-lang')
  const langMap: Record<string, string> = { en: 'en', zh: 'zh-Hant', cn: 'zh-Hans', fr: 'fr', es: 'es', pt: 'pt', ko: 'ko', ja: 'ja', ar: 'ar', th: 'th', vi: 'vi', de: 'de' }
  const htmlLang = langMap[lang || ''] || 'en'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={htmlLang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans">
        {children}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  )
}
