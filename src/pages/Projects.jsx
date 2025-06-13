import HeroSection from '../components/common/HeroSection'
import ServiceCard from '../components/common/ServiceCard'
import { Building2, Zap, Thermometer } from 'lucide-react'

function Projects() {
  const projects = [
    {
      icon: Building2,
      title: 'Robotics Plant HVAC Overhaul',
      description: 'Designed and installed a fully automated HVAC system for a robotics manufacturing facility. Sensors everywhere. Zero downtime.',
      video: '/src/assets/industrial-view-trimmed.mp4',
      poster: '', // Add a poster image path if you have one
    },
    {
      icon: Zap,
      title: 'Data Center Cooling',
      description: 'Built a high-efficiency cooling system for a local data center. Kept the servers happy, and the energy bill low.',
      video: '/src/assets/powerPlant-view-trimmed.mp4'
    },
    {
      icon: Thermometer,
      title: 'Pharma Lab Refrigeration',
      description: 'Custom refrigeration for a pharmaceutical lab. Super precise, super reliable, super cool (literally).',
      video: '/src/assets/pharmaFactory.mp4'
    },
  ]

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
            {projects.map((project, idx) => (
              <ServiceCard
                key={idx}
                icon={project.icon}
                title={project.title}
                description={project.description}
                video={project.video}
                poster={project.poster}
                className="projects-list__item"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects