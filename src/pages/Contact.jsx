import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'standard'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You'll integrate with your backend/email service later
  }

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero bg-brand-gradient text-white pt-24 pb-16">
        <div className="contact-hero__container container mx-auto px-4 text-center">
          <h1 className="contact-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get Your Free HVAC Quote
          </h1>
          <p className="contact-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Ready to improve your comfort? Contact us today for expert HVAC service, installation, or maintenance.
          </p>
          <div className="contact-hero__quick-actions flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567" 
              className="contact-hero__phone bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: (555) 123-4567
            </a>
            <a 
              href="#contact-form" 
              className="contact-hero__form-link border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Quote Online
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-main py-16 bg-white">
        <div className="contact-main__container container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="contact-info lg:col-span-1">
              <h2 className="contact-info__title text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              
              {/* Phone */}
              <div className="contact-info__item flex items-start gap-4 mb-6">
                <div className="contact-info__icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="contact-info__details">
                  <h3 className="contact-info__label font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:5551234567" className="contact-info__value text-blue-600 hover:text-blue-700">
                    (555) 123-4567
                  </a>
                  <p className="contact-info__note text-sm text-gray-600">24/7 Emergency Service</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info__item flex items-start gap-4 mb-6">
                <div className="contact-info__icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="contact-info__details">
                  <h3 className="contact-info__label font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:info@airdoctorhvac.com" className="contact-info__value text-blue-600 hover:text-blue-700">
                    info@airdoctorhvac.com
                  </a>
                  <p className="contact-info__note text-sm text-gray-600">We respond within 2 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info__item flex items-start gap-4 mb-6">
                <div className="contact-info__icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="contact-info__details">
                  <h3 className="contact-info__label font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="contact-info__value text-gray-700">
                    123 HVAC Drive<br />
                    Austin, TX 78701
                  </p>
                  <p className="contact-info__note text-sm text-gray-600">Serving Central Texas</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-info__item flex items-start gap-4">
                <div className="contact-info__icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="contact-info__details">
                  <h3 className="contact-info__label font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <div className="contact-info__hours text-gray-700 text-sm space-y-1">
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 5:00 PM</p>
                    <p>Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form lg:col-span-2" id="contact-form">
              <h2 className="contact-form__title text-2xl font-bold text-gray-800 mb-6">
                Request Your Free Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="contact-form__form space-y-6">
                {/* Name & Email Row */}
                <div className="contact-form__row grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="contact-form__field">
                    <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div className="contact-form__row grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="contact-form__field">
                    <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="contact-form__select w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="repair">HVAC Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="installation">New Installation</option>
                      <option value="retrofit">System Retrofit</option>
                      <option value="quote">General Quote</option>
                    </select>
                  </div>
                </div>

                {/* Urgency */}
                <div className="contact-form__field">
                  <label className="contact-form__label block text-sm font-medium text-gray-700 mb-3">
                    How urgent is your request?
                  </label>
                  <div className="contact-form__radio-group flex flex-col sm:flex-row gap-4">
                    <label className="contact-form__radio flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="emergency"
                        checked={formData.urgency === 'emergency'}
                        onChange={handleInputChange}
                        className="contact-form__radio-input w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="contact-form__radio-label ml-2 text-sm text-gray-700">Emergency (24hrs)</span>
                    </label>
                    <label className="contact-form__radio flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="urgent"
                        checked={formData.urgency === 'urgent'}
                        onChange={handleInputChange}
                        className="contact-form__radio-input w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="contact-form__radio-label ml-2 text-sm text-gray-700">Urgent (2-3 days)</span>
                    </label>
                    <label className="contact-form__radio flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="standard"
                        checked={formData.urgency === 'standard'}
                        onChange={handleInputChange}
                        className="contact-form__radio-input w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="contact-form__radio-label ml-2 text-sm text-gray-700">Standard (1 week)</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="contact-form__field">
                  <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="contact-form__textarea w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Describe your HVAC needs, current issues, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="contact-form__actions">
                  <button
                    type="submit"
                    className="contact-form__submit w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Get My Free Quote
                  </button>
                  <p className="contact-form__note text-sm text-gray-600 mt-2">
                    We'll respond within 2 hours during business hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="contact-areas py-16 bg-gray-50">
        <div className="contact-areas__container container mx-auto px-4">
          <h2 className="contact-areas__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Areas We Serve
          </h2>
          <div className="contact-areas__grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander',
              'Kyle', 'Buda', 'Dripping Springs', 'Lakeway', 'Westlake', 'Bee Cave'
            ].map((city, index) => (
              <div key={index} className="contact-areas__city bg-white rounded-lg p-4 shadow-sm">
                <p className="contact-areas__city-name text-gray-700 font-medium">{city}</p>
              </div>
            ))}
          </div>
          <p className="contact-areas__note text-center text-gray-600 mt-6">
            Don't see your city? <a href="tel:5551234567" className="text-blue-600 hover:text-blue-700">Call us</a> - we may still be able to help!
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta py-16 bg-blue-600 text-white">
        <div className="contact-cta__container container mx-auto px-4 text-center">
          <h2 className="contact-cta__title text-2xl md:text-3xl font-bold mb-4">
            Don't Wait - Call Now for Immediate Service
          </h2>
          <p className="contact-cta__text text-lg mb-8 max-w-2xl mx-auto">
            HVAC problems get worse over time and can be more expensive to fix. 
            Contact us today for fast, reliable service.
          </p>
          <a 
            href="tel:5551234567" 
            className="contact-cta__phone bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-6 h-6" />
            (555) 123-4567
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact