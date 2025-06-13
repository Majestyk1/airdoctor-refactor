import HeroSection from '../components/common/HeroSection'
import InfoCard from '../components/common/InfoCard'
import StatsRow from '../components/common/StatsRow'
import CTASection from '../components/common/CTASection'
import { motion } from 'framer-motion'

function About() {
  return (
    <main className="about-page bg-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="about-hero py-16 bg-gradient-to-br from-blue-900 to-blue-600 text-white text-center">
        <div className="about-hero__container container mx-auto px-4">
          <h1 className="about-hero__title text-4xl md:text-6xl font-bold mb-4">
            Where HVACR Excellence Meets Dodgers Spirit
          </h1>
          <p className="about-hero__subtitle text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="about-info py-12 bg-white text-center">
        <div className="about-info__container container mx-auto px-4 max-w-2xl">
          <div className="about-info__avatar w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl font-bold text-blue-800 mx-auto mb-4">
            C
          </div>
          <h2 className="about-info__name text-2xl font-bold mb-1 text-blue-900">Chris Garcia</h2>
          <p className="about-info__role text-blue-600 font-semibold mb-3">Owner & Director</p>
          <p className="about-info__bio text-gray-700">
            Founded in March 2024, AirDoctor HVACR is a family-owned business with roots in California and a heart in Central Texas. Chris brings 35+ years of HVACR expertise, from industrial systems for Raytheon to local businesses and homes. Starting as a Local 250 technician in Los Angeles, he's built a legacy of trust, skill, and Dodgers-level dedication. The Garcia family moved to Texas for new opportunities, drawn by the region's energy and values—faith, love for America, and a drive for excellence. Here, they serve with integrity, care, and a winning attitude. Whether you need expert installation, reliable maintenance, or energy-saving retrofits, Chris and AirDoctor HVACR deliver fast, friendly, and reliable service—always with a smile and a touch of Dodgers blue.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats py-12 bg-blue-50">
        <div className="about-stats__container container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
          <div className="about-stats__card bg-white rounded-2xl p-8 shadow flex flex-col items-center text-center">
            <span className="about-stats__number text-3xl font-extrabold text-blue-700 mb-1">35+</span>
            <span className="about-stats__label text-base font-semibold text-blue-900">Years Experience</span>
          </div>
          <div className="about-stats__card bg-white rounded-2xl p-8 shadow flex flex-col items-center text-center">
            <span className="about-stats__number text-3xl font-extrabold text-blue-700 mb-1">100+</span>
            <span className="about-stats__label text-base font-semibold text-blue-900">Happy Clients</span>
          </div>
          <div className="about-stats__card bg-white rounded-2xl p-8 shadow flex flex-col items-center text-center">
            <span className="about-stats__number text-3xl font-extrabold text-blue-700 mb-1">5.0</span>
            <span className="about-stats__label text-base font-semibold text-blue-900">Star Service</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta py-12 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center">
        <div className="about-cta__container container mx-auto px-4 max-w-2xl">
          <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-3 text-blue-800">
            Let's Connect!
          </h2>
          <p className="about-cta__text text-lg text-blue-700 max-w-2xl mx-auto">
            Got a project or want to talk shop? Chris is always happy to chat HVACR, tech, or Texas weather. Reach out and let's make something cool happen—with a little Dodgers magic!
          </p>
        </div>
      </section>
    </main>
  )
}

export default About