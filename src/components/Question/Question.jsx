import React, { useEffect, useState } from 'react'
import Answer from '../Answer/Answer'
import auth from '../../utils/auth';

const Question = ({ answers, question, questions, handleClickAnswer, selectAnswer, setSelectAnswer, setAnswersList, groupAnswer, answerList, push, updateAt, list, lesson, setQuestion }) => {

  const handkleSendAnswers = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      list.forEach((item) => {
        auth
          .sendAnswers(jwt, item.lessonNumber, item.questionNumber, item.answer)
          .then((res) => {
            console.log(res)
          })
          .catch(e => console.error(e.message));
      })

    }
  }



  useEffect(() => {
    // setQuestion(question)
    console.log(question)
  }, [])

  const answersList = answers.map((answer, index) => (
    <Answer
      key={question.questionNumber + index}
      question={question}
      answer={answer}
      answerNumber={index}
      handleClickAnswer={handleClickAnswer}
      setSelectAnswer={setSelectAnswer}
      selectAnswer={selectAnswer}
      setAnswersList={setAnswersList}
      groupAnswer={groupAnswer}
      answerList={answerList}
      push={push}
      updateAt={updateAt}
      list={list}
      lesson={lesson}
    />

  ))



  return (
    <>

      <p className="question__title tree__title tree__title_popup text_size_large" onClick={() => handkleSendAnswers}>
        Тест {question.lessonNumber}
      </p>
      <form onSubmit={handkleSendAnswers}>

        <button type="sumbit" />

      </form>


      <ul className="test__block">
        <li className="test__row">
          <p className="test__count text text_size_normal">{question.questionNumber} / {questions.length}</p>
          <p className="test__question text text_size_normal"
            onClick={(() => console.log(question))}
          >
            <b>
              {question.question}
            </b>
          </p>
        </li>
        {answersList}
      </ul>


    </>
  )
}

export default Question
