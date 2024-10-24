import React from 'react';
import hero from '../src/assets/hero.PNG';

import { Footer,  Header } from './containers';
import { Navbar, Locations, CTA,  Narative, Connect, Creatives, Image } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Image imageUrl={hero} />
    <CTA />
    <div className="horizontal-divider"/>
    <Narative />
    <div className="horizontal-divider"/>
    <Header />
    <div className="horizontal-divider" />
    <Connect />
    <div className="horizontal-divider" />
    <Locations />
  </div>
);

export default App;

