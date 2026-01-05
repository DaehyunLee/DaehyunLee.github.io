export default function SolitairePrivacy() {
  return (
    <div className="page support-page">
      {/* App Header */}
      <div className="support-header">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="support-tagline">Solitaire for iOS & visionOS</p>
      </div>

      {/* Privacy Policy Content */}
      <section className="support-section">
        <h2>Overview</h2>
        <p>
          Your privacy is important. Solitaire is designed with privacy as a core principle. 
          This policy explains what data the app collects (spoiler: none) and how it handles 
          your information.
        </p>
      </section>

      <section className="support-section">
        <h2>Data Collection</h2>
        <div className="privacy-content">
          <h3>What We Collect</h3>
          <p><strong>Nothing.</strong> Solitaire does not collect any personal data whatsoever.</p>
          
          <h3>What Stays on Your Device</h3>
          <ul>
            <li><strong>Game Statistics:</strong> Your wins, losses, and best times are stored locally on your device.</li>
            <li><strong>Settings:</strong> Your game preferences (draw mode, pass limits, etc.) are stored locally.</li>
            <li><strong>Game State:</strong> Your current game progress is saved locally so you can resume later.</li>
          </ul>
          <p>All of this data remains exclusively on your device and is never transmitted anywhere.</p>
        </div>
      </section>

      <section className="support-section">
        <h2>No Account Required</h2>
        <div className="privacy-content">
          <p>
            Solitaire does not require you to create an account, sign in, or provide any personal 
            information. Just download and play.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>No Cloud Services</h2>
        <div className="privacy-content">
          <p>
            Your game data is not synced to any cloud service. We do not use iCloud, our own servers, 
            or any third-party cloud storage. Your data stays on your device.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>No Tracking or Analytics</h2>
        <div className="privacy-content">
          <p>
            Solitaire does not include any analytics frameworks, tracking pixels, or third-party 
            SDKs that collect user data. We don't track:
          </p>
          <ul>
            <li>How often you play</li>
            <li>Your location</li>
            <li>Your device information</li>
            <li>Any usage patterns</li>
          </ul>
        </div>
      </section>

      <section className="support-section">
        <h2>No Advertisements</h2>
        <div className="privacy-content">
          <p>
            The app contains no advertisements. This means no ad networks, no ad tracking, 
            and no ad-related data collection.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>Third-Party Services</h2>
        <div className="privacy-content">
          <p>
            Solitaire does not integrate with any third-party services that would have access 
            to your data. The app operates completely independently.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>Children's Privacy</h2>
        <div className="privacy-content">
          <p>
            Since we collect no data, Solitaire is safe for users of all ages. There is no 
            information collected from anyone, including children under 13.
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>Changes to This Policy</h2>
        <div className="privacy-content">
          <p>
            If this privacy policy changes, updates will be posted on this page. However, given 
            that we collect no data, significant changes are unlikely.
          </p>
          <p className="privacy-note">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section className="support-section">
        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy, please contact:
        </p>
        <div className="contact-links">
          <a 
            href="mailto:daehyun.lee9@gmail.com?subject=Solitaire%20Privacy%20Policy%20Question" 
            className="contact-link"
          >
            📧 daehyun.lee9@gmail.com
          </a>
        </div>
      </section>

      <section className="support-section">
        <div className="privacy-content">
          <p className="privacy-note" style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            <strong>In summary:</strong> Your game, your device, your data. Nothing leaves your device.
          </p>
        </div>
      </section>
    </div>
  )
}
