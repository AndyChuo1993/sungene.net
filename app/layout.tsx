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
  title: 'SunGene | Taiwan + China sourcing partner for packaging, home & garden brands',
  description: 'Sourcing partner with teams in Taichung and Xiamen. We buy from vetted Taiwan + China factories for packaging, home, garden and beauty brands. On-site QC. Alibaba 5-star verified. MOQ USD 1,000.',
  keywords: ['Taiwan sourcing partner', 'China sourcing agent', 'packaging sourcing', 'home goods sourcing', 'garden products sourcing', 'Alibaba supplier', 'factory inspection'],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const h = await headers()
  const lang = h.get('x-lang')
  const langMap: Record<string, string> = { en: 'en', zh: 'zh-Hant', cn: 'zh-Hans', fr: 'fr', es: 'es' }
  const htmlLang = langMap[lang || ''] || 'en'
  const dir = 'ltr'

  return (
    <html lang={htmlLang} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen font-sans`}>
        {children}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            {/* Consent Mode v2 — MUST run before gtag/js so the very first hit is consent-aware. */}
            <Script id="ga4-consent-default" strategy="beforeInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              (function(){
                var prior = null;
                try { prior = localStorage.getItem('cookie-consent'); } catch(_) {}
                var granted = prior === 'granted';
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: granted ? 'granted' : 'denied',
                  wait_for_update: 500,
                });
                gtag('set', 'ads_data_redaction', true);
                gtag('set', 'url_passthrough', true);
              })();
            `}</Script>
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
