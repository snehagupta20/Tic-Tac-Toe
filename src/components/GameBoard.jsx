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
            //updating state in immutable state - refer readMe.md for more information
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIdx][colIdx]='X';
            return updatedBoard;
        });
    }

  return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIdx) => <li key={rowIdx}>
            <ol>
                {row.map((symbol, colIdx) => <li key={colIdx}>
                    <button onClick={() => handleGameBoard(rowIdx, colIdx)}>{symbol}</button>
                </li>)}
            </ol>
        </li>)} 
    </ol>
  )
}

export default GameBoard


