import { Wrench, PenTool, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  wrench: Wrench,
  tool: PenTool,
  refresh: RefreshCw,
}

function ServiceCard({ title, description, icon = 'wrench', link = '/', linkText = 'Learn More' }) {
  const Icon = iconMap[icon] || Wrench
  return (
    <div className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 flex-0">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <Link to={link} className="mt-auto inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium" aria-label={linkText} tabIndex="0" onKeyDown={(e)=>{if(e.key==='Enter'){}}}>
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}

export default ServiceCard 