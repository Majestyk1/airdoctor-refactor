import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// Components
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  // Navigation open state for mobile drawer
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => setIsNavOpen(!isNavOpen)
  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="app min-h-screen flex flex-col">
      
        <Navbar 
        isOpen={isNavOpen} 
        onToggle={handleToggleNav}
         onClose={handleCloseNav}
          />
        <main className="app__main w-full overflow-x-hidden flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            {/* Catch-all route for undefined paths - redirects to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
