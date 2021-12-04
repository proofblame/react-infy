import "./ChatInput.scss";

function ChatInput({ addMessage, addMessageByEnter, textRef }) {
  return (
    <section className="chatInput">
      <form action="" className="chat-form">
        <textarea
          ref={textRef}
          name=""
          id=""
          className="chat-form__textarea"
          placeholder="Написать сообщение..."
          onKeyDown={addMessageByEnter}
        ></textarea>

        <button
          type="submit"
          onClick={addMessage}
          className="chat-form__submit"
        ></button>
      </form>
    </section>
  );
}

export default ChatInput;
