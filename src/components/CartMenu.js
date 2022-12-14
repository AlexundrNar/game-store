import React from 'react'
import Button from './Button'
import CartItem from './CartItem'
import { calcTotalPrice } from './utils'
import '../styles/CartMenu.scss'

const CartMenu = ({items, onClick}) => {
  return (
    <div className='cartMenu'>
      <div className='cartMenu__games-list'>
        {
          items.length > 0 ? items.map(game =>
            <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Корзина пуста'
        }
      </div>
      {
        items.length > 0 ?
        <div className='cartMenu__arrange'>
          <div className='cartMenu__total-price'>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type='primary' size='m' onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
        : null
      }
    </div>
  )
}

export default CartMenu