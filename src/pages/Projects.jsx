import HeroSection from '../components/common/HeroSection'
import ServiceCard from '../components/common/ServiceCard'
import { Building2, Zap, Thermometer, Shield, Flame, Wind } from 'lucide-react'

function Projects() {
  const projects = [
    {
      icon: Building2,
      title: 'Robotics Plant HVAC Overhaul',
      description: 'Designed and installed a fully automated HVAC system for a robotics manufacturing facility. Sensors everywhere. Zero downtime.',
      video: '/src/assets/industrial-view-trimmed.mp4',
      poster: '',
    },
    {
      icon: Zap,
      title: 'Data Center Cooling',
      description: 'Built a high-efficiency cooling system for a local data center. Kept the servers happy, and the energy bill low.',
      video: '/src/assets/bigFan-trimmed.mp4',
      poster: '',
    },
    {
      icon: Thermometer,
      title: 'Pharma Lab Retrofit',
      description: 'Upgraded a pharmaceutical lab with precision climate control for sensitive research and production.',
      video: '/src/assets/cold-720p-trimmed.mp4',
      poster: '',
    },
    {
      icon: Shield,
      title: 'Clean Room Air Filtration',
      description: 'Installed advanced HEPA filtration and positive pressure systems for a semiconductor clean room facility.',
      video: '/src/assets/industrial-view-trimmed.mp4',
      poster: '',
    },
    {
      icon: Flame,
      title: 'Commercial Kitchen Ventilation',
      description: 'Engineered and implemented a fire-safe, high-capacity ventilation system for a busy restaurant chain.',
      video: '/src/assets/bigFan-trimmed.mp4',
      poster: '',
    },
    {
      icon: Wind,
      title: 'Warehouse Airflow Optimization',
      description: 'Redesigned airflow and destratification for a large warehouse, improving comfort and reducing energy costs.',
      video: '/src/assets/cold-720p-trimmed.mp4',
      poster: '',
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