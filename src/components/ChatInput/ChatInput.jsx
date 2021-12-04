import "./ChatInput.scss";

function ChatInput() {
  return (
    <section className="chatInput">
      <form action="" className="chat-form">
        <textarea
          name=""
          id=""
          className="chat-form__textarea"
          placeholder="Написать сообщение..."
        ></textarea>

        <button type="submit" className="chat-form__submit"></button>
      </form>
    </section>
  );
}

export default ChatInput;
