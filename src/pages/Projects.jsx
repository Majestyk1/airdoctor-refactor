import { useState, useEffect } from 'react'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import { iconMap } from '../constants/iconMap'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Projects content state
  const [projectsContent, setProjectsContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Project cards state
  const [projectCards, setProjectCards] = useState([])
  const [cardsLoading, setCardsLoading] = useState(true)
  const [cardsError, setCardsError] = useState(null)

  // Fetch projects content from Firestore
  useEffect(() => {
    async function fetchProjectsContent() {
      setLoading(true)
      setError(null)
      try {
        const docRef = doc(db, 'content', 'projects')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProjectsContent(docSnap.data())
        } else {
          // If no content exists, use fallback content
          setProjectsContent({
            title: 'Our Coolest',
            accent: 'Industrial Projects',
            subtitle: 'A few of the big, weird, and wonderful things we\'ve built for Texas industry. Small team, big results!'
          })
        }
      } catch (err) {
        setError('Failed to load projects content.')
        console.error('Error fetching projects content:', err)
        // Use fallback content on error
        setProjectsContent({
          title: 'Our Coolest',
          accent: 'Industrial Projects',
          subtitle: 'A few of the big, weird, and wonderful things we\'ve built for Texas industry. Small team, big results!'
        })
      }
      setLoading(false)
    }
    fetchProjectsContent()
  }, [])

  // Fetch project cards from Firestore
  useEffect(() => {
    async function fetchProjectCards() {
      setCardsLoading(true)
      setCardsError(null)
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'))
        const cards = []
        querySnapshot.forEach((doc) => {
          cards.push({ id: doc.id, ...doc.data() })
        })
        setProjectCards(cards)
      } catch (err) {
        setCardsError('Failed to load project cards.')
        console.error('Error fetching project cards:', err)
      }
      setCardsLoading(false)
    }
    fetchProjectCards()
  }, [])

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="projects-loading min-h-screen flex items-center justify-center bg-[#0A1828]">
        <div className="loading-state flex items-center justify-center p-8">
          <div className="loading-state__spinner w-8 h-8 border-4 border-[#178582] border-t-transparent rounded-full animate-spin"></div>
          <span className="loading-state__text ml-3 text-[#178582]">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects-error min-h-screen flex items-center justify-center bg-[#0A1828]">
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
    <>
      <HeroSection
        title={projectsContent?.title}
        subtitle={projectsContent?.subtitle}
        accent={projectsContent?.accent}
        className="projects-hero"
      />
      <section className="projects-list py-16 bg-[#1A2332]">
        <div className="projects-list__container container mx-auto px-4">
          {cardsLoading ? (
            <div className="loading-state flex items-center justify-center p-8">
              <div className="loading-state__spinner w-8 h-8 border-4 border-[#178582] border-t-transparent rounded-full animate-spin"></div>
              <span className="loading-state__text ml-3 text-gray-300">Loading cards...</span>
            </div>
          ) : cardsError ? (
            <div className="error-state bg-red-900/20 border border-red-700 rounded-lg p-6 max-w-md mx-4">
              <div className="error-state__header flex items-center mb-2">
                <span className="error-state__icon text-red-400 mr-2">⚠️</span>
                <h3 className="error-state__title text-red-300 font-medium">Error Loading Cards</h3>
              </div>
              <p className="error-state__message text-red-200">
                {cardsError}
              </p>
            </div>
          ) : (
          <div className="projects-list__grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectCards.map((project, idx) => {
              const Icon = iconMap[project.icon] || project.icon // fallback to project.icon if already a component
              return (
                <ServiceCard
                    key={project.id || idx}
                  icon={Icon}
                  title={project.title}
                  description={project.description}
                  poster={project.poster}
                  onClick={() => handleCardClick(project)}
                  className="projects-list__item"
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
        service={selectedProject}
      />
    </>
  )
}

export default Projects