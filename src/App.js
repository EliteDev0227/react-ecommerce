import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const TopBanner = styled.div`
  height: 45px;
  line-height: 45px;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
`;

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 111px;
  width: 100%;
  z-index: 1;
`;

const BodyWrapper = styled.div`
  margin-top: 110px;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopWrapper>
            <TopBanner>FREE SHIPPING ON ALL SHORES</TopBanner>
            <Header />
          </TopWrapper>
          <BodyWrapper>
            <Route exact path="/" render={Home} />
          </BodyWrapper>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
