import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../redux/cart/reducer'
import Button from './Button'
import '../styles/GameBuy.scss'

const GameBuy = ({ game }) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)
  
  const handleClick = (e) => {
    e.stopPropagation()
    if ( isItemInCart ) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
  }


  return (
    <div className='gameBuy'>
      <span className='gameBuy__price'>{game.price} руб.</span>
      <Button
        type={ isItemInCart ? 'secondary' : 'primary' }
        onClick={ handleClick }
      >
        {
          isItemInCart ? "Убрать из корзины" : "В корзину"
        }
      </Button>
    </div>
  )
}

export default GameBuy