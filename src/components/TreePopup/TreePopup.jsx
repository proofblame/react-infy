import React from 'react'

function TreePopup() {
  return (
    <section className="popup popup_type_tree modal-frame" id="1">
      <div className="container popup__container modal">
        <div className="tree__popup modal-body">
          <p className="tree__title tree__title_popup">Линия 1 </p> <button type="button"
            className="form__button form__button_type_close close"></button>
          <div className="slider slider-tree">
            #items1
            <div className="slider__item item">
              <div className="tree__popup-list"> #joinedBy1
              </div>
            </div> items1 <div className="slider__header"> <button className="slider__button button"
            ></button> <button className="slider__button slider__button_next button"
            ></button> </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreePopup
