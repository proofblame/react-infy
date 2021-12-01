import React, { useState, useEffect } from "react";
import Particles from "../Particles/Particles";
import { NavLink } from "react-router-dom";
import "./Login.scss";

function Login(props) {
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError("");
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
      setNameError("Поле 'Никнейм' должно быть заполнено");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.validity.valid) {
      setPasswordError("");
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
      setPasswordError("Поле 'Пароль' должно быть заполнено");
    }
  };

  // function onChange(e) {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // }
  function resetInputs() {
    setName("");
    setPassword("");
  }

  const submitLogin = () => {
    if (nameIsValid && passwordIsValid) {
      setButtonDisabled(false);
      return buttonDisabled;
    } else {
      setButtonDisabled(true);
      return buttonDisabled;
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    props.onLogin(name, password).then(() => {
      resetInputs();
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
              onChange={submitLogin}
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
                <div
                  className={
                    nameIsValid
                      ? "form__container"
                      : "form__container form__container_isInvalid"
                  }
                >
                  <input
                    className={
                      nameIsValid
                        ? "form__input text text_size_normal text_background_mode"
                        : "form__input form__input_isInvalid text text_size_normal text_background_mode"
                    }
                    type="text"
                    name="username"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={handleName}
                  />
                  <span
                    className={
                      nameIsValid
                        ? "form__error"
                        : "form__error form__error_isActive"
                    }
                  >
                    {nameError}
                  </span>
                </div>
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="password"
                >
                  Введите пароль
                </label>
                <div
                  className={
                    passwordIsValid
                      ? "form__container"
                      : "form__container form__container_isInvalid"
                  }
                >
                  <input
                    className={
                      passwordIsValid
                        ? "form__input text text_size_normal text_background_mode"
                        : "form__input form__input_isInvalid text text_size_normal text_background_mode"
                    }
                    type="password"
                    name="password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={handlePassword}
                  />
                  <span
                    className={
                      passwordIsValid
                        ? "form__error"
                        : "form__error form__error_isActive"
                    }
                  >
                    {passwordError}
                  </span>
                </div>
              </fieldset>
              <p className="text text_size_x-small">
                Формы для ввода чувствительны к регистру!
              </p>
              <input
                type="submit"
                className={`link  ${
                  nameIsValid && passwordIsValid ? "link_active" : ""
                }`}
                value="Войти"
                disabled={nameIsValid && passwordIsValid ? false : true}
              />
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
