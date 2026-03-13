/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:lang/export-lead-generation',
        destination: '/:lang/services/export-lead-generation',
        permanent: true,
      },
      {
        source: '/:lang/distributor-development',
        destination: '/:lang/services/distributor-development',
        permanent: true,
      },
      {
        source: '/:lang/sales-outsourcing',
        destination: '/:lang/services/export-sales-outsourcing',
        permanent: true,
      },
      {
        source: '/:lang/services/lead-generation',
        destination: '/:lang/services/export-lead-generation',
        permanent: true,
      },
      {
        source: '/:lang/services/cold-outreach',
        destination: '/:lang/services/export-sales-outsourcing',
        permanent: true,
      },
      {
        source: '/:lang/services/sales-outsourcing',
        destination: '/:lang/services/export-sales-outsourcing',
        permanent: true,
      },
      {
        source: '/:lang/export-outsourcing',
        destination: '/:lang/services/export-sales-outsourcing',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
