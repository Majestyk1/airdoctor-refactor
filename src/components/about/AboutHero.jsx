import React from 'react'

function AboutHero() {
  return (
    <section className="about-hero min-h-[60vh] bg-gradient-to-br from-blue-900 via-blue-700 to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="about-hero__container container mx-auto px-4 text-center backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-blue-400/30 max-w-3xl">
        <h1 className="about-hero__title text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Where HVACR Excellence Meets Dodgers Spirit
        </h1>
        <p className="about-hero__subtitle text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto mb-2">
          Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas.
        </p>
      </div>
    </section>
  )
}

export default AboutHero 