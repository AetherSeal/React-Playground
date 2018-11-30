import React from "react";
import Animal from "../Animal/Animal";
import "./AnimalManager.css";

export default class AnimalManager extends React.Component {
  state = {
    animals: [
      {
        id: 1,
        name: "bob",
        age: "2"
      },
      {
        id: 2,
        name: "tom",
        age: "45"
      },
      {
        id: 3,
        name: "felix",
        age: "999"
      }
    ]
  };

  animalList = () => {
    const list = this.state.animals.map((animal, index) => {
      return (
        <Animal
          name={animal.name}
          age={animal.age}
          key={animal.id}
          delete={() => this.deleteAnimalHandler(animal.id)}
        />
      );
    });
    return list;
  };

  addAnimalHandler = e => {
    e.preventDefault();
    debugger
    const id = new Date();

    const newAnimal = {
      name: e.target.name.value,
      age: e.target.age.value,
      color: e.target.color.value,
      specie: e.target.specie.value,
      id: id.getTime()
    };

    this.setState({
      animals: [...this.state.animals, newAnimal]
    });
  };
  deleteAnimalHandler = key => {
    const newAnimals = this.state.animals.filter(animal => {
      return animal.id !== key ? animal : null;
    });
    this.setState({
      animals: newAnimals
    });
  };

  render() {
    return (
      <div className="animal-manager" onSubmit={this.addAnimalHandler}>
        <form action="">
          <div>
            name: <input type="text" id="name" />
          </div>
          <div>
            age: <input type="text" id="age" />
          </div>
          <div>
            color: <input type="text" id="color" />
          </div>
          <div>
            specie: <input type="text" id="specie" />
          </div>
          <button className="button-form" type="submit">Add Animal</button>
        </form>
        <div>{this.animalList()}</div>
      </div>
    );
  }
}
