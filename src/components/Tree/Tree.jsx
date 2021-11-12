import React, {useState} from "react";
import "./Tree.css";
import Modal from '../Modal/Modal'
import TreePopup from '../TreePopup/TreePopup'
import auth from '../../utils/auth';
import TreeItem from '../TreeItem/TreeItem';

const Tree = ({checkToken}) => {
  const [modalActive, setModalActive] = useState(false)
  const [currentTree, setCurrentTree] = useState([]);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page >= 0) {
      setPage(page + 1)
      // getTansactions()
    } else {
      return
    }
  }

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1)
      // getTansactions()
    } else {
      return
    }
  }

  const handleGetTreeInfo = (line, size) => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getTreeInfo(jwt, line, page, size)
        .then((tree) => {
          setModalActive(true)
          setCurrentTree(tree.lines)
          console.log(currentTree)
        })
        .catch(e => console.error(e.message));
    }
  }

  const treeList = currentTree.map((treeItem, index) => (
    <TreeItem
      key={index}
      treeItem={treeItem}
    />
  ))

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
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(1, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 2 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(2, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 3 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(3, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 4 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(4, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 5 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(5, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 6 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(6, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 7 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(7, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 8 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(8, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 9 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(9, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 10 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(10, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 11 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(11, 4) }}>
            Смотреть список
          </button>
        </div>
        <div className="tree__card">
          <p className="tree__title">
            Линия 12 /
            <span className="tree__title_category">Пригашённые командой</span>
          </p>
          <p className="tree__subtitle"></p>
          <button className="tree__button wallet__button link link_active open" onClick={() => { handleGetTreeInfo(12, 4) }}>
            Смотреть список
          </button>
        </div>
      </div>
    </section>
    <Modal active={modalActive}>
      <TreePopup onClose={() => { setModalActive(false) }}>
          {treeList}
      </TreePopup>
    </Modal>
    </>
  );
};

export default Tree;
