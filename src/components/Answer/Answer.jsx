import React, { useState } from 'react'
import LearnSwitcher from '../Learn/LearnSwitcher/LearnSwitcher'

const Answer = ({ question, answer, answerNumber, handleClickAnswer, selectAnswer, setSelectAnswer, setAnswersList, groupAnswer, answerList }) => {



  return (
    <li className="test__row">
      <LearnSwitcher
        questionNumber={question.questionNumber}
        answerNumber={answerNumber}
        handleClickAnswer={handleClickAnswer}
        setSelectAnswer={setSelectAnswer}
        selectAnswer={selectAnswer}
        setAnswersList={setAnswersList}
        groupAnswer={groupAnswer}
        answerList={answerList}
      />
      <p className="test__question text text_size_small" onClick={(() => console.log(answer))}>{answer}</p>
    </li>
  )
}

export default Answer
