import React from "react";
import classes from './UserInput.css'

const userInput = props => {
  
  return (
    <div className={classes.wrapper}>
      <h1>user input</h1>
      {'user name: '}<input type="text"className={classes.usernameinput} onChange={props.onchangehandler} value={props.username}/>
    </div>
  );
};

export default userInput;
