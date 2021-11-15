import React, { useEffect } from 'react'
import './Switcher.css'


const Switcher = ({ themeToggler, check }) => {
  useEffect(() => {

  }, [check])


  return (
    <div>
      <div className="switcher">
        <input type='checkbox' className='switcher__input' id='checkbox-1' onClick={themeToggler} readOnly checked={check === true ? true : false} />
        <label htmlFor='checkbox-1' className="text text_size_x-small">{check === true ? 'Светлая тема' : 'Темная тема'}</label>
      </div>
    </div>
  )

}

export default Switcher
