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
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero__slide ${index === current ? 'hero__slide--active' : 'hero__slide--inactive'}`}
        >
          <img src={slide.image} alt={slide.title} className="hero__image" loading="lazy" />
          <div className="hero__overlay" />
          <div className="hero__content">
            <div className="hero__inner">
              <span className={`hero__badge ${slide.type === 'industrial' ? 'hero__badge--industrial' : 'hero__badge--community'}`}>{slide.type === 'industrial' ? 'Industrial Solutions' : 'Community Services'}</span>
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__description">{slide.description}</p>
              <div className="hero__actions">
                <Link to={slide.ctaLink} className={`hero__cta ${slide.type === 'industrial' ? 'hero__cta--industrial' : 'hero__cta--community'}`} tabIndex="0" aria-label={slide.cta}>{slide.cta}</Link>
                <Link to={slide.type === 'industrial' ? '/installation' : '/service'} className="hero__secondary-cta" aria-label="Learn more" tabIndex="0">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero 