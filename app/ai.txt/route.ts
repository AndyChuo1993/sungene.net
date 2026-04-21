import { SITE_URL } from '@/lib/siteConfig'

export async function GET() {
  const body = [
    `site: ${SITE_URL}`,
    `sitemap: ${SITE_URL}/sitemap.xml`,
    `sitemap-images: ${SITE_URL}/sitemap-images.xml`,
    `llms: ${SITE_URL}/llms.txt`,
    `llms-full: ${SITE_URL}/llms-full.txt`,
    `notes: SunGene is an industrial equipment & automation sourcing partner across Taiwan and China.`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
