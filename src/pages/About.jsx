import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import HeroSection from '../components/common/HeroSection'
import InfoCard from '../components/common/InfoCard'
import StatsRow from '../components/common/StatsRow'
import { companyStats } from '../constants'

function About() {
  const [ctaExpanded, setCtaExpanded] = useState(false)
  
  // About content state
  const [aboutContent, setAboutContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch about content from Firestore
  useEffect(() => {
    async function fetchAboutContent() {
      setLoading(true)
      setError(null)
      try {
        const docRef = doc(db, 'content', 'about')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setAboutContent(docSnap.data())
        } else {
          // If no content exists, use fallback content
          setAboutContent({
            title: 'Where HVACR Excellence Meets',
            accent: 'Dodgers Spirit',
            subtitle: 'Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas.'
          })
        }
      } catch (err) {
        setError('Failed to load about content.')
        console.error('Error fetching about content:', err)
        // Use fallback content on error
        setAboutContent({
          title: 'Where HVACR Excellence Meets',
          accent: 'Dodgers Spirit',
          subtitle: 'Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas.'
        })
      }
      setLoading(false)
    }
    fetchAboutContent()
  }, [])

  const toggleCta = () => {
    setCtaExpanded(!ctaExpanded)
  }

  if (loading) {
    return (
      <div className="about-loading min-h-screen flex items-center justify-center bg-[#0A1828]">
        <div className="loading-state flex items-center justify-center p-8">
          <div className="loading-state__spinner w-8 h-8 border-4 border-[#178582] border-t-transparent rounded-full animate-spin"></div>
          <span className="loading-state__text ml-3 text-[#178582]">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="about-error min-h-screen flex items-center justify-center bg-[#0A1828]">
        <div className="error-state bg-red-900/20 border border-red-700 rounded-lg p-6 max-w-md mx-4">
          <div className="error-state__header flex items-center mb-2">
            <span className="error-state__icon text-red-400 mr-2">⚠️</span>
            <h3 className="error-state__title text-red-300 font-medium">Error Loading Content</h3>
          </div>
          <p className="error-state__message text-red-200">
            {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <main className="about-page bg-[#0A1828] min-h-screen w-full overflow-x-hidden">
      <HeroSection
        title={aboutContent?.title}
        subtitle={aboutContent?.subtitle}
        accent={aboutContent?.accent}
      />
      <section className="about-info py-12 bg-[#1A2332]">
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
        stats={companyStats}
      />

      {/* Expandable CTA Section */}
      <section className="about-cta py-12 bg-[#1A2332] text-center">
        <div className="about-cta__container container mx-auto px-4 max-w-md">
          <motion.div 
            onClick={toggleCta}
            className="about-cta__card group transition-all duration-300 rounded-2xl bg-[#1A2332]/80 backdrop-blur-xl shadow-lg border border-[#178582]/40 hover:bg-[#178582]/20 hover:border-[#178582]/60 hover:scale-[1.02] p-6 md:p-8 cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={ctaExpanded ? "Click to collapse contact info" : "Click to expand contact info"}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCta(); } }}
          >
            {/* Title - Always visible */}
            <div>
              <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-3 text-white">
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
                    transition={{ duration: 0.15, opacity: { duration: 0.1 } }}
                    className="about-cta__expanded-content w-full"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <p className="about-cta__text text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                        Ready to discuss your HVACR project or explore energy-efficient solutions? Chris brings 35+ years of expertise to every consultation. Whether you need system upgrades, maintenance planning, or custom installations, we're here to deliver professional results with the reliability you deserve.
                      </p>
                      
                      {/* CTA Button - Matching AnimatedButton hover effects */}
                      <Link 
                        to="/contact" 
                        className="about-cta__button inline-block px-6 py-3 bg-[#178582] hover:bg-[#0F5F5C] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#178582] focus:ring-offset-2 hover:shadow-[#178582]/50 active:scale-95 active:shadow-inner cursor-pointer mb-4"
                        onClick={(e) => e.stopPropagation()} // Prevent card collapse when clicking button
                      >
                        Get In Touch
                      </Link>
                      
                      <p className="about-cta__collapse-hint text-[#178582] font-medium text-sm">
                        Click to collapse
                      </p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <p className="about-cta__expand-hint text-[#178582] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click for more info
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default About