import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import sprite from "../../images/icons/icons.svg";
import copyIcon from './images/copy-icon.svg';
import "./Profile.css";
import telegramIcon from "./images/telegramIcon.svg";


function Profile({ currentUser }) {
  useEffect(() => {
    document.title = "Profile"
  }, []);
  const [textCopy, setTextCopy] = useState("text-copy");

  const handleCopyClick = () => {
    // navigator.clipboard.writeText(`${window.location.origin}/registration?joinedBy=${currentUser.nickname}`);
    navigator.clipboard.writeText(`${window.location.origin}/registration?joinedBy=${encodeURIComponent((currentUser.nickname).replace(/%20/g, "+"))}`);
    setTextCopy("text-copy text-copy-active");
    console.log(window.location)

    setTimeout(() => {
      setTextCopy("text-copy");
    }, 2000);
  };
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
                      <source
                        srcSet={sprite + "#profile-bot"}
                        type="image/webp"
                      />
                      <img src={sprite + "#profile-bot"} alt="Avatar" />
                    </picture>
                    <button className="data__edit-avatar-button"></button>
                  </div>
                  <div className="data__contacts">
                    <div className="data__contacts-body">
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">
                          Аплайнер
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          {currentUser.joinedBy}
                        </p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">
                          Никнейм
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          {currentUser.nickname}
                        </p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">
                          Статус
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          {currentUser.status}
                        </p>
                      </div>
                      <div
                        className="data__contacts-block"
                        style={{ display: "none" }}
                      >
                        <p className="text text_size_small text_color_lighter">
                          Следующий статус
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          {currentUser.status}
                        </p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">
                          Электронная почта
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          {currentUser.email}
                        </p>
                      </div>
                      <div className="data__contacts-block">
                        <p className="text text_size_small text_color_lighter">
                          Telegram
                        </p>
                        <p className="data__text text text_size_medium text_color_normal">
                          t.me/{currentUser.telegram}
                        </p>
                      </div>
                      {/* <div className="data__contacts-block data__contacts-block_desktop">
                        <p className="text text_size_small text_color_lighter">
                          Отправка уведомлений
                        </p>
                        <div className="switch">

                          <input
                            type="checkbox"
                            className="ios8-switch"
                            id="checkbox-1"
                          />
                          <label
                            htmlFor="checkbox-1"
                            className="text text_size_x-small"
                          >

                            Разрешить отправку уведомлений на E-Mail
                          </label>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="data__contacts-block data__contacts-block_mobile">
                  <p className="text text_size_small text_color_lighter">
                    Отправка уведомлений
                  </p>
                  <div className="switch">

                    <input
                      type="checkbox"
                      className="ios8-switch"
                      id="checkbox-1"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="text text_size_x-small"
                    >

                      Разрешить отправку уведомлений на E-Mail
                    </label>
                  </div>
                </div>
                <div className="data__contacts">
                  <div className="data__contacts-block">
                    <div className="banner__subscribe">
                      <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link">
                        <div className="image image_type_telegram">
                          <picture>
                            <source
                              srcSet={sprite + "#instagram-icon"}
                              type="image/webp"
                            />
                            <img
                              src={sprite + "#instagram-icon"}
                              alt="Instagram icon"
                            />
                          </picture>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/infinity.blockchain.official/?utm_medium=copy_link">
                        <p className="banner__subtext text text_size_small">
                          Наш официальный instagram
                        </p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/joinchat/wwwWBc4QguIzMGUy">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" />
                            <img src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>
                      </a>
                      <a href="https://t.me/joinchat/wwwWBc4QguIzMGUy">
                        <p className="banner__subtext text text_size_small">
                          Наш общий чат в Telegram Infinity Corporation
                        </p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/infinitynetworkchannel">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" />
                            <img src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>
                      </a>
                      <a href="https://t.me/infinitynetworkchannel">
                        <p className="banner__subtext text text_size_small">

                          Наш новостной Telegram-канал Infinity Corporation
                        </p>
                      </a>
                    </div>
                    <div className="banner__subscribe">
                      <a href="https://t.me/infy_official_exchange_bot">
                        <div className="image image_type_telegram">
                          <picture>
                            <source srcSet={telegramIcon} type="image/webp" />
                            <img src={telegramIcon} alt="Telegram icon" />
                          </picture>
                        </div>
                      </a>
                      <a href="https://t.me/infy_official_exchange_bot">
                        <p className="banner__subtext text text_size_small">

                          Наш официальный чат-бот обменник
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="data__contacts-block">
                    <div className="data__contacts-wrapper">
                      <p className="text text_size_small text_color_lighter">
                        Пригласительная ссылка
                      </p>

                      <img
                        src={copyIcon}
                        alt="Копировать пригласительную ссылку"
                        className="data__copy"
                        onClick={handleCopyClick}
                      />
                      <span className={`text text_size_small text_color_lighter data__copy-result ${textCopy}`}>
                        Скопировано
                      </span>
                    </div>
                    <p
                      id="guest-link"
                      className="data__text text text_size_medium text_color_normal"
                    >
                      {currentUser.nickname === undefined ? '' : (
                        `${window.location.origin}/registration?joinedBy=${encodeURIComponent((currentUser.nickname).replace(/%20/g, "+"))}`
                      )}

                    </p>
                  </div>
                  <div className="profile__buttons">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Profile;
