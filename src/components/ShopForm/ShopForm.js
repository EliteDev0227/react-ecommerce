/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
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

const TitleIcon = styled.img`
  size: 20px;
  margin-right: 10px;
`;

const ShopForm = (props) => (
  <div className={props.darkMode ? `${styles.ShopForm} ${styles.dark}` : styles.ShopForm} data-testid="ShopForm">
    <div className="text-title">
      {props.titleIcon
        ? <TitleIcon src={props.titleIcon} />
        : ''}
      {props.title}
    </div>
    <HeroSubText>{ props.body}</HeroSubText>
    <HeroButtonWrapper>
      <Button text={props.buttonText} darkMode={props.darkMode} />
    </HeroButtonWrapper>
  </div>
);

export default ShopForm;
