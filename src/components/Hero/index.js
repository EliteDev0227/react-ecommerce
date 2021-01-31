import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/Hero.png';
import menImage from '../../assets/mens.png';
import womenImage from '../../assets/womens.png';
import mailIcon from '../../assets/mail.svg';
import ShopForm from '../ShopForm/ShopForm';
import ShopList from '../ShopList/ShopList';
import InstagramForm from '../InstagramForm/InstagramForm';

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  height: 227px;
  object-fit: cover;
  margin: auto;
`;

const images = [heroImage, menImage, womenImage];

const Hero = () => (
  <HeroWrapper>
    <Carousel showArrows={false} showThumbs={false} showStatus={false}>
      { images.map(item => (<HeroImage src={item} />)) }
    </Carousel>
    <ShopForm title="Shop New Arrivals" body="Our coolest new items are waiting for you!" buttonText="Shop Now" />
    <ShopList />
    <Carousel showArrows={false} showThumbs={false} showStatus={false}>
      {images.map(item => (<HeroImage src={item} />))}
    </Carousel>
    <ShopForm title="Our Favorite Tees" body="Everyday tees you need!" buttonText="Shop Now" />
    <InstagramForm />
    <ShopForm titleIcon={mailIcon} darkMode="TRUE" title="Sign Up & Stay Connected" body="Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!" buttonText="Subscribe" />
  </HeroWrapper>
);

export default Hero;
