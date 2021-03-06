import React from 'react';
import '../assets/css/About.css';
import { Jumbotron } from 'react-bootstrap';
import Opening from '../components/About/Opening.js';

import Introduction from '../components/About/Introduction';
import Statistic from '../components/About/Statistic';
import Testimoni from '../components/About/Testimoni';
import Team from '../components/About/Team';

export default function About() {
  return (
    <div>
      <Opening />
      <Jumbotron className='AboutContainer'>
        <Introduction />
        <Statistic />
        <Testimoni />
        <Team />
      </Jumbotron>
    </div>
  );
}
