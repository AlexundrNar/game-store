import React from 'react'
import GameImage from './GameImage'
import GameBuy from './GameBuy'
import GameGenre from './GameGenre'

const GameItem = ({game}) => {
  return (
    <div className='container card card-body my-6 mb-4 mt-2 g-4 col-4  h-100'>
      <img src="./images/forza_5.jpeg" className="card-img-top" alt="Картинка загружается" />
      <div >
        <span>{game.title}</span>
        <div>
          {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
        </div>
      </div>
      <GameBuy game={game}/>
    </div>
  )
}

export default GameItem