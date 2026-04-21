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
        // Product image CDN — used by sealing/wrapping machine pages
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
      { source: '/:lang/resources/what-to-include-in-quote-request', destination: '/:lang/resources/what-to-prepare-before-sourcing-assessment', permanent: true },
      { source: '/:lang/resources/topic/pouch-packing-machine', destination: '/:lang/resources/route/pouch-packaging', permanent: true },
      { source: '/:lang/resources/topic/powder-filling-machine', destination: '/:lang/resources/route/powder-dosing', permanent: true },
      { source: '/:lang/resources/topic/liquid-filling-machine', destination: '/:lang/resources/route/liquid-filling', permanent: true },
      { source: '/:lang/resources/topic/snack-processing-line', destination: '/:lang/resources/route/food-processing-line', permanent: true },
      { source: '/:lang/resources/topic/conveyor-system', destination: '/:lang/resources/route/conveying-automation', permanent: true },
      { source: '/:lang/recommend', destination: '/:lang/assessment', permanent: true },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies', destination: '/case-studies', permanent: true },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies/:slug', destination: '/case-studies/:slug', permanent: true },
      // Legacy machine SEO pages are handled by proxy.ts (308 redirects with lang detection)
    ]
  },
  async rewrites() {
    // The production nginx proxy redirects non-locale paths to /en/*. Rewrite
    // /:lang/management/* back to the flat non-locale app routes so the admin UI is reachable
    // from /en/management/login, /zh/management, etc.
    return [
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management', destination: '/management' },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/management/:path*', destination: '/management/:path*' },
    ]
  },
}
export default nextConfig
