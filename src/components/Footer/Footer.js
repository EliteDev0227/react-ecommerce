import React from 'react';
import styled from 'styled-components';

import twitterIcon from '../../assets/twitter.svg';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';

const Wrapper = styled.div`
  background-color: black;
  width: 100%;
  padding: 20px;
`;

const IconWrapper = styled.div`
margin-left: -10px;
display: flex;
column-gap: 10px;
`;

const Footer = () => (
  <Wrapper>
    <div className="text-title color-white">Follow Us</div>
    <IconWrapper>
      <img className="icon" src={facebookIcon} />
      <img className="icon" src={instagramIcon} />
      <img className="icon" src={twitterIcon} />
    </IconWrapper>
  </Wrapper>
);

export default Footer;
