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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopBanner>FREE SHIPPING ON ALL SHORES</TopBanner>
          <Header />
          <Route exact path="/" render={Home} />
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
