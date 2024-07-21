import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';


function activePlayer(gameTurns){
  let currentPlayer = 'O';

  if(gameTurns.length > 0 && gameTurns[0].player === 'O'){
    currentPlayer = 'X';
  } 

  return currentPlayer;
}

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = activePlayer(gameTurns);

  function handleSelectSquare(rowIdx,colIdx){
      setGameTurns((prevTurns) => {

        const currentPlayer = activePlayer(prevTurns);

        const updatedTurns = [ { square : { row : rowIdx, col : colIdx}, player : currentPlayer } , ...prevTurns];

        return updatedTurns;
      });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player Initialname="Player 1" symbol="O" isActive={currentPlayer === 'O'}></Player>
          <Player Initialname="Player 2" symbol="X" isActive={currentPlayer === 'X'}></Player>
        </ol>
        <GameBoard onSelectSq={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>
      <Log gameTurns={gameTurns}></Log>
    </main>
  )
}

export default App


