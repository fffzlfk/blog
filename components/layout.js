import Nav from '../components/nav'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-[#161B22] flex flex-col">
      <Meta />
      <Nav />
      {children}
    </div>
  )
}
