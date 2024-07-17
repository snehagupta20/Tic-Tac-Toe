import React, { useState } from 'react'

const Player = ({Initialname,symbol}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [isName, setIsName] = useState(Initialname);

  function handleClick(){
    setIsEdit(editing => !editing);
  }

  function handleChange(event){
    // console.log(event);
    setIsName(event.target.value);
  }

  
  return (
    <div>
      <li >
        <span className='player' >

          {isEdit ? 
          (<input type='text' required value={isName} onChange={handleChange}></input>) : 
          (<span className='player-name' >{isName}</span>) }

          <span className='player-symbol' >{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
      </li>
    </div>
  )
}

export default Player;
