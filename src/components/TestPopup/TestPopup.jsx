import React from "react";

function TestPopup({ onClose, children }) {

  return (
    <section className="popup popup_type_tree">
      <div className="tree__popup">
        <p className="tree__title tree__title_popup text_size_large">
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
