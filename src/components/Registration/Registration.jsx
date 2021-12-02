import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import SeedPopup from "../SeedPopup/SeedPopup";
import Particles from "../Particles/Particles";
import Preloader from "../Preloader/Preloader";
import ResponcePopup from "../ResponcePopup/ResponcePopup";
import Fail from "../../images/Fail.svg";

function Registration(props) {
  const location = useLocation();
  const joinedBy = location.search.slice(10);
  const [formValid, setFormValid] = useState(false);
  const [modalActive, setModalActive] = useState({
    preloader: false,
    seed: false,
    resStatus: false,
  });
  const [seed, setSeed] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    email: "",
    password: "",
    secondpassword: "",
    telegram: "",
  });
  const [data, setData] = useState({
    username: "",
    joinedBy: " " || urldecode(joinedBy),
    password: "",
    secondpassword: "",
    email: "",
    telegram: "",
    politics: false,
  });
  const [resStatusText, setResStatusText] = useState({
    title: "",
    subtitle: "",
    image: '',
  });

  useEffect(() => {
    document.title = "Registration";
    isFormValid();
  }, [data]);

  useEffect(() => {
    urldecode(joinedBy);
  }, [])

  function urldecode(str) {
    return decodeURIComponent((str + "").replace(/\+/g, "%20"));
  }

  function onChange(e) {
    const { name, validity, validationMessage } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    if (!validity.valid) {
      setErrorMessage({
        ...errorMessage,
        [name]: validationMessage,
      });
    } else {
      setErrorMessage("");
    }
  }

  const isFormValid = () => {
    const { username, password, secondpassword, email, telegram, politics } =
      data;
    setFormValid(
      username && password && secondpassword && email && telegram && politics
    );
  };
  const handleConfirmPassword = () => {
    if (data.password !== data.secondpassword) {
      setErrorMessage({
        ...errorMessage,
        secondpassword: "Пароли не совпадают",
      });
    } else {
      setErrorMessage("");
    }
  };

  const handleClosePopup = () => {
    setModalActive(false);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const user = await props.onRegister(
        data.username,
        data.joinedBy,
        data.email,
        data.password,
        data.telegram
      );
      setSeed(user.seed);
      setModalActive({ ...modalActive, seed: true });

    } catch (error) {
      setResStatusText({
        title:
          "Не удалось зарегистрироваться, проверьте данные для заполнения.",
        subtitle:
          "Возможно аккаунт с таким ником или почтой уже зарегистрирован",
        image: Fail
      });
      await setModalActive({ ...modalActive, resStatus: true });
    } finally {
      setData({});
      e.target.reset();
    }
  }

  return (
    <>
      <Particles />
      <main className="main">
        <div className="container">
          <section className="registration">
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
                  className="wallet__button link link_active"
                  activeClassName="link_active"
                >
                  Регистрация
                </NavLink>
              </section>

              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="joinedBy"
                >
                  Никнейм пригласившего
                </label>
                <input
                  className="form__input text text_size_normal"
                  type="text"
                  name="joinedBy"
                  value={urldecode(joinedBy) || data.joinedBy}
                  onChange={onChange}
                  autoComplete="true"
                />
              </fieldset>

              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="username"
                >
                  Ваш никнейм
                </label>
                <input
                  className={`form__input text text_size_normal ${errorMessage.username ? "form__input_error" : ""
                    }`}
                  type="text"
                  name="username"
                  required
                  value={data.username}
                  onChange={onChange}
                  autoComplete="username"
                  minLength="1"
                />
                <span
                  className={`text text_size_small ${errorMessage.username ? "form__error" : "form__error_hide"
                    }`}
                >
                  {errorMessage.username}
                </span>
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className={`form__input text text_size_normal ${errorMessage.email ? "form__input_error" : ""
                    }`}
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={data.email}
                  onChange={onChange}
                  minLength="1"
                />
                <span
                  className={`text text_size_small ${errorMessage.email ? "form__error" : "form__error_hide"
                    }`}
                >
                  {errorMessage.email}
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
                  className={`form__input text text_size_normal ${errorMessage.password ? "form__input_error" : ""
                    }`}
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  value={data.password}
                  onChange={onChange}
                  minLength="1"
                  onBlur={handleConfirmPassword}
                />
                <p className="text text_size_x-small">
                  Пароль должен содержать минимум 1 заглавную букву, 1 строчную
                  букву, 1 цифру.Минимальная длина пароля составляет 9
                  символов.Необходим для авторизации на сайте.В приложении вход
                  по Seed-фразе.
                </p>
                <span
                  className={`text text_size_small ${errorMessage.password ? "form__error" : "form__error_hide"
                    }`}
                >
                  {errorMessage.password}
                </span>
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="secondpassword"
                >
                  Повторите пароль
                </label>
                <input
                  className={`form__input text text_size_normal ${errorMessage.secondpassword ? "form__input_error" : ""
                    }`}
                  type="password"
                  name="secondpassword"
                  autoComplete="new-password"
                  minLength="1"
                  onChange={onChange}
                  value={data.secondpassword}
                  onBlur={handleConfirmPassword}
                />
                <span
                  className={`text text_size_small ${errorMessage.secondpassword
                    ? "form__error"
                    : "form__error_hide"
                    }`}
                >
                  {errorMessage.secondpassword}
                </span>
              </fieldset>
              <fieldset className="form__fieldset">
                <label
                  className="form__label text text_size_normal"
                  htmlFor="text"
                >
                  Telegram
                </label>
                <input
                  className={`form__input text text_size_normal ${errorMessage.telegram ? "form__input_error" : ""
                    }`}
                  type="text"
                  name="telegram"
                  id="text"
                  required
                  value={data.telegram}
                  onChange={onChange}
                  minLength="1"
                />
                <span
                  className={`text text_size_small ${errorMessage.telegram ? "form__error" : "form__error_hide"
                    }`}
                >
                  {errorMessage.telegram}
                </span>
              </fieldset>
              <fieldset className="form__fieldset form__fieldset_type_politics">
                <label
                  className="form__label form__label_type_politics text text_size_small"
                  htmlFor="politics"
                >
                  я согласен с политикой конфиденциальности и пользовательским
                  соглашением.
                </label>
                <input
                  className="form__input form__input_type_politics text text_size_normal"
                  type="checkbox"
                  name="politics"
                  id="politics"
                  onChange={onChange}
                  checked={data.politics}
                  required
                />
              </fieldset>
              <div className="footer__politics">
                <NavLink
                  to="/privacy"
                  className="footer__status text text_size_small"
                >
                  Пользовательское соглашение
                </NavLink>
                <NavLink
                  to="/policy"
                  className="footer__status text text_size_small"
                >
                  Политика конфиденциальности
                </NavLink>
              </div>
              <p className="text text_size_x-small">
                Формы для ввода чувствительны к регистру!
              </p>
              <button
                type="submit"
                className={`link link_active  ${formValid ? "" : "link_disabled"
                  }`}
                disabled={!formValid}
              >
                Создать Аккаунт
              </button>
            </form>
          </section>
        </div>
      </main>
      <Modal active={modalActive.seed}>
        <SeedPopup seed={seed} />
      </Modal>
      <Modal active={modalActive.preloader}>
        <Preloader />
      </Modal>
      <Modal active={modalActive.resStatus}>
        <ResponcePopup
          onClose={handleClosePopup}
          resStatusText={resStatusText}
        />
      </Modal>
    </>
  );
}

export default Registration;
