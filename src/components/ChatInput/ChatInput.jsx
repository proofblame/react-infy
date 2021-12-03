import { useRef } from "react";
import "./ChatInput.scss";

function ChatInput() {
  const textRef = useRef();
  function SetNewSize() {
    if (textRef.current.value.length > 5) {
      textRef.current.cols = 50;
      textRef.current.rows = 50;
    } else {
      textRef.current.cols = 10;
      textRef.current.rows = 15;
    }
  }

  return (
    <section className="chatInput">
      <form action="" className="chat-form">
        <textarea
          name=""
          id=""
          ref={textRef}
          onChange={SetNewSize}
          className="chat-form__textarea"
          placeholder="Написать сообщение..."
        ></textarea>
        <button type="submit" className="chat-form__submit"></button>
      </form>
    </section>
  );
}

export default ChatInput;
