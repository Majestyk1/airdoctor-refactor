import { Building2, Zap, Thermometer } from 'lucide-react'

function Projects() {
  return (
    <>
      {/* Projects Hero */}
      <section className="projects-hero py-16 bg-gradient-to-br from-blue-900 to-gray-900 text-white text-center">
        <div className="projects-hero__container container mx-auto px-4">
          <h1 className="projects-hero__title text-3xl md:text-5xl font-bold mb-4">
            Our Coolest Industrial Projects
          </h1>
          <p className="projects-hero__subtitle text-lg md:text-2xl text-blue-100 max-w-2xl mx-auto">
            A few of the big, weird, and wonderful things we've built for Texas industry. Small team, big results!
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="projects-list py-16 bg-white">
        <div className="projects-list__container container mx-auto px-4">
          <div className="projects-list__grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="projects-list__item bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition-all flex flex-col items-center text-center">
              <Building2 className="projects-list__icon w-12 h-12 text-blue-500 mb-4" />
              <h3 className="projects-list__item-title text-xl font-bold mb-2">Robotics Plant HVAC Overhaul</h3>
              <p className="projects-list__item-desc text-gray-600 mb-4">
                Designed and installed a fully automated HVAC system for a robotics manufacturing facility. Sensors everywhere. Zero downtime.
              </p>
              <span className="projects-list__tag bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">Automation</span>
            </div>
            {/* Project 2 */}
            <div className="projects-list__item bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition-all flex flex-col items-center text-center">
              <Zap className="projects-list__icon w-12 h-12 text-blue-500 mb-4" />
              <h3 className="projects-list__item-title text-xl font-bold mb-2">Data Center Cooling</h3>
              <p className="projects-list__item-desc text-gray-600 mb-4">
                Built a high-efficiency cooling system for a local data center. Kept the servers happy, and the energy bill low.
              </p>
              <span className="projects-list__tag bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">Mission Critical</span>
            </div>
            {/* Project 3 */}
            <div className="projects-list__item bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition-all flex flex-col items-center text-center">
              <Thermometer className="projects-list__icon w-12 h-12 text-blue-500 mb-4" />
              <h3 className="projects-list__item-title text-xl font-bold mb-2">Pharma Lab Refrigeration</h3>
              <p className="projects-list__item-desc text-gray-600 mb-4">
                Custom refrigeration for a pharmaceutical lab. Super precise, super reliable, super cool (literally).
              </p>
              <span className="projects-list__tag bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">Precision</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects