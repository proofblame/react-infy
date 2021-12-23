import "./ChatBody.scss";
import messages from "../../utils/messages";
import DialogItem from "../DialogItem/DialogItem";
import { useEffect, useRef, useState } from "react";

function ChatBody({ newMessage }) {
  const textAreaRef = useRef();
  const messageRef = useRef();
  const [bodyHeight, setBodyHeight] = useState(0);

  useEffect(() => {
    countHeight();
    return () => {
      setBodyHeight(0);
    };
  }, []);

  useEffect(() => {
    if (newMessage.length === 0) {
      return;
    }

    textAreaRef.current.scrollBy(0, calculateMessageHeight());
  }, [newMessage]);

  useEffect(() => {
    executeScroll(bodyHeight);
    return () => {
      executeScroll(0);
    };
  }, [bodyHeight]);

  const calculateMessageHeight = () => {
    return (
      messageRef.current.clientHeight + messageRef.current.clientHeight / 2
    );
  };

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
            messageRef={messageRef}
            calculateMessageHeight={calculateMessageHeight}
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
