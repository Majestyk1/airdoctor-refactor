import { Wrench, PenTool, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/blocks/ServiceCard.css'

const iconMap = {
  wrench: Wrench,
  tool: PenTool,
  refresh: RefreshCw,
}

function ServiceCard({ title, description, icon = 'wrench', link = '/', linkText = 'Learn More' }) {
  const Icon = iconMap[icon] || Wrench
  return (
    <div className="service-card">
      <div className="service-card__icon-wrapper">
        <Icon className="service-card__icon" />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <Link to={link} className="service-card__link" aria-label={linkText} tabIndex="0">
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="service-card__link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}

export default ServiceCard 