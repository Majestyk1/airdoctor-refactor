import React from 'react'
import { motion } from 'framer-motion'

function CTASection({ title, text, children, className = '' }) {
  return (
    <motion.section
      className={`cta-section group relative py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center transition-all duration-300 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Blue/purple glow on hover/focus */}
      <span className="cta-section__glow pointer-events-none absolute -inset-4 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300" />
      <motion.div
        className="cta-section__container relative z-10 container mx-auto px-4 backdrop-blur-xl bg-white/60 rounded-2xl shadow-xl border border-blue-200/40 max-w-2xl transition-all duration-300 hover:scale-[1.025] focus-within:scale-[1.025]"
        whileHover={{ scale: 1.025 }}
        whileFocus={{ scale: 1.025 }}
      >
        <h2 className="cta-section__title text-2xl md:text-3xl font-bold mb-4 text-blue-800">{title}</h2>
        <p className="cta-section__text text-lg text-blue-700 max-w-2xl mx-auto">{text}</p>
        {children}
      </motion.div>
    </motion.section>
  )
}

export default CTASection 