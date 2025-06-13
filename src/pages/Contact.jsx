import { Mail, Phone, Clipboard, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      // Optionally reset the form or show a success message
      alert('Message sent successfully!')
    } catch (error) {
      alert('Failed to send message. Please try again later.')
      console.error('EmailJS error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form__form space-y-6">
      <div className="contact-form__field">
        <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={`contact-form__input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
          placeholder="Your name"
        />
        {errors.name && (
          <span className="contact-form__error text-sm text-red-600 mt-1">{errors.name.message}</span>
        )}
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Enter a valid email'
            }
          })}
          className={`contact-form__input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
          placeholder="you@email.com"
        />
        {errors.email && (
          <span className="contact-form__error text-sm text-red-600 mt-1">{errors.email.message}</span>
        )}
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          className={`contact-form__input w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
          placeholder="How can Chris help you?"
        />
        {errors.message && (
          <span className="contact-form__error text-sm text-red-600 mt-1">{errors.message.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="contact-form__submit w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSubmitSuccessful && (
        <div className="contact-form__success text-green-600 text-center mt-2">
          Form submitted! (EmailJS coming next)
        </div>
      )}
    </form>
  )
}

function Contact() {
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
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Contact