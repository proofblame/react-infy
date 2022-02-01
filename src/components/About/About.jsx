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
            <a href="https://t.me/infinitycorporationchannel" className="about__link link_type_youtube">Telegram</a>
            <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link" className="about__link link_type_github">Instagram</a>



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
              <p className="about__text about__text_black-2 text">32 рубля</p>
            </div>
          </div>
          <div className="about__article-footer">
            <p className="about__text about__text-footer text">Собственная ВЦМ INFY была создана как
              внутренняя цифровая монета проекта для доступа к&nbsp;IT продуктам компании и&nbsp;выплат
              вознаграждений партнерской программы.</p>
          </div>
        </div>

      </div>


    </section>
  )
}

export default About
