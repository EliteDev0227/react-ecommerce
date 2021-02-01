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

const InstagramImage = styled.img`
  height: 250px;
  width: 250px;
  ${({ isMobile }) => isMobile && `
    height: 100px;
    width: 100px;
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
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const ShopList = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;
  return (
    <Wrapper>
      <div className="text-title">Follow Us On Instagram!</div>
      <Carousel responsive={responsive}>
        {images.map(item => (<InstagramImage isMobile={isMobile} src={item} />))}
      </Carousel>

    </Wrapper>
  );
};

export default ShopList;
