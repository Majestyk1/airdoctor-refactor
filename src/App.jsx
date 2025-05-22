import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

function App() {
  // Navigation open state for mobile drawer
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => setIsNavOpen(!isNavOpen)
  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <Router>
      <Navbar isOpen={isNavOpen} onToggle={handleToggleNav} onClose={handleCloseNav} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes can be added here */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
