import React from 'react'
import { motion } from 'framer-motion'

function StatCard({ number, label, className = '' }) {
  return (
    <motion.div
      className={`stat-card group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-400/30 flex flex-col items-center text-center transition-all duration-300 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      tabIndex={0}
    >
      {/* Blue/purple glow on hover/focus */}
      <span className="stat-card__glow pointer-events-none absolute -inset-3 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300" />
      <span className="stat-card__number text-4xl font-extrabold text-sky-300 mb-2 drop-shadow-lg relative z-10">{number}</span>
      <span className="stat-card__label text-lg font-semibold text-blue-100 relative z-10">{label}</span>
    </motion.div>
  )
}

export default StatCard 