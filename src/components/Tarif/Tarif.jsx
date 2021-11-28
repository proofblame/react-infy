import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import api from '../../utils/api'
import Modal from "../Modal/Modal";
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";


function Tarif({ checkToken }) {
  useEffect(() => {
    document.title = "Tarif";
  }, []);
  const [tarif, setTarif] = useState({});
  const [pay, setPay] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [modalActive, setModalActive] = useState({
    tarifPopup: false,
    preloader: false,
  });

  useEffect(() => {
    handleGetTarif();
  }, []);

  const handleGetTarif = async () => {
    setModalActive({ ...modalActive, preloader: true });
    checkToken()
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const tarif = await api.getTarif(jwt)
        setTarif(tarif);
        setModalActive({ ...modalActive, preloader: false });
      } catch (err) {
        console.error(err);
        setModalActive({ ...modalActive, preloader: false });
      }
    }
  };

  const handlePayTarif = async () => {
    setModalActive({ ...modalActive, preloader: true });
    checkToken()
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const pay = api.payTarif(jwt)
        setTarif(pay);
        setPay(true);
        setStatusMessage("Тариф оплачен");
        setTimeout(() => {
          setModalActive({ ...modalActive, preloader: false });
          setModalActive({ ...modalActive, tarifPopup: false });
          setStatusMessage("");
          setPay(null);
        }, 2000);
        setModalActive({ ...modalActive, preloader: false });
      } catch (error) {
        setPay(false);
        setStatusMessage("Недостаточно монет");
        setModalActive({ ...modalActive, preloader: false });
      }
    }
  };

  const handleClosePopup = () => {
    setModalActive(false);
    setPay(null);
    setStatusMessage("");
  };
  const handleOpenPopup = () => {
    setModalActive(true);
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <Nav />
          <section className="main__profile profile tarif">
            <div className="profile__body">
              <h1 className="profile__title title">Тариф</h1>
              {!tarif.isPaid ? (
                <button
                  className="link link_active"
                  style={{ marginBottom: "15px" }}
                  onClick={handleOpenPopup}
                >
                  Оплатить тариф
                </button>
              ) : (
                <p
                  className="text text_size_normal tarif__subtitle"
                  style={{ color: "green" }}
                >
                  Тариф оплачен до {tarif.nextPayTime}
                </p>
              )}

              <p className="text text_size_normal tarif__subtitle">
                Оплата тарифа активирует продукты Infinity Post, Infinity
                Browser, infinity incognito (компьютерная версия), даёт доступ к
                партнёрской программе и обучению партнёров. Стоимость тарифа
                составляет 990 рублей по курсу в монетах INFY.
              </p>
              <section className="banner__buttons wallet__buttons">
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_email">
                    {" "}
                    Безопасная электронная почта{" "}
                  </p>{" "}
                  <button
                    className="wallet__button link link_active"
                    href="/tarif"
                    disabled
                  >
                    Скачать
                  </button>
                </div>
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_browser">
                    {" "}
                    Защищённый браузер{" "}
                  </p>{" "}
                  <button
                    className="wallet__button link link_active"
                    href="/tarif"
                    disabled
                  >
                    Скачать
                  </button>
                </div>
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_messager">
                    {" "}
                    Инкогнито мессенджер{" "}
                  </p>{" "}
                  <button
                    className="wallet__button link link_active"
                    href="/tarif"
                    disabled
                  >
                    Скачать
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <Popup onClose={handleClosePopup}>
          <p className="form__title">Отправить</p>
          <p className="form__text-subtitle">
            Ваш баланс:&nbsp;
            <span className="form__text-subtitle_count">{tarif.balance}</span>
          </p>
          <p className="form__text-subtitle">
            Стоимость тарифа:&nbsp;
            <span className="form__text-subtitle_count">
              {tarif.tarifCostCoins} INFY (990 &#x20bd;)
            </span>
          </p>
          <p className="form__text-subtitle">
            <b>Хотите оплатить тариф?</b>
          </p>
          <p
            className="form__text-subtitle"
            style={pay ? { color: "green" } : { color: "red" }}
          >
            <b>{statusMessage}</b>
          </p>

          <input
            type="button"
            className="link link_active"
            value="Оплатить"
            onClick={handlePayTarif}
          />
        </Popup>
      </Modal>
      <Modal active={modalActive.preloader}>
        <Preloader />
      </Modal>
    </>
  );
}

export default Tarif;
