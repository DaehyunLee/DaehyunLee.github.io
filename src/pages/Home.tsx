import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1 className="hero-title">
          <span className="gradient-text">Dae</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer
        </p>
        <p className="hero-description">
          Writing about things I build and learn.
        </p>
        <div className="hero-buttons">
          <Link to="/blog" className="btn btn-primary">
            Blog
          </Link>
          <Link to="/about" className="btn btn-secondary">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}
