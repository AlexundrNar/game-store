import React from 'react'
import '../styles/ItemsInCart.scss'

const ItemsInCart = ({quantity = 0}) => {
  return quantity > 0 ? (
    <div className='itemsInCart'>
      {quantity}
    </div>
  ) : null
}

export default ItemsInCart