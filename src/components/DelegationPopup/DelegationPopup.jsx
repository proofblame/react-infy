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

          <p className="text text_size_x-small">
            Итоговая сумма: {parseFloat((data.amountDel * 0.95).toFixed(5))}
          </p>
          <p className="text text_size_x-small">
            Комиссия: {parseFloat((data.amountDel * 0.05).toFixed(5))}
          </p>

          <p className="text text_size_x-small">
            В делегировании:
            <span className="form__text-subtitle_count">
              {currentWallet.delegateBalance}.{currentWallet.delegateBalanceAfter}
            </span>
          </p>
        </fieldset>

        <br />
        <br />



        <fieldset className="form__fieldset">
          <p className="text text_size_x-small" style={{ whiteSpace: 'pre-wrap' }}>
            Единый % на все время существования компании без понижений: <br />
            1 - 1 999 INFY, вознаграждение - 8%/мес.<br />
            2 000 - 19 999 INFY, вознаграждение - 10%/мес, (+250 INFY бонус).<br />
            20 000 - 149 999 INFY, вознаграждение - 12%/мес, (+500 INFY бонус).<br />
            150 000 INFY и выше, вознаграждение    - 14%/мес, (+1000 INFY бонус).<br />
          </p> <br />

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
