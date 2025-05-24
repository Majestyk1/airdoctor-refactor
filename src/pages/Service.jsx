import { useState } from 'react'
import { Phone, Clock, Shield, Wrench, CheckCircle, Star } from 'lucide-react'

function Service() {
  const [activeService, setActiveService] = useState('repair')

  const services = [
    {
      id: 'repair',
      title: 'Emergency Repair',
      icon: '🚨',
      description: 'Fast, reliable emergency HVAC repairs available 24/7',
      features: ['24/7 Emergency Service', 'Same-Day Response', 'All Brands Serviced', 'Upfront Pricing'],
      price: 'Starting at $89'
    },
    {
      id: 'maintenance',
      title: 'Preventive Maintenance',
      icon: '🔧',
      description: 'Keep your system running efficiently with regular maintenance',
      features: ['Seasonal Tune-ups', 'Filter Replacement', 'System Inspection', 'Priority Scheduling'],
      price: 'From $129/visit'
    },
    {
      id: 'diagnostics',
      title: 'System Diagnostics',
      icon: '🔍',
      description: 'Professional diagnosis to identify and solve HVAC problems',
      features: ['Comprehensive Testing', 'Performance Analysis', 'Written Report', 'Repair Recommendations'],
      price: 'Starting at $149'
    },
    {
      id: 'cleaning',
      title: 'Duct Cleaning',
      icon: '💨',
      description: 'Improve air quality with professional duct cleaning services',
      features: ['Complete Duct Cleaning', 'Air Quality Testing', 'Sanitization Options', 'Before/After Photos'],
      price: 'From $299'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="service-hero bg-gradient-to-br from-blue-600 to-blue-700 text-white pt-24 pb-16">
        <div className="service-hero__container container mx-auto px-4 text-center">
          <h1 className="service-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional HVAC Services
          </h1>
          <p className="service-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Expert repair, maintenance, and emergency services for all your heating and cooling needs. 
            Available 24/7 throughout Central Texas.
          </p>
          <div className="service-hero__badges flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="service-hero__badge flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-medium">24/7 Emergency Service</span>
            </div>
            <div className="service-hero__badge flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="service-hero__badge flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Star className="w-5 h-5" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="service-emergency py-8 bg-red-600 text-white">
        <div className="service-emergency__container container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="service-emergency__content text-center md:text-left">
              <h2 className="service-emergency__title text-xl md:text-2xl font-bold mb-2">
                HVAC Emergency? We're Here to Help!
              </h2>
              <p className="service-emergency__text">
                Don't wait for your system to fail completely. Call now for immediate assistance.
              </p>
            </div>
            <a 
              href="tel:5551234567" 
              className="service-emergency__phone bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="service-types py-16 bg-white">
        <div className="service-types__container container mx-auto px-4">
          <h2 className="service-types__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Our HVAC Services
          </h2>
          
          {/* Service Tabs */}
          <div className="service-types__tabs flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`service-types__tab px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeService === service.id
                    ? 'service-types__tab_active bg-blue-600 text-white'
                    : 'service-types__tab_inactive bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="service-types__tab-icon mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {services.map((service) => (
            activeService === service.id && (
              <div key={service.id} className="service-types__content bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="service-types__details">
                    <h3 className="service-types__service-title text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="service-types__description text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="service-types__features space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="service-types__feature flex items-center gap-3">
                          <CheckCircle className="service-types__feature-icon w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="service-types__feature-text text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="service-types__pricing flex items-center justify-between">
                      <span className="service-types__price text-2xl font-bold text-blue-600">
                        {service.price}
                      </span>
                      <a 
                        href="/contact" 
                        className="service-types__cta bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                  <div className="service-types__image bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-4xl">{service.icon}</span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="service-process py-16 bg-gray-50">
        <div className="service-process__container container mx-auto px-4">
          <h2 className="service-process__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Our Service Process
          </h2>
          <div className="service-process__steps grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Call & Schedule', description: 'Contact us by phone or online to schedule your service appointment.' },
              { step: '2', title: 'Diagnosis', description: 'Our certified technician arrives and performs a thorough system diagnosis.' },
              { step: '3', title: 'Quote & Approval', description: 'We provide transparent, upfront pricing before any work begins.' },
              { step: '4', title: 'Expert Repair', description: 'We complete the work efficiently using quality parts and proven techniques.' }
            ].map((item, index) => (
              <div key={index} className="service-process__step text-center">
                <div className="service-process__step-number w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="service-process__step-title text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="service-process__step-description text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="service-why py-16 bg-white">
        <div className="service-why__container container mx-auto px-4">
          <h2 className="service-why__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose AirDoctorHVAC?
          </h2>
          <div className="service-why__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-8 h-8 text-blue-600" />,
                title: 'Expert Technicians',
                description: 'Our certified HVAC professionals have 15+ years of experience with all major brands and systems.'
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: '24/7 Emergency Service',
                description: 'HVAC emergencies don\'t wait for business hours. We\'re available around the clock when you need us.'
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Licensed & Insured',
                description: 'Fully licensed, bonded, and insured for your protection and peace of mind.'
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                title: 'Quality Guarantee',
                description: 'We stand behind our work with comprehensive warranties on parts and labor.'
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: 'Transparent Pricing',
                description: 'No hidden fees or surprise charges. You\'ll know the cost upfront before any work begins.'
              },
              {
                icon: <Phone className="w-8 h-8 text-blue-600" />,
                title: 'Local & Trusted',
                description: 'Proudly serving Central Texas families and businesses since 2009.'
              }
            ].map((item, index) => (
              <div key={index} className="service-why__item text-center">
                <div className="service-why__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="service-why__item-title text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="service-why__item-description text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas py-16 bg-gray-50">
        <div className="service-areas__container container mx-auto px-4">
          <h2 className="service-areas__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Service Areas
          </h2>
          <p className="service-areas__subtitle text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We proudly serve residential and commercial customers throughout Central Texas
          </p>
          <div className="service-areas__grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander',
              'Kyle', 'Buda', 'Dripping Springs', 'Lakeway', 'Westlake', 'Bee Cave',
              'Manor', 'Hutto', 'Liberty Hill', 'Bastrop'
            ].map((city, index) => (
              <div key={index} className="service-areas__city bg-white rounded-lg p-4 shadow-sm">
                <p className="service-areas__city-name text-gray-700 font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="service-cta py-16 bg-blue-600 text-white">
        <div className="service-cta__container container mx-auto px-4 text-center">
          <h2 className="service-cta__title text-2xl md:text-3xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="service-cta__text text-lg mb-8 max-w-2xl mx-auto">
            Don't let HVAC problems disrupt your comfort. Contact us today for fast, 
            professional service you can trust.
          </p>
          <div className="service-cta__buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567" 
              className="service-cta__phone bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call: (555) 123-4567
            </a>
            <a 
              href="/contact" 
              className="service-cta__contact border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Service Online
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service