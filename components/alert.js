export default function Alert() {
  return (
    <div
      className={'border-b bg-accent-1 border-accent-2 space-x-10 flex items-center justify-center'}
    >
      <div className="py-2 text-center text-sm">
        <a
          href="/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Home
        </a>
      </div>
      <div className="py-2 text-center text-sm">
        <a
          href="/posts/about"
          className="underline hover:text-success duration-200 transition-colors"
        >
          About
        </a>
      </div>
      <div className="py-2 text-center text-sm">
        <a
          href="https://github.com/fffzlfk"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Github
        </a>
      </div>
    </div>
  )
}
