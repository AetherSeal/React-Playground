import React, { Component } from "react";
import PropTypes from "prop-types";
import AnimalManager from "./AnimalManager/AnimalManager";
import UserManager from "./UserManager/UserManager";
import TwitterManager from "./Twitter/Twitter";
import PersonsManager from "./Persons/Persons";
import Menu from "./Menu/Menu";
import Classes from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "",
      display: null,
      apps: ["animal", "user", "twitter", "persons", "debugger"],
      persons: [
        {
          name: "fulano",
          age: "23",
          id: 0
        },
        {
          name: "mengano",
          age: "21",
          id: 2
        },
        {
          name: "sutanoo",
          age: "22",
          id: 1
        }
      ]
    };
    console.log("app.js constructor");
  }

  _deletePersonHandler = id => {
    const newListOfPersons = this.state.persons.filter(p => {
      if ((p.id = id)) {
        return null;
      }
      return p;
    });
    this.setState({
      persons: newListOfPersons
    });
  };

  _nameChangedHandler = (event, id) => {
    console.log('setstate 1')
    //get newvalue
    const name = event.target.value;
    debugger;

    this.setState((prevState, props) => {
      debugger;
      //get index
      const personIndex = prevState.persons.findIndex(p => {
        return id === p.id;
      });

      //get person
      const personToUpdate = prevState.persons[personIndex];
      personToUpdate.name = name;

      //update the list
      const updatedListOfpersons = [...prevState.persons];
      updatedListOfpersons[personIndex] = personToUpdate;

      return {
        persons: updatedListOfpersons
      };
    });
    this._personsAppHandler()
  };

  _animalAppHandler = () => {
    this.setState({
      display: <AnimalManager />
    });
  };

  _userAppHandler = () => {
    this.setState({
      display: <UserManager />
    });
  };

  _twitterAppHandler = () => {
    this.setState({
      display: <TwitterManager />
    });
  };

  _personsAppHandler = () => {
    console.log('setstate 2')
    this.setState({
      ...this.props,
      display: (
        <PersonsManager
          persons={this.state.persons}
          clicked={this._deletePersonHandler}
          changed={this._nameChangedHandler}
        />
      )
    });
    this.setState({

    })
  };

  _appHandler = e => {
    switch (e.target.id) {
      case "animal":
        this._animalAppHandler();
        break;

      case "user":
        this._userAppHandler();
        break;

      case "twitter":
        this._twitterAppHandler();
        break;

      case "persons":
        this._personsAppHandler();
        break;

      case "debugger":
        debugger;
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className={Classes.App}>
        <h1> Playground App </h1>{" "}
        <div
          id="appmenu"
          className={
            this.state.display == null ? Classes.show : Classes.dontShow
          }
        >
          <Menu
            apps={this.state.apps}
            clicked={this._appHandler}
            customClass={Classes.buttonDashboard}
          />
        </div>
        {this.state.display}
      </div>
    );
  }
}

export default App;
