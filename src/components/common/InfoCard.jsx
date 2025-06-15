import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function InfoCard({ avatar, name, role, bio, extra, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      className={`info-card group relative bg-blue-50/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-200/40 text-center mx-auto transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02] hover:bg-blue-100/70 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onClick={toggleExpanded}
      tabIndex={0}
      role="button"
      aria-label={isExpanded ? `Click to collapse ${name}'s info` : `Click to expand ${name}'s info`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpanded(); } }}
    >
      {/* Blue/purple glow on hover/focus */}
      <span className="info-card__glow pointer-events-none absolute -inset-4 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar */}
        {avatar && (
          <div className="info-card__avatar w-24 h-24 bg-blue-200/80 rounded-full flex items-center justify-center text-4xl font-extrabold text-blue-800 mx-auto mb-6 shadow-lg border-4 border-blue-400/40">
            {avatar}
          </div>
        )}
        
        {/* Name and Role - Always visible */}
        <h2 className="info-card__name text-2xl font-bold mb-2 text-blue-900">{name}</h2>
        <p className="info-card__role text-blue-600 font-semibold mb-4">{role}</p>
        
        {/* Expandable Bio Content */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="info-card__expanded-content w-full"
            >
              <div className="info-card__bio text-gray-700 text-left leading-relaxed mb-4">
                <p>{bio}</p>
              </div>
              {extra && (
                <div className="info-card__extra mb-4">
                  {extra}
                </div>
              )}
              <p className="info-card__collapse-hint text-blue-600 font-medium text-sm">
                Click to collapse
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="info-card__expand-hint text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click for more info
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default InfoCard 