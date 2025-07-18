import { Mail, Phone, Clipboard } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-[#0A1828] text-white">
      <div className="footer__container w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="footer__row flex flex-col items-center justify-center gap-y-3 gap-x-4 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo & Brand */}
          <Link to="/" className="footer__logo text-base sm:text-xl md:text-2xl font-bold text-[#178582] tracking-wide mb-2 md:mb-0 font-mono pixelated drop-shadow-lg">
            AirDoctorHVACR
          </Link>
          {/* Contact Info */}
          <div className="footer__contact flex flex-col items-center gap-y-2 md:flex-row md:items-center md:gap-x-4 md:gap-y-0 bg-[#1A2332]/80 backdrop-blur-xl rounded-xl px-4 py-2 shadow-lg">
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Mail className="footer__icon w-4 h-4 text-[#178582]" />
              <a href="mailto:chris@airdoctorhvacr.com" className="footer__link text-gray-300 hover:text-[#178582] font-medium">chris@airdoctorhvacr.com</a>
            </div>
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Phone className="footer__icon w-4 h-4 text-[#178582]" />
              <a href="tel:9315610123" className="footer__link text-gray-300 hover:text-[#178582] font-medium">931-561-0123</a>
            </div>
            <div className="footer__contact-item flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <Clipboard className="footer__icon w-4 h-4 text-[#178582]" />
              <span className="footer__license text-gray-300 font-medium">TACLA 131459E</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom text-gray-400 text-center py-2 text-xs">
        © {currentYear} AirDoctorHVACR. All rights reserved.
      </div>
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