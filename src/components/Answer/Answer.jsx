import React from "react";
import LearnSwitcher from "../Learn/LearnSwitcher/LearnSwitcher";

const Answer = ({
  question,
  answer,
  answerNumber,
  setSelectAnswer,
  updateAt,
  lesson,
}) => {
  return (
    <li className="test__row">
      <LearnSwitcher
        questionNumber={question.questionNumber}
        answerNumber={answerNumber}
        setSelectAnswer={setSelectAnswer}
        updateAt={updateAt}
        lesson={lesson}
      />
      <p
        className="test__question text text_size_small"
        onClick={() => console.log(answer)}
      >
        {answer}
      </p>
    </li>
  );
};

export default Answer;
