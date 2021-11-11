import React from 'react'

function SeedPopup({ onClose }) {
  return (
    <section className="popup popup_type_seed">
      <form name="form" className='popup__form form form_type_seed'>
        <p className="form__title">Ваша seed-фраза</p>
        <p className="form__text form_seed-word">seed</p> 
        <button type="button"
          className="form__button_type_close" onClick={() => {onClose()}}> </button>
      </form>
    </section>
  )
}

export default SeedPopup
