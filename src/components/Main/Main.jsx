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
                    <p className="slider__text text">Внутренняя цифровая монета INFY.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">2</p>
                    <p className="slider__text text">Транзакции между кошельками до 30 секунд с комиссией 0.03%, но не более 25 INFY.</p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">3</p>
                    <p className="slider__text text">Встроенная система поощерения активным агентам/инвесторам за использование и
                      продвижение продуктов компании.</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">4</p>
                    <p className="slider__text text">ВЦМ INFY была создана для доступа к продуктам компании и начисления
                      вознаграждений в партнерской программе.</p>
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
          <RoadMapBlock />
        </div>
      </div>
    </main>
  )
}

export default Main
