import React from 'react'

function AnimatedButton({ children, className = '', ...props }) {
  return (
    <button
      className={`animated-button relative px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 active:shadow-inner cursor-pointer ${className}`}
      {...props}
    >
      <span className="animated-button__text relative z-10">{children}</span>
      {/* Remove the absolute glow span to prevent pointer interference */}
    </button>
  )
}

export default AnimatedButton 