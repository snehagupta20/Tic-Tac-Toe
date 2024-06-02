import React from 'react'
import Player from './components/Player'

const App = () => {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player Initialname="Player 1" symbol="O"></Player>
          <Player Initialname="Player 2" symbol="X"></Player>
        </ol>

        game board
      </div>
      log
    </main>
  )
}

export default App


