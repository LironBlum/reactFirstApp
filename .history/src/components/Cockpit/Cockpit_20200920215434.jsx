import React from "react";
import styled from "styled-components";

const StyledButten = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padings: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;
const cockpit = props => {
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p1 className={classes.join(" ")}>Hello, world!</p1>
      <StyledButten alt={props.isShowPersons} onClick={props.clicked}>
        Toggle persons
      </StyledButten>
    </div>
  );
};
export default cockpit;
