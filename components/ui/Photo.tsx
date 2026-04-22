import Image from 'next/image'
import { cx } from './cx'

export function Photo({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
  unoptimized,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
  unoptimized?: boolean
}) {
  // img.mweb.com.tw is a Taiwan CDN unreachable from the China-hosted VPS;
  // skip server-side optimization so the browser fetches directly.
  const shouldUnoptimize = unoptimized || src.includes('img.mweb.com.tw')

  return (
    <div className={cx('relative overflow-hidden rounded-2xl bg-gray-100', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes || '100vw'}
        unoptimized={shouldUnoptimize}
        className={cx('object-cover', imageClassName)}
      />
    </div>
  )
}
