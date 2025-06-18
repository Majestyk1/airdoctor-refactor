import { Wrench, Zap, Building2 } from 'lucide-react'
import industrialPoster from '../assets/images/test.jpg'
import controlsPoster from '../assets/images/test1.jpg'
import refrigerationPoster from '../assets/images/test.jpg'

export const servicesData = [
  {
    icon: Wrench,
    title: "Industrial HVAC",
    description: "Custom solutions for manufacturing and tech-driven facilities. No cookie-cutter installs here.",
    video: "/src/assets/images/industrialHVAC-trimmed-720p.mp4",
    poster: industrialPoster,
  },
  {
    icon: Zap,
    title: "Smart Controls",
    description: "Automation and monitoring that make your systems work smarter, not harder.",
    video: "/src/assets/images/bigFan-trimmed.mp4",
    poster: controlsPoster,
  },
  {
    icon: Building2,
    title: "Refrigeration",
    description: "Keeping things cool for industry, labs, and anyone who needs precision.",
    video: "/src/assets/images/cold-720p-trimmed.mp4",
    poster: refrigerationPoster,
  }
] 