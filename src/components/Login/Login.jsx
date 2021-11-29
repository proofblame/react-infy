import React, { useState, useEffect } from "react";
import Particles from "../Particles/Particles";
import { NavLink } from "react-router-dom";

function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    props.onLogin(data.username, data.password).then(() => {
    });
  }

  return (
    <>
      <Particles />
      <main className="main">
        <div className="container">
          <section className="registration login">
            <form
              onSubmit={onSubmit}
              className="form form_type_support form_type_login"
            >
              <section className="banner__buttons wallet__buttons registration__buttons">
                <NavLink
                  to="/login"
                  className="wallet__button link"
                  activeClassName="link_active"
                >
                  Вход
                </NavLink>
                <NavLink
                  to="/registration"
                  className="wallet__button link"
                  activeClassName="link_active"
                >
                  Регистрация
                </NavLink>
              </section>
              <p className="login__title text text_size_small">
                Убедитесь, что вы посещаете правильный URL-адрес
              </p>
              <a
                className="login__link text text_size_small"
                href="https://infy-corp.com/"
              >
                https://infy-corp.com/
              </a>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="username"
                >
                  Введите номер кошелька или Никнейм
                </label>
                <input
                  className="form__input text text_size_normal"
                  type="text"
                  name="username"
                  required
                  autoComplete="off"
                  value={data.username}
                  onChange={onChange}
                />
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="password"
                >
                  Введите пароль
                </label>
                <input
                  className="form__input text text_size_normal"
                  type="password"
                  name="password"
                  required
                  autoComplete="off"
                  value={data.password}
                  onChange={onChange}
                />
              </fieldset>
              <p className="text text_size_x-small">
                Формы для ввода чувствительны к регистру!
              </p>
              <input type="submit" className="link link_active" value="Войти" />
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
