import React, { useState, useEffect, useRef } from "react";
import { useList } from 'react-use';
import "./Switcher.css";

const Switcher = ({ questionNumber, answerNumber, handleClickAnswer, selectAnswer, setSelectAnswer, setAnswersList, groupAnswer, answerList, push, updateAt, list, lesson }) => {


  // const [list, { set, push, updateAt, insertAt, update, updateFirst, upsert, sort, filter, removeAt, clear, reset }] = useList(answerList);

  const handleChange = (e) => {

    const index = e.currentTarget.id - 1
    // debugger
    updateAt(index, { lessonNumber: lesson.lessonNumber, questionNumber: questionNumber, answer: e.target.value })


    // setAnswersList(list)

    // setSelectAnswer({
    //   questionNumber: questionNumber,
    //   answer: e.target.value,
    // })
    // debugger

    // updateAt(e.currentTarget.id, { questionNumber: questionNumber, answer: e.target.value })
    // list.push(
    //   {
    //     questionNumber: questionNumber,
    //     answer: e.target.value,
    //   }
    // );

    // list.updateFirst((

    //   {
    //     questionNumber,
    //     [e.target.value]
    //   }

    // ) => true, {
    //   answer: e.target.value,
    // })


    // console.log(answerList)

    // setAnswersList([
    //   ...answerList,
    //   {
    //     questionNumber: questionNumber,
    //     answer: e.target.value,
    //   }
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
          name={questionNumber}
          id={questionNumber}
          checked={setSelectAnswer.answer}
          onChange={handleChange}
          value={answerNumber + 1}

        />
        <label htmlFor={questionNumber} className="text text_size_x-small"></label>
      </div>
      {/* <div className="learn__radio">
        <input
          type="radio"
          className=""
          name={questionNumber}
          id={questionNumber}
          checked={setSelectAnswer.answer}
          onChange={handleChange}
          value={answerNumber + 1}

        />
        <label htmlFor={questionNumber} className="text text_size_x-small"></label>
      </div> */}

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