import React, { Component } from "react";

export default class ErrorBoundary extends React.Component() {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    if (this.state.hasError) {
      return <div>error</div>;
    } else {
      return this.props.children;
    }
  }
}
