import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/service', label: 'Service' },
  { to: '/installation', label: 'Installation' },
  { to: '/retrofit', label: 'Retrofit' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ isOpen, onToggle, onClose }) {
  // Determine if page is scrolled for styling
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0)
  }

  // Add scroll listener once on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkHover = isScrolled ? 'hover:text-blue-700' : 'hover:text-blue-600'

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-colors ${isScrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-4 py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-blue-600">AirDoctorHVAC</Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={`text-sm font-medium ${linkHover}`} onClick={onClose}>
              {label}
            </Link>
          ))}
        </nav>
        {/* CTA + Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="tel:5551234567" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" aria-label="Call 555-123-4567">
            <Phone className="w-4 h-4" />
            <span>24/7</span>
          </a>
          <button onClick={onToggle} className="md:hidden p-2" aria-label="Toggle navigation" tabIndex="0" onKeyDown={(e)=>{if(e.key==='Enter'){onToggle()}}}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <aside className={`fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white p-6 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Mobile navigation" onClick={(e)=>e.stopPropagation()}>
        <nav className="flex flex-col space-y-4">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="text-lg font-medium py-2 border-b border-gray-100" onClick={onClose}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700" onClick={onClose} tabIndex="0" aria-label="Request a Quote" onKeyDown={(e)=>{if(e.key==='Enter'){onClose()}}}>
            Request a Quote
          </button>
          <a href="tel:5551234567" className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-3 rounded-lg" aria-label="Emergency phone" onClick={onClose}>
            <Phone className="h-4 w-4" />
            24/7 Emergency
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar 