import React from 'react'
import sprite from '../../images/icons/icons.svg';
import './Apps.css'
const Apps = () => {
  return (
    <section className="main__apps apps">
      <div className="apps__body">
        <h2 className="apps__title title">На данный момент наша команда разработчиков создала</h2>
        <p className="apps__subtitle text text_size_large"></p>
      </div>
      <div className="apps__body-bg"></div>
      <div className="wrapper">
        <ul className="apps__list">
          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_status">Защищенный сайт <span
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
                <p className="text">Ультрасовременный защищенный сайт (официальный сайт компании), в котором интегрирован личный кабинет с необходимыми инструментами для взаимодействия с компанией.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Внутренняя Цифровая монета INFY <span
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
                <p className="text">Внутренняя Цифровая монета INFY - создана специально для доступа к реферальной программе и к продуктам компании.</p>
              </li>

            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_wallet">Infinity Wallet
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
                <p className="text">Infinity Wallet - горячий моно-кошелек, открывающий доступ к экосистеме Infinity.</p>
              </li>
            </ul>
          </li>
          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Партнерская программа
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
                <p className="text">Партнерская программа из двенадцать уровней и система лояльности при достижении определенных результатов в компании.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Система внутренних статусов компании
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
                <p className="text">Система внутренних статусов компании, разработанная для мотивации активных Инвесторов и Агентов компании.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Продукты для b2b сектора
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
                <p className="text">На сегодняшний день компания Infinity разрабатывает несколько продуктов для сектора b2b в направлении CRM и Software.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Сервис Orca.Eyes
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
                <p className="text">Система была специально разработана для экосистемы Infinity, которая позволяет уже сегодня научится грамотно обращаться с личными средствами прививая финансовую дисциплину и финансовую грамотность.</p>
              </li>
              <li className="apps__subitem">
                <p className="text">В Сервисе используются только проверенные и надежные инструменты.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Infinity Майнинг отель
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
                <p className="text">У компании есть специализированные помещения для деятельности майнинга/майнеров, и Компания предоставляет место(а) в одном, из которых заключив договор можно разместить практически любого желающего установки и оборудования для добычи цифровых активов.</p>
              </li>
              <li className="apps__subitem">
                <p className="text">Компания создает и поддерживают максимально комфортные условия для работы майнинг установок пользователей.</p>
              </li>
            </ul>
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Infinity Cloud Mining или облачный майнинг
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
          </li>

          <li className="apps__item">
            <h3 className="apps__list-title apps__list-title_delegation">Infinity Travel Club
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
                <p className="text">Это сообщество энтузиастов, практикующих нетривиальный нетворкинг в путешествиях. </p>
              </li>
              <li className="apps__subitem">
                <p className="text">На сегодняшний день компания уже разработала два направления и готова предложить туры на озеро Байкал и в Адыгею по системе все включено.</p>
              </li>
              <li className="apps__subitem">
                <p className="text">Оплата за туры производится ВЦМ INFY. </p>
              </li>
              <li className="apps__subitem">
                <p className="text">В ближайшее время будут добавлены и другие направления туров.</p>
              </li>
            </ul>
          </li>

        </ul>
      </div>







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
