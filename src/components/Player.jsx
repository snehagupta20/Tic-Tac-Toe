import React from 'react'
import { useState } from 'react'



const Player = ({Initialname,symbol}) => {

    const [playerName, setPlayerName] = useState(Initialname);
    const [isEditing, setIsEditing] = useState(false);


    let btn="Edit";
    let editiblePlayerName=<span className='player-name'>{Initialname}</span>;
    function handleClick(){
        

        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    if(isEditing){
        editiblePlayerName = <input type="text" required value={Initialname} onChange={handleChange}></input>;
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