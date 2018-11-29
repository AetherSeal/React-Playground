import React, { Component } from "react";
import Animal from "./Animal/Animal";
import "./App.css";

class App extends Component {
  state = {
    animals: [
      { name: "bob", age: "2" },
      { name: "tom", age: "45" },
      { name: "felix", age: "999" }
    ]
  };

  animalList = () => {
    const list = this.state.animals.map(animal => {
      return <Animal name={animal.name} age={animal.age} />;
    });
    return list;
  };

  changeAgeHandler = e => {
    this.setState({
      animals: [...this.state.animals, { name: "pepe", age: "70" }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Cat´s App </h1> <div>{this.animalList()}</div>
        <button onClick={this.changeAgeHandler}>change age!</button>
      </div>
    );
  }
}

export default App;
