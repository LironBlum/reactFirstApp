import React, { useRef, useEffect } from "react";
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
const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    //toggleBtnRef.current.click(); //click the btn on mount
  }, []);
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
      <StyledButten
        ref={toggleBtnRef}
        alt={props.isShowPersons}
        onClick={props.clicked}
      >
        Toggle persons
      </StyledButten>
    </div>
  );
};
export default Cockpit;
