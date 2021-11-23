import React from "react";
import './Answer.scss'
// import './AnswerDark.scss';

const Answer = ({
  question,
  answer,
  answerNumber,
  setSelectAnswer,
  updateAt,
  lesson, setState, state, page
}) => {
  const handleChange = (e) => {
    let { name, value, id } = e.target;
    setState(
      {
        ...state,
        [id]: value,
        // isCheck: e.target.value
        // [`${question.questionNumber}-${name}`]: e.target.value
      }
    );
    const index = e.currentTarget.id - 1;

    updateAt(index, {
      lessonNumber: lesson.lessonNumber,
      questionNumber: question.questionNumber,
      answer: e.target.name,
    });
    console.log(e.target)
  };

  return (

    <fieldset className="answer">
      <label
        className="answer__label text text_size_small">
        <input
          type="radio"
          className="answer__input"
          onChange={handleChange}
          name={answerNumber + 1}
          id={page}

          value={`${question.questionNumber}-${answerNumber + 1}`}
          // value={state}
          checked={state[page] === `${question.questionNumber}-${answerNumber + 1}`}
        />
        <span className="answer__check">
          {answer}
        </span>
      </label>
    </fieldset>
  );
};

export default Answer;
