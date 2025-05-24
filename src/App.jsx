import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
// Styles
import './styles/blocks/App.css'

function App() {
  // Navigation open state for mobile drawer
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => setIsNavOpen(!isNavOpen)
  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <Router>
      <div className="app min-h-screen flex flex-col">
        <Navbar isOpen={isNavOpen} onToggle={handleToggleNav} onClose={handleCloseNav} />
        <main className="app__main w-full overflow-x-hidden flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future routes can be added here */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
