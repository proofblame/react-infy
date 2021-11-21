import React from "react";

function TestPopup({ onClose, children }) {

  return (
    <section className="popup popup_type_tree">
      <div className="tree__popup">
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
