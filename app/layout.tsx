import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'

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
  const langMap: Record<string, string> = { en: 'en', zh: 'zh-Hant', cn: 'zh-Hans', fr: 'fr', es: 'es' }
  const htmlLang = langMap[lang || ''] || 'en'

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
