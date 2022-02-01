import React, { useEffect } from 'react'
import './Main.css';
import SimpleSlider from '../Slider/Slider';
import Banner from '../Banner/Banner';
import Apps from '../Apps/Apps';
import About from '../About/About';
import RoadMapBlock from '../RoadMapBlock/RoadMapBlock';

function Main() {
  useEffect(() => {
    document.title = "О компании"
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="wrapper">
          <Banner />
          <section className="main__slider slider">
            <SimpleSlider>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">1</p>
                    <p className="slider__text text">Ультрасовременный защищенный сайт (официальный сайт компании), в котором интегрирован личный кабинет с необходимыми инструментами для взаимодействия с компанией.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">2</p>
                    <p className="slider__text text">Внутренняя Цифровая монета INFY - создана специально для доступа к реферальной программе и к продуктам компании.</p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">3</p>
                    <p className="slider__text text">Infinity Wallet - горячий моно-кошелек, открывающий доступ к экосистеме Infinity.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">4</p>
                    <p className="slider__text text">Партнерская программа из двенадцать уровней и система лояльности при достижении определенных результатов в компании.</p>
                  </li>
                </ul>
              </li>

              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">5</p>
                    <p className="slider__text text">Система внутренних статусов компании, разработанная для мотивации активных Инвесторов и Агентов компании.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">6</p>
                    <p className="slider__text text">Продукты для b2b сектора. На сегодняшний день компания Infinity разрабатывает несколько продуктов для сектора b2b в направлении CRM и Software.</p>
                  </li>
                </ul>
              </li>

              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">7</p>
                    <p className="slider__text text">Infinity Travel Club. Это сообщество энтузиастов, практикующих нетривиальный нетворкинг в путешествиях. На сегодняшний день компания уже разработала два направления и готова предложить туры на озеро Байкал и в Адыгею по системе все включено. Оплата за туры производится ВЦМ INFY. В ближайшее время будут добавлены и другие направления туров.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">8</p>
                    <p className="slider__text text">Infinity Майнинг отель и Infinity Cloud Mining. У компании есть специализированные помещения для деятельности майнинга/майнеров, и Компания предоставляет место(а) в одном, из которых заключив договор можно разместить практически любого желающего установки и оборудования для добычи цифровых активов. Компания создает и поддерживают максимально комфортные условия для работы майнинг установок пользователей.</p>
                  </li>
                </ul>
              </li>

            </SimpleSlider>
          </section>
          <Apps />
        </div>
      </div>
      <About />
      <div className="container">
        <div className="wrapper">

        </div>
      </div>
    </main>
  )
}

export default Main
