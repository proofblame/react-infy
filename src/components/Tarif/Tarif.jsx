import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import auth from '../../utils/auth';
import Modal from '../Modal/Modal';
import Popup from '../Popup/Popup';


function Tarif() {
  const [tarif, setTarif] = useState({});
  const [pay, setPay] = useState(null);

  const [modalActive, setModalActive] = useState(false);



  useEffect(() => {
    handleGetTarif();
  }, [])

  const handleGetTarif = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getTarif(jwt)
        .then((tarif) => {
          setTarif(tarif)
        })
        .catch(e => console.error(e.message));
    }
  }

  const handlePayTarif = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .payTarif(jwt)
        .then((pay) => {
          setPay(pay)
          setTimeout(() => {
            setModalActive(false);
            setTarif(true)
          }, 2000)

        })
        .catch(e => console.error(e.message));
    }
  }


  const handleClosePopup = () => {
    setModalActive(false);
  }
  const handleOpenPopup = () => {
    setModalActive(true);
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <Nav />
          <section className="main__profile profile tarif">
            <div className="profile__body">
              <h1 className="profile__title title">Тариф</h1>
              {
                !tarif.isPaid ?
                  (<button className='link link_active' style={{ marginBottom: '15px' }} onClick={handleOpenPopup}>Оплатить тариф</button>)
                  :
                  (<p className="text text_size_normal tarif__subtitle" style={{ color: 'green' }}>Тариф оплачен</p>)
              }


              <p className="text text_size_normal tarif__subtitle">Оплата тарифа активирует продукты Infinity Post, Infinity
                Browser, infinity incognito (компьютерная версия), даёт доступ к партнёрской программе и обучению партнёров. Стоимость тарифа составляет 990 рублей по курсу в
                монетах INFY.</p>
              <section className="banner__buttons wallet__buttons">
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_email"> Безопасная электронная почта </p> <a
                    className="wallet__button link link_active" href="/tarif">Скачать</a>
                </div>
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_browser"> Защищённый браузер </p> <a
                    className="wallet__button link link_active" href="/tarif">Скачать</a>
                </div>
                <div className="tarif__card">
                  <p className="text text_size_normal tarif__text tarif__text_type_messager"> Инкогнито мессенджер </p> <a
                    className="wallet__button link link_active" href="/tarif">Скачать</a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <Popup onClose={handleClosePopup} >
          <p className="form__title">Отправить</p>
          <p className="form__text-subtitle">
            Ваш баланс:&nbsp;
            <span className="form__text-subtitle_count">
              {tarif.balance}
            </span>
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
          {
            pay === null ?
              ('') :
              (

                <p className="form__text-subtitle" style={pay.isPaid ? { color: 'green' } : { color: 'red' }}>
                  <b>{pay.isPaid ? 'Тариф оплачен' : 'Недостаточно монет'}</b>
                </p>
              )
          }




          <input
            type="button"
            className="link link_active"
            value="Оплатить"
            onClick={handlePayTarif}
          />

        </Popup>
      </Modal>
    </>
  )
}

export default Tarif
