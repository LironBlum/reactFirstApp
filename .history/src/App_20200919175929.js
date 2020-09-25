import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import styled from "styled-components";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButten = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padings: 8px;
    cursor: pointer;

    &:hover{
      background-color: lightgreen;
      color: black;
    }
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Joana', age: 22 },
      { id: '2', name: 'Joan', age: 18 },
      { id: '3', name: 'Jo', age: 15 },
    ],
    showPersons: true
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
      persons: persons
    })
  }
  togglePersonsHandler = (event, id) => {
    console.log("togglePersonsHandler executed");
    const is_show = this.state.showPersons;
    this.setState({ showPersons: !is_show });
  }

  deletePersonHandler = (persons_index) => {
    console.log("deletePersonHandler executed")
    const persons = [...this.state.persons];
    persons.splice(persons_index, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.handleNameChange(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <p1 className={classes.join(' ')}>Hello, world!</p1>
        <StyledButten
          alt={
            this.state.showPersons
          }
          onClick={this.togglePersonsHandler}>Toggle persons
        </StyledButten>
        {persons}
      </div>

    );
  }
}

export default App;