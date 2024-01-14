import github from './github.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import mail from './mail.png'

import headshot from './headshot.jpg';
import headshotColor from './fullcolorheadshot.png'

import './App.css';

import React from 'react';

import { SlideInDrawerButton } from './SlideInDrawerButton';

import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';


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
      <Headline />
      <ResumeButtons />
      <SocialLinks />
      
      {/* <PrimaryContent /> */}
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
          <img src={headshot}
            onMouseOver={e => e.currentTarget.src = headshotColor}
            onMouseOut={e => e.currentTarget.src = headshot}
            className="rounded"
            alt="Spencer with sunglasses"
          />
        </div>
      
      </section>

      
  )
  
}

const PrimaryContent = () => {
  return (
    <section className="text">
        <p>{text2}</p>
        <p>{text1}</p>
        <p>{text3}</p>
        <p>{text4}</p>
      </section>
  )
}

const ResumeButtons = () => { 
  return (
    <div className="resume-buttons">
      <div className="resume-buttons-container">
      <SlideInDrawerButton title="SOFTWARE ENGINEER" content={<SoftwareResume />} />
      <SlideInDrawerButton title="MUSICIAN" content={<MusicianResume />} />
      <SlideInDrawerButton title="EDUCATOR" content={<TeachingResume />} />
      </div>
    </div>
    
  )
}

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className='instagram'/>
      </a>
      <a href="https://www.linkedin.com/in/spencerljones" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Linkedin" className='linkedin'/>
      </a>
      <a href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="github"/>
      </a>
      
    </div>
  );
};

const SoftwareResume = () => {
  return (
    <div>
      
      <div className='resume-section'>
      <h3>SOFTWARE ENGINEER</h3>
      <span className='resume-section-title'><PersonRoundedIcon className='resume-icon' /> Summary</span>
      
      {text2}
      
      </div>
      <div className='resume-section'>
        <span className='resume-section-title'><WorkRoundedIcon className='resume-icon' /> Work Experience</span>
        <div>
          <span className='resume-subsection-title'><span>iOS Developer</span><span>First National Bank of Omaha {"(remote)"}</span><span>Jan 2022-present</span></span>
          
          <ul>
            <li>Member of an Agile team developing a white-label native iOS Swift codebase for 19 different mobile banking and credit card apps.</li>
            <li>Implemented mobile check capture and deposit feature in SwiftUI that processed $2.2 billion in customer deposits in 2023.</li>
            <li>Implemented a customer messaging feature that integrated a Salesforce SDK and has had {"\>"} 10 million impressions since launch.</li>
            <li>Architected the conversion of the app’s two highest traffic features from UIKit to SwiftUI, reducing lines of code by 76%.</li>
            <li>Created a SwiftUI component library, including helper methods to handle legacy features, shared between two development teams.</li>
            <li>Coordinated iOS meetings and processes, responsible for writing and maintaining documentation and leading meetings.</li>
            <li>Managed CI/CD pipelines to deliver monthly releases for 11 different mobile banking applications, coordinating with Product and QA.</li>
        </ul>
        </div>
        <div>
          <span className='resume-subsection-title'><span>Software Engineering Intern</span><span>First National Bank of Omaha {"(remote)"}</span><span>April 2021-Dec 2021</span></span>
          
          <ul>
            <li>Member of an Agile development team building a modern web application using React and microfrontend architecture.</li>
            <li>Researched and developed a full-stack feature using React and Groovy to retrieve and display user credit card statements.</li>
            <li>Used React and Storybook to build components for a company-wide React component library.</li>
            <li>Used Postman and Swagger to design and test APIs.</li>
        </ul>
        </div>
      </div>
      <div className='resume-section'>
      <span className='resume-section-title'><SchoolRoundedIcon className='resume-icon' /> Education</span>
      <div>
          <span className='resume-subsection-title'><span>Creighton University</span><span>Studies in Computer Science</span><span>Aug 2020-Jan 2022</span></span>
          
          <ul>
            <li>18 credit hours of undergraduate CS courses: Python, Java, Object-Oriented Programming, Data Structures, Computer
Organization and Architecture, and Web Development.</li>
            <li>GPA: 3.88</li>
        </ul>
        </div>
      
      <div>
          <span className='resume-subsection-title'><span>AIM Code School</span><span>Foundations of Web Development</span><span>Jan 2021-Feb 2021</span></span>
          
          <ul>
            <li>10-week course on responsive web development and UI/UX design. Topics included HTML, CSS, JavaScript, jQuery.</li>
        </ul>
        </div>

        <div>
          <span className='resume-subsection-title'><span>CS50: Introduction to Computer Science</span><span>Summer 2020</span></span>
          
          <ul>
            <li>Completed the online course as a self-directed introduction to computer science. Promptly enrolled at Creighton University.</li>
        </ul>
        </div>

      </div>
      </div>
  );
};

