import React from 'react'
import './Switcher.css'

const Switcher = () => {
  return (
    <div className="learn__switcher">
      <input type='checkbox' className='learn__switcher__input' id='checkbox-1' readOnly />
      <label htmlFor='checkbox-1' className="text text_size_x-small"></label>
    </div>
  )

}

export default Switcher
