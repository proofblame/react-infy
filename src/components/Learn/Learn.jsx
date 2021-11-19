import React, { useState, useEffect, useRef } from "react";
import "./Learn.scss";
import Nav from "../Nav/Nav";
import LearnSlider from "./LearnSlider/LearnSlider";
import completeStudyIcon from "./images/complete-study-icon.png";
import Modal from "../Modal/Modal";
import TestPopup from "../TestPopup/TestPopup";
import "./Test.scss";

import LearnPopupSlider from "./LearnPopupSlider/LearnPopupSlider";
import auth from "../../utils/auth";
import Question from "../Question/Question";
import Lesson from "../Lesson/Lesson";
import { useList } from "react-use";

const Learn = () => {
  const [status, setStatus] = useState("process");
  const [button, setButton] = useState("Включить читы");
  const [modalActive, setModalActive] = useState({
    testPopup: false,
    testResult: false
  });
  const [lessons, setLessons] = useState([]);
  const [isTested, setIsTested] = useState(false);
  const [lesson, setLesson] = useState({});
  const [questions, setQuestions] = useState([]);
  // const [page, setPage] = useState(0)
  const videoList = [
    "https://www.youtube.com/embed/lTUejHSdpYE",
    "https://www.youtube.com/embed/lqvwu-_a5wo",
    "https://www.youtube.com/embed/IcqE7YhTVWw",
    "https://www.youtube.com/embed/3-a6c9w7m0c",
    "https://www.youtube.com/embed/hN-B3-NcK04",
    "https://www.youtube.com/watch?v=Na_SxDK12-s&ab_channel=InfinityC2",
    "https://www.youtube.com/embed/tYZFwKUW6M4",
    "https://www.youtube.com/embed/cvKcyjljIFM",
  ];

  const [list, { updateAt }] = useList([]);
  const [answerList, setAnswersList] = useState(list);
  const [result, setResult] = useState({});

  useEffect(() => {
    getLessions();
  }, []);

  const handleClick = () => {
    if (status === "process") {
      setStatus("complete");
      setButton("Выключить читы");
    } else {
      setStatus("process");
      setButton("Включить читы");
    }
  };

  const handleClosePopup = () => {
    setAnswersList([])
    setModalActive({
      testPopup: false,
      resultPopup: false
    });
  };
  const handleOpenPopup = (lesson) => {
    setModalActive({ ...modalActive, testPopup: true });
    setLesson(lesson);
    setQuestions(lesson.questionList);
  };

  const getLessions = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getLessions(jwt)
        .then((res) => {
          setLessons(res.lessons);
          setIsTested(res.isTested);
          console.log(res);
        })
        .catch((e) => console.error(e.message));
    }
  };

  useEffect(() => {
    setAnswersList(list);
  }, [list]);

  const nextLesson = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
    } else {
    }
  };

  const prevLesson = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
      console.log(lesson);
    } else {
    }
  };

  const nextQuestion = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
      // setQuestionNumber(questionNumber + 1)
    } else {
      return;
    }
  };

  const prevQuestion = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
      // setQuestionNumber(questionNumber - 1)
    } else {
      return;
    }
  };
  const questionsList = questions.map((question, index) => (
    <Question
      key={question.questionNumber + index}
      question={question}
      answers={question.answers}
      questions={questions}
      updateAt={updateAt}
      list={list}
      lesson={lesson}
      setModalActive={setModalActive}
      setResult={setResult}
      modalActive={modalActive}
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
              {/* <button className="learn__test-button link link_active">
                          Play
                        </button> */}
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
              {lesson.isAvailable ? (
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
                        Перед прохождением теста ознакомтесь с информацией в
                        видеоуроке.
                      </b>
                    </p>
                    <p className="learn__lesson-subtitle text text_size_x-small"></p>
                    <p className="learn__lesson-progress text text_size_x-small"></p>
                  </div>
                </>
              ) : (
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
      <main className="main">
        <button onClick={handleClick}>{button}</button>
        <div className="container">
          <Nav />
          <section className="main__profile profile">
            <div className="profile__body">
              {isTested ? (
                <div className="learn__data">
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
          <LearnPopupSlider prevPage={prevQuestion} nextPage={nextQuestion}>
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
            getLessions();
            nextLesson();
          }}
        ></button>
      </Modal>
    </>
  );
};

export default Learn;
