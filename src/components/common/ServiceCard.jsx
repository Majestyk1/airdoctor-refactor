import React from 'react'
import { motion } from 'framer-motion'
import 'hover.css/css/hover-min.css'

function ServiceCard({ icon: Icon, title, description, className = '' }) {
  return (
    <motion.div
      className={`service-card group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-blue-200/40 shadow-lg text-center transition-all duration-300 cursor-pointer focus:outline-none ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      tabIndex={0}
      role="button"
      aria-label={title}
    >
      {/* Blue blur glow on hover/focus */}
      <span className="service-card__glow pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300 blur-xl bg-blue-400/40" />
      <div className="relative z-10 flex flex-col items-center">
        {Icon && <Icon className="service-card__icon w-12 h-12 text-blue-500 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 group-focus:scale-110" />}
        <h3 className="service-card__title text-xl font-bold mb-4">{title}</h3>
        <p className="service-card__desc text-gray-700">{description}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard 