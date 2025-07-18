import React from 'react'

function CTASection({ title, text, children, className = '' }) {
  return (
    <section
      className={`cta-section group relative py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Removed absolute glow to prevent overflow */}
      <div
        className="cta-section__container relative z-10 container mx-auto px-4 backdrop-blur-xl bg-white/60 rounded-2xl shadow-xl border border-blue-200/40 max-w-2xl transition-all duration-300 hover:scale-[1.025] focus-within:scale-[1.025]"
      >
        <h2 className="cta-section__title text-2xl md:text-3xl font-bold mb-4 text-blue-800">{title}</h2>
        <p className="cta-section__text text-lg text-blue-700 max-w-2xl mx-auto">{text}</p>
        {children}
      </div>
    </section>
  )
}

export default CTASection 