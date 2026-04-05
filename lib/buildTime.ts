export function getStableLastModified(): Date | undefined {
  const epoch = process.env.SOURCE_DATE_EPOCH
  if (epoch && /^\d+$/.test(epoch)) return new Date(Number(epoch) * 1000)

  const iso = process.env.BUILD_TIME || process.env.NEXT_PUBLIC_BUILD_TIME || process.env.VERCEL_GIT_COMMIT_DATE
  if (iso) {
    const d = new Date(iso)
    if (!Number.isNaN(d.valueOf())) return d
  }

  return undefined
}

export function getStableLastModifiedISO(): string | undefined {
  const d = getStableLastModified()
  return d ? d.toISOString() : undefined
}

