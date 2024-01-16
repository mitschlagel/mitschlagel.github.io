import React from "react"

import '../App.css';

import instagramIcon from '../images/instagram.png'
import linkedinIcon from '../images/linkedin.png'
import githubIcon from '../images/github.png'

import headshot from '../images/headshot.jpg';
import headshotColor from '../images/fullcolorheadshot.png'

import { headlineText } from "../strings/Strings";

import { DrawerButton } from "./DrawerButtons";
import SocialLinkIcon from "./SocialLinkIcon";
import SoftwareResume from "./SoftwareResume";
import MusicianResume from "./MusicianResume";
import EducatorResume from "./EducatorResume";

export const Title = () => {
    return(
      <header className="title">
        SPENCER JONES
      </header>
   )
}

export const Headline = () => {
  return(
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
      <SocialLinkIcon icon={instagramIcon} url="https://www.instagram.com/mitschlagel" title="instagram"/>
      <SocialLinkIcon icon={linkedinIcon} url="https://www.linkedin.com/in/spencerljones" title="linkedin"/>
      <SocialLinkIcon icon={githubIcon} url="https://github.com/mitschlagel" title="github" />      
    </div>
  );
};