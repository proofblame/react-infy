import React from 'react'
import Nav from '../Nav/Nav'

function Tarif() {
  return (
    <main className="main">
      <div className="container">
        <Nav />
        <section className="main__profile profile tarif">
          <div className="profile__body">
            <h1 className="profile__title title">Тариф</h1>
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
  )
}

export default Tarif
