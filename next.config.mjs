/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
        source: '/:lang/export-sales-outsourcing',
        destination: '/:lang/services/export-sales-outsourcing',
        permanent: true,
      },
      {
        source: '/:lang/market/:slug',
        destination: '/:lang/markets/:slug',
        permanent: true,
      },
      {
        source: '/:lang/industry/:slug',
        destination: '/:lang/industries/:slug',
        permanent: true,
      },
      {
        source: '/:lang/resources/blog/:slug',
        destination: '/:lang/blog/:slug',
        permanent: true,
      },
      {
        source: '/:lang/b2b-lead-generation',
        destination: '/:lang/services/export-lead-generation',
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