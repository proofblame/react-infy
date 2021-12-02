import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SeedPopup({ seed }) {
  const history = useHistory();
  const [copyStatus, setcopyStatus] = useState("Копировать seed-фразу");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(seed);
    setcopyStatus("Seed-фраза скопирована");
  };
  return (
    <section className="popup popup_type_seed">
      <form name="form" className="popup__form form form_type_seed">
        <p className="form__title">Ваша seed-фраза</p>
        <p
          className="form__text form_seed-word"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <b>
            Запишите seed фразу, она понадобится для доступа в мобильном
            приложении и смене пароля.
          </b>
        </p>
        <p className="form__text form_seed-word">{seed}</p>
        <button
          type="button"
          className="link"
          style={{ marginBottom: "20px" }}
          onClick={handleCopyClick}
        >
          {copyStatus}
        </button>
        <button
          className="link link_active"
          onClick={() => {
            history.push("/login");
          }}
        >
          Продолжить
        </button>
      </form>
    </section>
  );
}

export default SeedPopup;
