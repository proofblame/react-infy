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
                    <p className="slider__text text">Базируется на&nbsp;надежном и&nbsp;быстром
                      консенсус движке собственной разработки</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">2</p>
                    <p className="slider__text text">Транзакции до&nbsp;30&nbsp;секунд
                      с&nbsp;минимальной комиссией (0,3%, макс. 25INFY) </p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">3</p>
                    <p className="slider__text text">Транзакции завершаются сразу после принятия
                      в&nbsp;блок</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">4</p>
                    <p className="slider__text text">Комбинированный консенсус: Delegated Proof
                      of&nbsp;Stake + Proof of&nbsp;Authority</p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">5</p>
                    <p className="slider__text text">Написан с&nbsp;использованием языка Scala
                      и&nbsp;Rust</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">6</p>
                    <p className="slider__text text">Возможность бесшовного обновления блокчейн </p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">7</p>
                    <p className="slider__text text">Модульная структура с&nbsp;хорошей изоляцией
                      модулей&nbsp;&mdash; защита от&nbsp;критических ошибок на&nbsp;уровне
                      приложения (ошибка в&nbsp;одном модуле или сбой при обработке транзакции
                      не&nbsp;остановит весь блокчейн)</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">8</p>
                    <p className="slider__text text">Встроенная система поощрения участников за
                      использование и продвижение блокчейн-продуктов </p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">9</p>
                    <p className="slider__text text">Модуль голосования для управления ключевыми
                      параметрами. Комьюнити совместно решает как будут изменяться условия
                      функционирования блокчейн</p>
                  </li>
                  <li className="slider__subitem">
                    <p className="slider__number">10</p>
                    <p className="slider__text text">Увеличенное время для выпуска блока - пониженные
                      требования к сети и производительности устройств, на которых работает
                      блокчейн </p>
                  </li>
                </ul>
              </li>
              <li className="slider__item">
                <ul className="slider__sublist">
                  <li className="slider__subitem">
                    <p className="slider__number">11</p>
                    <p className="slider__text text">Доступный и документированный REST API нод для
                      управления блокчейн </p>
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
