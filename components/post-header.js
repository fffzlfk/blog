import DateFormatter from '../components/date-formatter'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date }) {
  return (
    <div className="pt-10 flex flex-col items-center justify-center">
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  )
}
