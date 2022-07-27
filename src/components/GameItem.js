import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GameImage from './GameImage'
import GameBuy from './GameBuy'
import GameGenre from './GameGenre'
import { setCurrentGame } from '../redux/games/reducer'
import '../styles/GameItem.scss'

const GameItem = ({ game }) => {
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigation(`/app/${game.title}`)
  }

  return (
    <div className='gameItem'
     onClick={handleClick}>
      <GameImage image={game.image} />
      <div className='gameItem__details'>
        <span className='gameItem__title'>{game.title}</span>
        <div className='gameItem__genre'>
          {game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
        </div>
        <div className='gameItem__buy'>
          <GameBuy game={game}/>
        </div>
       </div>
    </div>
  )
}

export default GameItem