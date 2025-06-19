import { Building2, Zap, Thermometer, Shield, Flame, Wind } from 'lucide-react'
import industrialPoster from '../assets/images/test.jpg'
import controlsPoster from '../assets/images/test1.jpg'

export const projectsData = [
  {
    icon: Building2,
    title: 'Robotics Plant HVAC Overhaul',
    description: 'Designed and installed a fully automated HVAC system for a robotics manufacturing facility. Sensors everywhere. Zero downtime.',
    video: '/src/assets/images/industrial-view-trimmed.mp4',
    poster: industrialPoster,
  },
  {
    icon: Zap,
    title: 'Data Center Cooling',
    description: 'Built a high-efficiency cooling system for a local data center. Kept the servers happy, and the energy bill low.',
    video: '/src/assets/images/bigFan-trimmed.mp4',
    poster: controlsPoster,
  },
  {
    icon: Thermometer,
    title: 'Pharma Lab Retrofit',
    description: 'Upgraded a pharmaceutical lab with precision climate control for sensitive research and production.',
    video: '/src/assets/images/cold-720p-trimmed.mp4',
    poster: industrialPoster,
  },
  {
    icon: Shield,
    title: 'Clean Room Air Filtration',
    description: 'Installed advanced HEPA filtration and positive pressure systems for a semiconductor clean room facility.',
    video: '/src/assets/images/industrial-view-trimmed.mp4',
    poster: controlsPoster,
  },
  {
    icon: Flame,
    title: 'Commercial Kitchen Ventilation',
    description: 'Engineered and implemented a fire-safe, high-capacity ventilation system for a busy restaurant chain.',
    video: '/src/assets/images/bigFan-trimmed.mp4',
    poster: industrialPoster,
  },
  {
    icon: Wind,
    title: 'Warehouse Airflow Optimization',
    description: 'Redesigned airflow and destratification for a large warehouse, improving comfort and reducing energy costs.',
    video: '/src/assets/images/cold-720p-trimmed.mp4',
    poster: controlsPoster,
  },
] 