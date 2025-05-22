import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImg1 from '../assets/test.jpg'
import heroImg2 from '../assets/test1.jpg'

const slides = [
  {
    id: 1,
    title: 'Industrial HVAC & Refrigeration Solutions',
    description: 'Custom engineering, installation, and maintenance for manufacturing facilities and industrial plants throughout Central Texas.',
    cta: 'Request Industrial Quote',
    ctaLink: '/contact?type=industrial',
    image: heroImg1,
    type: 'industrial',
  },
  {
    id: 2,
    title: 'Church & Community HVAC Services',
    description: 'Energy-efficient systems designed with your congregation and budget in mind.',
    cta: 'Schedule Community Service',
    ctaLink: '/contact?type=community',
    image: heroImg2,
    type: 'community',
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center h-full container mx-auto px-4">
            <div className="text-white max-w-2xl">
              <span className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${slide.type === 'industrial' ? 'bg-gray-800' : 'bg-blue-600'}`}>{slide.type === 'industrial' ? 'Industrial Solutions' : 'Community Services'}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6 text-white/90">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={slide.ctaLink} className={`px-6 py-3 text-white rounded-md ${slide.type === 'industrial' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}`} tabIndex="0" aria-label={slide.cta}>{slide.cta}</Link>
                <Link to={slide.type === 'industrial' ? '/installation' : '/service'} className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-md hover:bg-white/20" aria-label="Learn more" tabIndex="0">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero 