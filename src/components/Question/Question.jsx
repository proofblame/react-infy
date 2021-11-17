import React, { useEffect, useState } from 'react'
import Answer from '../Answer/Answer'


const Question = ({ answers, question, questions, handleClickAnswer, selectAnswer, setSelectAnswer, setAnswersList, groupAnswer, answerList }) => {

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
    />

  ))



  return (
    <>

      <p className="question__title tree__title tree__title_popup text_size_large" onClick={() => console.log(question)}>
        Тест {question.questionNumber}
      </p>



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
