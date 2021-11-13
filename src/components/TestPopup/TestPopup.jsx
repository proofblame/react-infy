import React, { useEffect } from "react";
import SimpleSlider from './Slider/TestSlider';

function TestPopup({ onClose, children }) {

  return (
    <section className="popup popup_type_tree">
      <div className="tree__popup">
        <p className="tree__title tree__title_popup">
          Тест
        </p>

        {children}
        <button
          type="button"
          className="form__button form__button_type_close close"
          onClick={() => {
            onClose();
          }}
        ></button>
      </div>

    </section>
  );
}

export default TestPopup;
