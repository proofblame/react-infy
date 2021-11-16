import React, { useState, useEffect } from "react";
import "./Switcher.css";

const Switcher = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  return (
    <>
      <div className="learn__switcher">
        <input
          type="checkbox"
          className="learn__switcher__input"
          id="checkbox-2"
          onClick={() => {
            console.log(123);
          }}
        />
        <label htmlFor="checkbox-2" className="text text_size_x-small"></label>
      </div>

      {/* <div>
        <lable>Checked item name : {checkedItems["check-box-1"]} </lable> <br />
        {
          checkboxes.map(item => (
            <label key={item.key}>
              {item.name}
              <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
            </label>
          ))
        }
      </div> */}
    </>
  );
};

export default Switcher;
