import React from 'react'
import './RoadMapBlock.css'

const RoadMapBlock = () => {
  return (
    <section className="main__roadmap roadmap">
    <div className="roadmap__header">
      <h2 className="title">Roadmap</h2>
    </div>
    <ul className="roadmap__grid">
      <li className="roadmap__item">
        <h2 className="title roadmap__title">2021</h2>
        <ul className="roadmap__list">
          <li className="roadmap__subitem roadmap__subitem_complete item">Разработка технического
            задания для разработчиков</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Создание МВП платформы</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Создание продакшн версии
            продуктов</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Создание приложения
            Web-версия</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Web-версия кошелька INFY
          </li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Чат бот – обменик</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Онлайн академия</li>
          <li className="roadmap__subitem roadmap__subitem_complete item">Создание медиа кит</li>
          <li className="roadmap__subitem">Создание приложения для App Store и Play Market</li>
          <li className="roadmap__subitem">Приложение со всеми продуктами на MacOS и Windows</li>
        </ul>
      </li>
      <li className="roadmap__item">
        <h2 className="roadmap__title title">2022</h2>
        <ul className="roadmap__list">
          <li className="roadmap__subitem">Международная версия сайта и веб-интерфейса на английском
            языке</li>
          <li className="roadmap__subitem">Листинг на двух биржах</li>
          <li className="roadmap__subitem">Тестнет Infinity Blockchain 2.0 версии с привязкой событий
            ко времени, а не высоте блоков</li>
          <li className="roadmap__subitem">Создание API и AppKit</li>
          <li className="roadmap__subitem">Выход на рынок минимум 2 продукта Infinity</li>
        </ul>
      </li>
      <li className="roadmap__item">
        <h2 className="roadmap__title title">2023</h2>
        <ul className="roadmap__list">
          <li className="roadmap__subitem">Выход на рынок еще 4 продуктов Infinity</li>
          <li className="roadmap__subitem">Открытие собственной крипто биржи</li>
        </ul>
      </li>
    </ul>
  </section>
  )
}

export default RoadMapBlock
