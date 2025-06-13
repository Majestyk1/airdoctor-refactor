import React from 'react'
import { motion } from 'framer-motion'

function HeroSection({
  title,
  subtitle,
  accent,
  background = 'bg-gradient-to-br from-gray-900 to-blue-900',
  children,
  className = '',
}) {
  return (
    <section
      className={`hero-section relative min-h-[60vh] ${background} text-white flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Animated glassy Dodgers blue/purple glow */}
      <motion.span
        className="hero-section__glow pointer-events-none absolute -inset-16 md:-inset-32 z-0 rounded-full blur-3xl bg-gradient-to-tr from-blue-500/40 via-blue-400/30 to-purple-500/30 animate-pulse"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="hero-section__container relative z-10 container mx-auto px-4 text-center backdrop-blur-xl bg-white/10 rounded-2xl max-w-3xl transition-all duration-500 shadow-[0_8px_40px_0_rgba(30,30,40,0.45)] hover:shadow-[0_12px_60px_0_rgba(30,30,40,0.7)] hover:scale-[1.025]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        tabIndex={-1}
      >
        <h1 className="hero-section__title text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {title}{' '}
          {accent && <span className="hero-section__title_accent text-blue-400">{accent}</span>}
        </h1>
        {subtitle && (
          <p className="hero-section__subtitle text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto mb-2">
            {subtitle}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  )
}

export default HeroSection 