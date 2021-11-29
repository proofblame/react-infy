import React, { useState } from "react";

function UndelegationPopup({ onClose, currentWallet, handleUndelegateInfy }) {
  const [data, setData] = useState({
    amountUndel: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleUndelegateInfy(data.amountUndel);
  }
  return (
    <section className="popup popup_type_undelegate">
      <form onSubmit={onSubmit} name="form" className="popup__form form form_type_delegations">
        <p className="form__title">Отменить стейкинг</p>
        <fieldset className="form__fieldset">
          <p className="form__text">Доступно разделегирование</p>
          <input
            name="amountUndel"
            type="number"
            className="form__input"
            placeholder="0"
            value={data.amountUndel}
            onChange={onChange}
          />
          <p className="form__text-subtitle">
            Доступно к разделегированию:
            <span className="form__text-subtitle_count">
              {currentWallet.delegateBalance}.{currentWallet.delegateBalanceAfter}
            </span>
          </p>
        </fieldset>
        <input
          type="submit"
          className="form__input form__button form__button_active"
          value="Разделегировать"
        />
        <button
          type="button"
          className="form__button_type_close"
          onClick={() => {
            onClose();
          }}
        ></button>
      </form>
    </section>
  );
}

export default UndelegationPopup;
