import React from 'react'

function AboutMissionVision() {
  return (
    <section className="about-mission-vision py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="about-mission-vision__container container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="about-mission-vision__card bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-200/40 flex flex-col items-center text-center">
          <span className="about-mission-vision__icon text-blue-700 text-4xl mb-2">⚡</span>
          <h3 className="about-mission-vision__title text-xl font-bold mb-2 text-blue-900">Our Mission</h3>
          <p className="about-mission-vision__desc text-gray-700">
            To provide Central Texas with championship-level HVACR service—combining decades of experience, cutting-edge technology, and a commitment to customer care that rivals the Dodgers' pursuit of excellence.
          </p>
        </div>
        <div className="about-mission-vision__card bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-200/40 flex flex-col items-center text-center">
          <span className="about-mission-vision__icon text-blue-700 text-4xl mb-2">🌟</span>
          <h3 className="about-mission-vision__title text-xl font-bold mb-2 text-blue-900">Our Vision</h3>
          <p className="about-mission-vision__desc text-gray-700">
            To be the most trusted HVACR partner in Texas—delivering comfort, efficiency, and peace of mind, all with a winning Dodgers spirit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionVision 