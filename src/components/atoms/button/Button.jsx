import React from 'react'

function Button({children, className, onClick}) {
    const buttonClass = `button ${className || ''}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button