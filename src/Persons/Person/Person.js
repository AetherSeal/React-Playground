import React from "react";

const Person = prop => {
  let text = prop.name;

  return (
    <div>
      <div onClick={prop.click} /> i am {text} and i have {prop.age}{" "}
      <div>
        name:{" "}
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={prop.change}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default Person;
