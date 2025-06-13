import React from 'react'
import StatCard from './StatCard'

function StatsRow({ stats = [], className = '' }) {
  return (
    <section className={`stats-row py-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white ${className}`}>
      <div className="stats-row__container container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        {stats.map((stat, idx) => (
          <StatCard key={idx} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  )
}

export default StatsRow 