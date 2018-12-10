import React from "react";

export default class TwitterAlert extends React.Component {
  checkHandler = () => {
      
    if (this.props.twittLength <= 5) {
      return "text to short";
    } else {
      if (this.props.twittLength > 100) {
        return "text long enough";
      }
      else{
          return null
      }
    }
  };
  render() {
    return <div>{this.checkHandler()}</div>;
  }
}
