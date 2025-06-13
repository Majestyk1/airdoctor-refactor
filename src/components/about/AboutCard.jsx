import React from 'react'

function AboutCard() {
  return (
    <section className="about-card py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="about-card__container container mx-auto px-4 max-w-3xl">
        <div className="about-card__card bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-blue-200/40 text-center mx-auto">
          <div className="about-card__avatar w-24 h-24 bg-blue-200/80 rounded-full flex items-center justify-center text-4xl font-extrabold text-blue-800 mx-auto mb-6 shadow-lg border-4 border-blue-400/40">
            C
          </div>
          <h2 className="about-card__name text-2xl font-bold mb-2 text-blue-900">Chris Garcia</h2>
          <p className="about-card__role text-blue-600 font-semibold mb-4">Owner & Director</p>
          <p className="about-card__bio text-gray-700 mb-4">
            Founded in March 2024, AirDoctor HVACR is a family-owned business with roots in California and a heart in Central Texas. Chris brings 35+ years of HVACR expertise, from industrial systems for Raytheon to local businesses and homes. Starting as a Local 250 technician in Los Angeles, he's built a legacy of trust, skill, and Dodgers-level dedication.
          </p>
          <p className="about-card__move text-gray-700 mb-4">
            The Garcia family moved to Texas for new opportunities, drawn by the region's energy and values—faith, love for America, and a drive for excellence. Here, they serve with integrity, care, and a winning attitude.
          </p>
          <p className="about-card__mission text-gray-700">
            Whether you need expert installation, reliable maintenance, or energy-saving retrofits, Chris and AirDoctor HVACR deliver fast, friendly, and reliable service—always with a smile and a touch of Dodgers blue.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutCard 