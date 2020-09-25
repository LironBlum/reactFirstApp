import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: ""
  };

  componentDidCatch = (err, info) => {
    //will be executed whenever a component wrapped by ErrorBoundary throws an error
    this.setState({ errorMsg: err, hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMsg}</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
