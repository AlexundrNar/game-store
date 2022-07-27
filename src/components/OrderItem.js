import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../redux/cart/reducer'
import '../styles/OrderItem.scss'
import GameImage from './GameImage'

const OrderItem = ({ game }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className='orderItem'>
      <div className='orderItem__image'>
        <GameImage image={game.image} />
      </div>
      <div className='orderItem__title'>
        <span>{game.title}</span>
      </div>
      <div className='orderItem__price'>
        <span>{game.price} руб.</span>
        <img
          src='../images/cancel_cross_delete_remove_icon_131554.svg'
          onClick={handleClick}
          className='orderItem__remove-icon'></img>
      </div>
    </div>
  )
}

export default OrderItem