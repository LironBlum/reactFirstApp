import React from "react";
//import "./Person.css";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: pink;

  @media (min-width: 50px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    //allows multi lines
    //<div className="Person" style={style}>
    <ErrorBoundary>
      <StyledDiv>
        <p onClick={props.click}>
          Im {props.name}, Im {props.age}. random number: {Math.random()}
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
    </ErrorBoundary>
  ); //random number: example for inserting one line expression with {}
};

export default person;
