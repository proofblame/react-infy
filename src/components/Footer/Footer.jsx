
import React from 'react';
import {
  Link
} from "react-router-dom";
import './Footer.css'
import Logo from '../Logo/Logo';

function Footer({onSignOut}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__wrapper">
            <div className="footer__logo wrapper">
              <Link to="/react-infy" className="header__logo logo">
                <Logo />
              </Link>
            </div>
            <div className="footer__politics">
              <Link to="/privacy" className="footer__status text text_size_small">
                Пользовательское соглашение
              </Link>
              <Link to="/policy" className="footer__status text text_size_small">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <nav className="footer__nav">
            <ul className="menu">
              <li className="footer__item"><Link to="/react-infy" className="footer__link text text_size_normal">О компании</Link></li>
              <li className="footer__item text text_size_normal"><Link to="/marketing" className="footer__link text text_size_normal">Маркетинг план</Link></li>
              <li className="footer__item text text_size_normal"><Link to="/roadmap" className="footer__link text text_size_normal">Дорожная карта</Link></li>
              <li className="footer__item text text_size_normal"><Link to="/whitepaper" className="footer__link text text_size_normal">White Paper</Link></li>
              <li className="footer__item text text_size_normal"><Link to="/support" className="footer__link text text_size_normal">Поддержка</Link></li>
            </ul>
            <ul className="footer__contacts">
              <li className="footer__item text text_size_normal"> Общие вопросы <br /> info @infinity.network </li>
              <li className="footer__item text text_size_normal">Партнерство/листинг <br />
                partnership @infinity.network</li>
              <li className="footer__item text text_size_normal">PR & Маркетинг <br /> pr @infinity.network</li>
            </ul>
          </nav>
          <div className="wrapper">
            <div className="footer__buttons">
              <Link to="/profile" className="footer__button link link_active">Профиль</Link>
              <Link to="/login" className="footer__button link" onClick={onSignOut}>Выход</Link>
            </div>
            <p className="footer__status text text_size_small">Статус mainnet: <span
              className="footer__status footer__status_active">активен</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
