import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError = false,
        errorMsg = ''
    }

    componentDidCatch = (err, info) => { //will be executed whenever a component wrapped by ErrorBoundary throws an error
        this.state.errorMsg = info;
        this.state.hasError = true;
    }

    render() {
        return <h1>Somthing went wrong</h1>;
    }
}
