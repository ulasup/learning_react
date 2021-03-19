import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {pageContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.infoTitle} image={pageContents.image} />
    {pageContents.infoContents}
  </Container>
);

export default Info;