const MusicianResume = () => {
  return (
    <div>
      
      <div className='resume-section'>
      <h3>MUSICIAN</h3>
      <span className='resume-section-title'><PersonRoundedIcon className='resume-icon' /> Summary</span>
      
      {text1}
      <br />
      <br />
      {text4}
      
      </div>
      <div className='resume-section'>
        <span className='resume-section-title'><MusicNoteRoundedIcon className='resume-icon' /> Performance Experience</span>
        <span className='resume-subsection-title'style={{paddingBottom: 8}}><span>Omaha Symphony</span></span>
        <span className='resume-subsection-title'style={{paddingBottom: 8}}><span>Kansas City Symphony</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Indianapolis Symphony Orchestra</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Grand Rapids Symphony</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Lincoln Symphony Orchestra</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Hawaii Symphony Orchestra</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Quad City Symphony Orchestra</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>New World Symphony</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Sioux City Symphony Orchestra</span></span>
        <span className='resume-subsection-title' style={{paddingBottom: 8}}><span>Des Moines Symphony Orchestra</span></span>
      </div>
      <div className='resume-section'>
      <span className='resume-section-title'><SchoolRoundedIcon className='resume-icon' /> Education</span>
      <div>
          <span className='resume-subsection-title'><span>University of Missouri-Kansas City Conservatory of Music</span><span>2010-2014</span></span>
          
          <ul>
            <li>Master of Music in Percussion Performance</li>
            <li>Post-Graduate Studies in Orchestral Performance</li>
        </ul>
        </div>
      
      <div>
          <span className='resume-subsection-title'><span>Oklahoma State University</span><span>2006-2010</span></span>
          
          <ul>
            <li>Bachelor of Arts in Music with History minor</li>
        </ul>
        </div>

      </div>
      </div>
  );
}

const TeachingResume = () => {
  return (
    <div className='resume-section'>
      <h3>EDUCATOR</h3>
      <span className='resume-section-title'><PersonRoundedIcon className='resume-icon' /> Summary</span>
      Spencer is adjunct professor of percussion at the <a href="https://www.unomaha.edu/college-of-communication-fine-arts-and-media/music/about-us/area-pages/percussion-area.php">University of Nebraska at Omaha</a> and maintains a private studio of highly-motivated high schoolers.
      His students routinely advance in professional auditions, place in All-State ensembles, earn college scholarships and graduate assistantships, and win acceptance into prestigious programs such as Interlochen, Boston University-Tanglewood Institute, and Oberlin Summer Percussion Institute.
      Former students have attended elite music schools, such as the University of Southern California and Rice University, and have gone on to professional music careers, while others have pursued degrees in accouting, law, and engineering at top universities.
      <br />
      <br />
      From 2016-2021, Spencer directed percussion studies at Omaha Conservatory of Music, where he grew the percussion studio from zero to twenty students in five years. Additionally, Spencer has served on the faculties of Iowa Western Community College and Dordt University. A fervent advocate for marching band, he has coached on the percussion staff of Broken Arrow (OK) High School’s The Pride of Broken Arrow  and Blue Springs (MO) High School's Golden Regiment Band.
      
      
      <br />
      <br />
      Spencer is always looking for hard-working, motivated students. To inquire about studying at University of Nebraska at Omaha, please contact him at <a href="mailto:spencerjones@unomaha.edu">spencerjones@unomaha.edu</a>

      
      </div> 
  )
}

  

export default App;
const bigText = "Spencer is a versatile creative professional enjoying a multi-faceted career as a software engineer, orchestral musician, and educator."
const text1 = "For more than a decade he has served as a first-call percussionist and timpanist with the Omaha and Kansas City Symphonies. He has performed with the Grand Rapids Symphony, Indianapolis Symphony Orchestra, Hawaii Symphony Orchestra, and the New World Symphony of Miami Beach, FL. He is on the roster of the Omaha Chamber Music Society and is a co-founder of Omaha Percussion Group. He has accompanied a diverse range of artists, including Yo-Yo Ma, Lyle Lovett, Joyce DiDonato, Guster, Branford Marsalis, Ben Folds, and Bernadette Peters."
const text2 = "Adept and driven, Spencer began his tech career with Harvard’s CS50 before enrolling in the computer science program at Creighton University. He is currently an iOS developer at FNBO, a banking and financial services company based in Omaha, NE, and the founder of Studio Assistant, a mobile app for managing collegiate music studios currently in development. An ardent proponent of delightful, simple, and accessible applications, he is proficient in native iOS development (SwiftUI + UIKit), React, and RESTful API practices, and is currently learning React Native and GraphQL."
const text3 = "Spencer is adjunct professor of percussion at the University of Nebraska at Omaha and maintains a private studio of highly motivated high school students. From 2016-2021, Spencer directed percussion studies at Omaha Conservatory of Music, where he grew the percussion studio from zero to twenty students in five years. His students routinely placed in All-State ensembles, earned college scholarships, and won acceptance into prestigious programs such as Interlochen and Boston University-Tanglewood Institute. Additionally, Spencer has served on the faculties of Iowa Western Community College and Dordt University, as well as on the percussion staff of Broken Arrow (OK) High School’s The Pride of Broken Arrow marching band."
const text4 = "Originally from Broken Arrow, Oklahoma, Spencer holds a BA in Music from Oklahoma State University and an MM in Percussion Performance with post-graduate studies in orchestral percussion from the University of Missouri–Kansas City Conservatory. His primary percussion teachers include Christopher McLaurin, Wayne Bovenschen, and Tom McGillen, and he is an alumnus of The Music Academy of the West, the National Orchestral Institute, the Texas Music Festival, and the Cloyd Duff Timpani Masterclass."
