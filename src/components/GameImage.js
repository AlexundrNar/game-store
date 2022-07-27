import React from 'react'
import '../styles/GameImage.scss'

const GameImage = ({ image = "" }) => {
  return (
    <div className='gameImage'
     style={{ backgroundImage: `url(${image})` }} />
  )
}

export default GameImage