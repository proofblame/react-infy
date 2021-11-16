import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import SeedPopup from '../SeedPopup/SeedPopup';
import Particles from '../Particles/Particles';

function Registration(props) {
  useEffect(() => {
    document.title = "Registration"
  }, []);



  const location = useLocation();
  const joinedBy = location.search.slice(10)

  function urldecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
  }

  urldecode(joinedBy)

  const history = useHistory();
  ;

  const [data, setData] = useState({
    username: '',
    joinedBy: '' || urldecode(joinedBy),
    password: '',
    email: '',
    telegram: '',
  });
  const [modalActive, setModalActive] = useState(false);

  const [seed, setSeed] = useState('');

  function onChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }


  const handleClosePopup = () => {
    setModalActive(false);
    history.push("/login");

  }



  function onSubmit(e) {
    e.preventDefault();
    props
      .onRegister(data.username, data.joinedBy, data.email, data.password, data.telegram)
      .then((user) => {
        setSeed(user.seed)
        setModalActive(true)

      })
      .catch(e => console.error(e.message))

  }

  return (
    <>
      <Particles />
      <main className='main'>

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
                  className='wallet__button link link_active' activeClassName='link_active'>

                  Регистрация
                </NavLink>
              </section>

              <fieldset className='form__fieldset'>
                <label
                  className='form__label text text_size_normal'
                  htmlFor='joinedBy'>
                  Никнейм пригласившего
                </label>
                <input
                  className='form__input text text_size_normal'
                  type='text'
                  name='joinedBy'
                  value={urldecode(joinedBy) || data.joinedBy}
                  onChange={onChange}
                  autoComplete="true"
                />
              </fieldset>

              <fieldset className='form__fieldset'>
                <label
                  className='form__label text text_size_normal'
                  htmlFor='username'>
                  Ваш никнейм
                </label>
                <input
                  className='form__input text text_size_normal'
                  type='text'
                  name='username'
                  required
                  value={data.username}
                  onChange={onChange}
                  autoComplete="username"
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
                  autoComplete="email"
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
                  autoComplete="new-password"

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
              <p className='text text_size_x-small'>
                Формы для ввода чувствительны к регистру!
              </p>
              <button
                type='submit'
                className='link link_active'>
                Создать Аккаунт
              </button>
            </form>
          </section>
        </div>
      </main>
      <Modal active={modalActive}>
        <SeedPopup onClose={handleClosePopup} seed={seed}>

        </SeedPopup>
      </Modal>
    </>
  );
}

export default Registration;
