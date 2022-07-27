import React from 'react'
import { GAMES } from '../data/DataGames'
import GameItem from '../components/GameItem'
import '../styles/HomePage.scss'

const HomePage = () => {
  return (
    <div className='homePage'>
      {GAMES.map(game => <GameItem game={game} key={game.id} />)}  
    </div>
  )
}

export default HomePage