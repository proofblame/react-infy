import React, { useState, useEffect } from "react";
import Particles from "../Particles/Particles";
import { NavLink } from "react-router-dom";
import "./Login.scss";
import Modal from "../Modal/Modal";
import ResponcePopup from "../ResponcePopup/ResponcePopup";
import Fail from "../../images/Fail.svg";

function Login(props) {
  const [resStatus, setResStatus] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [modalActive, setModalActive] = useState({
    preloader: false,
  });
  const [resStatusText, setResStatusText] = useState({
    title: "",
    subtitle: "",
    image: "",
  });
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login";
    isFormValid();
  }, [data]);

  function onChange(e) {
    const { name, value, validity, validationMessage } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    if (!validity.valid) {
      setFormValid(false);
      setErrorMessage({
        ...errorMessage,
        [name]: validationMessage,
      });
    } else {
      setFormValid(true);
      setErrorMessage("");
    }
  }
  const isFormValid = () => {
    const { username, password } = data;
    setFormValid(username && password);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await props.onLogin(data.username, data.password);
    } catch (error) {
      console.log(error);
      setResStatusText({
        title: "Ошибка",
        subtitle: "Проверьте правильность логина и пароля",
        image: Fail,
      });
      setResStatus(true);
      setTimeout(() => {
        setResStatus(false);
      }, 3000);
    }
  }

  const handleClosePopup = () => {
    setResStatus(false);
  };

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
                  className={`form__input text text_size_normal ${
                    errorMessage.username ? "form__input_error" : ""
                  }`}
                  type="text"
                  name="username"
                  required
                  autoComplete="off"
                  value={data.username}
                  onChange={onChange}
                />
                <span
                  className={`text text_size_small ${
                    errorMessage.username ? "form__error" : "form__error_hide"
                  }`}
                >
                  {errorMessage.username}
                </span>
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="password"
                >
                  Введите пароль
                </label>

                <input
                  className={`form__input text text_size_normal ${
                    errorMessage.password ? "form__input_error" : ""
                  }`}
                  type="password"
                  name="password"
                  required
                  autoComplete="off"
                  value={data.password}
                  onChange={onChange}
                />
                <span
                  className={`text text_size_small ${
                    errorMessage.password ? "form__error" : "form__error_hide"
                  }`}
                >
                  {errorMessage.password}
                </span>
              </fieldset>
              <p className="text text_size_x-small">
                Формы для ввода чувствительны к регистру!
              </p>
              <input
                type="submit"
                className={`link link_active  ${
                  formValid ? "" : "link_disabled"
                }`}
                value="Войти"
                disabled={!formValid}
              />
            </form>
          </section>
        </div>
      </main>
      <Modal active={resStatus}>
        <ResponcePopup
          resStatusText={resStatusText}
          onClose={handleClosePopup}
        />
      </Modal>
    </>
  );
}

export default Login;
