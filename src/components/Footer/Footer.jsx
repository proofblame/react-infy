
import React from 'react';
import {
  Link
} from "react-router-dom";
import './Footer.css'
import Logo from '../Logo/Logo';

function Footer({ onSignOut }) {
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
              <li className="footer__item"><Link to="/" className="footer__link text text_size_normal">О компании</Link></li>
              <li className="footer__item text text_size_normal"><Link to="/support" className="footer__link text text_size_normal">Поддержка</Link></li>
            </ul>
            <ul className="footer__contacts">
              <li className="footer__item text text_size_normal">По всем вопросам <br /> info@infy-corp.com </li>
            </ul>
          </nav>
          <div className="wrapper">
            <div className="footer__buttons">
              <Link to="/profile" className="footer__button link link_active">Профиль</Link>
              <Link to="/login" className="footer__button link" onClick={onSignOut}>Выход</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
