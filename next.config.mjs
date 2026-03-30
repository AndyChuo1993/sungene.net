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
    ],
  },
  async redirects() {
    return [
      // All old service/export pages → machinery
      { source: '/:lang/export-lead-generation', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/distributor-development', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/export-sales-outsourcing', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/b2b-lead-generation', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/sales-outsourcing', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/export-outsourcing', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/services', destination: '/:lang/machinery', permanent: true },
      { source: '/:lang/services/:path*', destination: '/:lang/machinery', permanent: true },
      // Old market/industry/blog → relevant pages
      { source: '/:lang/market/:slug*', destination: '/:lang/industries', permanent: true },
      { source: '/:lang/industry/:slug*', destination: '/:lang/industries', permanent: true },
      { source: '/:lang/blog/:slug+', destination: '/:lang/resources', permanent: true },
      // ── Deduplicated resource articles: old slugs → canonical new slugs ───────
      { source: '/:lang/resources/spice-powder-packaging', destination: '/:lang/resources/spice-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/flour-packaging', destination: '/:lang/resources/flour-packaging-machine-guide', permanent: true },
      { source: '/:lang/resources/sauce-filling', destination: '/:lang/resources/sauce-filling-machine-selection', permanent: true },
      { source: '/:lang/resources/detergent-powder-packaging', destination: '/:lang/resources/detergent-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/what-to-include-in-quote-request', destination: '/:lang/resources/what-to-prepare-before-machine-quote', permanent: true },
      // Old WordPress product pages without lang prefix → homepage
      { source: '/product/:slug*', destination: '/en', permanent: true },
      { source: '/products/:slug*', destination: '/en', permanent: true },

      // Legacy machine SEO pages → consolidated machine landing pages
      { source: '/:lang/pouch-packing-machine', destination: '/:lang/machines/pouch-packing-machine', permanent: true },
      { source: '/:lang/liquid-filling-machine', destination: '/:lang/machines/liquid-filling-machine', permanent: true },
      { source: '/:lang/conveyor-system', destination: '/:lang/machines/conveyor-system', permanent: true },
      { source: '/:lang/powder-packaging-machine', destination: '/:lang/machines/powder-filling-machine', permanent: true },
    ]
  },
}
export default nextConfig
