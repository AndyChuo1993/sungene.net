import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

// AI assistants / answer-engine crawlers that we explicitly welcome.
// Keeping them allowed (not blocked) helps the site show up inside
// ChatGPT, Gemini, Claude, Perplexity, Copilot, Meta AI, etc.
const AI_USER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'GoogleOther',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'Bingbot',
  'CCBot',
  'cohere-ai',
  'cohere-training-data-crawler',
  'YouBot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'DuckAssistBot',
  'Bytespider',
  'MistralAI-User',
  'PanguBot',
  'PhindBot',
  'Diffbot',
  'AwarioSmartBot',
  'AwarioRssBot',
  'SemrushBot-OCOB',
  'ImagesiftBot',
  'Timpibot',
]

export default async function robots(): Promise<MetadataRoute.Robots> {
  const commonAllow = ['/', '/sitemap.xml', '/llms.txt', '/llms-full.txt']
  const commonDisallow = ['/api/', '/_next/', '/og-image']

  const aiRules = AI_USER_AGENTS.map((ua) => ({
    userAgent: ua,
    allow: commonAllow,
    disallow: commonDisallow,
  }))

  return {
    rules: [
      {
        userAgent: '*',
        allow: commonAllow,
        disallow: commonDisallow,
      },
      ...aiRules,
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-images.xml`,
    ],
    host: SITE_URL,
  }
}
