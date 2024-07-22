import React from 'react'

const GameOver = ({winner, handleRestart}) => {
  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>Its a Draw!</p>}
        <p>
            <button onClick={handleRestart} >Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver
