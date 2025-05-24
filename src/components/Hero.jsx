import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import heroImg1 from '../assets/test.jpg'
import heroImg2 from '../assets/test1.jpg'
import '../styles/blocks/Hero.css'

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
    <section className="hero relative h-[90vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero__slide absolute inset-0 transition-opacity duration-1000 ${index === current ? 'hero__slide--active opacity-100' : 'hero__slide--inactive opacity-0 pointer-events-none'}`}
        >
          <img src={slide.image} alt={slide.title} className="hero__image w-full h-full object-cover" loading="lazy" />
          <div className="hero__overlay absolute inset-0 bg-black/50" />
          <div className="hero__content absolute inset-0 flex items-center justify-start px-6 md:px-12 z-20">
            <div className="hero__inner text-white max-w-xl">
              <span className={`hero__badge inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${slide.type === 'industrial' ? 'hero__badge--industrial bg-gray-800' : 'hero__badge--community bg-blue-600'}`}>
                {slide.type === 'industrial' ? 'Industrial Solutions' : 'Community Services'}
              </span>
              <h1 className="hero__title text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="hero__description text-lg md:text-xl mb-6 text-white/90">{slide.description}</p>
              <div className="hero__actions flex flex-col sm:flex-row gap-4">
                <Link to={slide.ctaLink} className={`hero__cta px-6 py-3 text-white rounded-md text-center transition-colors ${slide.type === 'industrial' ? 'hero__cta--industrial bg-gray-800 hover:bg-gray-700' : 'hero__cta--community bg-blue-600 hover:bg-blue-700'}`} tabIndex="0" aria-label={slide.cta}>
                  {slide.cta}
                </Link>
                <Link to={slide.type === 'industrial' ? '/installation' : '/service'} className="hero__secondary-cta px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-md hover:bg-white/30 text-center transition-colors" aria-label="Learn more" tabIndex="0">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero 