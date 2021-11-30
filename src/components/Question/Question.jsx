import React from "react";
import Answer from "../Answer/Answer";
import api from '../../utils/api'
import "./Question.css";

const Question = ({
  answers,
  question,
  questions,
  updateAt,
  list,
  lesson,
  modalActive,
  setModalActive,
  setResult,
  answerList,
  checkToken,
  page,
  state,
  setState,
  preloaderActive,
  setPreloaderActive
}) => {

  const handkleSendAnswers = async (e) => {
    setPreloaderActive({ preloader: true });
    e.preventDefault();
    await checkToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const res = await api.sendAnswers(jwt, lesson.lessonNumber, list)
        setResult(res);
        setModalActive({ ...modalActive, testResult: true });
      } catch (err) {
        console.error(err);
      }
      finally {
        setPreloaderActive({ preloader: false });
      }
    }
  };

  const answersList = answers.map((answer, index) => (
    <Answer
      key={question.questionNumber + index}
      question={question}
      answer={answer}
      answerNumber={index}
      updateAt={updateAt}
      lesson={lesson}
      state={state}
      setState={setState}
      page={page + 1}

    />
  ));

  return (
    <form onSubmit={handkleSendAnswers} className="question" id={page + 1}>
      <p
        className="question__title tree__title tree__title_popup text_size_large"
        onClick={() => handkleSendAnswers}
      >
        Тест {question.lessonNumber}
      </p>

      <ul className="test__block">
        <li className="test__row">
          <p className="test__count text text_size_normal">
            {page + 1} / {questions.length}
          </p>
          <p
            className="test__question text text_size_normal"
            onClick={() => console.log(question)}
          >
            <b>{question.question}</b>
          </p>
        </li>
      </ul>
      {answersList}
      {question.questionNumber === lesson.questionList.length && answerList.length === lesson.questionList.length ? (
        <button type="submit" className="link link_active question__button" onClick={(() => { console.log() })}>
          Сохранить
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default Question;
