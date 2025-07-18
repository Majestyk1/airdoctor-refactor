import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function InfoCard({ avatar, name, role, bio, extra, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`info-card group relative bg-[#1A2332]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-[#178582]/40 text-center mx-auto transition-all duration-300 overflow-hidden cursor-pointer hover:scale-[1.02] hover:bg-[#2D3748]/70 ${className}`}
      onClick={toggleExpanded}
      tabIndex={0}
      role="button"
      aria-label={isExpanded ? `Click to collapse ${name}'s info` : `Click to expand ${name}'s info`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleExpanded(); } }}
      onBlur={(e) => {
        // Clear focus when clicking outside
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      }}
    >
      {/* Teal glow on hover only */}
      <span className="info-card__glow pointer-events-none absolute -inset-4 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-[#178582]/30 to-[#0F5F5C]/30 opacity-0 group-hover:opacity-80 transition duration-300" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar */}
        {avatar && (
          <div className="info-card__avatar w-24 h-24 bg-[#178582]/20 rounded-full flex items-center justify-center text-4xl font-extrabold text-[#178582] mx-auto mb-6 shadow-lg border-4 border-[#178582]/40">
            {avatar}
          </div>
        )}
        
        {/* Name and Role - Always visible */}
        <h2 className="info-card__name text-2xl font-bold mb-2 text-white">{name}</h2>
        <p className="info-card__role text-[#178582] font-semibold mb-4">{role}</p>
        
        {/* Expandable Bio Content */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, opacity: { duration: 0.1 } }}
              className="info-card__expanded-content w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <div className="info-card__bio text-gray-300 text-left leading-relaxed mb-4">
                  <p>{bio}</p>
                </div>
                {extra && (
                  <div className="info-card__extra mb-4">
                    {extra}
                  </div>
                )}
                <p className="info-card__collapse-hint text-[#178582] font-medium text-sm">
                  Click to collapse
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <p className="info-card__expand-hint text-[#178582] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click for more info
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default InfoCard 