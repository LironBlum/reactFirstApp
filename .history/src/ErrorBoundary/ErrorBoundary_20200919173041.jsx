import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError = false,
        errorMSG = ''
    }

    componentDidCatch(err, info){ //will be executed whenever a component wrapped by ErrorBoundary throws an error

    }

    render() {
        return <h1>Somthing went wrong</h1>;
    }
}
