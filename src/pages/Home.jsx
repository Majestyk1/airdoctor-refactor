import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Volume2 } from 'lucide-react'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import AnimatedButton from '../components/common/AnimatedButton'
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
        <div className="hero-loading min-h-[100dvh] flex items-center justify-center bg-[#0A1828]">
          <div className="loading-state flex items-center justify-center p-8">
            <div className="loading-state__spinner w-8 h-8 border-4 border-[#178582] border-t-transparent rounded-full animate-spin"></div>
            <span className="loading-state__text ml-3 text-[#178582]">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="hero-error min-h-[100dvh] flex items-center justify-center bg-[#0A1828]">
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
      ) : (
        <HeroSection
          title={heroContent?.title}
          accent={heroContent?.accent}
          subtitle={heroContent?.subtitle}
        >
          <div className="hero-section__actions flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
            <Link to="/projects" className="w-full sm:w-auto">
              <AnimatedButton className="hero-section__button w-full sm:w-auto rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2 bg-[#178582] hover:bg-[#0F5F5C] text-white border border-[#178582]/40 shadow-lg hover:shadow-[#178582]/50">
                <span className="hero-section__button-content flex items-center gap-2">
                  See Our Work
                </span>
              </AnimatedButton>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <AnimatedButton className="hero-section__button w-full sm:w-auto rounded-xl px-8 py-3 text-lg flex items-center justify-center gap-2 bg-[#1A2332]/80 hover:bg-[#2D3748]/90 text-white border border-[#178582]/40 backdrop-blur-sm">
                <span className="hero-section__button-content flex items-center gap-2">
                  <span className="hero-section__button-icon flex items-center">
                    <Volume2 className="w-5 h-5" />
                  </span>
                  <span>Let's Talk</span>
                </span>
              </AnimatedButton>
            </Link>
          </div>
        </HeroSection>
      )}

      {/* What We Do Best Section */}
      <section className="home-whatwedo py-20 bg-[#1A2332]">
        <div className="home-whatwedo__container container mx-auto px-4">
          <h2 className="home-whatwedo__title text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            What We Do Best
          </h2>
          {cardsLoading ? (
            <div className="loading-state flex items-center justify-center p-8">
              <div className="loading-state__spinner w-8 h-8 border-4 border-[#178582] border-t-transparent rounded-full animate-spin"></div>
              <span className="loading-state__text ml-3 text-gray-300">Loading cards...</span>
            </div>
          ) : cardsError ? (
            <div className="error-state bg-red-900/20 border border-red-700 rounded-lg p-4">
              <div className="error-state__header flex items-center mb-2">
                <span className="error-state__icon text-red-400 mr-2">⚠️</span>
                <h3 className="error-state__title text-red-300 font-medium">Error Loading Cards</h3>
              </div>
              <p className="error-state__message text-red-200">{cardsError}</p>
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