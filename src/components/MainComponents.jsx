import React from "react"

import '../App.css';

import headshot from '../images/headshot.jpg';
import headshotColor from '../images/fullcolorheadshot.png'

import { headlineText } from "../strings/Strings";

import { DrawerButton } from "./DrawerButtons";

import SoftwareResume from "./SoftwareResume";
import MusicianResume from "./MusicianResume";
import EducatorResume from "./EducatorResume";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

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
      <a href="https://www.instagram.com/mitschlagel"><FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} style={{fontSize: "2.5em"}} /></a>
      <a href="https://www.linkedin.com/in/spencerljones"><FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} style={{fontSize: "2.5em"}} /></a>
      <a href="https://www.github.com/mitschlagel"><FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} style={{fontSize: "2.5em"}} /></a>
      <a href="mailto:spencerjonesstudio@gmail.com"><FontAwesomeIcon icon={icon({name: 'envelope', family: 'classic', style: 'regular'})} style={{fontSize: "2.5em"}} /></a>
    </div>
  );
};