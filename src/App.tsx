import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useState } from 'react'
import { note001 } from './assets/notes/note001';
import { note002 } from './assets/notes/note002';
import { note003 } from './assets/notes/note003';
import { note004 } from './assets/notes/note004';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Fira Code', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    background: #ffffff;
    color: #1a1a1a;
  }

  a {
    color: #1a1a1a;
    text-decoration: none;
    
    &:hover {
      color: #666;
    }
  }
`;

const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 60px 20px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Header = styled.header`
  margin-bottom: 60px;
  cursor: pointer;
  
  &:hover h1 {
    color: #666;
  }
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1a1a1a;
`;

const Tagline = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  font-weight: 400;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PostLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid #e5e5e5;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: #fafafa;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: -8px;
    margin-right: -8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const PostTitle = styled.span`
  font-size: 16px;
  color: #1a1a1a;
  font-weight: 500;
`;

const PostDate = styled.span`
  font-size: 14px;
  color: #999;
  font-weight: 400;
  white-space: nowrap;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Article = styled.article`
  max-width: 100%;
  
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #1a1a1a;
  }
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 16px 0;
    color: #1a1a1a;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 12px 0;
    color: #1a1a1a;
  }
  
  p {
    margin: 16px 0;
    line-height: 1.7;
    color: #1a1a1a;
  }
  
  a {
    color: #1a1a1a;
    text-decoration: underline;
    
    &:hover {
      color: #666;
    }
  }
  
  i {
    font-style: italic;
  }
`;

const ArticleDate = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 40px;
`;

const Footer = styled.footer`
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #e5e5e5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  font-size: 14px;
  color: #666;
  
  &:hover {
    color: #1a1a1a;
  }
`;

interface Post {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 4,
    title: 'I remember the world before ChatGPT',
    date: 'Feb 8, 2026',
    slug: 'chatgpt',
    content: note004
  },
  {
    id: 3,
    title: 'Symphony Anywhere',
    date: 'Jan 15, 2026',
    slug: 'symphony-anywhere',
    content: note003
  },
  {
    id: 2,
    title: 'tstatus.lol',
    date: 'Dec 12, 2025',
    slug: 'tstatus',
    content: note002
  },
  {
    id: 1,
    title: 'The Manager\'s Path',
    date: 'Nov 3, 2025',
    slug: 'managers-path',
    content: note001
  }
];

const App: React.FC = () => {
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleHomeClick = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header onClick={handleHomeClick}>
          <Name>Spencer Jones</Name>
          <Tagline>Engineer, Musician</Tagline>
        </Header>

        {selectedPost ? (
          <Article>
            <h1>{selectedPost.title}</h1>
            <ArticleDate>{selectedPost.date}</ArticleDate>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </Article>
        ) : (
          <PostList>
            {sortedPosts.map(post => (
              <PostLink key={post.id} onClick={() => handlePostClick(post)}>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.date}</PostDate>
              </PostLink>
            ))}
          </PostList>
        )}

        <Footer>
          <SocialLinks>
            <SocialLink href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/spencerljones" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer">
              Instagram
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              Bluesky
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              Last.fm
            </SocialLink>
          </SocialLinks>
        </Footer>
      </Container>
    </>
  )
}

export default App