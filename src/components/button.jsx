import React from 'react'

function Button({ icon: Icon, type, buttonText, size }) {
  let buttonStyles;
  let buttonSize;

  if (type === 'filled') {
    buttonStyles = 'bg-cta text-white'
  } else if (type === 'outline') {
    buttonStyles = 'border border-2 border-cta'
  }

  if (size === 'small') {
    buttonSize = 'h-9'
  } else if ( size === 'medium') {
    buttonSize = 'h-12'
  } else if ( size === 'large') {
    buttonSize = 'h-15'
  }
  
  return (
    <button
      className={`font-workSans text-body md:text-h5 xl:h-18 ${buttonStyles} flex items-center gap-2 px-12 rounded-2xl text-white`}>
      {Icon && <Icon />}
      {buttonText}
    </button>
  )
}

export default Button
