import React from 'react'
import { motion } from 'framer-motion'
import backgroundVideo from '../../assets/images/powerPlant-view-trimmed.mp4'

function HeroSection({
  title,
  subtitle,
  accent,
  background = 'bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500',
  children,
  className = '',
}) {
  return (
    <section
      className={`hero-section relative min-h-[100dvh] text-white flex items-center justify-center overflow-hidden ${className}`}
    >
      <video
        className="hero-section__video absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-section__overlay absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Animated glassy Dodgers blue/purple glow */}
      <motion.span
        className="hero-section__glow pointer-events-none absolute -inset-16 md:-inset-32 z-20 rounded-full blur-3xl bg-gradient-to-tr from-blue-500/40 via-blue-400/30 to-purple-500/30 animate-pulse"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="hero-section__wrapper container mx-auto px-4 py-8 relative z-30">
        <motion.div
          className="hero-section__container text-center backdrop-blur-xl bg-white/10 rounded-2xl max-w-3xl mx-auto p-6 md:p-8 transition-all duration-500 shadow-[0_8px_40px_0_rgba(30,30,40,0.45)] hover:shadow-[0_12px_60px_0_rgba(30,30,40,0.7)] hover:scale-[1.025]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          tabIndex={-1}
        >
          <h1 className="hero-section__title text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            {title}{' '}
            {accent && <span className="hero-section__title_accent text-blue-400">{accent}</span>}
          </h1>
          {subtitle && (
            <p className="hero-section__subtitle text-base md:text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 