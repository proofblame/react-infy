import React from 'react'
import menuIcons from '../../images/icons/icons-menu.svg'
import {
  NavLink
} from "react-router-dom";

function Nav() {
  return (
    <div className="wrapper menu-nav-wrapper">
      <nav className="menu-nav">
        <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>
        <NavLink to="/profile" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img">
            <use href={menuIcons + "#menu-profile"}></use>
          </svg>
        </NavLink>
        <NavLink to="/team" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-team"}></use>
          </svg>
        </NavLink>
        <NavLink exact to="/" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-about"}></use>
          </svg>
        </NavLink>
        <NavLink to="/status" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-status"}></use>
          </svg>
        </NavLink>
        <NavLink to="/wallet" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-wallet"}></use>
          </svg>
        </NavLink>
        <NavLink to="/tarif" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-tarif"}></use>
          </svg>
        </NavLink>
        <NavLink to="/learn" className="menu-item" activeClassName="menu-item_active">
          <svg className="menu-img icon">
            <use href={menuIcons + "#menu-learn"}></use>
          </svg>
        </NavLink>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
          <defs>
            <filter id="shadowed-goo">

              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feBlend in2="shadow" in="goo" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </nav>

    </div>
  )
}

export default Nav
