import React, { useState } from "react";
import "./Learn.scss";
import Nav from '../Nav/Nav';
import LearnSlider from './LearnSlider/LearnSlider'
import completeStudyIcon from './images/complete-study-icon.png'
import Modal from '../Modal/Modal'
import TestPopup from '../TestPopup/TestPopup';
import './Test.scss';
import LearnSwitcher from './LearnSwitcher/LearnSwitcher'
import LearnPopupSlider from './LearnPopupSlider/LearnPopupSlider'



const Learn = () => {
  const [status, setStatus] = useState('process')
  const [button, setButton] = useState('Включить читы')
  const [modalActive, setModalActive] = useState(false)

  const handleClick = () => {
    if (status === "process") {
      setStatus('complete')
      setButton('Выключить читы')
    } else {
      setStatus('process')
      setButton('Включить читы')
    }
  }

  const handleClosePopup = () => {
    setModalActive(false)
  }
  const handleOpenPopup = () => {
    setModalActive(true)
  }
  // const nextPage = () => {
  //   if (page >= 0 && page < pageCount -1) {
  //     setPage(page + 1)
  //     // getTansactions()
  //   } else {
  //     setPage(page)
  //   }
  // }

  // const prevPage = () => {
  //   if (page > 0 && page <= pageCount -1 ) {
  //     setPage(page - 1)
  //     // getTansactions()
  //   } else {
  //     setPage(page)
  //   }
  // }


  return (
    <>
      <main className="main">
        <button onClick={handleClick}>{button}</button>
        <div className="container">

          <Nav />
          <section className="main__profile profile">
            <div className="profile__body">
              {status === "process" &&
                <h1 className="profile__title title learn__title">Обучение партнёров</h1>
              }
              <div className="learn__data">

                <div className="data__user">
                  {status === "complete" &&
                    <img src={completeStudyIcon} className="learn__img" alt="Succes" />
                  }
                  {status === "process" &&
                    <div className="learn__video">
                      {/* <video srcSet="#" className="learn__video-frame"></video> */}
                      <button className="learn__test-button link link_active">
                        Play
                      </button>
                    </div>
                  }

                </div>
                <div className="learn__body">
                  {status === "complete" &&
                    <>
                      <h1 className="profile__title title">Обучение партнёров</h1>
                      <p className="text text_size_large">
                        <b>
                          Поздравляем! Ты прошёл обучение!
                        </b>
                      </p>
                      <br />
                      <button className="link link_active">
                        Скачать сертификат
                      </button>
                    </>
                  }
                  {status === "process" &&
                    <>
                      <div className="learn__lessons">
                        <div className="learn__lesson-count">
                          <p className="text text_size_large">
                            <b>
                              Урок №1 из 8
                            </b>
                          </p>
                        </div>
                        <LearnSlider>
                          {/* <div className="slider__item">
                      <div className="wallet__slider-item wallet__wrapper">

                      </div>
                    </div> */}
                        </LearnSlider>
                      </div>
                      <div className="learn__lessons-body">
                        <p className="learn__lesson-title text text_size_normal">
                          <b>
                            Название урока
                          </b>
                        </p>
                        <p className="learn__lesson-subtitle text text_size_x-small">
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p className="learn__lesson-progress text text_size_x-small">
                          Тест выполнен на  0%
                        </p>
                      </div>
                      <button className="link link_active" onClick={handleOpenPopup}>
                        Пройти тест
                      </button>
                    </>
                  }

                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <TestPopup onClose={handleClosePopup}>
          <LearnPopupSlider>
            <ul className="test__block">
              <li className="test__row">
                <p className="test__count text text_size_normal">1/8</p>
                <p className="test__question text text_size_normal"><b>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?</b></p>
              </li>
              <li className="test__row">
                <LearnSwitcher />
                <p className="test__question text text_size_small">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit?</p>
              </li>
              <li className="test__row">
                <LearnSwitcher />
                <p className="test__question text text_size_small">Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet?</p>
              </li>
              <li className="test__row">
                <LearnSwitcher />
                <p className="test__question text text_size_small">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet?</p>
              </li>
              <li className="test__row">
                <LearnSwitcher />
                <p className="test__question text text_size_small">Exercitation veniam consequat sunt nostrud amet?</p>
              </li>
            </ul>
          </LearnPopupSlider>


        </TestPopup>
      </Modal>
    </>
  );
};

export default Learn;
