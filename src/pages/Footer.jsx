import { Mail, Phone, Clipboard } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer relative bg-gray-900 text-white border-t border-blue-800 overflow-hidden">
      {/* Retro animated glow bar */}
      <motion.div
        className="footer__glow pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 z-0 w-[120vw] h-24 md:h-32 blur-2xl bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 opacity-60 animate-pulse"
        initial={{ opacity: 0.5, scaleX: 1 }}
        animate={{ opacity: [0.5, 0.8, 0.5], scaleX: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="footer__container relative z-10 w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="footer__row flex flex-col items-center justify-center gap-y-3 gap-x-4 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Brand */}
          <Link to="/" className="footer__logo text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide mb-2 md:mb-0 font-mono pixelated">
            AirDoctorHVACR
          </Link>
          {/* Contact Info */}
          <div className="footer__contact flex flex-col items-center gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0">
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Mail className="footer__icon w-4 h-4 text-blue-400" />
              <a href="mailto:chris@airdoctorhvacr.com" className="footer__link text-blue-300 hover:text-blue-400 font-medium">chris@airdoctorhvacr.com</a>
            </div>
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Phone className="footer__icon w-4 h-4 text-blue-400" />
              <a href="tel:2105804664" className="footer__link text-blue-300 hover:text-blue-400 font-medium">210-580-4664</a>
            </div>
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Clipboard className="footer__icon w-4 h-4 text-blue-400" />
              <span className="footer__license text-blue-300 font-medium">TACLA 131459E</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom relative z-10 text-center text-xs text-blue-200 py-3 border-t border-blue-800">
        © {currentYear} AirDoctorHVACR. All rights reserved.
      </div>
      {/* Pixelated font style for retro effect */}
      <style>{`
        .pixelated {
          font-family: 'Press Start 2P', 'VT323', 'Fira Mono', 'Menlo', 'monospace';
          letter-spacing: 0.04em;
        }
      `}</style>
    </footer>
  )
}

export default Footer