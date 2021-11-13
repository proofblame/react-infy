import React from 'react'
import sprite from '../../images/icons/icons.svg';
import telegramIcon from './images/telegramIcon.svg'
import './Banner.css';

const Banner = () => {
  return (
    <section className="main__banner banner">
      <div className="banner__wrapper banner__wrapper_type_two-columns">
        <div className="wrapper">
          <h1 className="banner__title title"> <span className="title_color_violet">Infinity
            Corporation</span>&nbsp;&mdash; персональные данные пользователей должны быть в руках пользователей!
          </h1>

          <div className="wrapper">
            <div className="image image_type_mobile">
              <picture>
                <source srcSet={sprite + "#banner-image"} type="image/webp" />
                <img src={sprite + "#banner-image"}
                  alt="Делегируй монеты со своего устройства и начни зарабатывать уже через 24 часа!" />
              </picture>
            </div>
            <p className="text text_type_subtitle image_type_mobile"> Производство децентрализированных&nbsp;It
              продуктов,
              нацеленные на защиту персональных данных пользователей в сети интернет.</p>
          </div>
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
        <div className="wrapper">
          <div className="image image_type_desktop">
            <picture>
              <source srcSet={sprite + "#banner-image"} type="image/webp" /><img
                src={sprite + "#banner-image"}
                alt="Делегируй монеты со своего устройства и начни зарабатывать уже через 24 часа!" />
            </picture>
          </div>
          <p className="text text_type_subtitle image_type_desktop">Производство децентрализированных&nbsp;It продуктов,
            нацеленные на защиту персональных данных пользователей в сети интернет.</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
