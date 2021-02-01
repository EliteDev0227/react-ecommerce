import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import heroImage from '../../assets/Hero.png';
import menImage from '../../assets/mens.png';
import womenImage from '../../assets/womens.png';

import { useWindowSize } from '../../hooks';

const Wrapper = styled.div`
  text-align: center;
  margin: 10px;
`;

const ShopImage = styled.img`
  height: 420px;
  width: 280px;
  ${({ isMobile }) => isMobile && `
    height: 220px;
    width: 150px;
  `}

  object-fit: cover;
  margin: 5px;
`;

const images = [heroImage, menImage, womenImage, heroImage, menImage, womenImage];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ShopList = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;

  return (
    <Wrapper>
      <div className="text-title">Shop new arrivals</div>
      <Carousel responsive={responsive} arrows renderButtonGroupOutside>
        {images.map(item => (
          <div>
            <ShopImage isMobile={isMobile} src={item} />
            <div className="item-title">Product Title</div>
            <div className="item-desc">women t-shirt</div>
            <div className="item-price">$19.99</div>
          </div>
        ))}
      </Carousel>

    </Wrapper>
  );
};

export default ShopList;
