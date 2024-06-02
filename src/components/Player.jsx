import React from 'react'
import { useState } from 'react'



const Player = ({Initialname,symbol}) => {

    const [playerName, setPlayerName] = useState(Initialname);
    const [isEditing, setIsEditing] = useState(false);


    let btn="Edit";
    let editiblePlayerName=<span className='player-name'>{Initialnamename}</span>;
    function handleClick(){
        // when updating your state based on the previos value of that state, you should pass a function to that state updating functionn instead of that new state value you wannna have. 
        
        // this means, dont use 
        // setIsEditing(!isEditing)
        // isLabelWithInternallyDisabledControl, use 
        // setIsEditing((editing)=> !isEditing);

        // but why? this code looks unnecessarily complex. 

        // react schedules the state pehle se, it does not updates usi vakt

        setIsEditing((editing) => !editing);
    }

    if(isEditing){
        editiblePlayerName = <input type="text" required value={Initialname}></input>;
        btn="Save"; 
    }
    else{
        btn="Edit";
    }

    return (
        <div>
            <li>
                <span className='player'>{editiblePlayerName}</span>
                <span className='player-symbol'>{symbol}</span>
                <button onClick={handleClick}>{btn}</button>

            </li>
        </div>
    )
}

export default Player