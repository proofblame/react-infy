import React, { useEffect } from 'react'
import LearnSwitcher from '../Learn/LearnSwitcher/LearnSwitcher'

const Question = ({ question }) => {

  return (
    <li className="test__row">
      <LearnSwitcher />
      <p className="test__question text text_size_small">размотать последний массив</p>
    </li>
  )
}

export default Question
