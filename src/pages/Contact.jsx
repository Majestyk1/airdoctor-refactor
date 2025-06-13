import { Mail, Phone, Clipboard, Clock } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    // You can integrate with your backend/email service later
    alert('Message sent! (Not really, this is a demo.)')
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero py-16 bg-gradient-to-br from-blue-900 to-gray-900 text-white text-center">
        <div className="contact-hero__container container mx-auto px-4">
          <h1 className="contact-hero__title text-3xl md:text-5xl font-bold mb-4">
            Let's Connect!
          </h1>
          <p className="contact-hero__subtitle text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Chris is ready to help with your next project, answer your questions, or just talk shop.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info py-10 bg-white">
        <div className="contact-info__container container mx-auto px-4 max-w-2xl">
          <div className="contact-info__grid grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            <div className="contact-info__item flex flex-col items-center">
              <Mail className="contact-info__icon w-7 h-7 text-blue-600 mb-2" />
              <span className="contact-info__label text-gray-700 font-medium">EMAIL</span>
              <a href="mailto:chris@airdoctorhvacr.com" className="contact-info__value text-blue-700 font-bold hover:underline">chris@airdoctorhvacr.com</a>
            </div>
            <div className="contact-info__item flex flex-col items-center">
              <Phone className="contact-info__icon w-7 h-7 text-blue-600 mb-2" />
              <span className="contact-info__label text-gray-700 font-medium">PHONE</span>
              <a href="tel:2105804664" className="contact-info__value text-blue-700 font-bold hover:underline">210-580-4664</a>
            </div>
            <div className="contact-info__item flex flex-col items-center">
              <Clipboard className="contact-info__icon w-7 h-7 text-blue-600 mb-2" />
              <span className="contact-info__label text-gray-700 font-medium">LICENSE</span>
              <span className="contact-info__value text-blue-700 font-bold">TACLA 131459E</span>
            </div>
            <div className="contact-info__item flex flex-col items-center">
              <Clock className="contact-info__icon w-7 h-7 text-blue-600 mb-2" />
              <span className="contact-info__label text-gray-700 font-medium">BUSINESS HOURS</span>
              <span className="contact-info__value text-blue-700 font-bold">Mon-Fri 7:00 AM – 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form py-16 bg-blue-50">
        <div className="contact-form__container container mx-auto px-4 max-w-xl">
          <h2 className="contact-form__title text-2xl md:text-3xl font-bold text-center mb-6 text-blue-800">
            Or, fill out the form below:
          </h2>
          <form onSubmit={handleSubmit} className="contact-form__form space-y-6">
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-form__input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
                placeholder="How can Chris help you?"
                required
              />
            </div>
            <button
              type="submit"
              className="contact-form__submit w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact