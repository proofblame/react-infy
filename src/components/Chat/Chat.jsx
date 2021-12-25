import { useRef, useState } from "react";
import SockJsClient from "react-stomp";
import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import messages from "../../utils/messages";
import "./Chat.scss";

function Chat(props) {
  const textRef = useRef();
  const [newMessage, setNewMessage] = useState(messages);
  const [socketState, setSocketState] = useState([]);

  const addMessage = (e) => {
    e.preventDefault();

    if (textRef.current.value.length === 0) {
      return;
    }
    setNewMessage(
      messages.push({
        id: Math.random(),
        name: "user",
        text: textRef.current.value.trim(),
        time: "13:30",
        isRead: false,
      })
    );

    textRef.current.value = "";
  };

  const addMessageByEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  let clientRef = useRef();

  const onMessageReceive = (msg, topic) => {
    setSocketState([...socketState, msg]);
  };
  console.log(socketState);
  const obj = {
    message: "test",
    messageOwner: "test",
  };

  const sendMessage = (e, msg, selfMsg) => {
    e.preventDefault();
    try {
      clientRef.sendMessage("/app/ws", JSON.stringify(obj));
      console.log("success");
    } catch (e) {
      console.log("fail");
    }
  };

  return (
    <section className={props.chatIsOpened ? "chat" : "chat_isHidden"}>
      <div className="chat__container">
        <ChatHeader toggleChatOpened={props.toggleChatOpened} />
        <ChatBody newMessage={newMessage} />
        <ChatInput
          addMessage={addMessage}
          textRef={textRef}
          addMessageByEnter={addMessageByEnter}
          sendMessage={sendMessage}
        />
      </div>
      <SockJsClient
        url="http://api.infy-corp.com/test-ws"
        topics={["/topic/greetings"]}
        // onConnect={() => { setSocketState({ clientConnected: true }) }}
        onMessage={onMessageReceive}
        ref={(client) => {
          clientRef = client;
        }}
      />
    </section>
  );
}

export default Chat;
