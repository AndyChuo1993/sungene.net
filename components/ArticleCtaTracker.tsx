'use client'
import { ButtonLink } from '@/components/ui/Button'
import { trackArticleCtaClick } from '@/lib/analytics'
import { Lang } from '@/lib/i18n'

interface ArticleCtaTrackerProps {
  lang: Lang
  slug: string
  category: string
  productCluster?: string
  ctaPosition: string
  ctaLabel: string
  href: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ArticleCtaTracker({
  lang, slug, category, productCluster = 'general',
  ctaPosition, ctaLabel, href, size = 'md', className
}: ArticleCtaTrackerProps) {
  return (
    <ButtonLink
      href={href}
      size={size}
      className={className}
      onClick={() => trackArticleCtaClick({
        article_slug: slug,
        cta_position: ctaPosition,
        cta_label: ctaLabel,
        lang,
        content_type: category,
        product_cluster: productCluster,
      })}
    >
      {ctaLabel}
    </ButtonLink>
  )
}
