import React, { useState } from 'react'

const GameBoard = ({ onSelectSq, turns, gameBoard }) => {

  return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIdx) => <li key={rowIdx}>
            <ol>
                {row.map((symbol, colIdx) => 
                <li key={colIdx}>
                    <button onClick={() => onSelectSq(rowIdx, colIdx)} disabled={symbol !== null}>{symbol}</button>
                </li>)}
            </ol>
        </li>)} 
    </ol>
  )
}

export default GameBoard


