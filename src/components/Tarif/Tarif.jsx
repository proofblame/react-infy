import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import api from '../../utils/api'
import Modal from "../Modal/Modal";
import Popup from "../Popup/Popup";
import Preloader from "../Preloader/Preloader";


function Tarif({ checkToken, refToken, tarif, setTarif, isPaid, setIsPaid }) {

  useEffect(() => {
    document.title = "Tarif";
    // handleGetTarif();
  }, []);
  // const [tarif, setTarif] = useState(null);
  // const [isPaid, setIsPaid] = useState(false)
  const [pay, setPay] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [modalActive, setModalActive] = useState({
    tarifPopup: false,
    preloader: false,
  });


  const handlePayTarif = async () => {
    setModalActive({ ...modalActive, preloader: true });
    await checkToken()
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const res = await api.payTarif(jwt)
        setTarif(res);
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
    setModalActive({ ...modalActive, tarifPopup: true });
  };

  const PayedTarif = () => {
    return (
      <p
        className="text text_size_normal tarif__subtitle"
        style={{ color: "green" }}
      >
        Тариф оплачен до {tarif.nextPayTime}
      </p>
    )
  }

  const PayTarifButton = () => {
    return (
      <button
        className="link link_active"
        style={{ marginBottom: "15px" }}
        onClick={handleOpenPopup}
      >
        Оплатить тариф
      </button>
    )
  }

  return (
    <>{tarif ? (
      <>
        <main className="main">
          <div className="container">
            <Nav />
            <section className="main__profile profile tarif">
              <div className="profile__body">
                <h1 className="profile__title title">Тариф</h1>
                {isPaid ? PayedTarif() : PayTarifButton()}

                <p className="text text_size_normal tarif__subtitle">
                  Оплата тарифа предоставляет доступ к партнерской программе.
                  Стоимость тарифа составляет 490 рублей по курсу в монетах INFY.
                </p>
                <section className="banner__buttons wallet__buttons">
                  <div className="tarif__card">
                    <p className="text text_size_normal">
                      <b>Infinity Майнинг отель</b>
                    </p>
                    <button
                      className="wallet__button link link_active"
                      href="/tarif"
                      disabled
                    >
                      Скоро
                    </button>
                  </div>
                  <div className="tarif__card">
                    <p className="text text_size_normal">
                      <b>Infinity Cloud Mining</b>
                    </p>
                    <button
                      className="wallet__button link link_active"
                      href="/tarif"
                      disabled
                    >
                      Скоро
                    </button>
                  </div>
                  <div className="tarif__card">
                    <p className="text text_size_normal">
                      <b>GameHall</b>
                    </p>
                    <button
                      className="wallet__button link link_active"
                      href="/tarif"
                      disabled
                    >
                      Скоро
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </main >
        <Modal active={modalActive.tarifPopup}>
          <Popup onClose={handleClosePopup}>
            <p className="form__title">Отправить</p>
            <p className="form__text-subtitle">
              Ваш баланс:&nbsp;
              <span className="form__text-subtitle_count">{tarif.balance}</span>
            </p>
            <p className="form__text-subtitle">
              Стоимость тарифа:&nbsp;
              <span className="form__text-subtitle_count">
                {tarif.tarifCostCoins} INFY (490 &#x20bd;)
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
    ) : (
      <Modal active={modalActive.preloader}>
        <Preloader />
      </Modal>
    )}

    </>
  );
}

export default Tarif;
