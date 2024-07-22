import React, { useState } from 'react'

const Player = ({Initialname,symbol,isActive, onNameChange}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [isName, setIsName] = useState(Initialname);

  function handleClick(){
    setIsEdit(editing => !editing);
    if(isEdit){
      onNameChange(symbol, isName);
    }
    
  }

  function handleChange(event){
    setIsName(event.target.value);
  }

  
  return (
    <div>
      <li className={isActive ? 'active' : ''}>
        <span className='player' >
          {isEdit ? 
          (<input type='text' required value={isName} onChange={handleChange}></input>) : 
          (<span className='player-name' >{isName}</span>) }

          <span className='player-symbol' >{symbol}</span>
        </span>
        <button onNameChange={onNameChange} onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
      </li>
    </div>
  )
}

export default Player;
