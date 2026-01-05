import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How do I start a new game?",
    answer: "Tap the menu button (three lines) in the top corner and select 'New Game'. You can also access game settings from this menu."
  },
  {
    question: "What's the difference between Draw 1 and Draw 3?",
    answer: "In Draw 1 mode, you flip one card at a time from the stock pile. In Draw 3 mode, you flip three cards at once, but can only play the top card. Draw 3 is more challenging and traditional."
  },
  {
    question: "What are pass limits?",
    answer: "Pass limits control how many times you can go through the stock pile. 'Unlimited' lets you cycle through as many times as needed. '1 Pass' means you can only go through once (very challenging). '3 Passes' gives you three cycles through the deck."
  },
  {
    question: "What does 'Foundation Takeback' do?",
    answer: "When enabled, you can move cards back from the foundation piles to the tableau. This can be useful for uncovering cards you need. When disabled, once a card is on a foundation, it stays there."
  },
  {
    question: "How do I undo a move?",
    answer: "Tap the undo button to reverse your last move. You can undo multiple moves in sequence."
  },
  {
    question: "Are my statistics saved?",
    answer: "Yes! Your game statistics including wins, games played, and best times are saved locally on your device. They persist between sessions."
  },
  {
    question: "Does the app work offline?",
    answer: "Yes, Solitaire works completely offline. No internet connection is required to play."
  },
  {
    question: "How do I play on Apple Vision Pro?",
    answer: "Solitaire supports visionOS natively. Simply install from the App Store on your Vision Pro. The game adapts to the spatial computing environment."
  }
]

export default function SolitaireSupport() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="page support-page">
      {/* App Header */}
      <div className="support-header">
        <h1 className="page-title">Solitaire</h1>
        <p className="support-tagline">Classic Klondike Solitaire</p>
        <div className="platform-badges">
          <span className="platform-badge">iOS</span>
          <span className="platform-badge">visionOS</span>
        </div>
      </div>

      {/* About Section */}
      <section className="support-section">
        <h2>About the App</h2>
        <p>
          Solitaire is a beautifully crafted Klondike Solitaire game designed for iOS and Apple Vision Pro. 
          Enjoy the timeless card game with customizable rules, intuitive controls, and a clean interface 
          that lets you focus on what matters—playing cards.
        </p>
      </section>

      {/* Features Section */}
      <section className="support-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🃏 Game Modes</h3>
            <p>Choose between Draw 1 or Draw 3 modes to match your preferred difficulty level.</p>
          </div>
          <div className="feature-card">
            <h3>🔄 Pass Limits</h3>
            <p>Set unlimited passes, or challenge yourself with 1-pass or 3-pass limits.</p>
          </div>
          <div className="feature-card">
            <h3>↩️ Undo</h3>
            <p>Made a mistake? Use unlimited undo to reverse your moves.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Statistics</h3>
            <p>Track your wins, games played, win percentage, and best times.</p>
          </div>
          <div className="feature-card">
            <h3>⏱️ Timer</h3>
            <p>Race against the clock and try to beat your best time.</p>
          </div>
          <div className="feature-card">
            <h3>🥽 visionOS</h3>
            <p>Play in spatial computing on Apple Vision Pro with native support.</p>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="support-section">
        <h2>How to Play</h2>
        <div className="rules-content">
          <h3>Objective</h3>
          <p>
            Move all 52 cards to the four foundation piles, building each foundation from Ace to King 
            in the same suit.
          </p>
          
          <h3>Setup</h3>
          <p>
            Cards are dealt into seven tableau columns. The first column has one card, the second has 
            two, and so on. Only the top card of each column is face-up. The remaining cards form the 
            stock pile.
          </p>
          
          <h3>Rules</h3>
          <ul>
            <li>Build tableau columns in descending order with alternating colors (red on black, black on red).</li>
            <li>Only Kings can be placed in empty tableau spaces.</li>
            <li>Move cards from the stock pile to the waste pile by tapping the stock.</li>
            <li>The top card of the waste pile is available for play.</li>
            <li>Build foundations up by suit from Ace to King.</li>
          </ul>
        </div>
      </section>

      {/* Settings Section */}
      <section className="support-section">
        <h2>Settings Explained</h2>
        <div className="settings-list">
          <div className="setting-item">
            <h3>Draw Mode</h3>
            <p>
              <strong>Draw 1:</strong> Flip one card at a time from the stock. Easier mode recommended for beginners.
            </p>
            <p>
              <strong>Draw 3:</strong> Flip three cards at once, but only the top card is playable. Traditional Vegas-style rules.
            </p>
          </div>
          <div className="setting-item">
            <h3>Pass Limit</h3>
            <p>
              <strong>Unlimited:</strong> Cycle through the stock as many times as you want.
            </p>
            <p>
              <strong>1 Pass:</strong> Go through the stock only once. Very challenging!
            </p>
            <p>
              <strong>3 Passes:</strong> Three trips through the stock. A balanced challenge.
            </p>
          </div>
          <div className="setting-item">
            <h3>Foundation Takeback</h3>
            <p>
              <strong>Enabled:</strong> Move cards back from foundations to the tableau when needed.
            </p>
            <p>
              <strong>Disabled:</strong> Once placed on a foundation, cards cannot be moved back.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="support-section">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important. Solitaire collects no personal data and works completely offline.
        </p>
        <div className="contact-links">
          <Link to="/solitaire/privacy" className="contact-link">
            🔒 View Full Privacy Policy
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="support-section">
        <h2>FAQ</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFAQ === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openFAQ === index ? '−' : '+'}</span>
              </button>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="support-section">
        <h2>Contact & Support</h2>
        <p>
          Have a question, found a bug, or want to suggest a feature? I'd love to hear from you!
        </p>
        <div className="contact-links">
          <a 
            href="mailto:daehyun.lee9@gmail.com?subject=Solitaire%20Support" 
            className="contact-link"
          >
            📧 Email Support
          </a>
        </div>
        <p className="developer-note">
          Developed by Dae Lee
        </p>
      </section>
    </div>
  )
}
