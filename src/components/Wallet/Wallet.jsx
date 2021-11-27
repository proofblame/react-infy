import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import copyIcon from './images/copy-icon.svg';
import TransferPopup from '../TransferPopup/TransferPopup'
import DelegationPopup from '../DelegationPopup/DelegationPopup'
import UndelegationPopup from '../UndelegationPopup/UndelegationPopup'
import Modal from '../Modal/Modal'
import './Wallet.css'
import Transaction from '../Transaction/Transaction';
import WalletSlider from './Slider/Slider';
import { undelegateInfy, delegateInfy, sendInfy, getTransactionsInfo } from '../../utils/api'


function Wallet({ currentUser, currentWallet, checkToken }) {
  useEffect(() => {

    document.title = "Wallet"
  }, []);

  const [textCopy, setTextCopy] = useState("text-copy");
  const [modalActive, setModalActive] = useState({
    transferPopup: false,
    delegationPopup: false,
    undelegationPopup: false
  })
  const [currentTransactions, setCurentTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const handleUndelegateInfy = async (amountUndel) => {
    await checkToken();
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      try {
        await undelegateInfy(jwt, amountUndel)
        setModalActive({ ...modalActive, undelegationPopup: false });
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleDelegateInfy = async (amountDel) => {
    await checkToken();
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      try {
        await delegateInfy(jwt, amountDel)
        setModalActive({ ...modalActive, delegationPopup: false })
      } catch (err) {
        console.error(err);
      }
    }
  }

  const handleSendInfy = async (amount, walletTo,) => {
    await checkToken();
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      try {
        await sendInfy(jwt, walletTo, amount)
        setModalActive({ ...modalActive, transferPopup: false })
      } catch (err) {
        console.error(err);
      }
    }
  }

  const getTansactions = async () => {
    await checkToken();
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      try {
        const transactions = await getTransactionsInfo(jwt, page, 8)
        setCurentTransactions(transactions.histories);
        setPageCount(transactions.pageCount);
      } catch (err) {
        console.error(err);
      }
    }
  }

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
    getTansactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, modalActive])




  const handleCopyClick = () => {
    navigator.clipboard.writeText(currentUser.wallet);
    setTextCopy("text-copy text-copy-active");

    setTimeout(() => {
      setTextCopy("text-copy");
    }, 2000);
  }

  const transactionList = currentTransactions.map((transaction, index) => (
    <Transaction
      key={index}
      transaction={transaction}
      modalActive={modalActive}
    />
  ))


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
              <p className="text text_size_small text_color_lighter">Адрес кошелька</p>
              <div className="data__contacts-wrapper">
                <p className="data__text text text_size_medium text_color_normal" id="number-wallet">{currentUser.wallet}</p>
                <div className="data__copy-button">
                  <img src={copyIcon} alt="Копировать адрес кошелька" className="data__copy" onClick={handleCopyClick} />
                  <span className={`text text_size_small text_color_lighter data__copy-result ${textCopy}`}>
                    Скопировано
                  </span>
                </div>
              </div>
            </div>
          </div>

          <section className="cards">
            <div className="card card_one">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Основной кошелёк</p> <button className="card__ref">?</button>
                </div>
                <p className="card__coins">{currentWallet.balance}
                  <span className="card__coins_cents">.{currentWallet.balanceAfter}</span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.balanceRu} ₽`}</p>
                <p className="card__rub">28₽</p>
              </div>
              <div className="card__footer">
                <p className="card__profits"></p>
                <p className="card__subtitle"></p>
              </div>
            </div>
            <div className="card card_two">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Кошелёк стейкинга</p> <button className="card__ref">?</button>
                </div>
                <p className="card__coins">{currentWallet.delegateBalance}
                  <span className="card__coins_cents">.{currentWallet.delegateBalanceAfter}</span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.delegateBalanceRu} ₽`}</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__profits">В выводе:
                  {currentWallet.sumUndelegate}</p>
                <p className="card__profits">Вознагражд.: {currentWallet.delegateInMonth}/мес ({currentWallet.delegateInDay}/день)</p>
                <p className="card__subtitle">Монеты автоматически переводятся на основной кошелек 1 раз в сутки</p>
              </div>
            </div>
            <div className="card card_three">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Весь портфель </p> <button className="card__ref">?</button>
                </div>
                <p className="card__coins">{currentWallet.sumBalance}
                  <span className="card__coins_cents">.{currentWallet.sumBalanceAfter}</span>
                </p>
                <p className="card__coins card__coins_cents">{`${currentWallet.sumBalanceRu} ₽`}</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__subtitle">Заработано всего: <br /> {currentWallet.sumEarned} ({`${currentWallet.sumEarnedRu} ₽`})</p>
              </div>
            </div>
          </section>
          <section className="banner__buttons wallet__buttons">
            <span className="wallet__button link link_active open-transferPopup open" onClick={() => setModalActive({ ...modalActive, transferPopup: true })}>Перевести</span> <span
              className="wallet__button link link_active open-delegationsPopup open" onClick={() => setModalActive({ ...modalActive, delegationPopup: true })}>Отправить в стейкинг</span> <span
                className="wallet__button link link_active open-undelegatePopup open" onClick={() => setModalActive({ ...modalActive, undelegationPopup: true })}>Вывод из стейкинга</span>
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
        </div >
      </main >
      <Modal active={modalActive.transferPopup}>
        <TransferPopup
          onClose={() => { setModalActive({ ...modalActive, transferPopup: false }) }}
          currentWallet={currentWallet}
          handleSendInfy={handleSendInfy}
        />
      </Modal>
      <Modal active={modalActive.delegationPopup}>
        <DelegationPopup
          onClose={() => { setModalActive({ ...modalActive, delegationPopup: false }) }}
          currentWallet={currentWallet}
          handleDelegateInfy={handleDelegateInfy}
        />
      </Modal>
      <Modal active={modalActive.undelegationPopup}>
        <UndelegationPopup onClose={() => { setModalActive({ ...modalActive, undelegationPopup: false }) }}
          handleUndelegateInfy={handleUndelegateInfy}
          currentWallet={currentWallet}
        />
      </Modal>
    </>
  )
}

export default Wallet
