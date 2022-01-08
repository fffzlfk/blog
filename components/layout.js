import Nav from '../components/nav'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-[#272727] flex flex-col">
      <Meta />
      <div className="min-h-screen">
        <Nav />
        <main className='pt-20'>{children}</main>
      </div>
    </div>
  )
}
