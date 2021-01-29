import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-weight: lighter;
  padding: 10px 14px;
`;

const Button = ({ text }) => <ButtonWrapper>{text}</ButtonWrapper>;

export default Button;
