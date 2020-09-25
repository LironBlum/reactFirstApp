import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Joana', age: 22 },
      { id: '2', name: 'Joan', age: 18 },
      { id: '3', name: 'Jo', age: 15 },
    ],
    isShowPersons: true,
    changeCounter: 0,
    authenticated: false
  }

  // Two way binding example
  handleNameChangeByClick = (newName) => {
    console.log("handleNameChangeByClick executed");
    this.setState({
      persons: [{ id: '1', name: newName, age: 22 },
      { id: '2', name: newName, age: 18 },
      { id: '3', name: newName, age: 15 }]
    })
  }

  handleNameChange = (event, id) => {
    console.log("handleNameChange executed");
    const person_index = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const chosen_person = {
      ...this.state.persons[person_index] //create new object and not mutate the state directly 
    };

    chosen_person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[person_index] = chosen_person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }
  togglePersonsHandler = (event, id) => {
    console.log("togglePersonsHandler executed");
    const is_show = this.state.isShowPersons;
    this.setState({ isShowPersons: !is_show });
  }

  deletePersonHandler = (persons_index) => {
    console.log("deletePersonHandler executed")
    const persons = [...this.state.persons];
    persons.splice(persons_index, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    console.log("loginHandler executed");
    this.state.authenticated = true;

  }

  render() {
    let persons = null;
    if (this.state.isShowPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.handleNameChange}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          <Cockpit
            title={this.props.appTitle}
            persons={this.state.persons}
            isShowPersons={this.state.isShowPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withClass(App, App.className);
