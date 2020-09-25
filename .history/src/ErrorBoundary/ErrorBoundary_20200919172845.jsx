import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError = false
    }
  render() {
    return <h1>Somthing went wrong</h1>;
  }
}
