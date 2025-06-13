import HeroSection from '../components/common/HeroSection'
import InfoCard from '../components/common/InfoCard'
import ModalPortal from '../components/common/ModalPortal'
import AnimatedButton from '../components/common/AnimatedButton'
import { Mail, Phone, Clipboard, Clock, CheckCircle2, XCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LocationMap from '../components/common/LacationMap'

function Contact() {
  // Modal state for feedback
  const [modal, setModal] = useState({ open: false, success: true, message: '' })

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()

  // EmailJS submit handler
  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setModal({ open: true, success: true, message: 'Your message was sent successfully! We will get back to you soon.' })
      reset()
    } catch (error) {
      setModal({ open: true, success: false, message: 'Sorry, there was a problem sending your message. Please try again later.' })
      console.error('EmailJS error:', error)
    }
  }

  // Dodgers blue glassy background for form
  const formCardBg = 'bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-blue-500/60 backdrop-blur-xl border border-blue-200/40 shadow-2xl'

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact AirDoctor HVACR"
        subtitle="Chris is ready to help with your next project, answer your questions, or just talk shop."
        accent="Let's Connect!"
      />

      {/* Info Cards */}
      <section className="contact-info py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
  <div className="contact-info__container container mx-auto px-4">
    <div className="contact-info__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
      <InfoCard
        avatar={<Mail className="w-10 h-10 text-blue-600" />}
        name="Email"
        role="chris@airdoctorhvacr.com"
        bio={<a href="mailto:chris@airdoctorhvacr.com" className="text-blue-700 font-bold hover:underline">Send Email</a>}
        className="contact-info__card min-w-[250px] max-w-xs mx-auto"
      />
      <InfoCard
        avatar={<Phone className="w-10 h-10 text-blue-600" />}
        name="Phone"
        role="210-580-4664"
        bio={<a href="tel:2105804664" className="text-blue-700 font-bold hover:underline">Call Now</a>}
        className="contact-info__card min-w-[250px] max-w-xs mx-auto"
      />
      <InfoCard
        avatar={<Clipboard className="w-10 h-10 text-blue-600" />}
        name="License"
        role="TACLA 131459E"
        bio="Licensed & Insured"
        className="contact-info__card min-w-[250px] max-w-xs mx-auto"
      />
      <InfoCard
        avatar={<Clock className="w-10 h-10 text-blue-600" />}
        name="Business Hours"
        role="Mon-Fri 7:00 AM – 5:00 PM"
        bio="Available for emergencies"
        className="contact-info__card min-w-[250px] max-w-xs mx-auto"
      />
    </div>
  </div>
</section>

      {/* Contact Form Card */}
      <section className="contact-form py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <motion.div
          className={`contact-form__card relative max-w-2xl mx-auto p-10 rounded-3xl ${formCardBg} text-white overflow-hidden`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Blue glow on hover/focus */}
          <span className="contact-form__glow pointer-events-none absolute -inset-4 z-0 rounded-3xl blur-2xl bg-blue-400/30 opacity-0 hover:opacity-80 focus-within:opacity-80 transition duration-300" />
          <h2 className="contact-form__title text-2xl md:text-3xl font-bold text-center mb-6 text-blue-100 drop-shadow-lg">
            Or, fill out the form below:
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-blue-100 mb-2">
                Name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={`contact-form__input w-full px-4 py-3 border rounded-lg bg-white/20 text-white placeholder-blue-100 border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-400' : 'border-blue-200/40'}`}
                placeholder="Your name"
              />
              {errors.name && (
                <span className="contact-form__error text-sm text-red-200 mt-1">{errors.name.message}</span>
              )}
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-blue-100 mb-2">
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
                className={`contact-form__input w-full px-4 py-3 border rounded-lg bg-white/20 text-white placeholder-blue-100 border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-400' : 'border-blue-200/40'}`}
                placeholder="you@email.com"
              />
              {errors.email && (
                <span className="contact-form__error text-sm text-red-200 mt-1">{errors.email.message}</span>
              )}
            </div>
            <div className="contact-form__field">
              <label className="contact-form__label block text-sm font-medium text-blue-100 mb-2">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className={`contact-form__input w-full px-4 py-3 border rounded-lg bg-white/20 text-white placeholder-blue-100 border-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px] ${errors.message ? 'border-red-400' : 'border-blue-200/40'}`}
                placeholder="How can Chris help you?"
              />
              {errors.message && (
                <span className="contact-form__error text-sm text-red-200 mt-1">{errors.message.message}</span>
              )}
            </div>
            <AnimatedButton
              type="submit"
              className="contact-form__submit w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </AnimatedButton>
          </form>
        </motion.div>
      </section>

      <section className="contact-map py-12">
        <h2 className="contact-map__title text-2xl font-bold mb-4 text-blue-800 text-center">Our Service Area</h2>
        <LocationMap />
      </section>
      {/* Modal feedback for success/error */}
      <ModalPortal isOpen={modal.open} onClose={() => setModal(m => ({ ...m, open: false }))}>
        <div className="contact-modal flex flex-col items-center gap-4 p-4">
          {modal.success ? (
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
          ) : (
            <XCircle className="w-16 h-16 text-red-500 mb-2" />
          )}
          <h3 className={`text-2xl font-bold mb-2 ${modal.success ? 'text-green-700' : 'text-red-700'}`}>{modal.success ? 'Message Sent!' : 'Error'}</h3>
          <p className="text-lg text-gray-700 mb-4 max-w-xs text-center">{modal.message}</p>
          <AnimatedButton onClick={() => setModal(m => ({ ...m, open: false }))} className="px-6 py-3">
            Close
          </AnimatedButton>
        </div>
      </ModalPortal>
    </>
  )
}

export default Contact