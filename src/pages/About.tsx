export default function About() {
  return (
    <div className="page about-page">
      <h1 className="page-title">About</h1>
      
      <div className="about-content">
        <section className="about-section">
          <p>
            I've been writing code for about twenty years now. Curiosity tends to pull me 
            in too many directions at once, so I've touched a bit of everything without 
            mastering much. These days I'm mostly just here to observe and appreciate the irony.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact</h2>
          <div className="social-links">
            <a
              href="https://github.com/DaehyunLee"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/DaeHLee"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href="mailto:daehyun.lee9@gmail.com"
              className="social-link"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
