import React from 'react'

function DelegationPopup({ onClose }) {
  return (
    <section className="popup">
        <form name="form" action="/profile/wallet/delegate" method="post" className='popup__form form form_type_delegations'>
          <p className="form__title">Отправить в стейкинг</p>
          <fieldset className="form__fieldset">
            <p className="form__text">Доступно делегирование</p> <input name="amountDel" type="number" className='form__input'
              placeholder="0" />
            <p className="form__text-subtitle">В делегировании: <span
                className="form__text-subtitle_count">balanceDel.balanceDelAfter</span></p>
          </fieldset> <input type="submit" className="form__input form__button form__button_active" value="Пополнить" /> <button
            type="button" className="form__button_type_close close" onClick={() => {onClose()}}/>
        </form>
  </section>
  )
}

export default DelegationPopup
