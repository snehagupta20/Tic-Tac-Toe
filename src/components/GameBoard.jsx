import React, { useState } from 'react'

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = () => {
    
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleGameBoard(rowIdx, colIdx){
        setGameBoard((prevGameBoard)=> {
            prevGameBoard[rowIdx][colIdx]='X';
            return prevGameBoard;
        });
    }

  return (
    <ol id='game-board'>
        {initialGameBoard.map((row, rowIdx) => <li key={rowIdx}>
            <ol>
                {row.map((symbol, colIdx) => <li key={colIdx}>
                    <button onClick={handleGameBoard}>{symbol}</button>
                </li>)}
            </ol>
        </li>)} 
    </ol>
  )
}

export default GameBoard


