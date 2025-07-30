import React from 'react'

function Button({type,children}) {
  return (
    <button className={`flex items-center gap-2 p-3 rounded-2xl text-white ${type == 'primary' ? 'bg-cta' : 'border border-cta'}`}>
      {children}
    </button>
  )
}

export default Button
