import React from 'react'
import Particle from "react-particles-js";
import particlesConfig from '../../vendor/particlesConfig.json'
import {
  NavLink
} from "react-router-dom";

function Registration() {
  return (
    <main className="main">
      <div className="container">
        <section className="registration">
          <Particle params={particlesConfig} className="App-particles__container" />
          <form method="post" action="/registration" className="form form_type_support form_type_login">
            <section className="banner__buttons wallet__buttons registration__buttons">
              <NavLink to='/login' className="wallet__button link" activeClassName="link_active">Вход</NavLink>
              <NavLink to='/registration' className="wallet__button link" activeClassName="link_active">Регистрация</NavLink>
            </section>

            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="joinedBy">Никнейм пригласившего</label> <input className="form__input text text_size_normal"
                type="text" name="joinedBy" id="joinedBy" defaultValue="{{#join}} {{join}} {{/join}}" /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal" htmlFor="nickname">Ваш
              никнейм</label> <input className="form__input text text_size_normal" type="text" name="nickname"
                id="nickname" required /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="email">E-mail</label> <input className="form__input text text_size_normal" type="email"
                name="email" id="email" required /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="password">Введите пароль</label> <input className="form__input text text_size_normal"
                type="password" name="password" id="password" required />
              <p className="text text_size_x-small">Пароль должен содержать минимум 1 заглавную букву, 1 строчную
                букву, 1 цифру.Минимальная длина пароля составляет 9 символов.Необходим для авторизации на
                сайте.В приложении вход по Seed-фразе.</p>
            </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="secondpassword">Повторите пароль</label> <input className="form__input text text_size_normal"
                type="password" name="secondpassword" id="secondpassword" required /> </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="text">Telegram</label> <input className="form__input text text_size_normal" type="text"
                name="telegram" id="text" required /> </fieldset>
            <fieldset className="form__fieldset form__fieldset_type_politics"> <label
              className="form__label form__label_type_politics text text_size_small" htmlFor="politics">я согласен с
              политикой конфиденциальности и пользовательским соглашением.</label> <input
                className="form__input form__input_type_politics text text_size_normal" type="checkbox"
                name="politics" id="politics" required /> </fieldset>
            <div className="footer__politics">
              <NavLink to="/privacy" className="footer__status text text_size_small">Пользовательское соглашение</NavLink>
              <NavLink to="/policy" className="footer__status text text_size_small">Политика конфиденциальности</NavLink>
            </div>
            <input type="submit"
              className="link link_active" defaultValue="Создать аккаунт" />

          </form>

        </section>
      </div>
    </main>
  )
}

export default Registration
