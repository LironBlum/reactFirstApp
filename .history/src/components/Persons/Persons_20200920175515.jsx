import React from "react";
import ErrorBoundary from "./../ErrorBoundary";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          changed={event => this.handleNameChange(event, person.id)}
        />
      </ErrorBoundary>
    );
  });
