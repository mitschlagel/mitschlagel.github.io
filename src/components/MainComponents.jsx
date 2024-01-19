import React from "react"

import '../App.css';

import instagramIcon from '../images/instagram.png'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'

import headshot from '../images/headshot.jpg';
import headshotColor from '../images/fullcolorheadshot.png'

import { headlineText } from "../strings/Strings";

import { DrawerButton } from "./DrawerButtons";

import SoftwareResume from "./SoftwareResume";
import MusicianResume from "./MusicianResume";
import EducatorResume from "./EducatorResume";

import { SocialIcon } from "react-social-icons";

export const Headline = () => {
  return(
    <div>
      <div className="title">
        <span>SPENCER JONES</span>
      </div>
      <div className="headline">
          <div className="big-text">
          {headlineText}
          </div>
          <div className="img_wrapper">
            <img src={headshot}
              onMouseOver={e => e.currentTarget.src = headshotColor}
              onMouseOut={e => e.currentTarget.src = headshot}
              className="rounded"
              alt="Spencer with sunglasses"
            />
          </div>
        </div>
    </div>
    
  ) 
}

export const ResumeButtons = () => { 
  return (
    <div className="resume-buttons">
      <div className="resume-buttons-container">
      <DrawerButton title="SOFTWARE ENGINEER" content={<SoftwareResume />}/>
      <DrawerButton title="MUSICIAN" content={<MusicianResume />} />
      <DrawerButton title="EDUCATOR" content={<EducatorResume />} />
      </div>
    </div>
  )
}

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <SocialIcon url="https://www.instagram.com/mitschlagel" bgColor="#266043" />
      <SocialIcon url="https://www.linkedin.com/in/spencerljones" bgColor="#266043"/>
      <SocialIcon url="https://github.com/mitschlagel" bgColor="#266043"/>
      <SocialIcon url="mailto:spencerjonesstudio@gmail.com" bgColor="#266043"/>
    </div>
  );
};