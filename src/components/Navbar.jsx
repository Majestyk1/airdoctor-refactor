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
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'navbar--scrolled bg-white shadow-md py-2'
        : 'navbar--transparent bg-transparent py-4'
    }`}>
      <div className="navbar__container flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link to="/" className={`navbar__logo text-lg font-bold transition-colors ${
          isScrolled
            ? 'navbar__logo--scrolled text-blue-600'
            : 'navbar__logo--transparent text-white'
        }`}>AirDoctorHVAC</Link>
        {/* Desktop Nav */}
        <nav className="navbar__desktop-nav hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <Link 
              key={to} 
              to={to} 
              className={`navbar__link text-sm font-medium transition-colors ${
                isScrolled
                  ? 'navbar__link--scrolled text-gray-700 hover:text-blue-600'
                  : 'navbar__link--transparent text-white hover:text-white/80'
              }`} 
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* CTA + Hamburger */}
        <div className="navbar__actions flex items-center gap-4 md:gap-6">
          <a 
            href="tel:5551234567" 
            className={`navbar__cta-phone hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled
                ? 'navbar__cta-phone--scrolled text-blue-600 hover:text-blue-700'
                : 'navbar__cta-phone--transparent text-white hover:text-white/80'
            }`} 
            aria-label="Call 555-123-4567"
          >
            <Phone className="navbar__cta-phone-icon w-4 h-4" />
            <span>24/7</span>
          </a>
          <button 
            onClick={onToggle} 
            className={`navbar__menu-toggle md:hidden p-2 bg-transparent border-none cursor-pointer ${
              isScrolled
                ? 'navbar__menu-toggle--scrolled text-gray-800'
                : 'navbar__menu-toggle--transparent text-white'
            }`} 
            aria-label="Toggle navigation" 
            tabIndex="0" 
            onKeyDown={(e)=>{if(e.key==='Enter'){onToggle()}}}
          >
            {isOpen ? <X className="navbar__menu-icon w-6 h-6" /> : <Menu className="navbar__menu-icon w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div className={`navbar__overlay fixed backdrop-blur-sm inset-0 bg-black/60 transition-opacity z-40 ${isOpen ? 'navbar__overlay--open opacity-100 pointer-events-auto' : 'navbar__overlay--closed opacity-0 pointer-events-none'}`} onClick={onClose} />
      <aside className={`navbar__drawer fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white p-6 transition-transform z-50 ${isOpen ? 'navbar__drawer--open translate-x-0' : 'navbar__drawer--closed translate-x-full'}`} aria-label="Mobile navigation" onClick={(e)=>e.stopPropagation()}>
        <nav className="navbar__mobile-nav flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="navbar__mobile-link text-lg font-medium py-2 border-b border-gray-100 text-gray-800 no-underline" onClick={onClose}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="navbar__drawer-actions mt-8 flex flex-col gap-4">
          <button className="navbar__drawer-quote-btn w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors border-none cursor-pointer" onClick={onClose} tabIndex="0" aria-label="Request a Quote" onKeyDown={(e)=>{if(e.key==='Enter'){onClose()}}}>
            Request a Quote
          </button>
          <a href="tel:5551234567" className="navbar__drawer-emergency w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium no-underline" aria-label="Emergency phone" onClick={onClose}>
            <Phone className="navbar__drawer-emergency-icon h-4 w-4" />
            24/7 Emergency
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar