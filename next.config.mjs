/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
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
      // Old "what-to-include-in-quote-request" and its successor slug were
      // never built as real articles → point both at the resources index.
      { source: '/:lang/resources/what-to-include-in-quote-request', destination: '/:lang/resources', permanent: true },
      { source: '/:lang/resources/what-to-prepare-before-sourcing-assessment', destination: '/:lang/resources', permanent: true },
      // Phantom slugs referenced by old sitemap/articleData but never built.
      // Redirect to closest real article (or resources index) so GSC drops the 404s.
      { source: '/:lang/resources/protein-powder-filling-machine', destination: '/:lang/resources/spice-powder-packaging-machine', permanent: true },
      { source: '/:lang/resources/edible-oil-filling-machine', destination: '/:lang/resources/sauce-filling-machine-selection', permanent: true },
      { source: '/:lang/resources/ce-guide-for-machinery-buyers', destination: '/:lang/resources/fat-sat-acceptance-criteria-packaging-machinery', permanent: true },
      { source: '/:lang/resources/third-party-inspection-vs-fat', destination: '/:lang/resources/fat-sat-acceptance-criteria-packaging-machinery', permanent: true },
      { source: '/:lang/resources/fat-acceptance-checklist-template', destination: '/:lang/resources/fat-sat-acceptance-criteria-packaging-machinery', permanent: true },
      { source: '/:lang/resources/voltage-customization-for-export', destination: '/:lang/resources', permanent: true },
      { source: '/:lang/resources/japan-market-guide', destination: '/:lang/resources', permanent: true },
      { source: '/:lang/resources/quote-comparison-sheet-template', destination: '/:lang/resources', permanent: true },
      { source: '/:lang/resources/taiwan-china-sourcing-partner-model', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/supplier-qualification-checklist', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/how-to-compare-quotes-apples-to-apples', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/incoterms-for-machinery-and-automation', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/payment-terms-risk-control', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/rfq-template-industrial-equipment', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/handover-document-package-template', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang/resources/topic/pouch-packing-machine', destination: '/:lang/resources/route/pouch-packaging', permanent: true },
      { source: '/:lang/resources/topic/powder-filling-machine', destination: '/:lang/resources/route/powder-dosing', permanent: true },
      { source: '/:lang/resources/topic/liquid-filling-machine', destination: '/:lang/resources/route/liquid-filling', permanent: true },
      { source: '/:lang/resources/topic/snack-processing-line', destination: '/:lang/resources/route/food-processing-line', permanent: true },
      { source: '/:lang/resources/topic/conveyor-system', destination: '/:lang/resources/route/conveying-automation', permanent: true },
      { source: '/:lang/recommend', destination: '/:lang/contact', permanent: true },
      { source: '/:lang/assessment', destination: '/:lang/contact', permanent: true },
      { source: '/:lang/assessment/:path*', destination: '/:lang/contact', permanent: true },
      // ── Repositioning redirects: machinery/solutions/industries/markets hubs
      // and machinery-specific landing pages now 308 → /sourcing or /contact.
      // These were holdovers from the previous machinery sales positioning.
      { source: '/:lang(en|zh|cn|fr|es)/solutions', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/solutions/:path*', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machinery', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machinery/:path*', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/industries', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/industries/:path*', destination: '/:lang/sourcing', permanent: true },
      // /machines/* are pure machinery sales pages — redirect to category-specific sourcing anchor on /sourcing.
      { source: '/:lang(en|zh|cn|fr|es)/machines', destination: '/:lang/sourcing#packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/pouch-packing-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/powder-filling-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/liquid-filling-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/snack-processing-line', destination: '/:lang/sourcing/home', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/conveyor-system', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/vacuum-packing-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/shrinking-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/pillow-type-packing-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/stretch-wrapping-machine', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/hand-sealer-impulse-type', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/foot-sealer-impulse-type', destination: '/:lang/sourcing/packaging', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/machines/extra-long-hand-sealer-impulse-type', destination: '/:lang/sourcing/packaging', permanent: true },
      // /quote/* — quote forms for individual machines → /contact (general inquiry form)
      { source: '/:lang(en|zh|cn|fr|es)/quote', destination: '/:lang/contact', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/quote/:path*', destination: '/:lang/contact', permanent: true },
      // /markets and /markets/* were country pages framed around machinery export.
      // Until refreshed for the new positioning, route everything to /sourcing.
      { source: '/:lang(en|zh|cn|fr|es)/markets', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(en|zh|cn|fr|es)/markets/:path*', destination: '/:lang/sourcing', permanent: true },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies', destination: '/:lang/sourcing', permanent: true },
      { source: '/case-studies', destination: '/en/sourcing', permanent: true },
      { source: '/case-studies/:slug', destination: '/en/sourcing', permanent: true },
      { source: '/:lang(zh|en|cn|fr|es|pt|ko|ja|ar|th|vi|de)/case-studies/:slug', destination: '/:lang/sourcing', permanent: true },
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
