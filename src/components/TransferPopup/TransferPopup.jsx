import React from 'react'

function TransferPopup({ onClose }) {
  return (
    <section className="popup popup_type_transfer">
        <form name="form" className='popup__form form form_type_transfer'>
          <p className="form__title">Отправить</p>
          <p className="form__text-subtitle">Ваш баланс: <span
              className="form__text-subtitle_count">balance.balanceAfter</span></p>
          <fieldset className="form__fieldset">
            <p className="form__text">Кошелёк получателя</p> <input name="walletTo" type="text" className='form__input'
              placeholder="INFY-XXXX-XXXX-XXXX-XXXX" required />
          </fieldset>
          <fieldset className="form__fieldset">
            <p className="form__text">Сумма перевода</p> <input name="amount" type="number" className='form__input' placeholder="0"
              required />
            <p className="form__text-subtitle">Комиссия: <span className="form__text-subtitle_count">0.3%</span></p>
          </fieldset> <input type="submit" className="form__input form__button form__button_active" value="Отправить" /> <button
            type="button" className="form__button_type_close" onClick={() => {onClose()}}></button>
        </form>
  </section>
  )
}

export default TransferPopup
