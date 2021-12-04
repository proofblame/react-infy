import { useEffect } from "react";
import ChatLogo from "../../images/icons/ChatLogo.svg";
import "./DialogItem.scss";

function DialogItem(props) {
  useEffect(() => {
    props.calculateMessageHeight();
  }, [props]);
  return (
    <section
      ref={props.messageRef}
      className={` ${
        props.name === "moderator" ? "dialogItem" : "dialogItem dialogItem_user"
      } `}
    >
      <div
        className={` ${
          props.name === "moderator"
            ? "dialogItem__avatar-container"
            : "dialogItem__avatar-container_hidden"
        } `}
      >
        <img
          src={ChatLogo}
          alt="Аватар модератора"
          className="dialogItem__avatar"
        />
      </div>
      <div
        className={` ${
          props.name === "moderator"
            ? "dialogItem__message"
            : "dialogItem__message-user"
        } `}
      >
        <h2
          className={` ${
            props.name === "moderator"
              ? "dialogItem__message-header"
              : "dialogItem__message-header_hidden"
          } `}
        >
          Поддержка Infinity
        </h2>
        <p className="dialogItem__message-text">{props.text}</p>
        <span className="dialogItem__message-time">{props.time}</span>
      </div>
      <p
        className={` ${
          props.name === "user" && props.isRead
            ? "dialogItem__read"
            : "dialogItem__read_hidden"
        } `}
      >
        Прочитано
      </p>
    </section>
  );
}

export default DialogItem;
