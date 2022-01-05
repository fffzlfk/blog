import Alert from '../components/alert'
import Meta from './meta'

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-[#272727] pb-1">
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
    </div>
  )
}
