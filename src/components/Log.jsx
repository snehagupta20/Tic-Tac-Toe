import React from 'react'
 
//output info about the different turns of the players (to analyse the game after)
const Log = ({gameTurns}) => {

    
  return (
    <ol id='log'>
      {gameTurns.map((gameTurns,index)=>{
        const {square, player} = gameTurns;
        const {row,col} = square;

        return(
            <li key={index}>
                {`Row: ${row}, Col: ${col}, by player, ${player}`}
            </li>
        );
      })}
    </ol>
  )
}

export default Log
