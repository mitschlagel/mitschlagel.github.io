import './App.css'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const Header = styled.div`
  background-color: #ccc;
  color: #222;
  padding: 1em;
  text-align: center;
  width: 100%;
  border: 1px solid #ccc;

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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
}
`;

const Slide = styled.div`
  width: 65%;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const Note = styled.div`
  width: 35%;
  padding: 0em 1em;
  align-items: flex-start;
  
    @media (max-width: 768px) {
      width: 100%;
      align-items: center;
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

const App: React.FC = () => {
  return (
  <Container>
    <Header>
      <h1>My Blog</h1>
      <p>About me</p>
    </Header>
    <Post slide='src/assets/slides/slide001.jpg' headline='Post 1' note='this is the content' />
    <Post headline='Post 2' note='this is the content' />
  </Container>
  )
}

export default App
