import { useState } from 'react'
import HeroSection from '../components/common/HeroSection'
import ServiceCard, { ServiceModal } from '../components/common/ServiceCard'
import { projectsData } from '../constants'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <HeroSection
        title="Our Coolest Industrial Projects"
        subtitle="A few of the big, weird, and wonderful things we've built for Texas industry. Small team, big results!"
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