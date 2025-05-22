import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

function Home() {
  return (
    <>
      <Hero />
      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="HVAC Service"
              description="Regular maintenance and emergency repairs for all HVAC systems. Keep your system running efficiently year-round."
              icon="wrench"
              link="/service"
              linkText="Learn More"
            />
            <ServiceCard
              title="Installation"
              description="Professional installation of new HVAC systems for residential and commercial properties."
              icon="tool"
              link="/installation"
              linkText="Learn More"
            />
            <ServiceCard
              title="Retrofit"
              description="Upgrade your existing HVAC system to improve efficiency, reduce costs, and enhance comfort."
              icon="refresh"
              link="/retrofit"
              linkText="Learn More"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home 