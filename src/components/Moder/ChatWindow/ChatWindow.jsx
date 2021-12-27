import React, { useEffect } from 'react'
import './ChatWindows.scss'

const ChatWindow = ({ onClose, stateWindow, currentComplaint, onSubmit }) => {
  useEffect(() => {
  }, [currentComplaint])


  const messageList = currentComplaint.history.map((message) => (

    <li className={`message ${currentComplaint.owner === message.owner ? 'message_type_outgoing' : 'message_type_incoming'}`}>
      <p className="message__author">
        {message.owner}
      </p>
      <p className="message__text">
        {message.text}
      </p>
      <p className="message__time">{message.time}</p>
      <p className="message__status">{message.viewed ? 'Прочитано' : ''}</p>
    </li>
  ))

  return (
    <section className={`moderation__chat ${stateWindow === true ? 'moderation__chat_visible' : ''}`}>

      <div className="moderation__chat-header">
        <p className="moderation__chat-title">{currentComplaint.owner}</p>
        <button type="button" className="moderation__chat-close-button" onClick={onClose}></button>
      </div>

      <ul className="moderation__chat-message-list">

        {messageList}

      </ul>


      <form onSubmit={onSubmit} className="moderation__chat-form-answer">
        <textarea className="moderation__chat-form-area" type="text" placeholder="Написать сообщение..." />
        <button className="moderation__chat-form-send-button" type="submit"> </button>
      </form>

    </section>
  )
}

export default ChatWindow
