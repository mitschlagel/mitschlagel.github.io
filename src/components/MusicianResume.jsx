import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SchoolIcon from "@mui/icons-material/School";

import {musicianSummaryText1, musicianSummaryText2} from "../strings/Strings";

const MusicianResume = () => {
    return (
      <div>
        
        <div className='resume-section'>
        <div className="resume-title">MUSICIAN</div>
        <div className='resume-section-title'><PersonIcon className='resume-icon' /> Summary</div>
        
        {musicianSummaryText1}
        <br />
        <br />
        {musicianSummaryText2}
        
        </div>
        <div className='resume-section'>
          <span className='resume-section-title'><MusicNoteIcon className='resume-icon' /> Performance Experience</span>
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
        <div className='resume-section-title'><SchoolIcon className='resume-icon' /> Education</div>
        <div>
            <div className='resume-subsection-title'><span>University of Missouri-Kansas City Conservatory of Music</span><span>2010-2014</span></div>
            
            <ul>
              <li>Master of Music in Percussion Performance</li>
              <li>Post-Graduate Studies in Orchestral Performance</li>
          </ul>
          </div>
        
        <div>
            <div className='resume-subsection-title'><span>Oklahoma State University</span><span>2006-2010</span></div>
            
            <ul>
              <li>Bachelor of Arts in Music with History minor</li>
          </ul>
          </div>
  
        </div>
        </div>
    );
  }

  export default MusicianResume;