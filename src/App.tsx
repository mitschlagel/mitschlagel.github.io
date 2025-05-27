import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { HeaderText } from './assets/headerText';
import { note001 } from './assets/notes/note001';
import { note002 } from './assets/notes/note002';
import { note003 } from './assets/notes/note003';
import { note004 } from './assets/notes/note004';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faGithub, 
  faLinkedin, 
  faLastfm,
  faBluesky
} from '@fortawesome/free-brands-svg-icons';
import slide001 from './assets/slides/slide001.jpg'
import slide002 from './assets/slides/slide002.png'
import slide003 from './assets/slides/slide003.png'
import { useState, useRef, useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    line-height: 1.3;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2em;
  }
`;

const Header = styled.div`
  padding: 1em;
  width: 100%;
  font-size: 1.2em;
  color: #222;
  margin-bottom: 2em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.8em;
    font-size: 1em;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 0 1.5em 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1em;
    padding-bottom: 1.5em;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const MainTitle = styled.h1`
  color: #00563B;
  margin: 0;
  padding: 0;
  font-size: 2em;
  position: relative;
  font-weight: 700;
  letter-spacing: -0.02em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #00563B, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.6em;
    
    &:after {
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
    }
  }
`;

const SubTitle = styled.div`
  color: #00563B;
  font-size: 1.2em;
  margin: 0;
  padding: 0;
  position: relative;
  font-style: italic;
  font-weight: 500;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Section = styled.div<{ isExpandable: boolean; isExpanded: boolean }>`
  display: flex;
  width: 100%;
  background-color: #fff;
  color: #222;
  padding: 1em; 
  margin-top: 2em;
  align-items: stretch;
  border: 1px solid #ccc;
  cursor: ${props => props.isExpandable ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  position: relative;

  ${props => props.isExpandable && !props.isExpanded && `
    &:after {
      content: '↓ Read More';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 2em 1em 1em;
      background: linear-gradient(to top, 
        rgba(255,255,255,1) 40%, 
        rgba(255,255,255,0.95) 60%,
        rgba(255,255,255,0.8) 80%,
        rgba(255,255,255,0) 100%
      );
      text-align: center;
      color: #007F58;
      font-weight: 600;
      font-size: 1.1em;
      text-shadow: 0 0 10px rgba(255,255,255,0.8);
    }
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.8em;
    gap: 1em;
  }
`;

const Slide = styled.div`
  width: 25%;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Note = styled.div<{ isExpanded: boolean }>`
  width: 75%;
  padding: 0em 1em;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  .post-content {
    padding: 0;
    margin: 0 0 1.5em 0;
    max-height: ${props => props.isExpanded ? 'none' : '250px'};
    overflow: hidden;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }
  }
  
  h1, h2, h3, h4 {
    margin: 1.5em 0 1em 0;
    color: #00563B;
  }

  h1:first-child, h2:first-child, h3:first-child, h4:first-child {
    margin-top: 0;
  }
  
  a {
    color: #007F58;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: 600;
    
    &:hover {
      color: #00563B;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Headline = styled.h2`
  font-size: 2em;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  color: #00563B;
  font-weight: 700;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #00563B;
  font-size: 2.5rem;
  margin: 0 0.25em;
  transition: color 0.2s ease;
  
  &:hover {
    color: #007F58;
  }
`;

interface PostProps {
  slide?: string;
  headline?: string;
  note: string;
  id: number;
}

const Post: React.FC<PostProps> = ({ slide, headline, note }) => { 
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpandable, setIsExpandable] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setIsExpandable(height > 250);
    }
  }, [note]);

  const handleClick = () => {
    if (isExpandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Section 
      isExpandable={isExpandable} 
      isExpanded={isExpanded}
      onClick={handleClick}
    >
      <Slide>
        {slide ? (
          <Image src={slide} alt={headline} />
        ) : (
          <Headline>{headline}</Headline>
        )}
      </Slide>
      <Note isExpanded={isExpanded}>
        <div 
          ref={contentRef}
          className="post-content"
          dangerouslySetInnerHTML={{ __html: note }}
        />
      </Note>
    </Section>
  );
}

const posts: PostProps[] = [
  {
    id: 4,
    headline: '"I remember the world before ChatGPT"',
    note: note004
  },
  {
    id: 1,
    slide: slide001,
    headline: 'Post 1',
    note: note001
  },
  {
    id: 2,
    slide: slide002,
    headline: 'Post 2',
    note: note002
  },
  {
    id: 3,
    slide: slide003,
    headline: 'Symphony Anywhere',
    note: note003
  }
];

const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer>
      <SocialLink href="https://www.instagram.com/mitschlagel">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
      <SocialLink href="https://github.com/mitschlagel">
        <FontAwesomeIcon icon={faGithub} />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/spencerljones">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faBluesky} />
      </SocialLink>
      <SocialLink href="#">
        <FontAwesomeIcon icon={faLastfm} />
      </SocialLink>
    </SocialLinksContainer>
  )}

const App: React.FC = () => {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <TitleRow>
            <TitleContainer>
              <MainTitle>spencerjones.studio</MainTitle>
              <SubTitle>engineering, business, & music</SubTitle>
            </TitleContainer>
            <SocialLinks/>
          </TitleRow>
          <HeaderText />
        </Header>
        {sortedPosts.map(post => (
          <Post 
            key={post.id}
            slide={post.slide}
            headline={post.headline}
            note={post.note}
            id={post.id}
          />
        ))}
      </Container>
    </>
  )
}

export default App