import React, { useState } from 'react'
import LearnSwitcher from '../Learn/LearnSwitcher/LearnSwitcher'

const Answer = ({ question, answer, answerNumber, handleClickAnswer }) => {
  const [isCheked, setIsChecked] = useState(false);
  const handleChecked = (event) => {
    if (!isCheked) {
      setIsChecked(true)
      // setCheckedItems({
      //   ...checkedItems,
      //   [event.target.name]: event.target.value,
      // });
    } else {
      setIsChecked(false)
      // setCheckedItems({});

    }
  }

  return (
    <li className="test__row">
      <LearnSwitcher
        questionNumber={question.questionNumber}
        answerNumber={answerNumber}
        handleClickAnswer={handleClickAnswer}
        isCheked={isCheked}
        handleChecked={handleChecked}
      />
      <p className="test__question text text_size_small" onClick={(() => console.log(answer))}>{answer}</p>
    </li>
  )
}

export default Answer
