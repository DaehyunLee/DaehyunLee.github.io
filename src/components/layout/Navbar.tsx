import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Dae
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
          >
            Blog
          </Link>
          {import.meta.env.DEV && (
            <Link
              to="/experiments"
              className={`navbar-link ${isActive('/experiments') ? 'active' : ''}`}
            >
              Experiments
            </Link>
          )}
          <Link
            to="/about"
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
