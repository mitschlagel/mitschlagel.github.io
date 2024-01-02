import github from './github.png';
import instagram from './instagram.png';
import headshotColor from './fullcolorheadshot.png'

import './App.css';

import React from 'react';
import FadeInModalButton from './FadeInModalButton';

function App() {

  // ReactGA.initiapze('G-P6NNXH3H9C');
  return (
    <div className="App">
      <Main />
    </div>
  )
};

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Resume />
      <Headline />
      <PrimaryContent />
      <Socialpnks />
    </div>
  )
}

const Header = () => {
  return(
    <header className="header">
        <div className="title">
          SPENCER JONES
        </div>      

    </header>
  )
}

const Headline = () => {
  return(
    <section className="headline">
        <div className="big-text">
         {bigText}
        </div>
        <div className="img_wrapper">
        <img src={headshotColor}
              className="rounded"
              alt="picture of Spencer with sunglasses"
          />
        </div>
      </section>
  )
  
}

const PrimaryContent = () => {
  return (
    <section className="text">
        <p>{text1}</p>
        {/* <p>{text2}</p> */}
        <p>{text3}</p>
        <p>{text4}</p>
      </section>
  )
}

const Resume = () => { 
  return (
    <div className="resume">
      <div className="resume-buttons-container">
        <FadeInModalButton title="Musician" content={<MusicianResume />} />
        <FadeInModalButton title="Teacher" content={"Coming Soon"} />
        <FadeInModalButton title="Software Engineer" content={"Coming Soon"} />
      </div>
    </div>
  )
}

const Socialpnks = () => {
  return (
    <div className="social-pnks">
      <a href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className='instagram'/>
      </a>
      <a href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="github"/>
      </a>
    </div>
  );
};

const MusicianResume = () => {
  return (
    <div className="musician-resume">
      <h2>Musician</h2>
      <h3>Performance Experience</h3>
        <p>
          <b>Omaha Symphony: 2013 - present</b><br/>
          Extra Percussion<br/>Substitute Principal Timpani<br/>Substitute Principal Percussion
        </p>
        <p>
          <b>Kansas City Symphony: 2011 - present</b><br/>
          Extra Percussion<br/>Substitute Principal Percussion<br/>Substitute Principal Timpani
        </p>
        <p>
          <b>Indianapolis Symphony Orchestra: 2017 - present</b><br/>
          Extra Percussion
        </p>
        <p>
          <b>Grand Rapids Symphony: 2023 - present</b><br/>
          Extra Percussion
        </p>
        <p>
          <b>Hawaii Symphony Orchestra: 2018</b><br/>
          Substitute Associate Principal Percussion
        </p>
       
        <p>
          <b>Quad City Symphony Orchestra: 2015</b><br/>
          Substitute Principal Percussion
        </p>
        <p>
          <b>New World Symphony: 2015-2016</b><br/>
          Extra Percussion
        </p>
        <p>
          <b>Lincoln Symphony Orchestra: 2022</b><br/>
          Extra Percussion
        </p>
        <p>
          <b>Des Moines Symphony Orchestra: 2011</b><br/>
          Substitute Principal Percussion
        </p>
        <p>
          <b>Sioux City Symphony Orchestra: 2022</b><br/>
          Extra Percussion
        </p>
      </div>
      
  )
}
  

export default App;
const bigText = "Spencer is a multi-faceted creative professional enjoying dual careers as an orchestral percussionist and software engineer."
const text1 = "For more than a decade he has served as a first-call percussionist and timpanist with the Omaha and Kansas City Symphonies and has performed with the Grand Rapids Symphony, Indianapolis Symphony Orchestra, Hawaii Symphony Orchestra, and the New World Symphony of Miami Beach, FL. He has accompanied a diverse range of artists, including Yo-Yo Ma, Lyle Lovett, Joyce DiDonato, Guster, Branford Marsalis, Ben Folds, and Bernadette Peters."
const text2 = "During the pandemic and shut down of the pve music industry in 2020, Spencer returned to school, studying computer science at Creighton University and quickly securing a software engineering job in the banking sector."
const text3 = "A passionate music educator and percussion advocate, Spencer is adjunct professor of percussion at the University of Nebraska-Omaha and maintains a private studio of highly motivated high school students. From 2016-2021, Spencer directed percussion studies at Omaha Conservatory of Music, where he grew the percussion studio from zero to twenty students in five years. His students routinely placed in All-State ensembles, earned college scholarships, and won acceptance into prestigious programs such as Interlochen and Boston University-Tanglewood Institute. Additionally, Spencer has served on the faculties of Iowa Western Community College and Dordt University, as well as on the percussion staff of Broken Arrow (OK) High School’s The Pride of Broken Arrow marching band."
const text4 = "Originally from Broken Arrow, Oklahoma, Spencer earned a BA in Music from Oklahoma State University and an MM in Percussion Performance with post-graduate studies in orchestral percussion from the University of Missouri–Kansas City Conservatory. From 2020-2022, he studied computer science at Creighton University in Omaha, NE. His primary teachers include Christopher McLaurin, Wayne Bovenschen, and Tom McGillen, and he is an alumnus of The Music Academy of the West, the National Orchestral Institute, the Texas Music Festival, and the Cloyd Duff Timpani Masterclass."
