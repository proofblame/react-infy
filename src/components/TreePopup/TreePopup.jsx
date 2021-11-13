import React from "react";
import SimpleSlider from './Slider/TreeSlider';

function TreePopup({ onClose, children, line, nextPage, prevPage }) {

  return (
    <section className="popup popup_type_tree">
      <div className="tree__popup">
        <p className="tree__title tree__title_popup">
          Линия {line}
          <span className="tree__title_category tree__title_category_popup">

          </span>
        </p>
        <p className="tree__subtitle tree__subtitle_popup"></p>


        <SimpleSlider nextPage={nextPage} prevPage={prevPage}>
          <li className="slider__item">
            <ul className="slider__tree-sublist">
              {children}
            </ul>
          </li>
        </SimpleSlider>


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

export default TreePopup;
