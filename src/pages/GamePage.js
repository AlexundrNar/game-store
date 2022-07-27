import React from 'react'
import { useSelector } from 'react-redux'
import GameBuy from '../components/GameBuy'
import GameGenre from '../components/GameGenre'
import GameImage from '../components/GameImage'
import '../styles/GamePage.scss'

const GamePage = () => {
  const game = useSelector(state => state.game.currentGame)

  if (!game) return null

  return (
    <div className='gamePage'>
      <h1 className='gamePage__title'>{game.title}</h1>
      <div className='gamePage__content'>
        <div className='gamePage__left'>
          <iframe
            src={game.video}
            title="Youtube Video Player"
            frameBorder='0'
          ></iframe>
        </div>
        <div className='gamePage__right'>
          <GameImage image={game.image} />
          <p>{game.description}</p>  
          <p className='secondary-text'>Популярные метки этого продукта:</p>
          {game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
          <div className='gamePage__buy-game'>
            <GameBuy game={game} />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage