import React from 'react'

function AboutStats() {
  return (
    <section className="about-stats py-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white">
      <div className="about-stats__container container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        <div className="about-stats__card bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-400/30 flex flex-col items-center text-center">
          <span className="about-stats__number text-4xl font-extrabold text-sky-300 mb-2 drop-shadow-lg">35+</span>
          <span className="about-stats__label text-lg font-semibold text-blue-100">Years Experience</span>
        </div>
        <div className="about-stats__card bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-400/30 flex flex-col items-center text-center">
          <span className="about-stats__number text-4xl font-extrabold text-sky-300 mb-2 drop-shadow-lg">100+</span>
          <span className="about-stats__label text-lg font-semibold text-blue-100">Happy Clients</span>
        </div>
        <div className="about-stats__card bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-400/30 flex flex-col items-center text-center">
          <span className="about-stats__number text-4xl font-extrabold text-sky-300 mb-2 drop-shadow-lg">5.0</span>
          <span className="about-stats__label text-lg font-semibold text-blue-100">Star Service</span>
        </div>
      </div>
    </section>
  )
}

export default AboutStats 