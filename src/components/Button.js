import React from 'react'

const Button = ({
  onClick,
  children,
}) => {
  return (
    <button className='btn btn-warning'>
      {children}
    </button>
  )
}

export default Button