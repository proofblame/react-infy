import React from 'react'
import sprite from '../../images/icons/icons.svg';
import telegramIcon from './images/telegramIcon.svg'
import './Banner.css';

const Banner = () => {
  return (
    <section className="main__banner banner">
      <div className="banner__wrapper banner__wrapper_type_two-columns">
        <div className="wrapper">
          <h1 className="banner__title title"> <span className="title_color_violet">Infinity</span> - бесконечность, наше название отражает весь посыл компании. Нет предела совершенству.</h1>
          <div className="wrapper">
            <div className="image image_type_mobile">
              <picture>
                <source srcSet={sprite + "#banner-image"} type="image/webp" />
                <img src={sprite + "#banner-image"}
                  alt="" />
              </picture>
            </div>
            <p className="text text_type_subtitle image_type_mobile">Основные направления компании: производство It продуктов, сайтов любой сложности, software, мобильные приложения, решения для b2b/b2c сектора. А также продукты развлекательного контента, маркетинговые и рекламные услуги на платной основе.</p>
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
            <a href="https://t.me/+AgachQvHWCM3MzZi">
              <div className="image image_type_telegram">
                <picture>
                  <source srcSet={telegramIcon} type="image/webp" />
                  <img src={telegramIcon} alt="Telegram icon" />
                </picture>
              </div>
            </a>
            <a href="https://t.me/+AgachQvHWCM3MzZi">
              <p className="banner__subtext text text_size_small">
                Наш общий чат в Telegram Infinity Corporation
              </p>
            </a>
          </div>
          <div className="banner__subscribe">
            <a href="https://t.me/infinitycorporationchannel">
              <div className="image image_type_telegram">
                <picture>
                  <source srcSet={telegramIcon} type="image/webp" />
                  <img src={telegramIcon} alt="Telegram icon" />
                </picture>
              </div>
            </a>
            <a href="https://t.me/infinitycorporationchannel">
              <p className="banner__subtext text text_size_small">
                Наш новостной Telegram-канал Infinity Corporation
              </p>
            </a>
          </div>
          {/* <div className="banner__subscribe">
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
          </div> */}
          <div className="banner__subscribe">
            <a href="https://t.me/orcaeyes_bot">
              <div className="image image_type_telegram">
                <picture>
                  <source srcSet={telegramIcon} type="image/webp" />
                  <img src={telegramIcon} alt="Telegram icon" />
                </picture>
              </div>
            </a>
            <a href="https://t.me/orcaeyes_bot">
              <p className="banner__subtext text text_size_small">
                Индивидуальный менеджмент вашего портфеля Orca.Eyes
              </p>
            </a>
          </div>
          <div className="banner__subscribe">
            <a href="https://t.me/manager_travel_club">
              <div className="image image_type_telegram">
                <picture>
                  <source srcSet={telegramIcon} type="image/webp" />
                  <img src={telegramIcon} alt="Telegram icon" />
                </picture>
              </div>
            </a>
            <a href="https://t.me/manager_travel_club">
              <p className="banner__subtext text text_size_small">
                Infinity Travel Club
              </p>
            </a>
          </div>









        </div>
        <div className="wrapper">
          <div className="image image_type_desktop">
            <picture>
              <source srcSet={sprite + "#banner-image"} type="image/webp" /><img
                src={sprite + "#banner-image"}
                alt="" />
            </picture>
          </div>
          <p className="text text_type_subtitle image_type_desktop">Основные направления компании: производство It продуктов, сайтов любой сложности, software, мобильные приложения, решения для b2b/b2c сектора. А также продукты развлекательного контента, маркетинговые и рекламные услуги на платной основе.</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
