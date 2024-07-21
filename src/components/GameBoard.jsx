import React, { useState } from 'react'

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

const GameBoard = ({ onSelectSq, turns }) => {
    
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn;
        const {row,col} = square;

        gameBoard[row][col] = player;
    }

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


