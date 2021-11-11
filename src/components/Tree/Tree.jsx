import React, {useState} from "react";
import "./Tree.css";
import Modal from '../Modal/Modal'
import TreePopup from '../TreePopup/TreePopup'

const Tree = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
    <section className="tree">
      <div className="tree__cards">
        <div className="tree__card">
          <p className="tree__title">
            Линия 1 /
            <span className="tree__title_category">Вы пригласили</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { setModalActive(true) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 2 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 3 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 4 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 5 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 6 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 7 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 8 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 9 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 10 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 11 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 12 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open">
            Смотреть список
          </button>
        </div>
      </div>
    </section>
    <Modal active={modalActive}>
      <TreePopup onClose={() => { setModalActive(false) }}>

      </TreePopup>
    </Modal>
    </>
  );
};

export default Tree;
