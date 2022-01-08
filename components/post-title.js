export default function PostTitle({ children }) {
  return (
    <h1 className="text-gray-900 dark:text-white text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}
