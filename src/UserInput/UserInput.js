import React from "react";
import './UserInput.css'

const userInput = props => {
  
  return (
    <div className="user-input">
      <h1>user input</h1>
      {'user name: '}<input type="text" onChange={props.onchangehandler} value={props.username}/>
    </div>
  );
};

export default userInput;
