import React from 'react'

function Popup({ onClose, onSubmit, children }) {
  return (
    <section className="popup popup_type_seed">
      <form onSubmit={onSubmit} name="form" className='popup__form form form_type_seed'>
        {children}
        <button type="button"
          className="form__button_type_close" onClick={() => { onClose() }}> </button>
      </form>
    </section>
  )
}

export default Popup
