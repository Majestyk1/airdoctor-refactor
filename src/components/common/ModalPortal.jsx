import { createPortal } from 'react-dom'
import {FocusTrap} from 'focus-trap-react'

function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null
  return createPortal(
    <FocusTrap active={isOpen} focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
      <div className="modal-portal fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="modal-portal__overlay fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />
        {/* Modal content */}
        <div
          className="modal-portal__content relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full"
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.getElementById('modal-root')
  )
}

export default ModalPortal 