import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Volume2 } from 'lucide-react'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import AnimatedButton from '../components/common/AnimatedButton'
import { motion } from 'framer-motion'
import { servicesData } from '../constants'
import { iconMap } from '../constants/iconMap'


function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Hero content state
  const [heroContent, setHeroContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Service cards state
  const [serviceCards, setServiceCards] = useState([])
  const [cardsLoading, setCardsLoading] = useState(true)
  const [cardsError, setCardsError] = useState(null)

  // Fetch hero content from Firestore
  useEffect(() => {
    async function fetchHeroContent() {
      setLoading(true)
      setError(null)
      try {
        const docRef = doc(db, 'content', 'hero')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setHeroContent(docSnap.data())
        } else {
          // If no content exists, use fallback content
          setHeroContent({
            title: 'Small Team,',
            accent: 'Big Solutions',
            subtitle: "We're not your typical HVACR company. We're a tiny crew of tech-loving pros who solve big industrial challenges with a smile."
          })
        }
      } catch (err) {
        setError('Failed to load hero content.')
        console.error('Error fetching hero content:', err)
        // Use fallback content on error
        setHeroContent({
          title: 'Small Team,',
          accent: 'Big Solutions',
          subtitle: "We're not your typical HVACR company. We're a tiny crew of tech-loving pros who solve big industrial challenges with a smile."
        })
      }
      setLoading(false)
    }
    fetchHeroContent()
  }, [])

  // Fetch service cards from Firestore
  useEffect(() => {
    async function fetchServiceCards() {
      setCardsLoading(true)
      setCardsError(null)
      try {
        const querySnapshot = await getDocs(collection(db, 'services'))
        const cards = []
        querySnapshot.forEach((doc) => {
          cards.push({ id: doc.id, ...doc.data() })
        })
        setServiceCards(cards)
      } catch (err) {
        setCardsError('Failed to load service cards.')
        console.error('Error fetching service cards:', err)
      }
      setCardsLoading(false)
    }
    fetchServiceCards()
  }, [])

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
      {loading ? (
        <div className="hero-loading min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          <div className="loading-state flex items-center justify-center p-8">
            <div className="loading-state__spinner w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="loading-state__text ml-3 text-white">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="hero-error min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          <div className="error-state bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-4">
            <div className="error-state__header flex items-center mb-2">
              <span className="error-state__icon text-red-500 mr-2">⚠️</span>
              <h3 className="error-state__title text-red-800 font-medium">Error Loading Content</h3>
            </div>
            <p className="error-state__message text-red-700">
              {error}
            </p>
          </div>
        </div>
      ) : (
        <HeroSection
          title={
            <>
              {heroContent?.title}{' '}
              {heroContent?.accent && (
                <span className="hero-section__title_accent text-blue-400">{heroContent.accent}</span>
              )}
            </>
          }
          subtitle={heroContent?.subtitle}
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
      )}

      {/* What We Do Best Section */}
      <section className="home-whatwedo py-20 bg-white">
        <div className="home-whatwedo__container container mx-auto px-4">
          <h2 className="home-whatwedo__title text-3xl md:text-4xl font-bold text-center mb-16">
            What We Do Best
          </h2>
          {cardsLoading ? (
            <div className="loading-state flex items-center justify-center p-8">
              <div className="loading-state__spinner w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="loading-state__text ml-3 text-gray-600">Loading cards...</span>
            </div>
          ) : cardsError ? (
            <div className="error-state bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="error-state__header flex items-center mb-2">
                <span className="error-state__icon text-red-500 mr-2">⚠️</span>
                <h3 className="error-state__title text-red-800 font-medium">Error Loading Cards</h3>
              </div>
              <p className="error-state__message text-red-700">{cardsError}</p>
            </div>
          ) : (
            <div className="home-whatwedo__grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((service) => {
                const Icon = iconMap[service.icon] || service.icon
                return (
                  <ServiceCard
                    key={service.id || service.title}
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    poster={service.poster}
                    onClick={() => handleCardClick(service)}
                  />
                )
              })}
            </div>
          )}
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