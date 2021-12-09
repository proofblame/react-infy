import React from 'react'
import sprite from '../../images/icons/icons.svg';
import './Apps.css'
const Apps = () => {
  return (
    <section className="main__apps apps">
      <div className="apps__body">
        <h2 className="apps__title title">Запланированные разработки</h2>
        <p className="apps__subtitle text text_size_large"></p>
      </div>
      <div className="apps__body-bg"></div>
      <div className="wrapper">
        <ul className="apps__list">
          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_status">Meta-вселенная Infinity.<span
              className="apps__list-title-icons">
              {/* <picture>
                <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
                <img src={sprite + "#mobile-icon"} alt="" />
              </picture>
              <picture>
                <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
                <img src={sprite + "#laptop-icon"} alt="" />
              </picture> */}
            </span></h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Полноценная цифровая вселенная для экосистемы.</p>
              </li>
              {/* <li className="apps__subitem">
                <p className="text">Также пользователь получив статус Partner, имеет возможность
                  подключить свою устройство к&nbsp;Node и&nbsp;получать ежедневные
                  вознаграждения.</p>
              </li> */}
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">«Game Hall»<span
              className="apps__list-title-icons">
              {/* <picture>
                <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
                <img src={sprite + "#mobile-icon"} alt="" />
              </picture>
              <picture>
                <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
                <img src={sprite + "#laptop-icon"} alt="" />
              </picture> */}
            </span></h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Специально для экосистемы Meta-вселенной Infinity будет разработан «Game Hall», где мы представим игры разного контента для досуга и повышения умственных навыков. </p>
              </li>
              <li className="apps__subitem">
                <p className="text">В играх можно повышать Upgrade путем ВЦМ INFY.</p>
              </li>
              {/* <li className="apps__subitem">
                <p className="text">Тэг-токен в платформе Infinity – это доказательство права собственности. Тот, кто
                  обладает тэг-токеном,
                  который содержит в себе доказательство права владения, тот и является законным владельцем актива.
                </p>
              </li> */}
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_wallet">Infinity venture Fund
              {/* <span
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
            </span> */}
            </h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Infinity venture Fund от компании Infinity, который специализируется на инвестировании и спонсировании новых криптовалют и blockchain стартапов. </p>
              </li>
              <li className="apps__subitem">
                <p className="text">Любой желающий может инвестировать необходимую для пула сумму, взамен получить участие в (IPO, ICO, закрытом листинге) и разделить прибыль с фондом.</p>
              </li>
            </ul>
          </li>
          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Мобильное приложение Infinity
              {/* <span
              className="apps__list-title-icons">
              <picture>
                <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
                <img src={sprite + "#mobile-icon"} alt="" />
              </picture>
              <picture>
                <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
                <img src={sprite + "#laptop-icon"} alt="" />
              </picture>
            </span> */}
            </h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Мобильное приложение Infinity для скачивания в AppStore и PlayMarket, которое станет доступно после модерации и других процедур.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">CRM Infinity
              {/* <span
              className="apps__list-title-icons">
              <picture>
                <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
                <img src={sprite + "#mobile-icon"} alt="" />
              </picture>
              <picture>
                <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
                <img src={sprite + "#laptop-icon"} alt="" />
              </picture>
            </span> */}
            </h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Система управления взаимоотношениями с клиентами - прикладное программное обеспечение для организаций, предназначенное для автоматизации стратегий взаимодействия с заказчиками (клиентами), в частности для повышения уровня продаж, оптимизации маркетинга и улучшения обслуживания клиентов путём сохранения информации о клиентах и истории взаимоотношений с ними, установления и улучшения бизнес-процессов и последующего анализа результатов.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">UsefulNet социальная сеть
              {/* <span
              className="apps__list-title-icons">
              <picture>
                <source srcSet={sprite + "#mobile-icon"} type="image/webp" />
                <img src={sprite + "#mobile-icon"} alt="" />
              </picture>
              <picture>
                <source srcSet={sprite + "#laptop-icon"} type="image/webp" />
                <img src={sprite + "#laptop-icon"} alt="" />
              </picture>
            </span> */}
            </h3>
            <ul className="apps__sublist">
              <li className="apps__subitem">
                <p className="text">Практика показывает, что как минимум, одна социальная сеть есть в ежедневном пользовании у большинства из нас. Данный продукт будет направлен для развития экосистемы в Meta-вселенной Infinity.</p>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      {/* <section className="main__profile profile">
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
      </section> */}
    </section>
  )
}

export default Apps
