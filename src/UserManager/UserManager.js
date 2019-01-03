import React from "react";
import UsrInput from "../UserInput/UserInput";
import UsrOutput from "../UserOutput/UserOutput";
import classes from "../UserManager/UserManager.css"
export default class UserManager extends React.Component {
  state = {
    username: "default user name"
  };
  userNameHandler = e => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    return (
      <div>
        <UsrInput
          username={this.state.username}
          onchangehandler={this.userNameHandler}
        />
        <div className={classes.container}>
          <UsrOutput username={this.state.username} />
          <UsrOutput />
          <UsrOutput />
          <UsrOutput />
          <UsrOutput />
        </div>
      </div>
    );
  }
}
