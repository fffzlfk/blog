import Alert from '../components/alert'

export default function Layout({ preview, children }) {
  return (
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
  )
}
