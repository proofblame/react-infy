import ChatBody from "../ChatBody/ChatBody";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import "./Chat.scss";

function Chat() {
  return (
    <section className="chat">
      <main className="main">
        <div className="chat__container">
          <ChatHeader />
          <ChatBody />
          <ChatInput />
        </div>
      </main>
    </section>
  );
}

export default Chat;
