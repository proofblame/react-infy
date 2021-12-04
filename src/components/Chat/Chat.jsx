import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.scss";

function Chat(props) {
  return (
    <section className={props.chatIsOpened ? "chat" : "chat_isHidden"}>
      <div className="chat__container">
        <ChatHeader toggleChatOpened={props.toggleChatOpened} />
        <ChatBody />
        <ChatInput />
      </div>
    </section>
  );
}

export default Chat;
