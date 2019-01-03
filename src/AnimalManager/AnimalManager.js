import React from "react";
import Animal from "../Animal/Animal";
import classes from "./AnimalManager.css";

export default class AnimalManager extends React.Component {
  state = {
    animals: []
  };

  animalList = () => {
    const list = this.state.animals.map((animal) => {
      return (
        <Animal
          name={animal.name}
          age={animal.age}
          color={animal.color}
          specie={animal.specie}
          key={animal.id}
          delete={() => this.deleteAnimalHandler(animal.id)}
        />
      );
    });
    return list;
  };

  addAnimalHandler = e => {
    e.preventDefault();
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
    this.setState(()=>{
      return {animals: newAnimals}
    });
  };

  render() {
    return (
      <div className={classes.container} onSubmit={this.addAnimalHandler}>
        <form className={classes.wrapper} action="">
          <p>
            <label for="name">Name</label>
            <input type="text" id="name" />
          </p>
          <p>
            <label for="age">Age</label>
            <input type="text" id="age" />
          </p>
          <p>
            <label for="color">Color</label>
            <input type="text" id="color" />
          </p>
          <p>
            <label for="specie">Specie</label>
            <input type="text" id="specie" />
          </p>
          <button className={classes.button} type="submit">
            Add Animal
          </button>
        </form>
        <div>{this.animalList()}</div>
      </div>
    );
  }
}
