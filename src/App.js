import headshot from './headshot.jpg';
import headshotColor from './fullcolorheadshot.png'
import './App.css';

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
          <p>musician teacher engineer</p>
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
