import "./ChatHeader.scss";
import ChatLogo from "../../images/icons/ChatLogo.svg";

function ChatHeader() {
  return (
    <section className="chat-header">
      <div className="chat-header__img-container">
        {/* <img src={ChatLogo} alt="Логотип" className="chat-header__logo" /> */}
      </div>
      <div className="chat-header-container">
        <h2 className="chat-header__main-header">Поддержка Infinity</h2>
        <p className="chat-header__online-status">
          Модератор на связи
          <span className="chat-header__online-status-image"></span>
        </p>
      </div>
      <button className="chat-header__close"></button>
    </section>
  );
}

export default ChatHeader;
