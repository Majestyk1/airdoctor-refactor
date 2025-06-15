import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DrawerPortal from './common/DrawerPortal'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ isOpen, onToggle, onClose }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const drawerRef = useRef(null)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add Escape key handler for closing drawer
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Add click outside handler for closing drawer
  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <motion.header
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'navbar__scrolled bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 shadow-2xl py-2 backdrop-blur-lg'
          : 'navbar__transparent bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 py-4 backdrop-blur-md'
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div>
          <Link to="/" className={`navbar__logo text-lg font-extrabold tracking-widest transition-colors ${
            isScrolled
              ? 'navbar__logo_scrolled text-sky-400 drop-shadow-lg hover:text-sky-300'
              : 'navbar__logo_transparent text-white drop-shadow hover:text-sky-400'
          }`}>
            AirDoctorHVACR
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="navbar__desktop-nav hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <div key={to}>
              <Link 
                to={to} 
                className={`navbar__link text-sm font-semibold transition-colors ${
                  isScrolled
                    ? 'navbar__link_scrolled text-white hover:text-sky-400'
                    : 'navbar__link_transparent text-white hover:text-sky-400'
                }`} 
                onClick={onClose}
              >
                {label}
              </Link>
            </div>
          ))}
        </nav>
        {/* CTA + Hamburger */}
        <div className="navbar__actions flex items-center gap-4 md:gap-6">
          <div>
            <a 
              href="tel:5551234567" 
              className={`navbar__cta-phone hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                isScrolled
                  ? 'navbar__cta-phone_scrolled text-sky-400 hover:text-sky-300'
                  : 'navbar__cta-phone_transparent text-white hover:text-sky-400'
              }`} 
              aria-label="Call 555-123-4567"
            >
              <Phone className="navbar__cta-phone-icon w-4 h-4" />
              <span>24/7</span>
            </a>
          </div>
          <div>
            <button 
              onClick={onToggle} 
              className={`navbar__menu-toggle md:hidden p-2 bg-white/10 rounded-lg shadow border-none cursor-pointer transition-colors ${
                isScrolled
                  ? 'navbar__menu-toggle_scrolled text-sky-400 hover:text-sky-300'
                  : 'navbar__menu-toggle_transparent text-white hover:text-sky-400'
              }`} 
              aria-label="Toggle navigation" 
              tabIndex="0" 
              onKeyDown={(e)=>{if(e.key==='Enter'){onToggle()}}}
            >
              {isOpen ? <X className="navbar__menu-icon w-6 h-6" /> : <Menu className="navbar__menu-icon w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer Overlay & Drawer (Animated Together) */}
      <DrawerPortal isOpen={isOpen} onClose={onClose}>
        <motion.aside
          key="drawer"
          ref={drawerRef}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`navbar__drawer fixed inset-y-0 right-0 w-3/4 max-w-xs bg-transparent p-6 z-50 shadow-2xl backdrop-blur-2xl ${isOpen ? 'navbar__drawer_open translate-x-0' : 'navbar__drawer_closed translate-x-full'}`}
          aria-label="Mobile navigation"
        >
          <nav className="navbar__mobile-nav flex flex-col gap-4">
            {links.map(({ to, label }) => (
              <div key={to}>
                <Link to={to} className="navbar__mobile-link text-lg font-semibold py-2 border-b border-blue-800 text-white no-underline transition-colors hover:text-sky-400" onClick={onClose}>
                  {label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="navbar__drawer-actions mt-8 flex flex-col gap-4">
            <div>
              <a href="tel:5551234567" className="navbar__drawer-emergency w-full flex items-center justify-center gap-2 border border-sky-400 text-sky-400 py-3 rounded-lg font-semibold no-underline transition-colors hover:bg-sky-400 hover:text-blue-900" aria-label="Emergency phone" onClick={onClose}>
                <Phone className="navbar__drawer-emergency-icon h-4 w-4" />
                24/7 Emergency
              </a>
            </div>
          </div>
        </motion.aside>
      </DrawerPortal>
    </motion.header>
  )
}

export default Navbar