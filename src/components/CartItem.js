import React from 'react'
import '../styles/CartItem.scss'

const CartItem = ({ title, price, id }) => {
  return (
    <div className='cartItem'>
      <span>{title}</span>
      <div className='cartItem__price'>
        <span>{price} руб.</span>
      </div>
    </div>
  )
}

export default CartItem