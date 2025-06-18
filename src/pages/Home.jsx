import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Volume2 } from 'lucide-react'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import AnimatedButton from '../components/common/AnimatedButton'
import { motion } from 'framer-motion'
import { servicesData } from '../constants'


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
            {servicesData.map((service) => (
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