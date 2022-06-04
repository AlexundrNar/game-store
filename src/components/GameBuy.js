import React from 'react'
import Button from './Button'

const GameBuy = ({game}) => {
  return (
    <div>
      <span>{game.price} руб.</span>
      <Button 
        onClick={() => null}
      >
        В корзину
      </Button>
    </div>
  )
}

export default GameBuy