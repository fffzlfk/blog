import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <div>
      <h3 className="text-gray-600 dark:text-gray-300 text-3xl mb-1 leading-snug">
        <Link as={`/posts/${slug.replace(/\.mdx?$/, '')}`}
          href={`/posts/[slug]`}>
          <a className="hover:text-[#ff7e79]">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
