import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Scene from './components/three/Scene'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Experiments from './pages/Experiments'
import SolitaireSupport from './pages/SolitaireSupport'
import SolitairePrivacy from './pages/SolitairePrivacy'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Scene />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/about" element={<About />} />
            <Route path="/solitaire/support" element={<SolitaireSupport />} />
            <Route path="/solitaire/privacy" element={<SolitairePrivacy />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2025 Dae's Blog. Built with React & Three.js</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
