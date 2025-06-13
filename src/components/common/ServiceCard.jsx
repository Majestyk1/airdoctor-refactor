import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ModalPortal from './ModalPortal'
import 'hover.css/css/hover-min.css'

function ServiceCard({ icon: Icon, title, description, video, poster, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [open, setOpen] = useState(false)

  // Card content for reuse in both card and modal
  const cardContent = (
    <>
      {/* Video Background (lazy loaded) */}
      {video && inView && (
        <video
          className="service-card__video absolute inset-0 w-full h-full object-cover z-0"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        />
      )}
      {/* Poster fallback if video not loaded */}
      {poster && (!video || !inView) && (
        <img
          src={poster}
          alt={title + ' background'}
          className="service-card__poster absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
      {/* Overlay for readability */}
      {(video || poster) && (
        <span className="service-card__video-overlay absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      )}
      {/* Blue blur glow on hover/focus */}
      <span className="service-card__glow pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300 blur-xl bg-blue-400/40" />
      <div className="relative z-30 flex flex-col items-center">
        {Icon && <Icon className="service-card__icon w-12 h-12 text-blue-500 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 group-focus:scale-110" />}
        <h3 className="service-card__title text-xl font-bold mb-4 text-white drop-shadow-lg">{title}</h3>
        <p className="service-card__desc text-gray-100">{description}</p>
      </div>
    </>
  )

  return (
    <>
      <motion.div
        ref={ref}
        className={`service-card group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-blue-200/40 shadow-lg text-center transition-all duration-300 cursor-pointer focus:outline-none overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        tabIndex={0}
        role="button"
        aria-label={title}
        onClick={() => setOpen(true)}
      >
        {cardContent}
      </motion.div>
      <ModalPortal isOpen={open} onClose={() => setOpen(false)}>
        <div className="service-card-modal flex flex-col items-center gap-4">
          {/* Large video background in modal */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-4">
            {video && (
              <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={video}
                autoPlay
                loop
                muted
                playsInline
                poster={poster}
              />
            )}
            {poster && !video && (
              <img
                src={poster}
                alt={title + ' background'}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}
            {(video || poster) && (
              <span className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
            )}
          </div>
          {Icon && <Icon className="w-16 h-16 text-blue-500 mb-2" />}
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
          <p className="text-lg text-gray-700 mb-4 max-w-xl text-center">{description}</p>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </ModalPortal>
    </>
  )
}

export default ServiceCard 