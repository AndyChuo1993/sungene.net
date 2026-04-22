import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'SunGene | Industrial Equipment & Automation Sourcing Partner',
  description: 'SunGene supports sourcing for packaging systems, industrial equipment, automation components, and selected technical projects across Taiwan and China. Built for fit, compatibility, and long-term reliability.',
  keywords: ['industrial equipment sourcing', 'automation components sourcing', 'packaging systems supplier', 'industrial sourcing partner', 'technical sourcing China'],
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
      <body className={`${inter.variable} min-h-screen font-sans`}>
        {children}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', { send_page_view: false });
            `}</Script>
          </>
        )}
      </body>
    </html>
  )
}
