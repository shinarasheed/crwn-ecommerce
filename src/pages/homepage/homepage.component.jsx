import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomepageContainer } from './homepage.styles';

const Homepage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
);

export default Homepage;
