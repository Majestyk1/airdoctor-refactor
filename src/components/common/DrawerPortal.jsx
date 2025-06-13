import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'

function DrawerPortal({ isOpen, onClose, children }) {
  // Create or get the portal root
  const portalRoot = useRef(document.getElementById('drawer-root') || (() => {
    const el = document.createElement('div')
    el.id = 'drawer-root'
    document.body.appendChild(el)
    return el
  })())

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Escape key closes drawer
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <FocusTrap active={isOpen} focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
      <div className="drawer-portal fixed inset-0 z-50 flex">
        {/* Overlay */}
        <div
          className="drawer-portal__overlay fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          aria-hidden="true"
          onClick={onClose}
        />
        {/* Drawer (children should be the aside/nav) */}
        {children}
      </div>
    </FocusTrap>,
    portalRoot.current
  )
}

export default DrawerPortal 