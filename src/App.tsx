import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Mission from './components/Mission';
import Header from './components/Header';
import Footer from './components/Footer';

const StyledApp = styled.div`
  /* overflow: hidden; */
`

export default function App() : JSX.Element {
  return (
    <StyledApp>
      <Header />
      <Carousel />
      <Mission />
      <Footer />
    </StyledApp>
  );
}