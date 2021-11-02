import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import copyIcon from '../../images/copy-icon.png'
import TransferPopup from '../TransferPopup/TransferPopup'
import DelegationPopup from '../DelegationPopup/DelegationPopup'
import UndelegationPopup from '../UndelegationPopup/UndelegationPopup'
import Modal from '../Modal/Modal'
import './Wallet.css'



function Wallet() {
  const [textCopy, setTextCopy] = useState('')
  const [modalActive, setModalActive] = useState({
    transferPopup: false,
    delegationPopup: false,
    undelegationPopup: false
  })
  // const [transferPopupActive, setTransferPopupActive] = useState(false)
  // const [delegationPopupActive, setDelegationPopupActive] = useState(false)
  // const [undelegationPopupActive, setUndelegationPopupActive] = useState(false)

  // const openTranferPopup = () => {
  //   setModalActive(true)
  //   setTransferPopupActive(!transferPopupActive)
  // }
  // const openDelegationPopup = () => {
  //   setModalActive(true)
  //   setDelegationPopupActive(!delegationPopupActive)
  // }
  // const openUndelegationPopup = () => {
  //   setModalActive(true)
  //   setUndelegationPopupActive(!undelegationPopupActive)
  // }
  // const closeAllPopups = () => {
  //   setModalActive(false)
  //   setTransferPopupActive(false)
  //   setDelegationPopupActive(false)
  //   setUndelegationPopupActive(false)
  // }


  const handleCopyClick = () => {
    navigator.clipboard.writeText("nickname");
    setTextCopy('Текст скопирован')
    setTimeout(() => {
      setTextCopy('')
    }, 2000);
  }
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
                <p className="data__text text text_size_medium text_color_normal" id="number-wallet">wallet</p>
                <img src={copyIcon} alt="Копировать адрес кошелька" className="data__copy" onClick={handleCopyClick} />
                <span className="text text_size_small text_color_lighter data__copy-result">{textCopy}</span>
              </div>
            </div>
          </div>

          <section className="cards">
            <div className="card card_one">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Основной кошелёк</p> <button className="card__ref">?</button>
                </div>
                <p className="card__coins">balance<span className="card__coins_cents">.balanceAfter</span></p>
                <p className="card__coins card__coins_cents">balanceRu₽</p>
                <p className="card__rub">20₽</p>
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
                <p className="card__coins">balanceDel<span className="card__coins_cents">.balanceDelAfter</span></p>
                <p className="card__coins card__coins_cents">balanceDelRu₽</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__profits">В выводе:
                  #sumUndelsumUndel/sumUndel^sumUndel0.0/sumUndel</p>
                <p className="card__profits">Вознагражд.: inMonth/мес (inDay/день)</p>
                <p className="card__subtitle">Монеты автоматически переводятся на основной кошелек 1 раз в сутки</p>
              </div>
            </div>
            <div className="card card_three">
              <div className="card__body">
                <div className="card__title-wrapper">
                  <p className="card__title">Весь портфель </p> <button className="card__ref">?</button>
                </div>
                <p className="card__coins">0.<span className="card__coins_cents">000000</span></p>
                <p className="card__coins card__coins_cents">0.00</p>
                <p className="card__coins card__coins_curse"></p>
              </div>
              <div className="card__footer">
                <p className="card__profits">Суточная динамика портфеля: 0%</p>
                <p className="card__subtitle">Заработано всего: <br /> 0.000</p>
              </div>
            </div>
          </section>
          <section className="banner__buttons wallet__buttons"> 
          <span className="wallet__button link link_active open-transferPopup open" onClick={() => setModalActive({...modalActive, transferPopup: true})}>Перевести</span> <span
              className="wallet__button link link_active open-delegationsPopup open" onClick={() => setModalActive({...modalActive, delegationPopup: true})}>Отправить в стейкинг</span> <span
                className="wallet__button link link_active open-undelegatePopup open" onClick={() => setModalActive({...modalActive, undelegationPopup: true})}>Вывод из стейкинга</span>
          </section>
          <section className="transactions">
            <section className="main-profile profile section">
              <div className="wrapper">
                <h1 className="profile__title title">Транзакции</h1>
              </div>
            </section>

            <div className="wrapper">
              <div className="slider">
                <div className="slider__item">
                  <div className="wallet__slider-item"> 
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  </div>
                  <div className="wallet__slider-item"> 
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  </div>
                  <div className="wallet__slider-item"> 
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  </div>
                  <div className="wallet__slider-item"> 
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  <div className="wallet__slider-body">
                    <div className="wallet__slider-wrapper">
                      <p className="wallet__slider-title">type</p>
                      <p className="wallet__slider-date">date</p>
                    </div>
                    <p className="wallet__slider-count">amount</p>
                  </div>
                  </div>

                </div>
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
    <TransferPopup onClose={() => {setModalActive({...modalActive, transferPopup: false})}}/>
    </Modal>
    <Modal active={modalActive.delegationPopup}>
    <DelegationPopup onClose={() => {setModalActive({...modalActive, delegationPopup: false})}}/>
    </Modal>
    <Modal active={modalActive.undelegationPopup}>
    <UndelegationPopup onClose={() => {setModalActive({...modalActive, undelegationPopup: false})}}/>
    </Modal>
    </>
  )
}

export default Wallet
