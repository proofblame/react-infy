import React, { useEffect, useState } from "react";
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
  modalActive,
  setModalActive,
  setResult,
  answerList,
  setAnswersList,
  page, state, setState

  // filteredAnswer
}) => {
  // const [filteredAnswer, setFilteredAnswer] = useState([]);
  // useEffect(() => {

  //   let filterred = list.filter(Boolean)
  //   setFilteredAnswer(filterred)
  //   console.log(filteredAnswer)
  // }, [list])


  const handkleSendAnswers = (e) => {
    e.preventDefault();

    const refresh_token = localStorage.getItem('refresh_token');
    return auth.refreshToken(refresh_token)
      .then(res => {
        localStorage.setItem('jwt', res.access_token);
      }).then(() => {

        const jwt = localStorage.getItem("jwt");
        if (jwt) {
          auth
            .sendAnswers(jwt, lesson.lessonNumber, list)
            .then((res) => {
              setModalActive({ ...modalActive, testResult: true })
              setResult(res)
              console.log(res);
            })
            .catch((e) => {
              if (e.status === 403) {

              } else {
                console.error(e)
              }

            });
        }
      })


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
