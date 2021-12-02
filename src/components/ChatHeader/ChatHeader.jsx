import "./ChatHeader.scss";

function ChatHeader({ toggleChatOpened }) {
  return (
    <section className="chat-header">
      <div className="chat-header__img-container"></div>
      <div className="chat-header-container">
        <h2 className="chat-header__main-header">Поддержка Infinity</h2>
        <p className="chat-header__online-status">
          Модератор на связи
          <span className="chat-header__online-status-image"></span>
        </p>
      </div>
      <button
        className="chat-header__close"
        onClick={toggleChatOpened}
      ></button>
    </section>
  );
}

export default ChatHeader;
