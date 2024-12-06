import './App.css'
import styled from 'styled-components'

import { HeaderText } from './assets/notes/headerText';
import { note001 } from './assets/notes/note001';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const Header = styled.div`
  
  color: #222;
  padding: 1em;
  width: 100%;
  font-size: 1.2em;

  @media (max-width: 768px) {
    width: 100%;
}
`

const Section = styled.div`
display: flex;
  width: 100%;
  background-color: #fff;
  color: #222;
  padding: 1em; 
  margin-top: 1em;
  align-items: flex-start;
  
  border: 1px solid #ccc;

  @media (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
}
`;

const Slide = styled.div`
  width: 65%;
  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
  }
`;

const Note = styled.div`
  width: 35%;
  padding: 0em 1em;
  align-items: flex-start;
  
    @media (max-width: 1080px) {
      width: 100%;
      padding: 0;
    }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Headline = styled.h2`
  font-size: 2em;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

interface PostProps {
  slide?: string;
  headline?: string;
  note: string;
}

const Post: React.FC<PostProps> = ({ slide, headline, note }) => { 
  return (
    <Section>
      <Slide>
        {slide ? (
          <Image src={slide} alt={headline} />
        ) : (
          <Headline>{headline}</Headline>
        )}
      </Slide>
      <Note>
        <p style={{padding: 0, margin: 0}}>{note}</p>
      </Note>
    </Section>
  );
}

const SocialLinks: React.FC = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <a 
      href="https://www.instagram.com/mitschlagel"
        style={{ 
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <img src='src/assets/icons/instagram.png' style={{width: 32}} alt='instagramIcon' />
      </a>
      <a 
      href="https://github.com/mitschlagel"
        style={{  
          textDecoration: 'none',
          color: 'inherit',
          marginLeft: 16
        }}
      >
        <img src='src/assets/icons/github.png' style={{width: 32}} alt='githubIcon' />
      </a>
      <a 
      href="https://www.linkedin.com/in/spencerljones"
        style={{  
          textDecoration: 'none',
          color: 'inherit',
          marginLeft: 16
        }}
      >
        <img src='src/assets/icons/linkedin.png' style={{width: 32}} alt='linkedinIcon' />
      </a>
    </div>
  )}

const App: React.FC = () => {
  return (
  <Container>
    <Header>
      <h1 style={{textAlign: 'center'}}>mitschalgel</h1>
      <HeaderText />
      <SocialLinks/>
    </Header>
    <Post slide='src/assets/slides/slide001.jpg' headline='Post 1' note={note001} />
  </Container>
  )
}

export default App
