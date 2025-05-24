import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { to: '/service', label: 'HVAC Repair' },
    { to: '/service', label: 'Maintenance' },
    { to: '/installation', label: 'New Installation' },
    { to: '/retrofit', label: 'Energy Upgrades' }
  ]

  const companyLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/projects', label: 'Our Work' },
    { to: '/contact', label: 'Contact' },
    { to: '/contact', label: 'Free Quote' }
  ]

  const serviceAreas = [
    'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 
    'Pflugerville', 'Leander', 'Kyle', 'Buda'
  ]

  return (
    <footer className="footer bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="footer__main py-12">
        <div className="footer__container container mx-auto px-4">
          <div className="footer__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="footer__company">
              <Link to="/" className="footer__logo text-2xl font-bold text-white mb-4 block">
                AirDoctorHVAC
              </Link>
              <p className="footer__description text-gray-300 mb-6">
                Your trusted HVAC experts serving Central Texas for over 15 years. 
                Professional installation, repair, and maintenance services.
              </p>
              
              {/* Certifications */}
              <div className="footer__certifications mb-4">
                <h4 className="footer__cert-title text-sm font-semibold text-gray-200 mb-2">
                  Certified & Licensed
                </h4>
                <div className="footer__cert-badges flex gap-3">
                  <div className="footer__cert-badge bg-blue-600 px-3 py-1 rounded text-xs font-medium">
                    NATE Certified
                  </div>
                  <div className="footer__cert-badge bg-green-600 px-3 py-1 rounded text-xs font-medium">
                    EPA Licensed
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer__social">
                <h4 className="footer__social-title text-sm font-semibold text-gray-200 mb-3">
                  Follow Us
                </h4>
                <div className="footer__social-links flex gap-4">
                  <a href="#" className="footer__social-link w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer__social-link w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="footer__social-link w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="footer__services">
              <h3 className="footer__section-title text-lg font-semibold mb-4">
                Our Services
              </h3>
              <ul className="footer__links space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="footer__link text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Emergency Notice */}
              <div className="footer__emergency bg-red-600 rounded-lg p-4 mt-6">
                <h4 className="footer__emergency-title text-sm font-semibold mb-2">
                  24/7 Emergency Service
                </h4>
                <p className="footer__emergency-text text-xs text-red-100 mb-3">
                  HVAC emergency? We're here to help!
                </p>
                <a 
                  href="tel:5551234567" 
                  className="footer__emergency-phone text-white font-bold hover:text-red-100"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="footer__company-links">
              <h3 className="footer__section-title text-lg font-semibold mb-4">
                Company
              </h3>
              <ul className="footer__links space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="footer__link text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Reviews */}
              <div className="footer__reviews mt-6">
                <h4 className="footer__reviews-title text-sm font-semibold text-gray-200 mb-2">
                  Customer Reviews
                </h4>
                <div className="footer__rating flex items-center gap-2 mb-2">
                  <div className="footer__stars flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="footer__rating-text text-sm text-gray-300">4.9/5</span>
                </div>
                <p className="footer__reviews-text text-xs text-gray-400">
                  Based on 200+ customer reviews
                </p>
              </div>
            </div>

            {/* Contact & Service Areas */}
            <div className="footer__contact">
              <h3 className="footer__section-title text-lg font-semibold mb-4">
                Contact Info
              </h3>
              
              {/* Contact Details */}
              <div className="footer__contact-details space-y-4 mb-6">
                <div className="footer__contact-item flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:5551234567" className="footer__contact-link text-gray-300 hover:text-white">
                      (555) 123-4567
                    </a>
                    <p className="footer__contact-note text-xs text-gray-400">24/7 Emergency</p>
                  </div>
                </div>
                
                <div className="footer__contact-item flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="mailto:info@airdoctorhvac.com" className="footer__contact-link text-gray-300 hover:text-white">
                      info@airdoctorhvac.com
                    </a>
                    <p className="footer__contact-note text-xs text-gray-400">2-hour response</p>
                  </div>
                </div>
                
                <div className="footer__contact-item flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="footer__address text-gray-300">
                      123 HVAC Drive<br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>
                
                <div className="footer__contact-item flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="footer__hours text-gray-300 text-sm">
                      Mon-Fri: 7AM-7PM<br />
                      Sat: 8AM-5PM<br />
                      Sun: Emergency Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="footer__areas">
                <h4 className="footer__areas-title text-sm font-semibold text-gray-200 mb-3">
                  Service Areas
                </h4>
                <div className="footer__areas-list grid grid-cols-2 gap-1">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="footer__area text-xs text-gray-400">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="footer__areas-more text-xs text-gray-500 mt-2">
                  + More areas served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom border-t border-gray-700 py-6">
        <div className="footer__bottom-container container mx-auto px-4">
          <div className="footer__bottom-content flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="footer__copyright text-sm text-gray-400">
              © {currentYear} AirDoctorHVAC. All rights reserved.
            </div>
            
            <div className="footer__legal flex gap-6">
              <a href="#" className="footer__legal-link text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="footer__legal-link text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="footer__legal-link text-sm text-gray-400 hover:text-white transition-colors">
                Licensing
              </a>
            </div>
            
            <div className="footer__credentials text-sm text-gray-400">
              Licensed • Bonded • Insured
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer