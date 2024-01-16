import React from "react";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import {musicianSummaryText1, musicianSummaryText2} from "../strings/Strings";

const MusicianResume = () => {
    return (
      <div>
        
        <div className='resume-section'>
        <h3>MUSICIAN</h3>
        <span className='resume-section-title'><PersonRoundedIcon className='resume-icon' /> Summary</span>
        
        {musicianSummaryText1}
        <br />
        <br />
        {musicianSummaryText2}
        
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

  export default MusicianResume;