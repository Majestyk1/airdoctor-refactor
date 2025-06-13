import { Link } from 'react-router-dom'
import { Wrench, Zap, Building2, Volume2 } from 'lucide-react'
import HeroSection from '../components/common/HeroSection'
import ServiceCard from '../components/common/ServiceCard'
import AnimatedButton from '../components/common/AnimatedButton'
import { motion } from 'framer-motion'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Small Team,{' '}
            <span className="hero-section__title_accent text-blue-400">Big Solutions</span>
          </>
        }
        subtitle="We're not your typical HVACR company. We're a tiny crew of tech-loving pros who solve big industrial challenges with a smile."
      >
        <div className="hero-section__actions flex flex-col sm:flex-row gap-4 justify-center mt-8 pb-2">
          <Link to="/projects">
            <AnimatedButton className="hero-section__button rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2">
              <span className="hero-section__button-content flex items-center gap-2">
                See Our Work
              </span>
            </AnimatedButton>
          </Link>
          <Link to="/contact">
            <AnimatedButton className="hero-section__button rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-blue-200/40">
              <span className="hero-section__button-content flex items-center gap-2">
                <motion.span
                  className="hero-section__button-icon flex items-center"
                  whileHover={{ scale: 1.18 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <Volume2 className="w-5 h-5" />
                </motion.span>
                <span>Let's Talk</span>
              </span>
            </AnimatedButton>
          </Link>
        </div>
      </HeroSection>

      {/* What We Do Best Section */}
      <section className="home-whatwedo py-20 bg-white">
        <div className="home-whatwedo__container container mx-auto px-4">
          <h2 className="home-whatwedo__title text-3xl md:text-4xl font-bold text-center mb-16">
            What We Do Best
          </h2>
          <div className="home-whatwedo__grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Wrench}
              title="Industrial HVAC"
              description="Custom solutions for manufacturing and tech-driven facilities. No cookie-cutter installs here."
              video="/src/assets/industrialHVAC-trimmed-720p.mp4"
            />
            <ServiceCard
              icon={Zap}
              title="Smart Controls"
              description="Automation and monitoring that make your systems work smarter, not harder."
              video="/src/assets/bigFan-trimmed.mp4"
            />
            <ServiceCard
              icon={Building2}
              title="Refrigeration"
              description="Keeping things cool for industry, labs, and anyone who needs precision."
              video="/src/assets/cold-720p-trimmed.mp4"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home