import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import '../styles/blocks/Home.css'

function Home() {
  return (
    <>
      <Hero />
      {/* Services Section */}
      <section className="home-services">
        <div className="home-services__container">
          <h2 className="home-services__title">Our Services</h2>
          <div className="home-services__grid">
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