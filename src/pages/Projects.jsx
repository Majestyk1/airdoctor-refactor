import { useState } from 'react'
import { Phone, Star, MapPin, Calendar, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Austin Tech Office - Complete HVAC Overhaul',
      category: 'commercial',
      location: 'Austin, TX',
      year: '2024',
      image: '🏢',
      challenge: 'Outdated system causing 40% energy waste',
      solution: 'New VRF system with smart controls',
      results: ['60% energy reduction', '$2,400/month savings', 'Improved air quality'],
      testimonial: 'AirDoctorHVAC transformed our office comfort and cut our energy bills in half!',
      customer: 'Sarah Chen, Facility Manager'
    },
    {
      id: 2,
      title: 'Round Rock Family Home - Smart Retrofit',
      category: 'residential',
      location: 'Round Rock, TX',
      year: '2024',
      image: '🏠',
      challenge: 'Uneven temperatures and high bills',
      solution: 'Duct sealing + smart thermostat upgrade',
      results: ['35% lower energy costs', 'Even temperature control', 'Remote monitoring'],
      testimonial: 'Finally, every room is comfortable! Our bills dropped immediately.',
      customer: 'Mike & Lisa Johnson'
    },
    {
      id: 3,
      title: 'Georgetown Restaurant - Emergency Install',
      category: 'commercial',
      location: 'Georgetown, TX',
      year: '2023',
      image: '🍽️',
      challenge: 'AC failed during summer rush',
      solution: '24-hour emergency rooftop unit replacement',
      results: ['Same-day installation', 'Zero downtime', 'Higher efficiency unit'],
      testimonial: 'They saved our business! Installed everything overnight without disrupting service.',
      customer: 'Carlos Rodriguez, Owner'
    },
    {
      id: 4,
      title: 'Cedar Park Mansion - Luxury Installation',
      category: 'residential',
      location: 'Cedar Park, TX',
      year: '2023',
      image: '🏘️',
      challenge: '6,000 sq ft home with no central air',
      solution: 'Multi-zone heat pump system installation',
      results: ['Whole-home comfort', 'Energy Star efficiency', '10-year warranty'],
      testimonial: 'Professional installation and amazing results. Highly recommend!',
      customer: 'David & Emma Wilson'
    },
    {
      id: 5,
      title: 'Pflugerville School - Energy Upgrade',
      category: 'commercial',
      location: 'Pflugerville, TX',
      year: '2023',
      image: '🏫',
      challenge: 'Aging system affecting student comfort',
      solution: 'High-efficiency package units + controls',
      results: ['Better indoor air quality', '45% energy savings', 'Quieter operation'],
      testimonial: 'The kids and teachers love the improved comfort. Great energy savings too!',
      customer: 'Jennifer Adams, Principal'
    },
    {
      id: 6,
      title: 'Leander Medical Clinic - Precision Install',
      category: 'commercial',
      location: 'Leander, TX',
      year: '2023',
      image: '🏥',
      challenge: 'Need precise temperature & humidity control',
      solution: 'Medical-grade HVAC with advanced filtration',
      results: ['Hospital-grade air quality', 'Precise climate control', 'Backup systems'],
      testimonial: 'Perfect for our medical environment. Exceptional attention to detail.',
      customer: 'Dr. Maria Gonzalez'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="projects-hero bg-gradient-to-br from-blue-600 to-green-600 text-white pt-24 pb-16">
        <div className="projects-hero__container container mx-auto px-4 text-center">
          <h1 className="projects-hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Featured Projects
          </h1>
          <p className="projects-hero__subtitle text-lg md:text-xl max-w-2xl mx-auto mb-12">
            See how we've transformed comfort and efficiency for homes and businesses across Central Texas.
          </p>
          
          {/* Stats */}
          <div className="projects-hero__stats grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="projects-hero__stat bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="projects-hero__stat-number text-2xl md:text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="projects-hero__stat-label text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="projects-showcase py-16 bg-white">
        <div className="projects-showcase__container container mx-auto px-4">
          <h2 className="projects-showcase__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Recent Project Highlights
          </h2>
          
          {/* Filter Tabs */}
          <div className="projects-showcase__filters flex justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`projects-showcase__filter px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'projects-showcase__filter_active bg-blue-600 text-white'
                    : 'projects-showcase__filter_inactive bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-showcase__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="projects-showcase__card bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Project Image */}
                <div className="projects-showcase__image h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                {/* Project Info */}
                <div className="projects-showcase__content p-6">
                  <div className="projects-showcase__header mb-4">
                    <div className="projects-showcase__meta flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="projects-showcase__location flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="projects-showcase__year flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="projects-showcase__card-title text-lg font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                  </div>

                  <div className="projects-showcase__details mb-4">
                    <div className="projects-showcase__challenge mb-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600">{project.challenge}</p>
                    </div>
                    <div className="projects-showcase__solution mb-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                  </div>

                  <div className="projects-showcase__results mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Results:</h4>
                    <ul className="projects-showcase__results-list space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="projects-showcase__result flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="projects-showcase__testimonial bg-gray-50 rounded-lg p-4">
                    <p className="projects-showcase__quote text-sm text-gray-700 italic mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="projects-showcase__customer text-xs text-gray-500 font-medium">
                      — {project.customer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="projects-reviews py-16 bg-gray-50">
        <div className="projects-reviews__container container mx-auto px-4">
          <h2 className="projects-reviews__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="projects-reviews__grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                review: 'Outstanding service from start to finish. The team was professional, on time, and cleaned up perfectly. Our new system works beautifully!',
                customer: 'Rachel Martinez',
                location: 'Austin, TX',
                project: 'Residential Installation'
              },
              {
                rating: 5,
                review: 'They completed our emergency repair in the middle of the night! Saved our restaurant during the busy season. Incredible service.',
                customer: 'Tony Kumar',
                location: 'Round Rock, TX',
                project: 'Emergency Commercial Repair'
              },
              {
                rating: 5,
                review: 'The retrofit paid for itself in just 18 months through energy savings. Professional team and excellent communication throughout.',
                customer: 'Jennifer Park',
                location: 'Cedar Park, TX',
                project: 'Energy Efficiency Upgrade'
              }
            ].map((review, index) => (
              <div key={index} className="projects-reviews__card bg-white rounded-lg p-6 shadow-sm">
                <div className="projects-reviews__stars flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="projects-reviews__text text-gray-700 mb-4 italic">
                  "{review.review}"
                </p>
                <div className="projects-reviews__author">
                  <div className="projects-reviews__name font-semibold text-gray-800">
                    {review.customer}
                  </div>
                  <div className="projects-reviews__meta text-sm text-gray-500">
                    {review.location} • {review.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="projects-areas py-16 bg-white">
        <div className="projects-areas__container container mx-auto px-4">
          <h2 className="projects-areas__title text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Serving Central Texas
          </h2>
          <p className="projects-areas__subtitle text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We've completed successful projects in communities throughout the Austin metro area
          </p>
          <div className="projects-areas__map grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander',
              'Kyle', 'Buda', 'Dripping Springs', 'Lakeway', 'Westlake', 'Bee Cave',
              'Manor', 'Hutto', 'Liberty Hill', 'Bastrop', 'San Marcos', 'Lockhart'
            ].map((city, index) => (
              <div key={index} className="projects-areas__city bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <p className="projects-areas__city-name text-gray-700 font-medium text-sm">
                  {city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="projects-cta py-16 bg-blue-600 text-white">
        <div className="projects-cta__container container mx-auto px-4 text-center">
          <h2 className="projects-cta__title text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="projects-cta__text text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust AirDoctorHVAC for their 
            heating and cooling needs. Get your free consultation today.
          </p>
          <div className="projects-cta__buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="projects-cta__quote bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:5551234567" 
              className="projects-cta__phone border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects