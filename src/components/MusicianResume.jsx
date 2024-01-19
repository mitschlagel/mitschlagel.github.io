import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { musicianSummaryText1, musicianSummaryText2 } from "../strings/Strings";

import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

const MusicianResume = () => {
  const trackEvent = useAnalyticsEventTracker("email_link_clicks");

  const handleClick = () => {
    trackEvent(`musician email link clicked`, `musician email link clicked`);
    return false;
  };

  return (
    <div>
      <div className="resume-section">
        <div className="resume-title">MUSICIAN</div>
        <div className="resume-section-title">
          <FontAwesomeIcon
            icon={icon({ name: "id-card" })}
            className="resume-icon"
          />
          Summary
        </div>
        {musicianSummaryText1}
        <br />
        <br />
        {musicianSummaryText2}
        <br />
        <br />
        To inquire about lessons, email{" "}
        <a href="mailto:spencerjones@unomaha.edu" onClick={handleClick}>
          spencerjones@unomaha.edu
        </a>
        .
      </div>
      <div className="resume-section">
        <span className="resume-section-title">
          <FontAwesomeIcon
            icon={icon({ name: "drum" })}
            className="resume-icon"
          />{" "}
          Performance Experience
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Omaha Symphony</span>
          <span>2013-present</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Kansas City Symphony</span>
          <span>2013-present</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Indianapolis Symphony Orchestra</span>
          <span>2017-present</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Grand Rapids Symphony</span>
          <span>2023-present</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Lincoln Symphony Orchestra</span>
          <span>2022-present</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Hawaii Symphony Orchestra</span>
          <span>2018</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Quad City Symphony Orchestra</span>
          <span>2015</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>New World Symphony</span>
          <span>2015-2016</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Sioux City Symphony Orchestra</span>
          <span>2023</span>
        </span>
        <span className="resume-subsection-title" style={{ paddingBottom: 8 }}>
          <span>Des Moines Symphony Orchestra</span>
          <span>2011</span>
        </span>
      </div>
      <div className="resume-section">
        <div className="resume-section-title">
          <FontAwesomeIcon
            icon={icon({ name: "graduation-cap" })}
            className="resume-icon"
          />
          Education
        </div>
        <div>
          <div className="resume-subsection-title">
            <span>
              University of Missouri-Kansas City Conservatory of Music
            </span>
            <span>2010-2014</span>
          </div>

          <ul>
            <li>Master of Music in Percussion Performance</li>
            <li>Post-Graduate Studies in Orchestral Performance</li>
          </ul>
        </div>

        <div>
          <div className="resume-subsection-title">
            <span>Oklahoma State University</span>
            <span>2006-2010</span>
          </div>

          <ul>
            <li>Bachelor of Arts in Music with History minor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusicianResume;
