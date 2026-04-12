/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-cdn.trae.ai',
        pathname: '/obj/**',
      },
      {
        // Wuu Sheng (吳勝) product CDN — used by sealing/wrapping machine pages
        protocol: 'https',
        hostname: 'img.mweb.com.tw',
        pathname: '/thumb/**',
      },
    ],
  },
  async redirects() {
    return [
      // ── Deduplicated resource articles: old slugs → canonical new slugs ───────
      { source: '/:lang/resources/spice-powder-packaging', destination: '/:lang/resources/spice-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/flour-packaging', destination: '/:lang/resources/flour-packaging-machine-guide', permanent: true },
      { source: '/:lang/resources/sauce-filling', destination: '/:lang/resources/sauce-filling-machine-selection', permanent: true },
      { source: '/:lang/resources/detergent-powder-packaging', destination: '/:lang/resources/detergent-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/what-to-include-in-quote-request', destination: '/:lang/resources/what-to-prepare-before-machine-quote', permanent: true },
      // Legacy machine SEO pages are handled by middleware.ts (308 redirects with lang detection)
    ]
  },
  async rewrites() {
    // The production nginx proxy redirects non-locale paths to /en/*. Rewrite
    // /:lang/management/* and /:lang/case-studies/* back to the flat non-locale
    // app routes so the admin UI and public case-studies pages are reachable
    // from /en/management/login, /zh/case-studies, etc.
    return [
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management', destination: '/management' },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management/:path*', destination: '/management/:path*' },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies', destination: '/case-studies' },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies/:slug', destination: '/case-studies/:slug' },
    ]
  },
}
export default nextConfig
