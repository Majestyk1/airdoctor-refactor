import HeroSection from '../components/common/HeroSection'
import InfoCard from '../components/common/InfoCard'
import StatsRow from '../components/common/StatsRow'

function About() {
  return (
    <main className="about-page bg-white min-h-screen w-full overflow-x-hidden">
      <HeroSection
        title="Where HVACR Excellence Meets Dodgers Spirit"
        subtitle="Chris Garcia, owner & director of AirDoctor HVACR, brings championship-level service to Central Texas."
      />
      <section className="about-info py-12 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <InfoCard
            avatar="C"
            name="Chris Garcia"
            role="Owner & Director"
            bio="Founded in March 2024, AirDoctor HVACR is a family-owned business with roots in California and a heart in Central Texas. Chris brings 35+ years of HVACR expertise, from industrial systems for Raytheon to local businesses and homes. Starting as a Local 250 technician in Los Angeles, he's built a legacy of trust, skill, and Dodgers-level dedication. The Garcia family moved to Texas for new opportunities, drawn by the region's energy and values—faith, love for America, and a drive for excellence. Here, they serve with integrity, care, and a winning attitude. Whether you need expert installation, reliable maintenance, or energy-saving retrofits, Chris and AirDoctor HVACR deliver fast, friendly, and reliable service—always with a smile and a touch of Dodgers blue."
            className="max-w-md"
          />
        </div>
      </section>
      <StatsRow
        stats={[
          { number: '35+', label: 'Years Experience' },
          { number: '100+', label: 'Happy Clients' },
          { number: '5.0', label: 'Star Service' },
        ]}
      />

      {/* Hardcoded CTA Section with matching InfoCard background and hover */}
      <section className="about-cta py-12 bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center">
        <div className="about-cta__container container mx-auto px-4 max-w-2xl">
          <div className="about-cta__card transition-all duration-300 rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg shadow-blue-200/40 hover:bg-gradient-to-tr hover:from-blue-100 hover:to-white hover:bg-white/70 focus-within:bg-white/70 p-6 md:p-8">
            <h2 className="about-cta__title text-2xl md:text-3xl font-bold mb-3 text-blue-800">
              Let's Connect!
            </h2>
            <p className="about-cta__text text-lg text-blue-700 max-w-2xl mx-auto">
              Got a project or want to talk shop? Chris is always happy to chat HVACR, tech, or Texas weather. Reach out and let's make something cool happen—with a little Dodgers magic!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About