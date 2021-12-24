import React, { useEffect, useRef, useState } from 'react'
import SockJsClient from 'react-stomp';
import './ChatWindows.scss'
import SockJS from 'sockjs-client'

const ChatWindow = ({ onClose, stateWindow, currentComplaint, onSubmit }) => {
  const [socketState, setSocketState] = useState({
    clientConnected: false,
    messages: []
  })
  useEffect(() => {
  }, [currentComplaint])


  let clientRef = useRef();



  // debugger
  // const sock = new SockJS('http://api.infy-corp.com/test-ws');
  // sock.onopen = function () {
  //   console.log('open');
  //   sock.send('test');
  // };

  // sock.onmessage = function (e) {
  //   console.log('message', e.data);
  //   sock.close();
  // };

  // sock.onclose = function () {
  //   console.log('close');
  // };





  const onMessageReceive = (msg, topic) => {
    setSocketState(socketState => ({
      messages: [...socketState.messages, msg]
    }));
  }




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
