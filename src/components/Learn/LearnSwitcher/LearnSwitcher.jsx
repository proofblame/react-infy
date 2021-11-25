import React from "react";
import "./Switcher.css";

const Switcher = ({
  questionNumber,
  answerNumber,
  setSelectAnswer,
  updateAt,
  lesson,
  answer,
}) => {
  const handleChange = (e) => {
    const index = e.currentTarget.id - 1;
    updateAt(index, {
      lessonNumber: lesson.lessonNumber,
      questionNumber: questionNumber,
      answer: e.target.value,
    });
  };

  return (
    <fieldset className="learn__radio">
      <input
        type="radio"
        className="learn__radio-input"
        name={questionNumber}
        id={questionNumber}
        onChange={handleChange}
        value={answerNumber + 1}
      />
      <label
        htmlFor={questionNumber}
        className="test__question text text_size_small"
      >
        {answer}
      </label>
    </fieldset>
  );
};

export default Switcher;
