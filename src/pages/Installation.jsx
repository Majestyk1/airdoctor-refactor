import { useState } from 'react'
import { Phone, Home, Building2, Zap, DollarSign, Calendar, CheckCircle, Star, Award } from 'lucide-react'

function Installation() {
  const [activeTab, setActiveTab] = useState('residential')

  const installationTypes = {
    residential: {
      title: 'Residential HVAC Installation',
      description: 'Complete home comfort solutions tailored to your family\'s needs and budget.',
      systems: [
        { name: 'Central Air Conditioning', price: 'From $3,500', features: ['Energy Efficient', 'Quiet Operation', '10-Year Warranty'] },
        { name: 'Heat Pumps', price: 'From $4,200', features: ['Heating & Cooling', 'Energy Star Rated', 'Year-Round Comfort'] },
        { name: 'Gas Furnaces', price: 'From $2,800', features: ['High Efficiency', 'Reliable Heating', 'Long Lasting'] },
        { name: 'Ductless Mini-Splits', price: 'From $2,500', features: ['Zone Control', 'Easy Installation', 'Compact Design'] }
      ]
    },
    commercial: {
      title: 'Commercial HVAC Installation',
      description: 'Professional-grade systems designed for businesses, offices, and industrial facilities.',
      systems: [
        { name: 'Rooftop Units', price: 'From $8,500', features: ['High Capacity', 'Weather Resistant', 'Easy Maintenance'] },
        { name: 'VRF Systems', price: 'From $12,000', features: ['Variable Refrigerant Flow', 'Zone Control', 'Energy Efficient'] },
        { name: 'Chiller Systems', price: 'Custom Quote', features: ['Large Buildings', 'Precise Control', 'Industrial Grade'] },
        { name: 'Package Units', price: 'From $6,500', features: ['All-in-One Design', 'Quick Installation', 'Reliable Operation'] }
      ]
    }
  }

  const brands = [
    { name: 'Carrier', logo: '🔷' },
    { name: 'Trane', logo: '🟢' },
    { name: 'Lennox', logo: '🔴' },
    { name: 'Rheem', logo: '🟡' },
    { name: 'Goodman', logo: '🔵' },
    { name: 'American Standard', logo: '⭐' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="installation-hero bg-brand-gradient text-white pt-24 pb-16">
        <div className="installation-hero__container container mx-auto px-4 text-center">
          <h1 className="installation-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            Professional HVAC Installation
          </h1>
          <p className="installation-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            New system installation for homes and businesses. Energy-efficient solutions 
            with professional installation and comprehensive warranties.
          </p>
          <div className="installation-hero__stats grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="installation-hero__stat bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="installation-hero__stat-number text-2xl font-bold mb-1">500+</div>
              <div className="installation-hero__stat-label text-sm">Installations Completed</div>
            </div>
            <div className="installation-hero__stat bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="installation-hero__stat-number text-2xl font-bold mb-1">15+</div>
              <div className="installation-hero__stat-label text-sm">Years Experience</div>
            </div>
            <div className="installation-hero__stat bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="installation-hero__stat-number text-2xl font-bold mb-1">10</div>
              <div className="installation-hero__stat-label text-sm">Year Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Estimate CTA */}
      <section className="installation-estimate py-8 bg-green-600 text-white">
        <div className="installation-estimate__container container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="installation-estimate__content text-center md:text-left">
              <h2 className="installation-estimate__title text-xl md:text-2xl font-bold mb-2">
                Get Your Free Installation Estimate
              </h2>
              <p className="installation-estimate__text">
                Professional assessment and transparent pricing - no hidden fees or surprises.
              </p>
            </div>
            <div className="installation-estimate__actions flex flex-col sm:flex-row gap-3">
              <a 
                href="/contact" 
                className="installation-estimate__quote bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Free Quote
              </a>
              <a 
                href="tel:5551234567" 
                className="installation-estimate__phone border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types */}
      <section className="installation-types py-16 bg-white">
        <div className="installation-types__container container mx-auto px-4">
          <h2 className="installation-types__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Installation Services
          </h2>
          
          {/* Tabs */}
          <div className="installation-types__tabs flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('residential')}
              className={`installation-types__tab px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'residential'
                  ? 'installation-types__tab_active bg-blue-600 text-white'
                  : 'installation-types__tab_inactive bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home className="w-5 h-5" />
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`installation-types__tab px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'commercial'
                  ? 'installation-types__tab_active bg-blue-600 text-white'
                  : 'installation-types__tab_inactive bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Commercial
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="installation-types__content">
            <div className="text-center mb-8">
              <h3 className="installation-types__subtitle text-2xl font-bold text-gray-800 mb-4">
                {installationTypes[activeTab].title}
              </h3>
              <p className="installation-types__description text-gray-600 max-w-2xl mx-auto">
                {installationTypes[activeTab].description}
              </p>
            </div>

            <div className="installation-types__systems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {installationTypes[activeTab].systems.map((system, index) => (
                <div key={index} className="installation-types__system bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="installation-types__system-name text-lg font-semibold text-gray-800 mb-2">
                    {system.name}
                  </h4>
                  <p className="installation-types__system-price text-2xl font-bold text-blue-600 mb-4">
                    {system.price}
                  </p>
                  <ul className="installation-types__system-features space-y-2">
                    {system.features.map((feature, i) => (
                      <li key={i} className="installation-types__system-feature flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className="installation-types__system-cta w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors block text-center"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="installation-process py-16 bg-gray-50">
        <div className="installation-process__container container mx-auto px-4">
          <h2 className="installation-process__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Our Installation Process
          </h2>
          <div className="installation-process__steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Free Consultation', description: 'In-home assessment and system sizing calculation.' },
              { step: '2', title: 'Custom Quote', description: 'Detailed proposal with equipment options and pricing.' },
              { step: '3', title: 'Schedule Install', description: 'Convenient scheduling that works with your timeline.' },
              { step: '4', title: 'Professional Install', description: 'Expert installation by certified technicians.' },
              { step: '5', title: 'System Testing', description: 'Complete testing and customer walkthrough.' }
            ].map((item, index) => (
              <div key={index} className="installation-process__step text-center">
                <div className="installation-process__step-number w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="installation-process__step-title text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="installation-process__step-description text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Install */}
      <section className="installation-brands py-16 bg-white">
        <div className="installation-brands__container container mx-auto px-4">
          <h2 className="installation-brands__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Trusted Brands We Install
          </h2>
          <p className="installation-brands__subtitle text-center text-gray-600 mb-12">
            We work with leading HVAC manufacturers to ensure quality and reliability
          </p>
          <div className="installation-brands__grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="installation-brands__brand text-center">
                <div className="installation-brands__logo w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-3xl">
                  {brand.logo}
                </div>
                <p className="installation-brands__name font-medium text-gray-700">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="installation-why py-16 bg-gray-50">
        <div className="installation-why__container container mx-auto px-4">
          <h2 className="installation-why__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Installation Services?
          </h2>
          <div className="installation-why__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                title: 'Certified Installers',
                description: 'NATE-certified technicians with extensive training on all major brands and systems.'
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: 'Energy Efficiency',
                description: 'High-efficiency systems that reduce energy costs and environmental impact.'
              },
              {
                icon: <DollarSign className="w-8 h-8 text-blue-600" />,
                title: 'Competitive Pricing',
                description: 'Fair, transparent pricing with financing options available for qualified customers.'
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                title: 'Quality Guarantee',
                description: '10-year warranty on equipment and 2-year warranty on installation labor.'
              },
              {
                icon: <Calendar className="w-8 h-8 text-blue-600" />,
                title: 'Flexible Scheduling',
                description: 'Installation appointments that work around your schedule, including weekends.'
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: 'Complete Service',
                description: 'From permits to cleanup, we handle every aspect of your installation.'
              }
            ].map((item, index) => (
              <div key={index} className="installation-why__item text-center">
                <div className="installation-why__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="installation-why__item-title text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="installation-why__item-description text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="installation-financing py-16 bg-blue-600 text-white">
        <div className="installation-financing__container container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="installation-financing__content">
              <h2 className="installation-financing__title text-2xl md:text-3xl font-bold mb-6">
                Flexible Financing Options
              </h2>
              <p className="installation-financing__description text-lg mb-6">
                Don't let budget concerns delay your comfort. We offer flexible financing 
                options to make your new HVAC system affordable.
              </p>
              <ul className="installation-financing__features space-y-3 mb-8">
                <li className="installation-financing__feature flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>0% APR financing available</span>
                </li>
                <li className="installation-financing__feature flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Quick approval process</span>
                </li>
                <li className="installation-financing__feature flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Multiple payment plans</span>
                </li>
                <li className="installation-financing__feature flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>No prepayment penalties</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="installation-financing__cta bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Learn About Financing
              </a>
            </div>
            <div className="installation-financing__image bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center">
              <DollarSign className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Starting at $89/month</h3>
              <p className="text-white/80">Based on qualified credit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="installation-cta py-16 bg-gray-800 text-white">
        <div className="installation-cta__container container mx-auto px-4 text-center">
          <h2 className="installation-cta__title text-2xl md:text-3xl font-bold mb-4">
            Ready for a New HVAC System?
          </h2>
          <p className="installation-cta__text text-lg mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Our experts will help you choose 
            the perfect system for your home or business.
          </p>
          <div className="installation-cta__buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="installation-cta__quote bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:5551234567" 
              className="installation-cta__phone border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Installation