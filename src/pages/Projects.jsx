import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import { projectsData } from '../constants'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Projects content state
  const [projectsContent, setProjectsContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      <div className="projects-loading min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="loading-state flex items-center justify-center p-8">
          <div className="loading-state__spinner w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <span className="loading-state__text ml-3 text-white">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="projects-error min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
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
      <section className="projects-list py-16 bg-white">
        <div className="projects-list__container container mx-auto px-4">
          <div className="projects-list__grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <ServiceCard
                key={idx}
                icon={project.icon}
                title={project.title}
                description={project.description}
                poster={project.poster}
                onClick={() => handleCardClick(project)}
                className="projects-list__item"
              />
            ))}
          </div>
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