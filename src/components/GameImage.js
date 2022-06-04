import React from 'react'

const GameImage = ({image = ""}) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} />
  )
}

export default GameImage