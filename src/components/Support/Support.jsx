import React, { useEffect } from 'react'

function Support() {
  useEffect(() => {
    document.title = "Support"
  }, []);
  return (
    <main className="main">
      <div className="container">
        <section className="support">
          <section className="main-profile section">
            <div className="wrapper">
              <h1 className="support__title title">Поддержка</h1>
            </div>
          </section>
          <form className="form form_type_support">
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal" htmlFor="name">Никнейм
              аккаунта</label> <input className="form__input text text_size_normal" type="text" name="name"
                id="name" required /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="email">E-mail</label> <input className="form__input text text_size_normal" type="email"
                name="email" id="email" required /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="textarea">Сообщение</label> <textarea
                className="form__input form__input_textarea text text_size_normal" type="text" name="text"
                id="textarea" required></textarea> </fieldset><input
              type="button" className="link link_active" value="Отправить" />
          </form>
        </section>
      </div>
    </main>

  )
}

export default Support
