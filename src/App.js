import headshot from './headshot.jpg';
import github from './github.png';
import instagram from './instagram.png';
import headshotColor from './fullcolorheadshot.png'
import './App.css';

import ReactGA from 'react-ga';
import React from 'react';

function App() {

  ReactGA.initialize('G-P6NNXH3H9C');
  return (
    <div className="App">
      <Main />
      <SocialLinks />
    </div>
  )
};

const Main = () => {
  return (
    <div className="main">
      <header className="header">
        
        <h1>Spencer Jones </h1>
        <h2>Musician, Engineer, & Educator</h2>

      </header>
      <section className="headline">
        <div className="big-text">
          <h1>{bigText}</h1>
        </div>
        <div className="img_wrapper">
        <img src={headshot}
              onMouseOver={e => e.currentTarget.src = headshotColor}
              onMouseOut={e => e.currentTarget.src = headshot}
              className="rounded"
              alt="picture of Spencer with sunglasses"
          />
        </div>
      </section>
      <section className="text">
        <p>{text1}</p>
        {/* <p>{text2}</p> */}
        <p>{text3}</p>
        <p>{text4}</p>
      </section>
    </div>
  )
}

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className='instagram'/>
      </a>
      <a href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="github"/>
      </a>
    </div>
  );
};
  

export default App;
const bigText = "Spencer is a multi-faceted creative professional who enjoys a dual career as an orchestral percussionist and software engineer."
const text1 = "For over ten years he has served as a first-call musician with the Omaha and Kansas City Symphonies and has performed with the Grand Rapids Symphony, Indianapolis Symphony Orchestra, Hawaii Symphony Orchestra, and the New World Symphony of Miami Beach, FL. He has accompanied a diverse range of artists, including Yo-Yo Ma, Lyle Lovett, Joyce DiDonato, Guster, Branford Marsalis, Ben Folds, and Bernadette Peters."
const text2 = "During the pandemic and shut down of the live music industry in 2020, Spencer returned to school, studying computer science at Creighton University and quickly securing a software engineering job in the banking sector."
const text3 = "A passionate music educator and percussion advocate, Spencer is adjunct professor of percussion at the University of Nebraska-Omaha, teaching private lessons to undergraduate and graduate students. From 2016 - 2021, Spencer served on the Artist-Faculty at Omaha Conservatory of Music, where he grew the percussion studio from zero to twenty students in five years. His students routinely placed in All-State ensembles, earned college scholarships, and won acceptance into prestigious programs such as Interlochen and Boston University-Tanglewood Institute. Additionally, Spencer has served on the faculties of Iowa Western Community College and Dordt University, as well as on the percussion staff of Broken Arrow (OK) High School’s The Pride of Broken Arrow marching band."
const text4 = "Originally from Broken Arrow, Oklahoma, Spencer earned a BA in Music from Oklahoma State University and an MM in Percussion Performance with post-graduate studies in orchestral percussion from the University of Missouri–Kansas City Conservatory. Additionally, he studied computer science at Creighton University and web development at the AIM Institute in Omaha, NE. His primary teachers include Christopher McLaurin, Wayne Bovenschen, and Tom McGillen, and he is an alumnus of The Music Academy of the West, the National Orchestral Institute, the Texas Music Festival, and the Cloyd Duff Timpani Masterclass."
