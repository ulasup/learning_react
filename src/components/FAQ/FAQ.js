import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {pageContents} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={pageContents.faqTitle} image={pageContents.image} />
    {pageContents.faqContents}
  </Container>
);

export default FAQ;