import React, { useState } from "react";

function DelegationPopup({ onClose, currentWallet, handleDelegateInfy }) {
  const [data, setData] = useState({
    amountDel: "",
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
    handleDelegateInfy(data.amountDel);
  }

  return (
    <section className="popup">
      <form
        onSubmit={onSubmit}
        name="form"
        className="popup__form form form_type_delegations"
      >
        <p className="form__title">Отправить в стейкинг</p>
        <fieldset className="form__fieldset">
          <p className="form__text">Доступно делегирование</p>
          <input
            name="amountDel"
            type="number"
            className="form__input"
            placeholder="0"
            value={data.amountDel}
            onChange={onChange}
          />
          <p className="form__text-subtitle">
            В делегировании:
            <span className="form__text-subtitle_count">
              {currentWallet.delegateBalance}.{currentWallet.delegateBalanceAfter}
            </span>
          </p>
        </fieldset>

        <fieldset className="form__fieldset">
          <p className="text text_size_x-small">
            Ваше вознаграждение зависит от размера делегированного стейка: <br />
            Делегируете 1 – 1999 INFY, вознаграждение + 23%/мес.<br />
            Делегируете 2 000 – 19 999 INFY, вознаграждение + 25%/мес.<br />
            Делегируете 20 000 – 149 999 INFY, вознаграждение + 27%/мес.<br />
            Делегируете 150 000 и выше INFY, вознаграждение + 29%/мес <br /> <br />
          </p>

        </fieldset>

        <input
          type="submit"
          className="form__input form__button form__button_active"
          value="Пополнить"

        />
        <button
          type="button"
          className="form__button_type_close close"
          onClick={() => {
            onClose();
          }}
        />
      </form>
    </section>
  );
}

export default DelegationPopup;
