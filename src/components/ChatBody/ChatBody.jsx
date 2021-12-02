import "./ChatBody.scss";
import messages from "../../utils/messages";
import DialogItem from "../DialogItem/DialogItem";

function ChatBody() {
  return (
    <section className="chatBody">
      {messages.map((m) => {
        return (
          <DialogItem
            key={m.id}
            text={m.text}
            name={m.name}
            time={m.time}
            isRead={m.isRead}
          />
        );
      })}
    </section>
  );
}

export default ChatBody;
