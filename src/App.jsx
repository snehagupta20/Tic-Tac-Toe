import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';

const App = () => {

  const [activePlayer, setActivePlayer] = useState('O');
  // const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(){
      setActivePlayer((currActivePlayer) => currActivePlayer === 'O' ? 'X' : 'O');
      // setGameTurns();
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
      <Log></Log>
    </main>
  )
}

export default App


