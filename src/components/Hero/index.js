import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/Hero.png';
import menImage from '../../assets/mens.png';
import womenImage from '../../assets/womens.png';
import Button from '../Button';

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  height: 227px;
  object-fit: cover;
  margin: auto;
`;

const HeroText = styled.div`
  font-family: "Pacifico", cursive;
  font-weight: lighter;
  font-size: 26px;
  color: #10504f;
`;

const HeroSubText = styled.div`
  color: #10504f;
  font-size: 14px;
  font-family: "Lato", sans-sans-serif;
  font-weight: lighter;
`;

const HeroButtonWrapper = styled.div`
  width: 125px;
  height: 42px;
  font-family: "Lato", sans-sans-serif;
  display: flex;
  justify-content: center;
`;

const HeroShopForm = styled.div`
  background-color: #EFEFEF;
  padding-top: 15px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column; 
  row-gap: 10px;
  align-items: center;
`;

const Hero = () => (
  <HeroWrapper>
    <Carousel showArrows={false} showThumbs={false} showStatus={false}>
      <div>
        <HeroImage src={heroImage} />
      </div>
      <div>
        <HeroImage src={menImage} />
      </div>
      <div>
        <HeroImage src={womenImage} />
      </div>
    </Carousel>
    <HeroShopForm>
      <HeroText>Shop New Arrivals</HeroText>
      <HeroSubText>Our coolest new items are waiting for you!</HeroSubText>
      <HeroButtonWrapper>
        <Button text="Shop Now" />
      </HeroButtonWrapper>
    </HeroShopForm>
  </HeroWrapper>
);

export default Hero;
