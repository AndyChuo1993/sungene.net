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
      // Legacy machine SEO pages → consolidated machine landing pages
      { source: '/:lang/pouch-packing-machine', destination: '/:lang/machines/pouch-packing-machine', permanent: true },
      { source: '/:lang/liquid-filling-machine', destination: '/:lang/machines/liquid-filling-machine', permanent: true },
      { source: '/:lang/conveyor-system', destination: '/:lang/machines/conveyor-system', permanent: true },
      { source: '/:lang/powder-packaging-machine', destination: '/:lang/machines/powder-filling-machine', permanent: true },
    ]
  },
}
export default nextConfig
