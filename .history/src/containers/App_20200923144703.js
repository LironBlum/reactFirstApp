import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Joana', age: 22 },
      { id: '2', name: 'Joan', age: 18 },
      { id: '3', name: 'Jo', age: 15 },
    ],
    isShowPersons: true,
    changeCounter: 0
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

    this.setState({
      persons: persons,
      changeCounter: this.state.changeCounter + 1
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

  render() {
    let persons = null;
    if (this.state.isShowPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.handleNameChange} />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          isShowPersons={this.state.isShowPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default withClass(App.className);
