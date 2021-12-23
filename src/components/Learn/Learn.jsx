import React, { useState, useEffect } from "react";
import "./Learn.scss";
import Nav from "../Nav/Nav";
import LearnSlider from "./LearnSlider/LearnSlider";
import completeStudyIcon from "./images/complete-study-icon.png";
import Modal from "../Modal/Modal";
import TestPopup from "../TestPopup/TestPopup";
import "./Test.scss";

import LearnPopupSlider from "./LearnPopupSlider/LearnPopupSlider";
import Question from "../Question/Question";
import Lesson from "../Lesson/Lesson";
import { useList } from "react-use";
import api from '../../utils/api'
import Preloader from "../Preloader/Preloader";

const Learn = ({ checkToken }) => {

  const [modalActive, setModalActive] = useState({
    testPopup: false,
    testResult: false,
  });
  const [preloaderActive, setPreloaderActive] = useState({
    preloader: false,
  });
  const [lessons, setLessons] = useState([]);
  const [isTested, setIsTested] = useState(false);
  const [lesson, setLesson] = useState({});
  const [questions, setQuestions] = useState([]);
  const videoList = [
    "https://www.youtube.com/embed/lTUejHSdpYE",
    "https://www.youtube.com/embed/lqvwu-_a5wo",
    "https://www.youtube.com/embed/IcqE7YhTVWw",
    "https://www.youtube.com/embed/3-a6c9w7m0c",
    "https://www.youtube.com/embed/hN-B3-NcK04",

  ];

  const [list, { updateAt, clear }] = useList([]);
  const [answerList, setAnswersList] = useState(list);
  const [result, setResult] = useState({});
  const [state, setState] = useState({});
  const [defSlide, setDefSlide] = useState(false)

  useEffect(() => {
    document.title = "Study"
    getLessions();
  }, []);



  const handleClosePopup = (e) => {
    clear();
    setState(false)
    console.log()
    setAnswersList([])
    setModalActive({
      ...modalActive,
      testPopup: false,
      testResult: false,
    });
    setDefSlide(false)
  };
  const handleOpenPopup = (lesson) => {
    setModalActive({ ...modalActive, testPopup: true });
    setLesson(lesson);
    setQuestions(lesson.questionList);
    setDefSlide(true)

  };

  const getLessions = async () => {
    setPreloaderActive({ preloader: true });
    await checkToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {

        const res = await api.getLessionsInfo(jwt)
        setLessons(res.lessons);
        setIsTested(res.isTested);
      } catch (err) {
        console.error(err)
      } finally {
        setPreloaderActive({ preloader: false });
      }
    }
  };


  useEffect(() => {
    let filtered = list.filter(Boolean)
    setAnswersList(filtered);
  }, [list]);

  const nextLesson = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {

    } else {
    }
  };

  const prevLesson = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {

    } else {
    }
  };

  const nextQuestion = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
    } else {
      return;
    }
  };

  const prevQuestion = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
    } else {
      return;
    }
  };
  const questionsList = questions.map((question, index) => (
    <Question
      key={index}
      question={question}
      answers={question.answers}
      questions={questions}
      updateAt={updateAt}
      list={list}
      lesson={lesson}
      setModalActive={setModalActive}
      setResult={setResult}
      modalActive={modalActive}
      answerList={answerList}
      setAnswersList={setAnswersList}
      page={index}
      state={state}
      setState={setState}
      checkToken={checkToken}
      preloaderActive={preloaderActive}
      setPreloaderActive={setPreloaderActive}
    />
  ));

  const lessonList = lessons.map((lesson, page) => (
    <>
      <Lesson key={page} lesson={lesson}>
        <div className="learn__data">
          <div className="data__user">
            <div className="learn__video">
              <iframe
                width="100%"
                height="100%"
                src={videoList[page]}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="learn__body">
            <div className="learn__lessons">
              <div className="learn__lesson-count">
                <p className="text text_size_large">
                  <b>
                    Урок №{lesson.lessonNumber} из {lessons.length}
                  </b>
                </p>
              </div>

              {
                lesson.tested && (
                  <div className="learn__lessons-body">
                    <p className="learn__lesson-title text text_size_normal" style={{ color: 'green' }}>
                      <b>
                        Урок пройден.
                      </b>
                    </p>
                    <p className="learn__lesson-subtitle text text_size_x-small"></p>
                    <p className="learn__lesson-progress text text_size_x-small"></p>
                  </div>
                )
              }
              {lesson.isAvailable && !lesson.tested ? (
                <>
                  <button
                    className="link link_active"
                    onClick={() => handleOpenPopup(lesson)}
                  >
                    Пройти тест
                  </button>
                  <div className="learn__lessons-body">
                    <p className="learn__lesson-title text text_size_normal">
                      <b>
                        Перед прохождением теста ознакомьтесь с информацией в
                        видеоуроке.
                      </b>
                    </p>
                    <p className="learn__lesson-subtitle text text_size_x-small"></p>
                    <p className="learn__lesson-progress text text_size_x-small"></p>
                  </div>
                </>
              )
                : !lesson.isAvailable && (
                  <>
                    <span></span>
                    <div className="learn__lessons-body">
                      <p className="learn__lesson-title text text_size_normal">
                        <b>
                          Тест недоступен. <br /> <br /> Чтобы разблокировать
                          тест, необходимо успешно сдать предыдущие.
                        </b>
                      </p>
                      <p className="learn__lesson-subtitle text text_size_x-small"></p>
                      <p className="learn__lesson-progress text text_size_x-small"></p>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </Lesson>
    </>
  ));

  return (
    <>
      {lessons ? (
        <>
          <main className="main">
            <div className="container">
              <Nav />
              <section className="main__profile profile">
                <div className="profile__body">
                  {isTested ? (
                    <>
                      <div className="learn__data learn__data_complete">
                        <div className="data__user">
                          <img src={completeStudyIcon} className="learn__img" alt="Succes" />

                        </ div>
                        <div className="learn__body">

                          <h1 className="profile__title title">Обучение партнёров</h1>
                          <p className="text text_size_large">
                            <b>
                              Поздравляем! Ты прошёл обучение!
                            </b>
                          </p>
                          <br />
                          <a className="link link_active" href='./pdf/certificate.pdf' target='_blank'>
                            Скачать сертификат
                          </a>



                        </div>

                      </div>
                      <div className="learn__body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className="text text_size_large">
                          <b>
                            Дополнительные уроки
                          </b>
                        </p>
                        <div className="learn__video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={'https://www.youtube.com/embed/Na_SxDK12-s'}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div><div className="learn__video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={'https://www.youtube.com/embed/tYZFwKUW6M4'}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div><div className="learn__video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={'https://www.youtube.com/embed/cvKcyjljIFM'}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>

                      </div>
                    </>
                  ) : (
                    <>
                      <h1 className="profile__title title learn__title">
                        Обучение партнёров
                      </h1>
                      <LearnSlider
                        prevPage={prevLesson}
                        nextPage={nextLesson}
                        lesson={lesson}
                      >
                        {lessonList}
                      </LearnSlider>
                    </>
                  )
                  }
                </div>

              </section>
            </div>
          </main>
          <Modal active={modalActive.testPopup}>
            <TestPopup onClose={handleClosePopup}>
              <LearnPopupSlider prevPage={prevQuestion} nextPage={nextQuestion} defSlide={defSlide}
                handleClosePopup={handleClosePopup}

              >
                {questionsList}
              </LearnPopupSlider>
            </TestPopup>
          </Modal>
          <Modal active={modalActive.testResult}>
            <section className="popup">
              <form name="form" className="popup__form form form_type_seed">
                <p className="form__title">Результаты</p>
                <p
                  className="form__text form_seed-word"
                  style={{ textAlign: "center", marginBottom: "20px" }}
                >
                  <b>
                    Пройдено {result.rightAnswers} из {result.allAnswers}
                  </b>
                </p>
                <p className="form__text form_seed-word" style={{ textAlign: 'center' }}>
                  {result.rightAnswers === result.allAnswers ?
                    (
                      'Поздравляем! Вы успешно завершили тест. Следующий тест доступен.'
                    ) :
                    (
                      'Для успешного прохождения теста необходимо правильно ответить на все вопросы. Попробуйте еще раз!'
                    )
                  }
                </p>

              </form>
            </section>
            <button
              type="button"
              className="form__button form__button_type_close close"
              onClick={() => {
                handleClosePopup();
                nextLesson();
                getLessions()
              }}
            ></button>
          </Modal>
        </>
      ) : (
        ''
      )}



      <Modal active={preloaderActive.preloader}>
        <Preloader />
      </Modal>

    </>
  );
};

export default Learn;
