import React, { useState } from 'react';
import Particle from 'react-particles-js';
import particlesConfig from '../../vendor/particlesConfig.json';
import { NavLink } from 'react-router-dom';

function Registration(props) {
  const [data, setData] = useState({
    nicknameInviter: '',
    nicknameOwner: '',
    password: '',
    email: '',
    telegram: '',
  });

  function onChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    props
      .onRegister(data.nicknameInviter, data.nicknameOwner, data.email, data.password, data.telegram)
  }

  return (
    <main className='main'>
      <Particle
        params={particlesConfig}
        className='App-particles__container'
      />
      <div className='container'>
        <section className='registration'>
          <form
            onSubmit={onSubmit}
            className='form form_type_support form_type_login'>
            <section className='banner__buttons wallet__buttons registration__buttons'>
              <NavLink
                to='/login'
                className='wallet__button link'
                activeClassName='link_active'>
                Вход
              </NavLink>
              <NavLink
                to='/registration'
                className='wallet__button link'
                activeClassName='link_active'>
                Регистрация
              </NavLink>
            </section>
          
            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='nicknameInviter'>
                Никнейм пригласившего
              </label>
              <input
                className='form__input text text_size_normal'
                type='text'
                name='nicknameInviter'
                value={data.nicknameInviter}
                onChange={onChange}
              />
            </fieldset>

            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='nicknameOwner'>
                Ваш никнейм
              </label>
              <input
                className='form__input text text_size_normal'
                type='text'
                name='nicknameOwner'
                required
                value={data.nicknameOwner}
                onChange={onChange}
              />
            </fieldset>
            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='email'>
                E-mail
              </label>
              <input
                className='form__input text text_size_normal'
                type='email'
                name='email'
                required
                value={data.email}
                onChange={onChange}
              />
            </fieldset>
            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='password'>
                Введите пароль
              </label>
              <input
                className='form__input text text_size_normal'
                type='password'
                name='password'
                autoComplete="new-password"
                required
                value={data.password}
                onChange={onChange}
              />
              <p className='text text_size_x-small'>
                Пароль должен содержать минимум 1 заглавную букву, 1 строчную
                букву, 1 цифру.Минимальная длина пароля составляет 9
                символов.Необходим для авторизации на сайте.В приложении вход по
                Seed-фразе.
              </p>
            </fieldset>
            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='secondpassword'>
                Повторите пароль
              </label>
              <input
                className='form__input text text_size_normal'
                type='password'
                name='secondpassword'
                required
              />
            </fieldset>
            <fieldset className='form__fieldset'>
              <label
                className='form__label text text_size_normal'
                htmlFor='text'>
                Telegram
              </label>
              <input
                className='form__input text text_size_normal'
                type='text'
                name='telegram'
                id='text'
                required
                value={data.telegram}
                onChange={onChange}
              />
            </fieldset>
            <fieldset className='form__fieldset form__fieldset_type_politics'>
              <label
                className='form__label form__label_type_politics text text_size_small'
                htmlFor='politics'>
                я согласен с политикой конфиденциальности и пользовательским
                соглашением.
              </label>
              <input
                className='form__input form__input_type_politics text text_size_normal'
                type='checkbox'
                name='politics'
                id='politics'
                required
              />
            </fieldset>
            <div className='footer__politics'>
              <NavLink
                to='/privacy'
                className='footer__status text text_size_small'>
                Пользовательское соглашение
              </NavLink>
              <NavLink
                to='/policy'
                className='footer__status text text_size_small'>
                Политика конфиденциальности
              </NavLink>
            </div>
            <button
              type='submit'
              className='link link_active'>
              Создать Аккаунт
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Registration;
