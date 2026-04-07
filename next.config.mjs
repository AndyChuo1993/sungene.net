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
      // ── Deduplicated resource articles: old slugs → canonical new slugs ───────
      { source: '/:lang/resources/spice-powder-packaging', destination: '/:lang/resources/spice-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/flour-packaging', destination: '/:lang/resources/flour-packaging-machine-guide', permanent: true },
      { source: '/:lang/resources/sauce-filling', destination: '/:lang/resources/sauce-filling-machine-selection', permanent: true },
      { source: '/:lang/resources/detergent-powder-packaging', destination: '/:lang/resources/detergent-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/what-to-include-in-quote-request', destination: '/:lang/resources/what-to-prepare-before-machine-quote', permanent: true },
      // Legacy machine SEO pages are handled by middleware.ts (308 redirects with lang detection)
    ]
  },
}
export default nextConfig
