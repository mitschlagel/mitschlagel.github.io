import headshot from './headshot.jpg';
import headshotColor from './fullcolorheadshot.png'
import './App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const musicianPopover = (
  <Popover id="popover-musician">
    <Popover.Header as="h3">musician</Popover.Header>
    <Popover.Body>
      extra percussion and timpani, omaha symphony
    </Popover.Body>
  </Popover>
);

const teacherPopover = (
  <Popover id="popover-teacher">
    <Popover.Header as="h3">teacher</Popover.Header>
    <Popover.Body>
      instructor of percussion, omaha conservatory of music
    </Popover.Body>
  </Popover>
);

const engineerPopover = (
  <Popover id="popover-engineer">
    <Popover.Header as="h3">engineer</Popover.Header>
    <Popover.Body>
      skills: ios swift swiftui react react-native <br />
      education: cs50, aim code school, creighton university
    </Popover.Body>
  </Popover>
);

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="img_wrapper">
          <img src={headshot}
              onMouseOver={e => e.currentTarget.src = headshotColor}
              onMouseOut={e => e.currentTarget.src = headshot}
              className="rounded"
              alt="picture of Spencer with sunglasses"
          />
        </div>
        <div className='text'>
          <p>spencer jones</p>
          <p>
            <OverlayTrigger trigger="hover" placement="bottom-left" overlay={musicianPopover}>
              <span>musician </span>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" placement="bottom-left" overlay={teacherPopover}>
              <span>teacher </span>
            </OverlayTrigger>
            <OverlayTrigger trigger="hover" placement="bottom-left" overlay={engineerPopover}>
              <span>engineer </span>
            </OverlayTrigger>
          </p> 
          <p className="links">
            <a href="https://www.instagram.com/mitschlagel/" target="_blank" rel="noreferrer">instagram </a>
            <a href="https://www.linkedin.com/in/spencer-jones-omaha/" target="_blank" rel="noreferrer">linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
