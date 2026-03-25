import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'

export const metadata = {
  title: 'SunGene | Machinery Solutions for Global Buyers',
  description: 'SunGene provides machinery solutions for packaging, food processing, and industrial applications — helping global buyers move from machine selection to export delivery with greater clarity and efficiency.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const h = await headers()
  const lang = h.get('x-lang')
  const htmlLang = lang === 'en' ? 'en' : (lang === 'cn' ? 'zh-Hans' : 'zh-Hant')

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
