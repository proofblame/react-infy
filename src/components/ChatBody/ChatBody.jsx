import "./ChatBody.scss";
import messages from "../../utils/messages";
import DialogItem from "../DialogItem/DialogItem";
import { useEffect, useRef, useState } from "react";

function ChatBody() {
  const textAreaRef = useRef();
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    countHeight();
    console.log(bodyHeight);
    // executeScroll();
    return () => {
      setBodyHeight(0);
    };
  }, []);

  useEffect(() => {
    executeScroll(bodyHeight);
    return () => {
      executeScroll(0);
    };
  }, [bodyHeight]);
  const executeScroll = (data) => {
    textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight - data;
  };
  const countHeight = () => {
    setBodyHeight(textAreaRef.current.clientHeight);
  };

  return (
    <section className="chatBody" ref={textAreaRef}>
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
