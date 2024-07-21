import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

const App = () => {

  const [activePlayer, setActivePlayer] = useState('O');

  function handleSelectSquare(){
      setActivePlayer((currActivePlayer) => currActivePlayer === 'O' ? 'X' : 'O');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player Initialname="Player 1" symbol="O" isActive={activePlayer === 'O'}></Player>
          <Player Initialname="Player 2" symbol="X" isActive={activePlayer === 'X'}></Player>
        </ol>
        <GameBoard onSelectSq={handleSelectSquare} activeSymbol={activePlayer}></GameBoard>
      </div>
      log
    </main>
  )
}

export default App


