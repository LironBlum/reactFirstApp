import React from "react";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.id}>
        <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => props.changed(event, person.id)}
          isAuth={props.isAuthenticated}
        />
      </ErrorBoundary>
    );
  });

export default persons;
