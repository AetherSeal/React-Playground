import React from "react";
import Person from "./Person/Person";

const Persons = props => {
  const listOfPersons = props.persons.map(person => {
    return (
      <Person
        click={() => props.clicked(person.id)}
        change={event => props.changed(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
        classes={props.parentClass.flexContent}
      />
    );
  });
  return <div className={props.parentClass.flexContainer}>{listOfPersons}</div>;
};
export default Persons;
