import React from 'react'
import './Moder.scss'
import constants from './constants.js'

const Moder = () => {
  const { title, img, table } = constants;
  const { filter, body } = table;
  return (
    <section className="moderation">

      <div className="moderation__wrapper">

        {/* TODO: добавить бургер меню */}
        <header className="moderation__header">
          <h2 className="moderation__header-title">{title}</h2>
          <div className="moderation__header-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main className="moderation__main">

          <aside className="moderation__aside">
            <ul className="moderation__aside-service-list">
              <li className="moderation__aside-service-item">
                <div className="moderation__aside-image">
                  <img src={img.headphones} alt="Наушники" />
                </div>
              </li>
            </ul>
          </aside>

          <section className="moderation__table">

            <div className="moderation__table-header">

              <div className="moderation__table-filter">
                <p className="moderation__table-filter-title">{filter.title}</p>
                <ul className="moderation__table-filter-params">
                  <li className="moderation__table-filter-param moderation__table-filter-param_selected">
                    <button type="button" className="moderation__table-filter-button">
                      {filter.paramDate}
                    </button>
                  </li>
                  <li className="moderation__table-filter-param">
                    <div className="moderation__table-filter-status">
                      <p className="moderation__table-filter-subtitle">{filter.paramStatus}</p>
                      <select className="moderation__table-filter-select">
                        <option>Открыта</option>
                        <option>Закрыта</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pagination">
                <button type="button" className="pagination__arrow pagination__arrow_previos"></button>
                <ul className="pagination__list">
                  <li className="pagination__page pagination__page_current">
                    <button className="pagination__page-button">
                      1
                    </button>
                  </li>
                  <li className="pagination__page">
                    <button className="pagination__page-button">
                      2
                    </button>
                  </li>
                  <li className="pagination__page">
                    <button className="pagination__page-button">
                      3
                    </button>
                  </li>
                </ul>
                <button type="button" className="pagination__arrow"></button>
              </div>

            </div>

            <div className="moderation__table-body">

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">{body.date}</li>
                <li className="moderation__table-subtitle-cell">{body.number}</li>
                <li className="moderation__table-subtitle-cell">{body.nickname}</li>
                <li className="moderation__table-subtitle-cell">{body.status}</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

              <ul className="moderation__table-subtitle-row">
                <li className="moderation__table-subtitle-cell">19.02.2000</li>
                <li className="moderation__table-subtitle-cell">Номер обращения</li>
                <li className="moderation__table-subtitle-cell">Никнейм</li>
                <li className="moderation__table-subtitle-cell">Статус</li>
              </ul>

            </div>

            <div className="moderation__table-pagination pagination pagination_dark">
              <button type="button" className="pagination__arrow pagination__arrow_previos"></button>
              <ul className="pagination__list">
                <li className="pagination__page pagination__page_current">
                  <button className="pagination__page-button">
                    1
                  </button>
                </li>
                <li className="pagination__page">
                  <button className="pagination__page-button">
                    2
                  </button>
                </li>
                <li className="pagination__page">
                  <button className="pagination__page-button">
                    3
                  </button>
                </li>
              </ul>
              <button type="button" className="pagination__arrow"></button>
            </div>

          </section>

          <section className="moderation__chat">

            <div className="moderation__chat-header">
              <p className="moderation__chat-title">Никнейм</p>
              <button type="button" className="moderation__chat-close-button"></button>
            </div>

            <ul className="moderation__chat-message-list">
              <li className="message message_type_incoming">
                <p className="message__author">
                  Поддержка Infinity
                </p>
                <p className="message__text">
                  Amet minim mollit non deserunt ullamc.
                </p>
                <p className="message__time">18:30</p>
                <p className="message__status">Прочитано</p>
              </li>
              <li className="message message_type_outgoing">
                <p className="message__author">
                  Никнейм
                </p>
                <p className="message__text">
                  Amet minim mollit non deserunt ullamc.
                </p>
                <p className="message__time">18:30</p>
                <p className="message__status">Прочитано</p>
              </li>

            </ul>

            <form className="moderation__chat-form-answer">
              <textarea className="moderation__chat-form-area" type="text" placeholder="Написать сообщение..." />
              <button lassName="moderation__chat-form-send-button" type="submit"> </button>
            </form>

          </section>

        </main>

      </div>

    </section>
  )
}

export default Moder
