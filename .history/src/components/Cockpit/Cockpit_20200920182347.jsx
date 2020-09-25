import React from "react";

const cockpit = props => {
  const classes = [];
  if (this.state.persons.length <= 2) {
    classes.push("red");
  }
  if (this.state.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <p1 className={classes.join(" ")}>Hello, world!</p1>
      <StyledButten
        alt={this.state.showPersons}
        onClick={this.togglePersonsHandler}
      >
        Toggle persons
      </StyledButten>
    </div>
  );
};
