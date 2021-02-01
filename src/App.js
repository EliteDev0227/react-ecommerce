import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { useWindowSize } from './hooks';

const TopBanner = styled.div`
  height: 60px;
  line-height: 60px;
  ${({ isMobile }) => isMobile && `
    height: 45px;
    line-height: 45px;
  `}
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
`;

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const BodyWrapper = styled.div`
  margin-top: 200px;
  ${({ isMobile }) => isMobile && `
    margin-top: 110px;
  `}
`;

const App = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1024;

  return (
    <BrowserRouter>
      <>
        <TopWrapper>
          <TopBanner isMobile={isMobile}>FREE SHIPPING ON ALL SHORES</TopBanner>
          <Header />
        </TopWrapper>
        <BodyWrapper isMobile={isMobile}>
          <Route exact path="/" render={Home} />
        </BodyWrapper>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
