import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import '../styles/blocks/Navbar.css'

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
    setIsScrolled(window.scrollY > 50)
  }

  // Add scroll listener once on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className={`navbar__logo ${isScrolled ? 'navbar__logo--scrolled' : 'navbar__logo--transparent'}`}>AirDoctorHVAC</Link>
        {/* Desktop Nav */}
        <nav className="navbar__desktop-nav">
          {links.map(({ to, label }) => (
            <Link 
              key={to} 
              to={to} 
              className={`navbar__link ${isScrolled ? 'navbar__link--scrolled' : 'navbar__link--transparent'}`} 
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* CTA + Hamburger */}
        <div className="navbar__actions">
          <a 
            href="tel:5551234567" 
            className={`navbar__cta-phone ${isScrolled ? 'navbar__cta-phone--scrolled' : 'navbar__cta-phone--transparent'}`} 
            aria-label="Call 555-123-4567"
          >
            <Phone className="navbar__cta-phone-icon" />
            <span>24/7</span>
          </a>
          <button 
            onClick={onToggle} 
            className={`navbar__menu-toggle ${isScrolled ? 'navbar__menu-toggle--scrolled' : 'navbar__menu-toggle--transparent'}`} 
            aria-label="Toggle navigation" 
            tabIndex="0" 
            onKeyDown={(e)=>{if(e.key==='Enter'){onToggle()}}}
          >
            {isOpen ? <X className="navbar__menu-icon" /> : <Menu className="navbar__menu-icon" />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div className={`navbar__overlay ${isOpen ? 'navbar__overlay--open' : 'navbar__overlay--closed'}`} onClick={onClose} />
      <aside className={`navbar__drawer ${isOpen ? 'navbar__drawer--open' : 'navbar__drawer--closed'}`} aria-label="Mobile navigation" onClick={(e)=>e.stopPropagation()}>
        <nav className="navbar__mobile-nav">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="navbar__mobile-link" onClick={onClose}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="navbar__drawer-actions">
          <button className="navbar__drawer-quote-btn" onClick={onClose} tabIndex="0" aria-label="Request a Quote" onKeyDown={(e)=>{if(e.key==='Enter'){onClose()}}}>
            Request a Quote
          </button>
          <a href="tel:5551234567" className="navbar__drawer-emergency" aria-label="Emergency phone" onClick={onClose}>
            <Phone className="navbar__drawer-emergency-icon" />
            24/7 Emergency
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar 