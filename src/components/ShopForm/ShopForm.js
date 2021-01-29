/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FALSE } from 'node-sass';
import styles from './ShopForm.module.scss';
import Button from '../Button';

const HeroText = styled.div`
  font-family: "Pacifico", cursive;
  font-weight: lighter;
  font-size: 26px;
`;

const HeroSubText = styled.div`
  width: 80%;
  font-size: 14px;
  font-family: "Lato", sans-sans-serif;
  font-weight: lighter;
  text-align: center;
`;

const HeroButtonWrapper = styled.div`
  width: 125px;
  height: 42px;
  font-family: "Lato", sans-sans-serif;
  display: flex;
  justify-content: center;
`;

const ShopForm = (props) => (
  <div className={styles.ShopForm} data-testid="ShopForm">
    <HeroText>{props.title}</HeroText>
    <HeroSubText>{ props.body}</HeroSubText>
    <HeroButtonWrapper>
      <Button text={props.buttonText} />
    </HeroButtonWrapper>
  </div>
);

ShopForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string,
  darkMode: PropTypes.bool,
};

ShopForm.defaultProps = {
  title: 'Shop New Arrivals',
  body: 'Our coolest new items are waiting for you!',
  buttonText: 'Shop Now',
  darkMode: FALSE,
};

export default ShopForm;
