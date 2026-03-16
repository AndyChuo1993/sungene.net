import '../styles/globals.css'
import React from 'react'
import { headers } from 'next/headers'

export const metadata = {
  title: 'SunGene | 外銷客戶開發與海外市場拓展',
  description: 'SunGene 協助外銷企業開發海外買家、建立經銷通路，並把外銷開發流程做得更穩定、更可追蹤。',
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
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">{children}</body>
    </html>
  )
}
