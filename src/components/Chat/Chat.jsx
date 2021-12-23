import { useRef } from "react";
import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import messages from "../../utils/messages";
import "./Chat.scss";
import { useState } from "react";

function Chat(props) {
  const textRef = useRef();
  const [newMessage, setNewMessage] = useState(messages);

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
      addMessage(e);
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
        />
      </div>
    </section>
  );
}

export default Chat;
