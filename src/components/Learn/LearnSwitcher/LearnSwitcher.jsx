import React, { useState, useEffect } from "react";
import "./Switcher.css";

const Switcher = ({ questionNumber, answerNumber, handleClickAnswer, selectAnswer, setSelectAnswer, setAnswersList, groupAnswer, answerList }) => {

  const handleChange = (e) => {
    setSelectAnswer({
      // questionNumber: e.currentTarget.id,
      answer: e.target.value,
    })
    // setAnswersList([
    //   ...answerList,
    //   selectAnswer
    // ])





    // if (!isChecked) {
    //   setIsChecked(true)
    //   setSelectAnswer({
    //     questionNumber: questionNumber,
    //     answer: number,
    //   })
    //   const array = [

    //   ]
    //   setAnswersList([
    //     ...answerList,
    //     selectAnswer
    //   ])
    // keyExist(questionNumber, answerList)
    // function keyExist(value, array) {
    //   for (var i in array) {
    //     for (var k in array[i])
    //       if (array[i][k] === value) {


    //         const uniqueSet = new Set(array)
    //         const backToArray = [...uniqueSet]
    //         console.log(value + ' is in array!');
    //         console.log(backToArray);
    //         setAnswersList([
    //           backToArray
    //         ])

    //         return true;
    //       }
    //   }

    //   return false;
    // }


    // console.log(answerList)
    // } else {
    //   setIsChecked(false)
    //   setSelectAnswer({

    //   })
    //   setAnswersList([

    //   ])
    // }
  }

  return (
    <>

      <div className="learn__radio">
        <input
          type="radio"
          className=""
          // name={questionNumber}
          id={answerNumber}
          checked={setSelectAnswer === answerNumber}
          onChange={handleChange}
          value={answerNumber}

        />
        <label htmlFor={questionNumber} className="text text_size_x-small"></label>
      </div>

      {/* <div className="learn__switcher">
        <input
          type="checkbox"
          className="learn__switcher__input"
          name={name}
          id={name}
          checked={isChecked}
          onChange={handleChange}
          value={number}

        />
        <label htmlFor={name} className="text text_size_x-small"></label>
      </div> */}
    </>
  );
};

export default Switcher;
// handleClickAnswer={handleClickAnswer}
// setIsChecked={setIsChecked}
// isCheked={isCheked}
// checkedItems={checkedItems}
// setCheckedItems={setCheckedItems}