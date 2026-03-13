import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'SunGene',
  description: 'SunGene website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans">{children}</body>
    </html>
  )
}

