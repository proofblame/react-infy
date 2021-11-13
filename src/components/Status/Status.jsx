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
                  <li>
                    <ul>
                      <li className="grid__item status">
                        <picture>
                          <source srcSet={sprite + "#status-user"} type="image/webp" /><img className="status__image"
                            src={sprite + "#status-user"} alt="User" />
                        </picture>
                        <div className="grid__text text text_color_normal">
                          <h3 className="grid__title"> USER </h3>
                          <p className="grid__subtitle"> Условия: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item"> Оплата тарифа. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Активация продуктов Infinity Browzer, Infinity Post, Infinity
                              incognito (мессенджер), согласно оплаченного тарифа. Плюс вознаграждения от партнерской
                              программы.</li>
                            <li className="grid__text-item">Доступ к реферальной программе на 2 уровня в глубину.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="grid__item">
                        <picture>
                          <source srcSet={sprite + "#status-partner"} type="image/webp" /><img className="status__image"
                            src={sprite + "#status-partner"} alt="PARTNER" />
                        </picture>
                        <div className="grid__text text text_color_normal">
                          <h3 className="grid__title"> PARTNER </h3>
                          <p className="grid__subtitle"> Условия: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item"> Оплата тарифа. </li>
                            <li className="grid__text-item"> Иметь в 1 уровне трех человек с активированными тарифами. </li>
                            <li className="grid__text-item"> Иметь во 2 уровне шесть человек с активированными тарифами (у
                              каждого из 3 приглашенных на 1 уровне по 2 активированных приглашенных пользователя). </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Доступ к продукту Infinity Node.</li>
                            <li className="grid__text-item">Открытие 4 уровней в партнерской программе.</li>
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
                            <li className="grid__text-item"> Иметь в 1 уровне три человека. </li>
                            <li className="grid__text-item"> ​Иметь во 2 уровне 9 человек. (у каждого из 3 приглашенных на 1
                              уровне по 3 активированных приглашенных пользователя). </li>
                            <li className="grid__text-item"> ​Объем монет в команде считая свой: 100.000 INFY.</li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Открытие 6 уровней в партнерской программе для получения
                              вознаграждений.</li>
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
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 18 человек (у каждого из 3 приглашенных на
                              первом уровне команда из 18 активированных пользователей). </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Открытие 8 уровней в партнерской программе для получения
                              вознаграждений. Получение бонусных участников на 1 уровень с открытого входа
                              (зарегистрированные без пригласительной ссылки).</li>
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
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 65 человек. </li>
                            <li className="grid__text-item"> Объем монет в команде: 175.000 INFY. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Открытие 10 уровней в партнерской программе для получения
                              вознаграждений. </li>
                            <li className="grid__text-item">Получение бонусных участников на 1 уровень с открытого входа
                              (зарегистрированные без пригласительной ссылки). </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="grid__item">
                        <picture>
                          <source srcSet={sprite + "#status-mentor"} type="image/webp" /><img className="status__image"
                            src={sprite + "#status-mentor"} alt="MENTOR" />
                        </picture>
                        <div className="grid__text text text_color_normal">
                          <h3 className="grid__title"> MENTOR </h3>
                          <p className="grid__subtitle"> Условия: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item"> Оплата тарифа. </li>
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 200 человек. </li>
                            <li className="grid__text-item"> Объем монет в команде: 350.000 INFY. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">Открытие 12 уровней в партнерской программе для получения
                              вознаграждений.</li>
                            <li className="grid__text-item">1% от товарооборота компании, которые делятся со всеми держателями
                              статусов MENTOR.</li>
                            <li className="grid__text-item">​При подтверждении статуса в течение 4х месяцев от компании дарится
                              1 000 000 рублей.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="grid__item">
                        <picture>
                          <source srcSet={sprite + "#status-professional"} type="image/webp" /><img className="status__image"
                            src={sprite + "#status-professional"} alt="PROFESSIONAL" />
                        </picture>
                        <div className="grid__text text text_color_normal">
                          <h3 className="grid__title"> PROFESSIONAL </h3>
                          <p className="grid__subtitle"> Условия: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item"> Оплата тарифа. </li>
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 600 человек. </li>
                            <li className="grid__text-item"> Объем монет в команде: 1.150 000 INFY. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">2% от товарооборота компании, которые делятся со всеми держателями
                              статусов MENTOR и PROFESSIONAL.</li>
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
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 1250 человек. </li>
                            <li className="grid__text-item"> ​Объем монет в команде: 2.300 000 INFY. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">3% от товарооборота компании, которые делятся со всеми держателями
                              статусов MENTOR, PROFESSIONAL и INVESTOR.</li>
                            <li className="grid__text-item">​При подтверждении статуса в течение 4х месяцев от компании дарится
                              2 500 000 рублей.</li>
                            <li className="grid__text-item">​Попадание в совет директоров компании Infinity Network Corporation.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="grid__item">
                        <picture>
                          <source srcSet={sprite + "#status-winner"} type="image/webp" /><img className="status__image"
                            src={sprite + "#status-winner"} alt="WINNER" />
                        </picture>
                        <div className="grid__text text text_color_normal">
                          <h3 className="grid__title"> WINNER </h3>
                          <p className="grid__subtitle"> Условия: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item"> Оплата тарифа. </li>
                            <li className="grid__text-item"> Иметь 3 ветки, каждая по 2 500 человек. </li>
                          </ul>
                          <p className="grid__subtitle"> Преимущества: </p>
                          <ul className="grid__text-list">
                            <li className="grid__text-item">5% от товарооборота компании, которые делятся со всеми держателями
                              статусов MENTOR, PROFESSIONAL, INVESTOR и WINNER. </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
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
