import React from 'react';
import {
  Link
} from "react-router-dom";

import './Header.css';
import './HeaderDark.css';
import Logo from '../Logo/Logo';
import Switcher from '../Switcher/Switcher';


function Header({ themeToggler, check, onSignOut }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <div className="wrapper header__logo_mobile">
              <Link to="/" className="header__logo  logo">
                <Logo />
              </Link>
            </div>

            <nav className="header__nav ">
              <div className="wrapper header__logo_desktop">
                <Link to="/" className="header__logo  logo">
                  <Logo />
                </Link>
              </div>

              <ul className="header__menu menu">
                <li className="header__item">
                  <Switcher themeToggler={themeToggler} check={check} />
                </li>
                <li className="header__item"> <Link to="/about" className="header__menu-link ">О компании</Link></li>
                <li className="header__item"> <Link to="/roadmap" className="header__menu-link ">Дорожная карта</Link></li>
                <li className="header__item"> <Link to="/support" className="header__menu-link ">Поддержка</Link></li>
              </ul>
              <div className="header__profile">
                <Link to="/profile" className=" header__profile-link">Профиль</Link>
                <select
                  className="header__lang" style={{ display: 'none' }}>
                  <option defaultValue="RU">RU</option>
                  <option value="EN">EN</option>
                </select> </div>
              <ul className="header__contacts contacts">
                <li className="header__contacts-item">По всем вопросам <br /> info@infy-corp.com</li>
                <li className="header__item">
                  <Link to="/login" className="link link_active rollup" onClick={onSignOut}>Выход</Link>
                </li>
              </ul>
            </nav>

            <div className="header__burger"> <span></span> <span></span> <span></span> </div>

          </div>
        </div>

      </header>
      {/* <div className="header__padding"> </div> */}
    </>
  )
}

export default Header
