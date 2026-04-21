export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = Array.isArray(data) ? data : [data]
  return (
    <>
      {json.map((item, idx) => {
        const id = item['@id']
        const key = typeof id === 'string' ? id : idx
        return <script key={key} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      })}
    </>
  )
}
