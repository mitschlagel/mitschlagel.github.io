

import './App.css';
import React from 'react';
import ReactGA from 'react-ga4';

import { Title, Headline, ResumeButtons, SocialLinks } from './components/MainComponents';

function App() {

  ReactGA.initialize('G-P6NNXH3H9C');
  return (
    <div className="App">
      <Main />
    </div>
  )
};

const Main = () => {
  return (
    <div className="main">
      <Title />
      <Headline />
      <ResumeButtons />
      <SocialLinks />
    </div>
  )
}

export default App;



