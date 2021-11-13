import React from 'react'
import sprite from "../../images/icons/icons.svg";
import './Card.scss'


const Card = ({ onClose, line, cardItem }) => {
  return (

    <section className="popup popup_type_tree">
      <div className="card__tree__popup">
        <p className="tree__title tree__title_popup">
          Линия {line}
          <span className="tree__title_category tree__title_category_popup">

          </span>
        </p>
        <p className="tree__subtitle tree__subtitle_popup"></p>
        <div className="card__tree">
          <div className="card__tree__head">
            <div className="tree__popup-img">
              <img src={sprite + "#profile-bot"} alt="" />
            </div>
            <div className="tree__popup-wrapper">
              <p className="tree__popup-name">{cardItem.username}</p>
              <p className="tree__popup-status" style={cardItem.isTariffPaid ? { color: 'green' } : { color: 'red' }}>{cardItem.isTariffPaid ? "Активирован" : "Не активирован"}</p>
            </div>
          </div>
          <div className="card__tree__main">
            <div className="card__tree__row">
              <p className="text text_size_small">
                Команда
              </p>
              <p className="text text_size_small">
                {cardItem.teamCount} (акт. {cardItem.teamCountActive})
              </p>
            </div>
            <div className="card__tree__row">
              <p className="text text_size_small">
                Монет в команде
              </p>
              <p className="text text_size_small">
                {cardItem.commandBalance}
              </p>
            </div>
            <div className="card__tree__row">
              <p className="text text_size_small">
                Делегировано командой
              </p>
              <p className="text text_size_small">
                {cardItem.commandDelegateBalance}
              </p>
            </div>
            <div className="card__tree__row">
              <p className="text text_size_small">
                Текущий статус
              </p>
              <p className="text text_size_small">{cardItem.status}</p>
            </div>
          </div>
        </div>


        <button
          type="button"
          className="form__button form__button_type_close close"
          onClick={() => {
            onClose();
          }}
        ></button>
      </div>

    </section>



  )
}

export default Card
