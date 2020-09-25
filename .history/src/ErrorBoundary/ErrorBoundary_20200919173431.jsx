import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError = false,
        errorMsg = ''
    }

    componentDidCatch = (err, info) => { //will be executed whenever a component wrapped by ErrorBoundary throws an error
        this.setState({errorMsg: err, hasError: true});
    }

    render() {
        return <h1>Somthing went wrong</h1>;
    }
}
