import React from 'react'
import './LogoLight.css'
import './LogoDark.css'
import logo from './images/logo.png'

const Logo = () => {
  return (
    <>
    <img className="logo__img" src={logo} alt="Infinity logo" />
    <span className="logo__text">infinity</span>
    </>
  )
}

export default Logo
