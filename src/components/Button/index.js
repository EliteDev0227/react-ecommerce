import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  padding: 10px 14px;
  ${({ darkMode }) => darkMode && `
    background-color: #10504f;
    border: 1px solid white;
  `}
`;

const Button = (props) => <ButtonWrapper darkMode={props.darkMode}>{props.text}</ButtonWrapper>;

export default Button;
