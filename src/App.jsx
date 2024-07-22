import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { winningCombinations } from './winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function activePlayer(gameTurns) {
  let currentPlayer = 'O';

  if (gameTurns.length > 0 && gameTurns[0].player === 'O') {
    currentPlayer = 'X';
  }

  return currentPlayer;
}

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });

  const currentPlayer = activePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of winningCombinations) {
    const firstSqSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSqSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSqSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSqSymbol && 
      firstSqSymbol === secondSqSymbol && 
      secondSqSymbol === thirdSqSymbol) {
        winner = players[firstSqSymbol];
    }
  }

  const draw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns((prevTurns) => {

      const currentPlayer = activePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIdx, col: colIdx }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handleNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player Initialname="Player 1" symbol="O" isActive={currentPlayer === 'O'} onNameChange={handleNameChange}></Player>
          <Player Initialname="Player 2" symbol="X" isActive={currentPlayer === 'X'} onNameChange={handleNameChange}></Player>
        </ol>
        { (winner || draw) && <GameOver winner={winner} handleRestart={handleRestart}></GameOver>}
        <GameBoard onSelectSq={handleSelectSquare} turns={gameTurns} gameBoard={gameBoard}></GameBoard>
      </div>
      <Log gameTurns={gameTurns}></Log>
    </main>
  )
}

export default App