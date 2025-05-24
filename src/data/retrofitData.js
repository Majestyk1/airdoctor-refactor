export const savingsCalculator = {
  cooling: { current: 280, upgraded: 168, savings: 112 },
  heating: { current: 320, upgraded: 192, savings: 128 },
  combined: { current: 600, upgraded: 360, savings: 240 },
}

export const retrofitOptions = [
  {
    id: 'efficiency',
    title: 'Energy Efficiency Upgrades',
    icon: '⚡',
    description:
      'Modernize your existing system for maximum efficiency and lower energy bills.',
    features: [
      'High-Efficiency Units',
      'Smart Thermostats',
      'Improved Ductwork',
      'Zoning Systems',
    ],
    savings: 'Save 20-40% on energy costs',
    price: 'From $2,500',
  },
  {
    id: 'smart',
    title: 'Smart System Integration',
    icon: '📱',
    description: 'Add smart controls and automation to your existing HVAC system.',
    features: [
      'WiFi Thermostats',
      'Remote Monitoring',
      'Automated Scheduling',
      'Energy Reports',
    ],
    savings: 'Optimize comfort & efficiency',
    price: 'From $800',
  },
  {
    id: 'air-quality',
    title: 'Indoor Air Quality',
    icon: '🌬️',
    description: 'Enhance your system with advanced filtration and air purification.',
    features: [
      'HEPA Filtration',
      'UV Air Purifiers',
      'Humidity Control',
      'Ventilation Upgrades',
    ],
    savings: 'Healthier indoor environment',
    price: 'From $1,200',
  },
  {
    id: 'ductwork',
    title: 'Ductwork Modernization',
    icon: '🔧',
    description: 'Seal, insulate, and optimize your ductwork for better performance.',
    features: [
      'Duct Sealing',
      'Insulation Upgrade',
      'Airflow Optimization',
      'Leak Detection',
    ],
    savings: 'Improve system efficiency by 30%',
    price: 'From $1,800',
  },
]; 