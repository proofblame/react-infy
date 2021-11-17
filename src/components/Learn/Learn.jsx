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
import Lesson from '../Lesson/Lesson';
import LearnSwitcher from '../Learn/LearnSwitcher/LearnSwitcher'


const Learn = () => {
  const [status, setStatus] = useState('process')
  const [button, setButton] = useState('Включить читы')
  const [modalActive, setModalActive] = useState(false)
  // lessons
  const [lessons, setLessons] = useState([])
  const [isTested, setIsTested] = useState(false)
  const [lesson, setLesson] = useState({})


  const [questions, setQuestions] = useState([])
  // const [questionNumber, setQuestionNumber] = useState(0)

  const [page, setPage] = useState(0)


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
    getLessions()
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
    // setModalActive(false)
    keyExist('questionNumber', answerList)

  }
  const handleOpenPopup = (lesson) => {
    setModalActive(true);
    setLesson(lesson)
    setQuestions(lesson.questionList)
  }

  const getLessions = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getLessions(jwt)
        .then((res) => {
          setLessons(res.lessons)
          setIsTested(res.isTested)
        })
        .catch(e => console.error(e.message));
    }
  }




  const [selectAnswer, setSelectAnswer] = useState({})
  const [groupAnswer, setAnswer] = useState({})
  const [answerList, setAnswersList] = useState([])

  const [filterArray, setFilterArray] = useState([])



  function keyExist(value, array) {
    array.forEach((item, i) => {

      console.log(item[value] === 1)
    });
  }

  // console.log(filterArray)
  const handleClickAnswer = (event, name, nameCheck) => {



  }


  const questionsList = questions.map((question, index) => (
    <Question
      key={question.questionNumber + index}
      question={question}
      answers={question.answers}
      questions={questions}
      handleClickAnswer={handleClickAnswer}
      setSelectAnswer={setSelectAnswer}
      selectAnswer={selectAnswer}
      setAnswersList={setAnswersList}
      groupAnswer={groupAnswer}
      answerList={answerList}
    />
  ))





  const nextLesson = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
    } else {
    }
  }

  const prevLesson = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
      console.log(lesson)
    } else {
    }
  }

  const nextQuestion = () => {
    if (lesson.testNumber >= 1 && lesson.testNumber < lessons.length) {
      // setQuestionNumber(questionNumber + 1)
    } else {
      return
    }
  }

  const prevQuestion = () => {
    if (lesson.testNumber > 1 && lesson.testNumber <= lessons.length) {
      // setQuestionNumber(questionNumber - 1)
    } else {
      return
    }
  }





  const lessonList = lessons.map((lesson, page) => (
    <>
      <Lesson
        key={page}
        lesson={lesson}
      >
        <div className="learn__data">
          <div className="data__user">
            <div className="learn__video">
              <iframe width="100%" height="100%" src={videoList[page]}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
              <button className="link link_active" onClick={() => handleOpenPopup(lesson)} >
                Пройти тест
              </button>
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
          </div>
        </div>
      </Lesson>
    </>
  ))


  return (
    <>
      <main className="main">
        <button onClick={handleClick}>{button}</button>
        <div className="container">
          <Nav />
          <section className="main__profile profile">
            <div className="profile__body">
              <h1 className="profile__title title learn__title">Обучение партнёров</h1>
              <LearnSlider
                prevPage={prevLesson}
                nextPage={nextLesson}
              >
                {lessonList}
              </LearnSlider>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <TestPopup
          onClose={handleClosePopup}
        >
          <LearnPopupSlider
            questions={questions}
            prevPage={prevQuestion}
            nextPage={nextQuestion}
          >
            {questionsList}
          </LearnPopupSlider>
        </TestPopup>
      </Modal>
    </>
  );
};

export default Learn;
