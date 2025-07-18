import React from 'react'

function StatCard({ number, label, className = '' }) {
  return (
    <div
      className={`stat-card group relative bg-[#1A2332]/60 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-[#178582]/40 flex flex-col items-center text-center transition-all duration-300 overflow-hidden hover:scale-[1.02] ${className}`}
      tabIndex={0}
    >
      {/* Teal glow on hover/focus */}
      <span className="stat-card__glow pointer-events-none absolute -inset-3 z-0 rounded-2xl blur-2xl bg-gradient-to-tr from-[#178582]/30 to-[#0F5F5C]/30 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300" />
      <span className="stat-card__number text-4xl font-extrabold text-[#178582] mb-2 drop-shadow-lg relative z-10">{number}</span>
      <span className="stat-card__label text-lg font-semibold text-gray-200 relative z-10">{label}</span>
    </div>
  )
}

export default StatCard 