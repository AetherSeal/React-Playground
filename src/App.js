import React, { Component } from "react";
import AnimalManager from "./AnimalManager/AnimalManager";
import UserManager from "./UserManager/UserManager";
import "./App.css";

class App extends Component {
  state = {
    display: null
  };


  catAppHandler = () => {
    this.setState({
      display: <AnimalManager/>
    });
  };

  userAppHandler = () => {
    this.setState({
      display: <UserManager />
    });
  };

  appHandler = e => {
    switch (e.target.id) {
      case "cat":
        this.catAppHandler();
        break;

      case "user":
        this.userAppHandler();
        break;

      case "debugger":
        debugger
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Playground App</h1>
        <div
          id="appmenu"
          className={this.state.display == null ? "show" : "dont-show"}
        >
          <button
            id="cat"
            onClick={this.appHandler}
            className="button-dashboard"
          >
            Cats app
          </button>
          <button
            id="user"
            onClick={this.appHandler}
            className="button-dashboard"
          >
            User app
          </button>
          <button
            id="debugger"
            onClick={this.appHandler}
            className="button-dashboard"
          >
            debugger app
          </button>
        </div>
        {this.state.display}
      </div>
    );
  }
}

export default App;
