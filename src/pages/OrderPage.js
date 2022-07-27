import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice, enumerate } from '../components/utils'
import OrderItem from '../components/OrderItem'
import '../styles/OrderPage.scss'


const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className='orderPage'>
      <div className='orderPage__left'>
        { items.map(game => <OrderItem game={game} />) }
      </div>
      <div className='orderPage__right'>
        <div className='orderPage__total-price'>
          <span>
            {items.length} {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму {calcTotalPrice(items)} рублей
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage