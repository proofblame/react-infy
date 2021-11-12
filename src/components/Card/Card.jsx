import React from 'react'
import sprite from "../../images/icons/icons.svg";
import './Card.scss'
import {
  Link
} from "react-router-dom";

const Card = ({ onClose, line, cardItem }) => {
  return (

    <section className="popup popup_type_tree">
      <div className="card__tree__popup">
        <p className="tree__title tree__title_popup">
          Линия {line}
          <span className="tree__title_category tree__title_category_popup">

          </span>
        </p>
        <p className="tree__subtitle tree__subtitle_popup">Линия закрыта</p>
        <div className="card__tree">
          <div className="card__tree__head">
            <div className="tree__popup-img">
              <img src={sprite + "#profile-bot"} alt="" />
            </div>
          <div className="tree__popup-wrapper">
            <p className="tree__popup-name">{cardItem.username}</p>
            <p className="tree__popup-status">{cardItem.isTariffPaid ? "Активирован" : "Не активирован"}</p>
          </div>
          </div>
          <div className="card__tree__main">
            <div className="card__tree__row">
              <p className="text text_size_small">
                Команда
              </p>
              <p  className="text text_size_small">
              {cardItem.teamCount} (акт. {cardItem.teamCountActive})
              </p>
            </div>
            <div className="card__tree__row">
              <p  className="text text_size_small">
                Монет в команде
              </p>
              <Link to="/wallet" className="link link_active card__tree__link card__tree__link_active">показать</Link>
            </div>
            <div className="card__tree__row">
              <p  className="text text_size_small">
              Делегировано командой
              </p>
              <Link to="/wallet" className="link card__tree__link">показать</Link>
            </div>
            <div className="card__tree__row">
              <p  className="text text_size_small">
              Текущий статус
              </p>
              <p  className="text text_size_small">{cardItem.status}</p>
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
