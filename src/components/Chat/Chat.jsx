import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.scss";

function Chat(props) {
  console.log(props.chatIsOpened);
  return (
    <section className={props.chatIsOpened ? "chat" : "chat_isHidden"}>
      <main className="main">
        <div className="chat__container">
          <ChatHeader toggleChatOpened={props.toggleChatOpened} />
          <ChatBody />
          <ChatInput />
        </div>
      </main>
    </section>
  );
}

export default Chat;
