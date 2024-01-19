import React from "react";

import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const EducatorResume = () => {

    const trackEvent = useAnalyticsEventTracker('email_link_clicks')
  
    const handleClick = () => {
      trackEvent(`teaching email link clicked`, `teaching email link clicked`)
      return false
    }
  
    return (
      <div className='resume-section'>
        <div className="resume-title">EDUCATOR</div>
        <div className='resume-section-title'><FontAwesomeIcon icon={icon({name: 'graduation-cap'})} className="resume-icon" />Summary</div>
        Spencer is adjunct professor of percussion at the <a href="https://www.unomaha.edu/college-of-communication-fine-arts-and-media/music/about-us/area-pages/percussion-area.php">University of Nebraska at Omaha</a> and maintains a private studio of highly-motivated high schoolers.
        His students routinely advance in professional auditions, place in All-State ensembles, earn college scholarships and graduate assistantships, and win acceptance into prestigious programs such as Interlochen, Boston University-Tanglewood Institute, and Oberlin Summer Percussion Institute.
        Former students have attended elite music schools, such as the University of Southern California and Rice University, and have gone on to professional music careers, while others have pursued degrees in accouting, law, and engineering at top universities.
        <br />
        <br />
        From 2016-2021, Spencer directed percussion studies at Omaha Conservatory of Music, where he grew the percussion studio from zero to twenty students in five years. Additionally, Spencer has served on the faculties of Iowa Western Community College and Dordt University. A fervent advocate for marching band, he has coached on the percussion staff of Broken Arrow (OK) High School’s The Pride of Broken Arrow  and Blue Springs (MO) High School's Golden Regiment Band.
        
        
        <br />
        <br />
        Spencer is always looking for hard-working, motivated students. To inquire about studying at University of Nebraska at Omaha, please contact him at <a href="mailto:spencerjones@unomaha.edu" onClick={handleClick}>spencerjones@unomaha.edu</a>
  
        
        </div> 
    )
  }

  export default EducatorResume;