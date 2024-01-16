import React from "react";

import {softwareSummaryText} from "../strings/Strings";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const SoftwareResume = () => {
    return (
      <div>
        
        <div className='resume-section'>
        <h3>SOFTWARE ENGINEER</h3>
        <span className='resume-section-title'><PersonRoundedIcon className='resume-icon' /> Summary</span>
        
        {softwareSummaryText}
        
        </div>
        <div className='resume-section'>
          <span className='resume-section-title'><WorkRoundedIcon className='resume-icon' /> Work Experience</span>
          <div>
            <span className='resume-subsection-title'><span>iOS Developer</span><span>First National Bank of Omaha {"(remote)"}</span><span>Jan 2022-present</span></span>
            
            <ul>
              <li>Member of an Agile team developing a white-label native iOS Swift codebase for 19 different mobile banking and credit card apps.</li>
              <li>Implemented mobile check capture and deposit feature in SwiftUI that processed $2.2 billion in customer deposits in 2023.</li>
              <li>Implemented a customer messaging feature that integrated a Salesforce SDK and has had {"\>"} 10 million impressions in first 60 days in production.</li>
              <li>Architected the conversion of the app’s two highest traffic features from UIKit and RxSwift to SwiftUI, reducing lines of code by 61%.</li>
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

  export default SoftwareResume;