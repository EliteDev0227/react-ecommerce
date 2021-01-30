/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import styles from './ShopForm.module.scss';
import Button from '../Button';

const BodyWrapper = styled.div`
  width: 80%;
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
    <BodyWrapper>
      <div className="text-subtitle">{props.body}</div>
    </BodyWrapper>

    <HeroButtonWrapper>
      <Button text={props.buttonText} darkMode={props.darkMode} />
    </HeroButtonWrapper>
  </div>
);

export default ShopForm;
