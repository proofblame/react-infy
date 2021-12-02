function ResponcePopup({ onClose, resStatusText }) {
  const imageConfig = {
    maxWidth: "250px",
    margin: "0 auto 10px",
  };

  const titleConfig = {
    textAlign: "center",
    marginBottom: "10px",
  };

  const subtitleConfig = {
    textAlign: "center",
  };
  return (
    <section className="popup form popup_type_seed">
      <img src={resStatusText.image} alt="статус ответа" style={imageConfig} />
      <h2 className="text text_size_normal" style={titleConfig}>
        <b>{resStatusText.title}</b>
      </h2>
      <p className="text text_size_small" style={subtitleConfig}>
        {resStatusText.subtitle}
      </p>
      <button
        type="button"
        className="form__button_type_close "
        onClick={() => {
          onClose();
        }}
      >
      </button>
    </section>
  );
}
export default ResponcePopup;
