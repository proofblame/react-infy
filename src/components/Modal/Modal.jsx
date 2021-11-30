import React, { useEffect } from 'react'
import './modal.css'

function Modal({ active, children, className }) {
  // useEffect(() => {
  //   handleActiveState();
  // }, [active])


  const handleActiveState = () => {
    // if (active) {
    //   document.body.className += " root_lock-scroll"
    // } else {
    //   document.body.className -= " root_lock-scroll"
    // }
  }
  return (
    <div className={active ? `modal ${className} active` : `modal ${className}`}>

      <div className={active ? "modal__content active" : "modal__content"}>
        {children}
      </div>

    </div>
  )
}

export default Modal
