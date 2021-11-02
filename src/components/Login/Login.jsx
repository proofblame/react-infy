import React from 'react'
import Particle from "react-particles-js";
import particlesConfig from '../../vendor/particlesConfig.json'
import {
  NavLink
} from "react-router-dom";
function Login() {
  return (
    <main className="main">
      <div className="container">

        <section className="registration login">
          <Particle params={particlesConfig} className="App-particles__container" />
          <form method="post" className="form form_type_support form_type_login">
            <section className="banner__buttons wallet__buttons registration__buttons">
              <NavLink to='/login' className="wallet__button link" activeClassName="link_active">Вход</NavLink>
              <NavLink to='/registration' className="wallet__button link" activeClassName="link_active">Регистрация</NavLink>
            </section>

            <p className="login__title text text_size_small">Убедитесь, что вы посещаете правильный URL-адрес</p> <a
              className="login__link text text_size_small"
              href="https://infinity-network.io/">https://infinity-network.io/</a>

            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="nickname">Введите номер кошелька или Никнейм</label> <input
                className="form__input text text_size_normal" type="text" name="nickname" id="nickname" required />
            </fieldset>
            <fieldset className="form__fieldset"> <label className="form__label text text_size_normal"
              htmlFor="password">Введите пароль</label> <input className="form__input text text_size_normal"
                type="password" name="password" id="password" required /> </fieldset> <input type="submit"
                  className="link link_active" value="Войти" />
          </form>
        </section>
      </div>
    </main>
  )
}

export default Login
