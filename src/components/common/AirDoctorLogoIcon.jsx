import React from 'react'

function AirDoctorLogoIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`airdoctor-logo-icon ${className}`}
      aria-label="Air Doctor Logo Icon"
      role="img"
    >
      <rect x="5" y="5" width="130" height="130" rx="16" fill="#5DB2E8" stroke="#233A8C" strokeWidth="8" />
      {/* Red Cross */}
      <rect x="40" y="55" width="60" height="20" fill="#B72B2B" />
      <rect x="60" y="35" width="20" height="60" fill="#B72B2B" />
      {/* Wavy lines */}
      <path d="M45 75 Q70 65 95 75" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
      <path d="M45 85 Q70 75 95 85" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
      <path d="M45 95 Q70 85 95 95" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
    </svg>
  )
}

export default AirDoctorLogoIcon 