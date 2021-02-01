import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/Hero.png';
import menImage from '../../assets/mens.png';
import womenImage from '../../assets/womens.png';

import { useWindowSize } from '../../hooks';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const ItemWrapper = styled.div`
  flex-grow: 1;
  width: 150px;
  padding: 5px;
  ${({ grow }) => grow && `
    flex-grow: 2;
  `}
  display: flex;
  flex-direction: column;
  row-gap: 0px;
`;

const ItemImage = styled.img`
  height: 470px;
  ${({ isMobile }) => isMobile && `
    height: 220px;
  `}
  width: 100%;
  object-fit: cover;
`;

const ButtonWrapper = styled.div`
  background-color: #10504f;
  font-family: "Pacifico", cursive;
  font-weight: lighter;
  font-size: 20px;
  color: #fff;
  height: 42px;
`;
const images = [heroImage, menImage, womenImage];

const items = [
  {
    title: "Women's",
    icon: womenImage,
  },
  {
    title: "Men's",
    icon: menImage,
  },
  {
    title: 'Accessories',
    icon: heroImage,
  },
];

const ProductList = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;

  return (
    <Wrapper>
      {items.map((item, i) => (
        <ItemWrapper grow={isMobile && i === images.length - 1 && i % 2 === 0}>
          <ItemImage isMobile={isMobile} src={item.icon} />
          <ButtonWrapper>
            {item.title}
          </ButtonWrapper>
        </ItemWrapper>
      ))}

    </Wrapper>
  );
};

export default ProductList;
