import React from 'react'

function AirDoctorLogoFull({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`airdoctor-logo-full ${className}`}
      aria-label="Air Doctor HVACR LLC Logo"
      role="img"
    >
      <rect x="5" y="5" width="310" height="160" rx="16" fill="#5DB2E8" stroke="#233A8C" strokeWidth="8" />
      {/* Red Cross */}
      <rect x="60" y="35" width="60" height="20" fill="#B72B2B" />
      <rect x="90" y="15" width="20" height="60" fill="#B72B2B" />
      {/* Wavy lines */}
      <path d="M70 55 Q110 45 150 60 Q190 75 230 55" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
      <path d="M70 65 Q110 55 150 70 Q190 85 230 65" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
      <path d="M70 75 Q110 65 150 80 Q190 95 230 75" stroke="#fff" strokeWidth="4" opacity="0.5" fill="none" />
      {/* Text */}
      <text x="120" y="70" fontFamily="'Brush Script MT', cursive" fontSize="38" fill="#fff" stroke="#233A8C" strokeWidth="1.5" fontWeight="bold" className="airdoctor-logo-full__script">Air Doctor</text>
      <text x="120" y="105" fontFamily="Arial, sans-serif" fontSize="28" fill="#B72B2B" fontWeight="bold" className="airdoctor-logo-full__hvacr">HVACR LLC</text>
    </svg>
  )
}

export default AirDoctorLogoFull 