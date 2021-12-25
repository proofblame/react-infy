import "./ChatInput.scss";

function ChatInput({ addMessage, addMessageByEnter, textRef, sendMessage }) {
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
          onClick={sendMessage}
          className="chat-form__submit"
        ></button>
      </form>
    </section>
  );
}

export default ChatInput;
