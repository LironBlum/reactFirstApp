import React from "react";
//import "./Person.css";
import styled from "styled-components";
import propTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

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
    <div>
      <AuthContext.Consumer>
        {context => {
          context.authenticated ? (
            <p>Authenticated</p>
          ) : (
            <p>Not Authenticated</p>
          );
        }}
      </AuthContext.Consumer>
      <StyledDiv>
        <p onClick={props.click}>
          Im {props.name}, Im {props.age}. random number: {Math.random()}
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyledDiv>
    </div>
  ); //random number: example for inserting one line expression with {}
};

person.propTypes = {
  click: propTypes.func,
  age: propTypes.number
};

export default person;
