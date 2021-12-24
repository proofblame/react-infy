import React, { useEffect, useState, useRef } from 'react'
import './Moder.scss'
import constants from './constants.js'
import complaints from './complaints'
import SockJsClient from 'react-stomp';
import ChatWindow from './ChatWindow/ChatWindow'
import Table from './Table/Table'

const Moder = () => {

  // let ws = new WebSocket('ws://api.infy-corp.com/test-ws');

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

  let clientRef = useRef();

  const [socketState, setSocketState] = useState([])

  const onMessageReceive = (msg, topic) => {
    setSocketState([...socketState, msg]);
    console.log(msg)
  }

  useEffect(() => {
    // sendMessage()
  }, [])

  const obj = {
    message: "test", messageOwner: "test"
  }
  // debugger
  const sendMessage = (msg, selfMsg) => {
    try {
      clientRef.sendMessage("/app/ws", JSON.stringify(obj));
      console.log('успех')
    } catch (e) {
      console.log('сук')
    }
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
          <button onClick={sendMessage}>SEND MESSAGE</button>
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
      <SockJsClient
        url='http://api.infy-corp.com/test-ws'
        topics={['/topic/greetings']}
        // onConnect={() => { setSocketState({ clientConnected: true }) }}
        onMessage={onMessageReceive}
        ref={(client) => { clientRef = client }}

      />
    </section>
  )
}

export default Moder
