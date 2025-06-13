import React from 'react'
import { motion } from 'framer-motion'

function InfoCard({ avatar, name, role, bio, extra, className = '' }) {
  return (
    <motion.div
      className={`info-card group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-200/40 text-center mx-auto transition-all duration-300 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      tabIndex={0}
    >
      {/* Blue/purple glow on hover/focus */}
      <span className="info-card__glow pointer-events-none absolute -inset-4 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300" />
      <div className="relative z-10 flex flex-col items-center">
        {avatar && (
          <div className="info-card__avatar w-24 h-24 bg-blue-200/80 rounded-full flex items-center justify-center text-4xl font-extrabold text-blue-800 mx-auto mb-6 shadow-lg border-4 border-blue-400/40">
            {avatar}
          </div>
        )}
        <h2 className="info-card__name text-2xl font-bold mb-2 text-blue-900">{name}</h2>
        <p className="info-card__role text-blue-600 font-semibold mb-4">{role}</p>
        <p className="info-card__bio text-gray-700 mb-4">{bio}</p>
        {extra}
      </div>
    </motion.div>
  )
}

export default InfoCard 