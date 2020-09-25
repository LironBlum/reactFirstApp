import React from "react";
import ErrorBoundary from "./../ErrorBoundary";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          click={() => props.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          changed={event => props.handleNameChange(event, person.id)}
        />
      </ErrorBoundary>
    );
  });
