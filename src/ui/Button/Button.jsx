import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css'

const Button = ({
  children, onClick, className, disabled, active
}) => {
  const classes = classNames(
    'button',
    className,
    { active },
  )

  return (
    <button
      className={classes}
      disable={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: "",
  onClick: () => { },
  className: "",
  disabled: false,
  active: false,
};

export default Button
