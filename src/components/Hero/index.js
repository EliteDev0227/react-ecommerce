import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/Hero.png';
import menImage from '../../assets/mens.png';
import womenImage from '../../assets/womens.png';
import ShopForm from '../ShopForm/ShopForm';

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  height: 227px;
  object-fit: cover;
  margin: auto;
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
    <ShopForm title="Shop New Arrivals" body="Our coolest new items are waiting for you!" />
    <ShopForm title="Our Favorite Tees" body="Everyday tees you need!" />
    <ShopForm darkMode="TRUE" title="Sign Up & Stay Connected" body="Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!" buttonText="Subscribe" />
  </HeroWrapper>
);

export default Hero;
