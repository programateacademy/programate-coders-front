import React from 'react'

function Button(children, className}) {
    const buttonClass = `button ${className || ''}`;
  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}

export default Button