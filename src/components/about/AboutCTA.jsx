import React from 'react'

function AboutCTA() {
  return (
    <section className="about-cta py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center">
      <div className="about-cta__container container mx-auto px-4 backdrop-blur-xl bg-white/60 rounded-2xl shadow-xl border border-blue-200/40 max-w-2xl">
        <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-4 text-blue-800">
          Let's Connect!
        </h2>
        <p className="about-cta__text text-lg text-blue-700 max-w-2xl mx-auto">
          Got a project or want to talk shop? Chris is always happy to chat HVACR, tech, or Texas weather. Reach out and let's make something cool happen—with a little Dodgers magic!
        </p>
      </div>
    </section>
  )
}

export default AboutCTA 