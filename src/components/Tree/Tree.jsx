import React, { useState, useEffect } from "react";
import "./Tree.css";
import Modal from '../Modal/Modal'
import TreePopup from '../TreePopup/TreePopup'
import auth from '../../utils/auth';
import TreeItem from '../TreeItem/TreeItem';
import Card from '../Card/Card';

const Tree = () => {
  const [modalActive, setModalActive] = useState({
    treePopup: false,
    cardPopup: false,
  })
  const [currentTree, setCurrentTree] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [line, setLine] = useState(null);
  const [cardItem, setCardItem ]= useState({});




  const nextPage = () => {
    if (page >= 0 && page < pageCount - 1) {
      setPage(page + 1)
    } else {
      setPage(page)
    }
  }

  const prevPage = () => {
    if (page > 0 && page <= pageCount - 1) {
      setPage(page - 1)

    } else {
      setPage(page)
    }
  }

  useEffect(() => {
    handleGetTreeInfo();
  }, [line, page])

  const handleGetTreeInfo = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getTreeInfo(jwt, line, page, 4)
        .then((tree) => {
          setModalActive({ ...modalActive, treePopup: true })
          setCurrentTree(tree.lines)
          setPageCount(tree.pagesCount)
        })
        .catch(e => console.error(e.message));
    }
  }

  const handleOpenPopup = (line) => {
    setLine(line)
  }

  const handleClosePopup = () => {
    setModalActive({ ...modalActive, treePopup: false })
    setLine(null)
    setPage(0)
    setPageCount(0)
  }

  const handleCardPopup = (treeItem) => {
    setModalActive({ ...modalActive, cardPopup: true })
    setCardItem(treeItem.teamInfo)
  }

  const handleCloseCardPopup = () => {
    setModalActive({ ...modalActive, cardPopup: false })
  }

  const treeList = currentTree.map((treeItem, index) => (
      <TreeItem
        key={index}
        treeItem={treeItem}
        onClick={() => handleCardPopup(treeItem)}
      />
  ))

  return (
    <>
      <section className="tree">
        <div className="tree__cards">
          <div className="tree__card">
            <p className="tree__title">
              Линия 1 /
              <span className="tree__title_category"> Вы пригласили</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => { handleOpenPopup(1); }}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 2 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(2)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 3 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(3)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 4 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(4)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 5 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(5)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 6 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(6)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 7 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(7)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 8 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(8)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 9 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(9)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 10 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(10)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 11 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(11)}>
              Смотреть список
            </button>
          </div>
          <div className="tree__card">
            <p className="tree__title">
              Линия 12 /
              <span className="tree__title_category"> Пригашённые командой</span>
            </p>
            <p className="tree__subtitle"></p>
            <button className="tree__button wallet__button link link_active open" onClick={() => handleOpenPopup(12)}>
              Смотреть список
            </button>
          </div>
        </div>
      </section>
      <Modal active={modalActive.treePopup}>
        <TreePopup
          onClose={handleClosePopup}
          line={line}
          page={page}
          prevPage={prevPage}
          nextPage={nextPage}
          handleGetTreeInfo={handleGetTreeInfo}
        >
          {treeList}
        </TreePopup>
      </Modal>
      <Modal active={modalActive.cardPopup} className="card__modal">
        <Card
        onClose={handleCloseCardPopup}
        cardItem={cardItem}
        line={line}
    
        />
      </Modal>
    </>
  );
};

export default Tree;
