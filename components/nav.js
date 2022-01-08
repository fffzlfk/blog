import { useTheme } from 'next-themes'

export default function Nav() {

  const { theme, setTheme } = useTheme()

  return (
    <nav className='bg-white dark:bg-[#272727] fixed flex items-center w-full justify-center border-b-2 bg-accent-1 border-accent-2 space-x-10 rounded'>
      <div className="py-2 text-center text-md font-bold">
        <a
          href="/"
          className="hover:text-success duration-200 transition-colors"
        >
          Home
        </a>
      </div>
      <div className="py-2 text-center text-md font-bold">
        <a
          href="/posts/about"
          className="hover:text-success duration-200 transition-colors"
        >
          About
        </a>
      </div>
      <div className="py-2 text-center text-md font-bold">
        <a
          href="https://github.com/fffzlfk"
          className="hover:text-success duration-200 transition-colors"
        >
          Github
        </a>
      </div>
      <div className="py-2 text-center text-sm">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >{theme === 'light' ? <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> :
          <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>}</button>
      </div>
    </nav>
  )
}
