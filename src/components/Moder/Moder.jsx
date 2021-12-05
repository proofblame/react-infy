import React, { useState, useEffect } from 'react'
import './Moder.scss'
import constants from './constants.js'
import complaints from './complaints'

import ChatWindow from './ChatWindow/ChatWindow'
import Table from './Table/Table'

const Moder = () => {



  const { title, img } = constants;
  const [stateWindow, setStateWindow] = useState(true)
  const [complaintsList, setComplaintsList] = useState([])
  const [currentComplaint, setCurrentComplaint] = useState(null)


  useEffect(() => {
    setComplaintsList(complaints)
  }, [])

  const handleOpenPopup = (complaint) => {
    setCurrentComplaint(complaint)
    setStateWindow(true)
  }

  const handleClosePopup = () => {
    setStateWindow(false)
    setCurrentComplaint(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const history = currentComplaint.history;
    history.push(e.target)
    // TODO: доделать.
  }


  return (
    <section className="moderation">

      <div className="moderation__wrapper">

        {/* TODO: добавить бургер меню */}
        <header className="moderation__header">
          <h2 className="moderation__header-title">{title}</h2>
          <div className="moderation__header-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main className="moderation__main">

          <aside className="moderation__aside">
            <ul className="moderation__aside-service-list">
              <li className="moderation__aside-service-item">
                <div className="moderation__aside-image">
                  <img src={img.headphones} alt="Наушники" />
                </div>
              </li>
            </ul>
          </aside>

          <Table
            onOpen={handleOpenPopup}
            complaintsList={complaintsList}
          />

          {currentComplaint &&
            <ChatWindow
              onClose={handleClosePopup}
              stateWindow={stateWindow}
              currentComplaint={currentComplaint}
              onSubmit={handleSubmit}
            />}

        </main>

      </div>

    </section>
  )
}

export default Moder
