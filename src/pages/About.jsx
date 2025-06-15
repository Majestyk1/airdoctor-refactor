import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/common/HeroSection'
import InfoCard from '../components/common/InfoCard'
import StatsRow from '../components/common/StatsRow'

function About() {
  const [ctaExpanded, setCtaExpanded] = useState(false)

  const toggleCta = () => {
    setCtaExpanded(!ctaExpanded)
  }

  return (
    <main className="about-page bg-white min-h-screen w-full overflow-x-hidden">
      <HeroSection
        title="Where HVACR Excellence Meets Dodgers Spirit"
        subtitle="Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas."
      />
      <section className="about-info py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <InfoCard
            avatar="C"
            name="Chris Garcia"
            role="Owner & Director"
            bio="Founded in March 2024, AirDoctor HVACR is a family-owned business with roots in California and a heart in Central Texas. Chris brings 35+ years of HVACR expertise, from industrial systems for Raytheon to local businesses and homes. Starting as a Local 250 technician in Los Angeles, he's built a legacy of trust, skill, and Dodgers-level dedication. The Garcia family moved to Texas for new opportunities, drawn by the region's energy and values—faith, love for America, and a drive for excellence. Here, they serve with integrity, care, and a winning attitude. Whether you need expert installation, reliable maintenance, or energy-saving retrofits, Chris and AirDoctor HVACR deliver fast, friendly, and reliable service—always with a smile and a touch of Dodgers blue."
            className="max-w-md"
          />
        </div>
      </section>
      <StatsRow
        stats={[
          { number: '35+', label: 'Years Experience' },
          { number: '100+', label: 'Happy Clients' },
          { number: '5.0', label: 'Star Service' },
        ]}
      />

      {/* Expandable CTA Section */}
      <section className="about-cta py-12 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center">
        <div className="about-cta__container container mx-auto px-4 max-w-md">
          <motion.div 
            onClick={toggleCta}
            className="about-cta__card group transition-all duration-300 rounded-2xl bg-blue-50/80 backdrop-blur-xl shadow-lg shadow-blue-200/40 hover:bg-blue-100/70 hover:scale-[1.02] p-6 md:p-8 cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={ctaExpanded ? "Click to collapse contact info" : "Click to expand contact info"}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCta(); } }}
          >
            {/* Title - Always visible */}
            <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-3 text-blue-800">
              Let's Connect!
            </h2>

            {/* Expandable Content */}
            <AnimatePresence mode="wait">
              {ctaExpanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="about-cta__expanded-content w-full"
                >
                  <p className="about-cta__text text-lg text-blue-700 max-w-2xl mx-auto mb-4">
                    Got a project or want to talk shop? Chris is always happy to chat HVACR, tech, or Texas weather. Reach out and let's make something cool happen—with a little Dodgers magic!
                  </p>
                  <p className="about-cta__collapse-hint text-blue-600 font-medium text-sm">
                    Click to collapse
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="about-cta__expand-hint text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click for more info
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About