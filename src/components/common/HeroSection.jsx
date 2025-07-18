import React from 'react'
import backgroundImage from '../../assets/images/hero-background.jpg'

function HeroSection({
  title,
  subtitle,
  accent,
  children,
  className = '',
}) {
  return (
    <section
      className={`hero-section relative min-h-[100dvh] text-white flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Replace video with background image */}
      <div 
        className="hero-section__background absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Enhanced overlay for better text readability */}
      <div className="hero-section__overlay absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0A1828]/80 via-[#1A2332]/70 to-[#178582]/60 z-10" />

      <div className="hero-section__wrapper container mx-auto px-4 py-8 relative z-30">
        <div
          className="hero-section__container text-center backdrop-blur-xl bg-white/10 rounded-2xl max-w-3xl mx-auto p-6 md:p-8 transition-all duration-500 shadow-[0_8px_40px_0_rgba(30,30,40,0.45)]"
          tabIndex={-1}
        >
          <h1 className="hero-section__title text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            {title}{' '}
            {accent && <span className="hero-section__title_accent text-[#178582]">{accent}</span>}
          </h1>
          {subtitle && (
            <p className="hero-section__subtitle text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export default HeroSection 