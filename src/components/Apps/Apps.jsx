import React from 'react'
import sprite from '../../images/icons/icons.svg';
import './Apps.css'
const Apps = () => {
  return (
    <section className="main__apps apps">
    <div className="apps__body">
      <h2 className="apps__title title">Приложение Infinity</h2>
      <p className="apps__subtitle text text_size_large"> Идеальным образцом реализации децентрализованных
        продуктов на&nbsp;Infinity Blockchain служит приложение Infinity Corporation, которое
        в&nbsp;скором времени выйдет для мобильных устройств </p>
    </div>
    <div className="apps__body-bg"></div>
    <div className="wrapper">
      <ul className="apps__list">
        <li className="apps__item">
          <h3 className="apps__list-title apps__list-title_status">Система статусов (PoA)<span
            className="apps__list-title-icons">
            <picture>
              <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
              <img src={sprite + "#mobile-icon"} alt="" />
            </picture>
            <picture>
              <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
              <img src={sprite + "#laptop-icon"} alt="" />
            </picture>
          </span></h3>
          <ul className="apps__sublist">
            <li className="apps__subitem">
              <p className="text">PoA позволяет пользователям рекомендовать продукты Infinity
                присваивая им&nbsp;статусы по&nbsp;партнерской программе и&nbsp;получать
                за&nbsp;это вознаграждения.</p>
            </li>
            <li className="apps__subitem">
              <p className="text">Также пользователь получив статус Partner, имеет возможность
                подключить свою устройство к&nbsp;Node и&nbsp;получать ежедневные
                вознаграждения.</p>
            </li>
          </ul>
        </li>

        <li className="apps__item">
          <h3 className="apps__list-title apps__list-title_delegation">Proof of Property (PoP)<span
            className="apps__list-title-icons">
            <picture>
              <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
              <img src={sprite + "#mobile-icon"} alt="" />
            </picture>
            <picture>
              <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
              <img src={sprite + "#laptop-icon"} alt="" />
            </picture>
          </span></h3>
          <ul className="apps__sublist">
            <li className="apps__subitem">
              <p className="text">Алгоритм PoP - Proof of Property (доказательство права собственности)
                был создан командой разработчиков Infinity Corporation.</p>
            </li>
            <li className="apps__subitem">
              <p className="text">В сети Infinity используется токен с уникальной структурой (ТЭГ-ТОКЕН) – это
                цифровая сущность,
                которая хранится непосредственно у пользователя в его устройстве и на кошельке (Занимает меньше 1
                кбайт).</p>
            </li>
            <li className="apps__subitem">
              <p className="text">Тэг-токен в платформе Infinity – это доказательство права собственности. Тот, кто
                обладает тэг-токеном,
                который содержит в себе доказательство права владения, тот и является законным владельцем актива.
              </p>
            </li>
          </ul>
        </li>

        <li className="apps__item">
          <h3 className="apps__list-title apps__list-title_wallet">Infinity Wallet<span
            className="apps__list-title-icons">
            <picture>
              <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
              <img src={sprite + "#mobile-icon"} alt="" />
            </picture>
            <picture>
              <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
              <img src={sprite + "#laptop-icon"} alt="" />
            </picture>
            <picture>
              <source srcSet={sprite + "#browser-icon"} type="image/webp" /><img
                src={sprite + "#browser-icon"} alt="" />
            </picture>
          </span></h3>
          <ul className="apps__sublist">
            <li className="apps__subitem">
              <p className="text">Удобное хранение INFY и&nbsp;мониторинг динамики портфеля</p>
            </li>
            <li className="apps__subitem">
              <p className="text">Стейкинг INFY</p>
            </li>
            <li className="apps__subitem">
              <p className="text">Быстрые переводы INFY с&nbsp;минимальной комиссией (0,3%,
                макс.&nbsp;25&nbsp;INFY) </p>
            </li>
          </ul>
        </li>
        <li className="apps__item">
          <h3 className="apps__list-title apps__list-title_delegation">Стейкинг (DPoS)<span
            className="apps__list-title-icons">
            <picture>
              <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
              <img src={sprite + "#mobile-icon"} alt="" />
            </picture>
            <picture>
              <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
              <img src={sprite + "#laptop-icon"} alt="" />
            </picture>
          </span></h3>
          <ul className="apps__sublist">
            <li className="apps__subitem">
              <p className="text">Протокол DPoS позволяет пользователям учавствовать
                в&nbsp;эмиссии новых монет. Во время отправки монет INFY на делегирование,
                пользователь просто переводит их с основного кошелька на кошелек делегирования,
                тем самым поддерживая ликвидность монет на рынке.</p>
            </li>
          </ul>
        </li>

      </ul>
    </div>
    <section className="main__profile profile">
      <h1 className="profile__title title">Первые продукты</h1>
      <section className="banner__buttons wallet__buttons tarif__buttons">
        <div className="tarif__card">
          <p className="text text_size_normal tarif__text tarif__text_type_email"> Безопасная
            электронная почта </p>
        </div>
        <div className="tarif__card">
          <p className="text text_size_normal tarif__text tarif__text_type_browser"> Защищённый
            браузер </p>
        </div>
        <div className="tarif__card">
          <p className="text text_size_normal tarif__text tarif__text_type_messager"> Инкогнито
            мессенджер </p>
        </div>
      </section>
      <p className="text text_size_large" style={{ textAlign: "center" }}>Скачать приложение можно в личном
        кабинете, оплатив тариф.</p>
    </section>
  </section>
  )
}

export default Apps
