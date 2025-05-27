import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { HeaderText } from './assets/headerText';
import { note001 } from './assets/notes/note001';
import { note002 } from './assets/notes/note002';
import { note003 } from './assets/notes/note003';
import instagramIcon from './assets/icons/instagram.png'
import githubIcon from './assets/icons/github.png'
import linkedinIcon from './assets/icons/linkedin.png'
import slide001 from './assets/slides/slide001.jpg'
import slide002 from './assets/slides/slide002.png'
import slide003 from './assets/slides/slide003.png'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background: linear-gradient(
    to bottom,
    rgba(74, 43, 107, 0.35) 0%,
    rgba(74, 43, 107, 0.25) 2em,
    rgba(74, 43, 107, 0.1) 4em,
    rgba(74, 43, 107, 0) 6em
  );
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
  color: #4A2B6B;
  margin: 0;
  padding: 0;
  font-size: 2em;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #4A2B6B, transparent);
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
  color: #4A2B6B;
  font-size: 1.2em;
  margin: 0;
  padding: 0;
  position: relative;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  color: #222;
  padding: 1em; 
  margin-top: 1em;
  align-items: stretch;
  border: 1px solid #ccc;

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

const Note = styled.div`
  width: 75%;
  padding: 0em 1em;
  display: flex;
  align-items: center;
  
  p {
    padding: 0;
    margin: 0;
  }
  
  a {
    color: #9B4DCA;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: bold;
    
    &:hover {
      color: #4A2B6B;
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
  color: #4A2B6B;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    width: 32px;
    height: 32px;
    filter: invert(27%) sepia(15%) saturate(2258%) hue-rotate(235deg) brightness(92%) contrast(87%);
    transition: filter 0.2s ease;
  }

  &:hover img {
    filter: invert(20%) sepia(29%) saturate(1925%) hue-rotate(235deg) brightness(94%) contrast(88%);
  }
`;

interface PostProps {
  slide?: string;
  headline?: string;
  note: string;
  id: number;
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
        <p style={{padding: 0, margin: 0}} dangerouslySetInnerHTML={{ __html: note }}></p>
      </Note>
    </Section>
  );
}

const posts: PostProps[] = [
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
        <img src={instagramIcon} alt='instagramIcon' />
      </SocialLink>
      <SocialLink href="https://github.com/mitschlagel">
        <img src={githubIcon} alt='githubIcon' />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/spencerljones">
        <img src={linkedinIcon} alt='linkedinIcon' />
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
              <SubTitle>mitschlagel labs</SubTitle>
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