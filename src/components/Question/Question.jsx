import React from "react";
import Answer from "../Answer/Answer";
import auth from "../../utils/auth";
import "./Question.css";

const Question = ({
  answers,
  question,
  questions,
  setSelectAnswer,
  updateAt,
  list,
  lesson,
}) => {
  const handkleSendAnswers = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .sendAnswers(jwt, lesson.lessonNumber, list)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.error(e.message));
    }
  };

  const answersList = answers.map((answer, index) => (
    <Answer
      key={question.questionNumber + index}
      question={question}
      answer={answer}
      answerNumber={index}
      setSelectAnswer={setSelectAnswer}
      updateAt={updateAt}
      lesson={lesson}
    />
  ));

  return (
    <form onSubmit={handkleSendAnswers} className="question">
      <p
        className="question__title tree__title tree__title_popup text_size_large"
        onClick={() => handkleSendAnswers}
      >
        Тест {question.lessonNumber}
      </p>

      <ul className="test__block">
        <li className="test__row">
          <p className="test__count text text_size_normal">
            {question.questionNumber} / {questions.length}
          </p>
          <p
            className="test__question text text_size_normal"
            onClick={() => console.log(question)}
          >
            <b>{question.question}</b>
          </p>
        </li>
        {answersList}
      </ul>
      {question.questionNumber === lesson.questionList.length ? (
        <button type="submit" className="link link_active question__button">
          Сохранить
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default Question;
