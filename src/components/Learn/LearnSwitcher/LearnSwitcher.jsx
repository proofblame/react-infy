import React, { useState, useEffect } from "react";
import "./Switcher.css";

const Switcher = ({ questionNumber, answerNumber, handleClickAnswer, isCheked, handleChecked }) => {
  // const [checkedItems, setCheckedItems] = useState({});
  // const [isChecked, setIsChecked] = useState(false);

  // const handleChange = (event) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [event.target.name]: event.target.checked,
  //   });
  //   if (isChecked) {
  //     setIsChecked(false)

  //   } else {
  //     setIsChecked(true)
  //   }
  // };

  // useEffect(() => {
  //   console.log("checkedItem: ", `${questionNumber}-${answerNumber}`);
  // }, [isCheked]);

  return (
    <>
      <div className="learn__switcher">
        <input
          type="checkbox"
          className="learn__switcher__input"
          name={`${questionNumber}-${answerNumber}`}
          id={`${questionNumber}-${answerNumber}`}
          checked={isCheked}
          onChange={() => {
            handleClickAnswer();
            handleChecked()
          }}
          value={answerNumber + 1}


        />
        <label htmlFor={`${questionNumber}-${answerNumber}`} className="text text_size_x-small"></label>
      </div>
    </>
  );
};

export default Switcher;
