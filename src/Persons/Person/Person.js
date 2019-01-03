import React from "react";

const Person = props => {
  let text = props.name;

  return (
    <div className={props.classes}>
      <div onClick={props.click} /> i am {text} and i have {props.age}{" "}
      <div>
        name:{" "}
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={props.change}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Person;
