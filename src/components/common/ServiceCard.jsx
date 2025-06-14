import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ModalPortal from './ModalPortal'
import 'hover.css/css/hover-min.css'

function ServiceCard({ icon: Icon, title, description, video, poster, className = '', onClick }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`service-card group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-blue-200/40 shadow-lg text-center transition-all duration-300 cursor-pointer focus:outline-none overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${title}`}
    >
      {/* Static Poster Image */}
      {poster && (
        <img
          src={poster}
          alt={`${title} service`}
          className="service-card__poster absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
      )}
      {/* Overlay for readability */}
      <div className="service-card__overlay absolute inset-0 bg-black/50 z-10" />

      {/* Blue blur glow on hover/focus */}
      <div className="service-card__glow pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300 blur-xl bg-blue-400/40" />
      
      <div className="service-card__content relative z-30 flex flex-col items-center">
        {Icon && <Icon className="service-card__icon w-12 h-12 text-blue-500 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 group-focus:scale-110" />}
        <h3 className="service-card__title text-xl font-bold mb-4 text-white drop-shadow-lg">{title}</h3>
        <p className="service-card__desc text-gray-100">{description}</p>
      </div>
    </motion.div>
  )
}

export const ServiceModal = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  const { icon: Icon, title, description, video, poster } = service;

  return (
    <ModalPortal isOpen={isOpen} onClose={onClose}>
      <div className="service-card-modal flex flex-col items-center gap-4">
        {/* Large video in modal */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-4 bg-black">
          {video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={video}
              autoPlay
              loop
              muted
              playsInline
              poster={poster}
            />
          ) : (
            poster && (
              <img
                src={poster}
                alt={title + ' background'}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )
          )}
        </div>
        <div className="text-center">
          {Icon && <Icon className="w-16 h-16 text-blue-500 mb-2 mx-auto" />}
          <h3 className="text-2xl font-bold text-blue-900 mb-2">{title}</h3>
          <p className="text-lg text-gray-700 mb-4 max-w-xl mx-auto">{description}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </ModalPortal>
  );
};

export default ServiceCard 