import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import SeedPopup from '../SeedPopup/SeedPopup'
import sprite from '../../images/icons/icons.svg'
import copyIcon from '../../images/copy-icon.png'
import Modal from '../Modal/Modal'
import './Profile.css'
import telegramIcon from './images/telegramIcon.svg'

function Profile() {
  const [textCopy, setTextCopy] = useState('')
  const [modalActive, setModalActive] = useState(false)


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
          <section className="main__profile profile">
            <div className="profile__body">
              <h1 className="profile__title title">Профиль</h1>
              <div className="profile__data data">
                <div className="data__user">
                  <div className="data__avatar">
                    <picture>
                      <source srcSet={sprite + "#profile-bot"} type="image/webp" /><img
                        src={sprite + "#profile-bot"} alt="Avatar" />
                    </picture> <button className="data__edit-avatar-button"></button>
                  </div>
                  <div className="data__contacts">
                    <div className="data__contacts-body">
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">Аплайнер</p>
                        <p className="data__text text text_size_medium text_color_normal">Аплайнер</p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">Никнейм</p>
                        <p className="data__text text text_size_medium text_color_normal">Никнейм</p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">Статус</p>
                        <p className="data__text text text_size_medium text_color_normal">Статус</p>
                      </div>
                      <div className="data__contacts-block" style={{ display: "none" }}>
                        <p className="text text_size_small text_color_lighter">Следующий статус</p>
                        <p className="data__text text text_size_medium text_color_normal">sonya</p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">Электронная почта</p>
                        <p className="data__text text text_size_medium text_color_normal">почта</p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">Telegram</p>
                        <p className="data__text text text_size_medium text_color_normal">t.me/Telegram
                        </p>
                      </div>
                      <div className="data__contacts-block data__contacts-block_desktop">
                        <p className="text text_size_small text_color_lighter">Отправка уведомлений</p>
                        <div className="switch"> <input type='checkbox' className='ios8-switch' id='checkbox-1' />
                          <label htmlFor='checkbox-1' className="text text_size_x-small"> Разрешить отправку
                            уведомлений на E-Mail</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data__contacts-block data__contacts-block_mobile">
                  <p className="text text_size_small text_color_lighter">Отправка уведомлений</p>
                  <div className="switch"> <input type='checkbox' className='ios8-switch' id='checkbox-1' /> <label htmlFor='checkbox-1'
                    className="text text_size_x-small"> Разрешить отправку уведомлений на
                    E-Mail</label> </div>
                </div>
                <div className="data__contacts">
                  <div className="data__contacts-block">
                    <div className="banner__subscribe">
                      <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={sprite + "#instagram-icon"} type="image/webp" /><img
                              src={sprite + "#instagram-icon"} alt="Instagram icon" />
                          </picture>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link">
                        <p className="banner__subtext text text_size_small">Наш официальный instagram</p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/joinchat/wwwWBc4QguIzMGUy">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" /><img
                              src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>

                      </a>
                      <a href="https://t.me/joinchat/wwwWBc4QguIzMGUy">
                        <p className="banner__subtext text text_size_small">Наш общий чат в Telegram Infinity Corporation</p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/infinitynetworkchannel">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" /><img
                              src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>

                      </a>
                      <a href="https://t.me/infinitynetworkchannel">
                        <p className="banner__subtext text text_size_small"> Наш новостной Telegram-канал
                          Infinity Corporation </p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/infy_official_exchange_bot">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" /><img
                              src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>
                      </a>
                      <a href="https://t.me/infy_official_exchange_bot">
                        <p className="banner__subtext text text_size_small"> Наш официальный чат-бот обменник </p>
                      </a>
                    </div>

                  </div>
                  <div className="data__contacts-block">
                    <div className="data__contacts-wrapper">
                      <p className="text text_size_small text_color_lighter">Пригласительная ссылка</p>

                      <img src={copyIcon} alt="Копироватть пригласительную ссылку" className="data__copy" onClick={handleCopyClick} />
                      <span className="text text_size_small text_color_lighter data__copy-result">{textCopy}</span>
                    </div>
                    <p id="guest-link" className="data__text text text_size_medium text_color_normal">https://infinity-network.io/j/nickname</p>
                  </div>
                  <div className="profile__buttons">
                    <span className="profile__button link link_active">Редактировать</span>
                    <span className="profile__button link link_active" onClick={() => { setModalActive(true) }}>Получить Seed фразу</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <SeedPopup onClose={() => { setModalActive(false) }} />
      </Modal>
    </>
  )
}

export default Profile
