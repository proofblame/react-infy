import React, { useEffect } from 'react'
import './Switcher.css'
import { useLocation } from "react-router-dom";

const Switcher = ({ themeToggler, check }) => {
  useEffect(() => {

  }, [check])

  const switcherPath = ['/', '/login', '/registration', '/support'];
  let { pathname } = useLocation();
  return (
    <div>
      {switcherPath.some(path => pathname === path) ? (
        <div className="switcher">
          <input type='checkbox' className='switcher__input' id='checkbox-1' onClick={themeToggler} readOnly checked={check === true ? true : false} />
          <label htmlFor='checkbox-1' className="text text_size_x-small">{check === true ? 'Светлая тема' : 'Темная тема'}</label>
        </div>
      ) : ('')
      }
    </div>
  )

}

export default Switcher
