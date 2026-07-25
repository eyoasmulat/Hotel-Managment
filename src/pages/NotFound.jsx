import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-xxl py-5">
      <div className="container text-center">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-4">The page you are looking for does not exist. Please use the menu to navigate back.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  )
}
