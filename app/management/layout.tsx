import type { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SunGene Admin',
  robots: { index: false, follow: false, noarchive: true, nosnippet: true, noimageindex: true },
}

/**
 * Admin section layout.
 * - Blocks robots at the metadata level (noindex)
 * - Strips the public Header/Footer (wrapped at [lang]/layout.tsx, not here)
 * - Ensures we never leak admin UI text into the public site's SEO
 */
export default function ManagementLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
