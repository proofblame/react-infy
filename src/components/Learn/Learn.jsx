import React, { useState, useEffect } from "react";
import "./Learn.scss";
import Nav from '../Nav/Nav';
import LearnSlider from './LearnSlider/LearnSlider'
import completeStudyIcon from './images/complete-study-icon.png'
import Modal from '../Modal/Modal'
import TestPopup from '../TestPopup/TestPopup';
import './Test.scss';

import LearnPopupSlider from './LearnPopupSlider/LearnPopupSlider'
import auth from '../../utils/auth';
import Question from '../Question/Question';


const Learn = () => {
  const [status, setStatus] = useState('process')
  const [button, setButton] = useState('Включить читы')
  const [modalActive, setModalActive] = useState(false)
  const [lessons, setLessons] = useState([])
  const [lesson, setLesson] = useState({})
  const [questionList, setQuestionList] = useState([]);
  const [isTested, setIsTested] = useState(false)
  const [page, setPage] = useState(0)

  const [pageCount, setPageCount] = useState(1);
  const [questions, setQuestions] = useState([])
  const videoList = [
    "https://www.youtube.com/embed/lTUejHSdpYE",
    "https://www.youtube.com/embed/lqvwu-_a5wo",
    "https://www.youtube.com/embed/IcqE7YhTVWw",
    "https://www.youtube.com/embed/3-a6c9w7m0c",
    "https://www.youtube.com/embed/hN-B3-NcK04",
    "https://www.youtube.com/watch?v=Na_SxDK12-s&ab_channel=InfinityC2",
    "https://www.youtube.com/embed/tYZFwKUW6M4",
    "https://www.youtube.com/embed/cvKcyjljIFM"
  ]

  useEffect(() => {
    getQuestions()
  }, [])

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
    setQuestionList([])
  }
  const handleOpenPopup = () => {
    setModalActive(true);
    setQuestionList(lesson.questionList)
    console.log(questionList)

  }

  const getQuestions = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getQuestion(jwt)
        .then((res) => {
          setLessons(res.questions)
          setLesson(res.questions[0])
          setQuestions(res.questions)
          setIsTested(res.isTested)
          // setPageCount(res.questions.testNumber)


        })
        .catch(e => console.error(e.message));
    }
  }

  const questionsList = questionList.map((question, index) => (
    <Question
      key={index}
      question={question}
      modalActive={modalActive}
    />

  ))


  const setVideo = (index) => {
    return videoList[index]
  }



  const nextPage = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
      setPage(page + 1)
      setLesson(lessons[page + 1])
      console.log(lesson)
    } else {
      setLesson(lessons[page])
    }
  }

  const prevPage = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
      setPage(page - 1)
      setLesson(lessons[page - 1])
      console.log(lesson)
    } else {
      setLesson(lessons[page])
    }
  }


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
                    <>
                      <div className="learn__video">
                        <iframe width="100%" height="100%" src={videoList[lesson.testNumber - 1]}
                          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        {/* <button className="learn__test-button link link_active">
                          Play
                        </button> */}
                      </div>
                    </>
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
                              Урок №{lesson.testNumber} из {questions.length}
                            </b>
                          </p>
                        </div>
                        <LearnSlider
                          prevPage={prevPage}
                          nextPage={nextPage}
                        />
                      </div>
                      <div className="learn__lessons-body">
                        <p className="learn__lesson-title text text_size_normal">
                          <b>
                            Перед прохождением теста ознакомтесь с информацией в видеоуроке.
                          </b>
                        </p>
                        <p className="learn__lesson-subtitle text text_size_x-small">

                        </p>
                        <p className="learn__lesson-progress text text_size_x-small">

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
        <TestPopup
          onClose={handleClosePopup}

        >
          <LearnPopupSlider>
            <ul className="test__block">
              <li className="test__row">
                <p className="test__count text text_size_normal">{lesson.testNumber} / {lesson.questionCount}</p>
                <p className="test__question text text_size_normal">
                  <b>

                  </b>
                </p>
              </li>
              {questionsList}
            </ul>
          </LearnPopupSlider>


        </TestPopup>
      </Modal>
    </>
  );
};

export default Learn;
