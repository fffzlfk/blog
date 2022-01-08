import Nav from '../components/nav'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-[#272727] flex flex-col">
      <Meta />
      <Nav />
      {children}
    </div>
  )
}
