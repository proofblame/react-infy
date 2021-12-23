import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import sprite from '../../images/icons.svg'
import './Status.css'

function Status() {
  useEffect(() => {
    document.title = "Status"
  }, []);
  return (
    <main className="main">
      <section className="statuses">
        <div className="container">
          <Nav />
          <section className="main__profile profile status-page">
            <div className="profile__body">
              <h1 className="profile__title title">Статусы Партнеров</h1>
              <section className="grid">
                <ul className="grid__list">
                  <li className="grid__item">
                    <picture>
                      <source srcSet={sprite + "#status-partner"} type="image/webp" /><img className="status__image"
                        src={sprite + "#status-partner"} alt="PARTNER" />
                    </picture>
                    <div className="grid__text text text_color_normal">
                      <h3 className="grid__title"> PARTNER </h3>
                      <p className="grid__subtitle"> Условия: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Оплата тарифа. </li>
                        <li className="grid__text-item">Иметь в личном стейк от 500 INFY. </li>
                      </ul>
                      <p className="grid__subtitle"> Преимущества: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Активация реферальной ссылки. Вознаграждения по партнерской программе с 1, 2 и 3 линии приглашенных в своей структуре.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="grid__item">
                    <picture>
                      <source srcSet={sprite + "#status-leader"} type="image/webp" /><img className="status__image"
                        src={sprite + "#status-leader"} alt="LEADER" />
                    </picture>
                    <div className="grid__text text text_color_normal">
                      <h3 className="grid__title"> LEADER </h3>
                      <p className="grid__subtitle"> Условия: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item"> Оплата тарифа. </li>
                        <li className="grid__text-item"> Иметь в личном стейке 2.000 INFY. </li>
                        <li className="grid__text-item"> Иметь командный стейк 30.000 INFY. </li>

                      </ul>
                      <p className="grid__subtitle"> Преимущества: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Активация реферальной программы. Вознаграждение по партнерской программе с 1, 2, 3 и 4 линии приглашенных в своей структуре.</li>
                        <li className="grid__text-item">Лидерский бонус 500 INFY.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="grid__item">
                    <picture>
                      <source srcSet={sprite + "#status-master"} type="image/webp" /><img className="status__image"
                        src={sprite + "#status-master"} alt="MASTER" />
                    </picture>
                    <div className="grid__text text text_color_normal">
                      <h3 className="grid__title"> MASTER </h3>
                      <p className="grid__subtitle"> Условия: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item"> Оплата тарифа. </li>
                        <li className="grid__text-item"> Иметь в личном стейке 10.000 INFY. </li>
                        <li className="grid__text-item"> Иметь командный стейк 90.000 INFY. </li>
                      </ul>
                      <p className="grid__subtitle"> Преимущества: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Активация реферальной программы. Вознаграждение по партнерской программе с 1, 2, 3, 4 и пятой линии приглашенных в своей структуре.</li>
                        <li className="grid__text-item">Лидерский бонус 1.000 INFY.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="grid__item">
                    <picture>
                      <source srcSet={sprite + "#status-expert"} type="image/webp" /><img className="status__image"
                        src={sprite + "#status-expert"} alt="EXPERT" />
                    </picture>
                    <div className="grid__text text text_color_normal">
                      <h3 className="grid__title"> EXPERT </h3>
                      <p className="grid__subtitle"> Условия: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item"> Оплата тарифа. </li>
                        <li className="grid__text-item"> Иметь в собственном стейке 30.000 INFY.</li>
                        <li className="grid__text-item"> Иметь командный стейк 200.000 INFY. </li>
                      </ul>
                      <p className="grid__subtitle"> Преимущества: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Активация реферальной программы. Вознаграждение по партнерской программе с 1, 2, 3, 4 и 5 линии приглашенных в своей структуре.</li>
                        <li className="grid__text-item">	При подтверждении статуса в течение 3х месяцев компания дарит 1.000.000 рублей. </li>
                        <li className="grid__text-item">	Лидерский бонус 1.500 INFY.</li>
                        <li className="grid__text-item">	Попадание в закрытый клуб компании. </li>
                      </ul>
                    </div>
                  </li>
                  <li className="grid__item">
                    <picture>
                      <source srcSet={sprite + "#status-investor"} type="image/webp" /><img className="status__image"
                        src={sprite + "#status-investor"} alt="INVESTOR" />
                    </picture>
                    <div className="grid__text text text_color_normal">
                      <h3 className="grid__title"> INVESTOR </h3>
                      <p className="grid__subtitle"> Условия: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item"> Оплата тарифа. </li>
                        <li className="grid__text-item"> Иметь в собственном стейке 100.000 INFY. </li>
                        <li className="grid__text-item">	Иметь командный стейк 500.000 INFY.</li>
                      </ul>
                      <p className="grid__subtitle"> Преимущества: </p>
                      <ul className="grid__text-list">
                        <li className="grid__text-item">Активация реферальной программы. Вознаграждение по партнерской программе с 1, 2, 3, 4 и 5 линии приглашенных в своей структуре.</li>
                        <li className="grid__text-item">​При подтверждении статуса в течение 3х месяцев компания дарит 1.500.000 рублей.</li>
                        <li className="grid__text-item">​Лидерский бонус 3.000 INFY.
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Status
