import React from 'react'
import './Moder.scss'
import constants from './constants.js'

const Moder = () => {
  const { title, img, table } = constants;
  const { filter, body } = table;
  return (
    <section className="moderation">

      <div className="moderation__wrapper">
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
            <div className="moderation__aside-image">
              <img src={img.headphones} alt="Наушники" />
            </div>
          </aside>

          <section className="moderation__table">

            <div className="moderation__table-header">

              <div className="moderation__table-filter table-filter">
                <p className="table-filter__title">{filter.title}</p>
                <ul className="table-filter__params">
                  <li className="table-filter-param">{filter.paramDate}</li>
                  <li className="table-filter-param">
                    <p className="table-filter-title">{filter.paramStatus}</p>
                    <select className="table-filter-select">
                      <option>Открыта</option>
                      <option>Закрыта</option>
                    </select>
                  </li>
                </ul>
              </div>

              <div className="moderation__table-pagination pagination">
                <button type="button" className="pagination__arrow pagination__arrow_previos">&lt;</button>
                <ul className="pagination__list">
                  <li className="pagination__page">
                    1
                  </li>
                  <li className="pagination__page">
                    2
                  </li>
                  <li className="pagination__page">
                    3
                  </li>
                  <li className="pagination__page">
                    4
                  </li>
                </ul>
                <button type="button" className="pagination__arrow">&gt;</button>
              </div>

            </div>

            <div className="moderation__table-body">
              <ul className="moderation__table-subtitle-list">
                <li className="moderation__table-subtitle-item">{body.date}</li>
                <li className="moderation__table-subtitle-item">{body.number}</li>
                <li className="moderation__table-subtitle-item">{body.nickname}</li>
                <li className="moderation__table-subtitle-item">{body.status}</li>
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

          </section>


          <div className="moderation__page-count pagination pagination_dark">
            <button type="button" className="pagination__arrow pagination__arrow_previos">&lt;</button>
            <ul className="pagination__list">
              <li className="pagination__page">
                1
              </li>
              <li className="pagination__page">
                2
              </li>
              <li className="pagination__page">
                3
              </li>
              <li className="pagination__page">
                4
              </li>
            </ul>
            <button type="button" className="pagination__arrow">&gt;</button>
          </div>


          <section className="moderation__chat">

            <div className="moderation__chat-header">
              <p className="moderation__chat-title">Никнейм</p>
              <button type="button" className="moderation__chat-close-button"></button>
            </div>

            <ul className="moderation__chat-message-list">
              <li className="message">
                <p className="message-author">
                  Поддержка Infinity
                </p>
                <p>

                </p>
              </li>

            </ul>

          </section>



        </main>

      </div>
    </section>
  )
}

export default Moder
