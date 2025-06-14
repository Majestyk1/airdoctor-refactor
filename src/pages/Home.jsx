import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Zap, Building2, Volume2 } from 'lucide-react'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import AnimatedButton from '../components/common/AnimatedButton'
import { motion } from 'framer-motion'

import industrialPoster from '../assets/test.jpg'
import controlsPoster from '../assets/test1.jpg'
import refrigerationPoster from '../assets/test.jpg'


const services = [
  {
    icon: Wrench,
    title: "Industrial HVAC",
    description: "Custom solutions for manufacturing and tech-driven facilities. No cookie-cutter installs here.",
    video: "/src/assets/industrialHVAC-trimmed-720p.mp4",
    poster: industrialPoster,
  },
  {
    icon: Zap,
    title: "Smart Controls",
    description: "Automation and monitoring that make your systems work smarter, not harder.",
    video: "/src/assets/bigFan-trimmed.mp4",
    poster: controlsPoster,
  },
  {
    icon: Building2,
    title: "Refrigeration",
    description: "Keeping things cool for industry, labs, and anyone who needs precision.",
    video: "/src/assets/cold-720p-trimmed.mp4",
    poster: refrigerationPoster,
  }
];


function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

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
        <div className="hero-section__actions flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
          <Link to="/projects" className="w-full sm:w-auto">
            <AnimatedButton className="hero-section__button w-full sm:w-auto rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2">
              <span className="hero-section__button-content flex items-center gap-2">
                See Our Work
              </span>
            </AnimatedButton>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <AnimatedButton className="hero-section__button w-full sm:w-auto rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-blue-200/40">
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
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                poster={service.poster}
                onClick={() => handleCardClick(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </>
  )
}

export default Home