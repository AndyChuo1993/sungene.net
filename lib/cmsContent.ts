/**
 * Server-side fetchers for CMS content — testimonials, videos, case studies.
 *
 * These are called from Server Components (machine pages, market pages,
 * industry pages, /case-studies/[slug]) to hydrate real customer data and
 * generate Review / VideoObject / CaseStudy JSON-LD schema.
 *
 * Graceful degradation: if Supabase env vars aren't set, all functions
 * return empty arrays. Public pages continue to render cleanly.
 */

import { getSupabase } from './supabase'
import type { Testimonial, Video, CaseStudy } from './supabase.types'

// Revalidate CMS content every 60 seconds at edge — admin publishes are near-real-time.
const REVALIDATE_SECONDS = 60

async function withCache<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch (err) {
    console.error('[cmsContent] fetch failed:', err)
    return fallback
  }
}

// ─── Testimonials ───────────────────────────────────────────────────────────
export async function getTestimonialsForMachine(slug: string, limit = 6): Promise<Testimonial[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .eq('machine_slug', slug)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

export async function getTestimonialsForIndustry(slug: string, limit = 6): Promise<Testimonial[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .eq('industry_slug', slug)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

export async function getTestimonialsForMarket(slug: string, limit = 6): Promise<Testimonial[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .eq('market_slug', slug)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

export async function getAllPublishedTestimonials(limit = 20): Promise<Testimonial[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

// ─── Videos ────────────────────────────────────────────────────────────────
export async function getVideosForMachine(slug: string, limit = 4): Promise<Video[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('videos')
      .select('*')
      .eq('published', true)
      .eq('machine_slug', slug)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

// ─── Case Studies ──────────────────────────────────────────────────────────
export async function getAllPublishedCaseStudies(): Promise<CaseStudy[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
    return data || []
  }, [])
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const sb = getSupabase()
  if (!sb) return null
  return withCache(async () => {
    const { data } = await sb
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .eq('slug', slug)
      .maybeSingle()
    return data
  }, null)
}

export async function getCaseStudiesForMachine(slug: string, limit = 3): Promise<CaseStudy[]> {
  const sb = getSupabase()
  if (!sb) return []
  return withCache(async () => {
    const { data } = await sb
      .from('case_studies')
      .select('*')
      .eq('published', true)
      .eq('machine_slug', slug)
      .order('published_at', { ascending: false })
      .limit(limit)
    return data || []
  }, [])
}

// ─── Schema builders ───────────────────────────────────────────────────────

import { SITE_URL } from './siteConfig'

/** Build AggregateRating + individual Review nodes for a Product schema. */
export function buildReviewNodesForMachine(testimonials: Testimonial[]) {
  if (testimonials.length === 0) return null
  const withRating = testimonials.filter((t) => t.rating != null)
  const agg = withRating.length > 0
    ? {
        '@type': 'AggregateRating',
        ratingValue: (withRating.reduce((a, b) => a + (b.rating || 0), 0) / withRating.length).toFixed(1),
        reviewCount: withRating.length,
        bestRating: 5,
        worstRating: 1,
      }
    : null
  const reviews = testimonials.map((t) => ({
    '@type': 'Review',
    '@id': `${SITE_URL}/#testimonial-${t.id}`,
    author: {
      '@type': 'Person',
      name: t.author_name,
      ...(t.author_role ? { jobTitle: t.author_role } : {}),
      ...(t.author_company
        ? { worksFor: { '@type': 'Organization', name: t.author_company } }
        : {}),
    },
    reviewBody: t.body_en,
    ...(t.rating
      ? { reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5, worstRating: 1 } }
      : {}),
    datePublished: t.published_at || t.created_at,
    ...(t.author_country ? { contentLocation: { '@type': 'Country', name: t.author_country } } : {}),
  }))
  return { aggregateRating: agg, reviews }
}

/** Build VideoObject nodes for Product schema `video` property. */
export function buildVideoNodes(videos: Video[]) {
  return videos.map((v) => {
    const embedUrl = v.platform === 'youtube'
      ? `https://www.youtube.com/embed/${v.external_id}`
      : `https://player.vimeo.com/video/${v.external_id}`
    const contentUrl = v.platform === 'youtube'
      ? `https://www.youtube.com/watch?v=${v.external_id}`
      : `https://vimeo.com/${v.external_id}`
    return {
      '@type': 'VideoObject',
      '@id': `${SITE_URL}/#video-${v.id}`,
      name: v.title,
      description: v.description || v.title,
      thumbnailUrl: v.thumbnail_url || `https://i.ytimg.com/vi/${v.external_id}/maxresdefault.jpg`,
      uploadDate: v.upload_date || v.created_at,
      contentUrl,
      embedUrl,
      ...(v.duration_seconds ? { duration: `PT${Math.floor(v.duration_seconds / 60)}M${v.duration_seconds % 60}S` } : {}),
    }
  })
}

/** Build a CaseStudy schema.org node (schema.org doesn't have "CaseStudy" —
 *  Article is the closest matching type, with additional properties. */
export function buildCaseStudySchema(cs: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/case-studies/${cs.slug}#article`,
    headline: cs.title,
    description: cs.summary || cs.title,
    ...(cs.hero_image_url ? { image: cs.hero_image_url } : {}),
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'SunGene Co., LTD.', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo/sungene.png` } },
    datePublished: cs.published_at || cs.created_at,
    dateModified: cs.updated_at,
    articleSection: 'Case Study',
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    ...(cs.machine_slug ? {
      about: {
        '@type': 'Product',
        '@id': `${SITE_URL}/en/machines/${cs.machine_slug}#product`,
        name: cs.machine_slug,
        url: `${SITE_URL}/en/machines/${cs.machine_slug}`,
      },
    } : {}),
    ...(cs.country ? { locationCreated: { '@type': 'Country', name: cs.country } } : {}),
  }
}

export { REVALIDATE_SECONDS }
