import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import copyIcon from "./images/copy-icon.svg";
import TransferPopup from "../TransferPopup/TransferPopup";
import DelegationPopup from "../DelegationPopup/DelegationPopup";
import UndelegationPopup from "../UndelegationPopup/UndelegationPopup";
import Modal from "../Modal/Modal";
import "./Wallet.css";
import Transaction from "../Transaction/Transaction";
import WalletSlider from "./Slider/Slider";
import api from "../../utils/api";
import Preloader from "../Preloader/Preloader";
import infoIcon from "./images/info-icon.svg";
import ReactTooltip from "react-tooltip";

function Wallet({
  currentUser,
  currentWallet,
  checkToken,
  currentTransactions,
  setCurentTransactions,
  pageCount,
  setPageCount,
  page,
  setPage,
  refToken,
}) {
  const [textCopy, setTextCopy] = useState("text-copy");
  const [modalActive, setModalActive] = useState({
    transferPopup: false,
    delegationPopup: false,
    undelegationPopup: false,
    preloader: false,
    info: false,
  });

  const handleUndelegateInfy = async (amountUndel) => {
    setModalActive({ ...modalActive, preloader: true });
    await refToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        await api.undelegateInfy(jwt, amountUndel);
      } catch (err) {
        console.error(err);
      } finally {
        handleClosePopup();
        checkToken();
      }
    }
  };

  const handleDelegateInfy = async (amountDel) => {
    setModalActive({ ...modalActive, preloader: true });
    await refToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        await api.delegateInfy(jwt, amountDel);
      } catch (err) {
        console.error(err);
      } finally {
        checkToken();
        handleClosePopup();
      }
    }
  };

  const handleSendInfy = async (amount, walletTo) => {
    setModalActive({ ...modalActive, preloader: true });
    await refToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        await api.sendInfy(jwt, walletTo, amount);
      } catch (err) {
        console.error(err);
      } finally {
        checkToken();
        handleClosePopup();
      }
    }
  };

  useEffect(() => {
    document.title = "Wallet";
    setModalActive({ ...modalActive, preloader: true });
    checkToken().then(() => {
      setModalActive({ ...modalActive, preloader: false });
    });
  }, [page]);

  const handleOpenPopup = (e) => {
    document.body.style.overflow = "hidden";
    const { name } = e.target;
    setModalActive({
      ...modalActive,
      [name]: true,
    });
  };
  const handleClosePopup = () => {
    document.body.style.overflow = "auto";
    setModalActive({
      ...modalActive,
      transferPopup: false,
      delegationPopup: false,
      undelegationPopup: false,
      preloader: false,
      info: false,
    });
    setPage(0);
  };

  const nextPage = () => {
    if (page >= 0 && page < pageCount - 1) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const prevPage = () => {
    if (page > 0 && page <= pageCount - 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  useEffect(() => {
    // getTansactions();
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(currentUser.wallet);
    setTextCopy("text-copy text-copy-active");

    setTimeout(() => {
      setTextCopy("text-copy");
    }, 2000);
  };

  const transactionList = currentTransactions.map((transaction, index) => (
    <Transaction
      key={index}
      transaction={transaction}
      modalActive={modalActive}
    />
  ));

  return (
    <>
      <main className="main">
        <div className="container">
          <Nav />

          <section className="main-profile profile section">
            <div className="wrapper profile__body">
              <h1 className="profile__title title">Кошелек</h1>
            </div>
          </section>
          <div className="data__contacts">
            <div className="data__contacts-block">
              <p className="text text_size_small text_color_lighter">
                Адрес кошелька
              </p>
              <div className="data__contacts-wrapper data__info-wrapper">
                <div className="data__contacts-wrapper">
                  <p
                    className="data__text text text_size_medium text_color_normal"
                    id="number-wallet"
                  >
                    {currentUser.wallet}
                  </p>
                  <div className="data__copy-button">
                    <img
                      src={copyIcon}
                      alt="Копировать адрес кошелька"
                      className="data__copy"
                      onClick={handleCopyClick}
                    />
                    <span
                      className={`text text_size_small text_color_lighter data__copy-result ${textCopy}`}
                    >
                      Скопировано
                    </span>
                  </div>
                </div>
                <button
                  className="data__info data__text text text_size_medium text_color_lighter"
                  name="info"
                  onClick={handleOpenPopup}
                >
                  Вознаграждение
                  <span className="material-icons-info">
                    <img src={infoIcon} alt="0" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <section className="cards">
            <div className="card card_one">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Основной кошелёк</p>{" "}
                  <button className="card__ref">?</button>
                </div>
                <p className="card__coins">
                  {currentWallet.balance}
                  <span className="card__coins_cents">
                    .{currentWallet.balanceAfter}
                  </span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.balanceRu} ₽`}</p>
                <p className="card__rub">32₽</p>
              </div>
              <div className="card__footer">
                <p className="card__profits"></p>
                <p className="card__subtitle"></p>
              </div>
            </div>
            <div className="card card_two">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Кошелёк стейкинга</p>{" "}
                  <button className="card__ref">?</button>
                </div>
                <p className="card__coins">
                  {currentWallet.delegateBalance}
                  <span className="card__coins_cents">
                    .{currentWallet.delegateBalanceAfter}
                  </span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.delegateBalanceRu} ₽`}</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__profits">
                  В выводе:
                  {currentWallet.sumUndelegate}
                </p>
                <p className="card__profits">
                  Вознагражд.: {currentWallet.delegateInMonth}/мес (
                  {currentWallet.delegateInDay}/день)
                </p>
                <p className="card__subtitle">
                  Монеты автоматически переводятся на основной кошелек 1 раз в
                  сутки
                </p>
              </div>
            </div>
            <div className="card card_three">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Весь портфель </p>{" "}
                  <button className="card__ref">?</button>
                </div>
                <p className="card__coins">
                  {currentWallet.sumBalance}
                  <span className="card__coins_cents">
                    .{currentWallet.sumBalanceAfter}
                  </span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.sumBalanceRu} ₽`}</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__subtitle">
                  Заработано всего: <br /> {currentWallet.sumEarned} (
                  {`${currentWallet.sumEarnedRu} ₽`})
                </p>
              </div>
            </div>
          </section>
          <section className="banner__buttons wallet__buttons">
            <div className="about__link">
              <a className="wallet__button link link_disabled">Купить INFY</a>
            </div>
            <button
              className="wallet__button link link_active open-transferPopup open"
              name="transferPopup"
              onClick={handleOpenPopup}
            >
              Перевести
            </button>
            <button
              className="wallet__button link link_active open-delegationsPopup open"
              name="delegationPopup"
              onClick={handleOpenPopup}
            >
              Отправить в стейкинг
            </button>
            <button
              className="wallet__button link link_active open-undelegatePopup open"
              name="undelegationPopup"
              type="button"
              onClick={handleOpenPopup}
            >
              Вывод из стейкинга
            </button>
          </section>
          <section className="transactions">
            <section className="main-profile profile section">
              <div className="wrapper">
                <h1 className="profile__title title">Транзакции</h1>
              </div>
            </section>

            <div className="wrapper">
              <div className="slider">
                <WalletSlider nextPage={nextPage} prevPage={prevPage}>
                  <div className="slider__item">
                    <div className="wallet__slider-item wallet__wrapper">
                      {transactionList}
                    </div>
                  </div>
                </WalletSlider>
                {/* <div className="page-count">
                  <div className="page-count__wrapper"> <span className="page-count__current">1</span><span> страница из
                  </span><span className="page-count__all">1</span> </div>
                  <div className="slider__header"> <button className="slider__button button" ></button>
                    <button className="slider__button slider__button_next button" ></button>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive.transferPopup}>
        <TransferPopup
          onClose={handleClosePopup}
          currentWallet={currentWallet}
          handleSendInfy={handleSendInfy}
        />
      </Modal>
      <Modal active={modalActive.delegationPopup}>
        <DelegationPopup
          onClose={handleClosePopup}
          currentWallet={currentWallet}
          handleDelegateInfy={handleDelegateInfy}
        />
      </Modal>
      <Modal active={modalActive.undelegationPopup}>
        <UndelegationPopup
          onClose={handleClosePopup}
          handleUndelegateInfy={handleUndelegateInfy}
          currentWallet={currentWallet}
        />
      </Modal>
      <Modal active={modalActive.preloader}>
        <Preloader />
      </Modal>
      <div
        id="modal-1"
        className={
          modalActive.info ? `modal-overlay-new active` : `modal-overlay-new`
        }
      >
        <div className={modalActive.info ? `modal-new active` : `modal-new`}>
          <header className="modal-header-new">
            <button
              type="button"
              className="close-button"
              onClick={handleClosePopup}
            ></button>
          </header>
          <div className="modal-body-new">
            <p className='text text_size_medium text_color_normal'>
              Заработок по уровням в партнерской программе при оплате тарифа (оплата тарифа составляет 490 рублей): <br />
              <br />
              1 уровень: 30% с оплаты тарифа;<br />
              2 уровень: 25% с оплаты тарифа;<br />
              3 уровень: 20% с оплаты тарифа;<br />
              4 уровень: 15% с оплаты тарифа;<br />
              5 уровень: 10% с оплаты тарифа.<br />
              <br />
              (В общей сложности все 100% от оплаты тарифов будет распределяться в качестве вознаграждений партнерской сети до 5 уровней в глубину).<br />
              Заработок по уровням в партнерской программе (награждение с делегирования приглашенных):<br />
              <br />
              Заработок по уровням:<br />
              1 уровень: 5% от делегируемой суммы;<br />
              2 уровень: 4% от делегируемой суммы;<br />
              3 уровень: 3% от делегируемой суммы;<br />
              4 уровень: 2% от делегируемой суммы;<br />
              5 уровень: 1% от делегируемой суммы.<br />
              <br />
              В общей сложности взимается только 5%, которые распределятся 1 уровню в качестве вознаграждений по партнерской программе. А вознаграждения 2, 3, 4 и 5 уровней сервис распределяет автоматически (вознаграждение от компании). <br /><br />
              Итого 15% распределятся по уровням, а 10% из них сервис начисляет автоматически за активность (% от зарегистрированных пользователей, без приглашения).

            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
