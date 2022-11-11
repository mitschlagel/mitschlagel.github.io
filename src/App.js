import headshot from './headshot.jpg';
import headshotColor from './fullcolorheadshot.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot}
            onMouseOver={e => e.currentTarget.src = headshotColor}
            onMouseOut={e => e.currentTarget.src = headshot}
            className="rounded"
        />
        <div className='text'>
          <p>spencer jones</p>
          <p>musician teacher engineer</p>
          <p className="links">
            <a href="https://www.instagram.com/mitschlagel/">instagram </a>
            <a href="https://www.linkedin.com/in/spencer-jones-omaha/">linkedin</a>
          </p>
        </div>
          
        
        
      </header>
    </div>
  );
}

export default App;
