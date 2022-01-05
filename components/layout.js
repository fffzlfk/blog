import Alert from '../components/alert'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
    </>
  )
}
