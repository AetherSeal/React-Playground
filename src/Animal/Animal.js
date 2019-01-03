import React from "react";
import classes from "./Animal.css";
//example of a simple react component
const animal = props => {
  return (
    <div className={classes.animal}>
      <div className={classes.wrapper}>
        <div>
        <span>Name:</span> {props.name} <span>Age:</span> {props.age}
        </div>
        <div>
          <span>Color:</span> {props.color} <span>Specie:</span> {props.specie}
        </div>
        <span className={classes.delete} onClick={props.delete}>
          X
        </span>
      </div>
    </div>
  );
};
export default animal;
