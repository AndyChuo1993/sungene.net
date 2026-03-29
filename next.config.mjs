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
      { source: '/:lang/resources/:slug+', destination: '/:lang/resources', permanent: true },
      { source: '/:lang/blog/:slug+', destination: '/:lang/resources', permanent: true },
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
