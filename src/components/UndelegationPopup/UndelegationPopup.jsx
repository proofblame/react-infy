import React from 'react'

function UndelegationPopup({ onClose }) {
  return (
    <section className="popup popup_type_undelegate">
        <form name="form" className='popup__form form form_type_delegations'>
          <p className="form__title">Отменить стейкинг</p>
          <fieldset className="form__fieldset">
            <p className="form__text">Доступно разделегирование</p> <input name="amountUndel" type="number" className='form__input'
              placeholder="0" />
            <p className="form__text-subtitle">Доступно к разделегированию: <span
                className="form__text-subtitle_count">balanceDel.balanceDelAfter</span></p>
          </fieldset> <input type="submit" className="form__input form__button form__button_active" value="Разделегировать" />
          <button type="button" className="form__button_type_close" onClick={() => {onClose()}}></button>
        </form>
  </section>
  )
}

export default UndelegationPopup
