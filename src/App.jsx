import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'

function App() {
  // Navigation open state for mobile drawer
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => setIsNavOpen(!isNavOpen)
  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <Router>
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
            <Route path="/service" element={<Service />} />
            {/* Future routes can be added here */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
