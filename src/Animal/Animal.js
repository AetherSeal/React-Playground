import React from "react";
import "./Animal.css";
//example of a simple react component
const animal = props => {
  return (
    <div className="animal">
      <div className="animal-wrapper">
        <div>
          i am {props.name} and i have {props.age}
        </div>
        <div>{props.children}</div>
        <span className="delete-animal" onClick={props.delete}>X</span>
      </div>
    </div>
  );
};
export default animal;
