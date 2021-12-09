import React from 'react'
import './About.css'
import graph from '../../images/graph.svg';
import grad from '../../images/grad.svg';

const About = () => {
  return (
    <section className="main__about about">
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Всегда в курсе новостей!</h2>
          <div className="about__links">
            <a href="https://www.youtube.com/channel/UCCPjoKqynKjBYnHlmXDkZhg" className="about__link link_type_telegram">YouTube</a>
            <a href="https://t.me/infinitynetworkchannel" className="about__link link_type_youtube">Telegram</a>
            <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link" className="about__link link_type_github">Instagram</a>

            <a href="https://t.me/orcaeyes_bot" className="about__link labout__link link_type_telegram">Orca.Eyes</a>

            <a href="https://t.me/manager_travel_club" className="about__link link_type_youtube">TravelClub</a>
          </div>
        </div>
      </div>
      <div className="container about__body-wrapper">
        <div className="">
          <div className="about__body">
            <div className="about__article">
              <h3 className="title title_color_white">О монете</h3>
              <div className="about__paragraph">
                <p className="about__text text">Начальная эмиссия:</p>
                <p className="about__text text">10.000.000 INFY</p>
              </div>
              <div className="about__paragraph">
                <p className="about__text text">Итоговая эмиссия:</p>
                <p className="about__text text">15.000.000.000 INFY</p>
              </div>
              <p className="about__description text">Ниже представлена ориентировочная модель эмиссии INFY
                и&nbsp;периоды планового снижения вознаграждений делегаторам для уменьшения рисков
                гиперэмиссии:</p>
            </div>
            <div className="wrapper">
              <p className="about__text about__text_black text">Курс INFY</p>
              <p className="about__text about__text_black-2 text">34 рубля</p>
            </div>
          </div>
          <div className="about__article-footer">
            <p className="about__text about__text-footer text">Собственная ВЦМ INFY была создана как
              внутренняя цифровая монета проекта для доступа к&nbsp;IT продуктам компании и&nbsp;выплат
              вознаграждений партнерской программы.</p>
          </div>
          <div className="about__graph ">
            <div className="image_type_graph">
              <picture>
                <source srcSet={graph} type="image/webp" /><img src={graph}
                  alt="8 стадий продаж первой эмиссии" />
              </picture>
            </div>
            <div className="about__table">
              <p className="about__table-text text">11 стадий продаж первой эмиссии</p>
              <table className="about__table-body">
                <thead>
                  <tr>
                    <td>Стадия</td>
                    <td>Срок</td>
                    <td>Цена за 1 INFY</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><s className="crossed-out">№1</s></td>
                    <td><s className="crossed-out">01.10 - 07.10</s></td>
                    <td><s className="crossed-out">14 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№2</s></td>
                    <td><s className="crossed-out">08.10 - 14.10</s></td>
                    <td><s className="crossed-out">16 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№3</s></td>
                    <td><s className="crossed-out">15.15 - 21.10</s></td>
                    <td><s className="crossed-out">18 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№4</s></td>
                    <td><s className="crossed-out">22.10 - 28.10</s></td>
                    <td><s className="crossed-out">20 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№5</s></td>
                    <td><s className="crossed-out">29.10 - 04.11</s></td>
                    <td><s className="crossed-out">22 рубля</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№6</s></td>
                    <td><s className="crossed-out">05.11 - 11.11</s></td>
                    <td><s className="crossed-out">24 рубля</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№7</s></td>
                    <td><s className="crossed-out">12.11 - 18.11</s></td>
                    <td><s className="crossed-out">26 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№8</s></td>
                    <td><s className="crossed-out">19.11 - 25.11</s></td>
                    <td><s className="crossed-out">28 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№9</s></td>
                    <td><s className="crossed-out">26.11 - 02.12</s></td>
                    <td><s className="crossed-out">30 рублей</s></td>
                  </tr>
                  <tr>
                    <td><s className="crossed-out">№10</s></td>
                    <td><s className="crossed-out">03.12 - 09.12</s></td>
                    <td><s className="crossed-out">32 рубля</s></td>
                  </tr>
                  <tr>
                    <td>№11</td>
                    <td>10.12 - 16.12</td>
                    <td>34 рубля</td>
                  </tr>
                </tbody>
              </table>
              <div className="about__table-image">
                <picture>
                  <source srcSet={grad} type="image/webp" /><img src={grad} alt="" />
                </picture>
              </div>
              <p className="about__table-text text">5 129 487 (51.29%) / 10 000 000 INFY</p>
            </div>

          </div>
          <div className="about__link">
            <a href="https://t.me/infy_official_exchange_bot" className="link link_active">Купить
              INFY</a>
          </div>
        </div>

      </div>


    </section>
  )
}

export default About
