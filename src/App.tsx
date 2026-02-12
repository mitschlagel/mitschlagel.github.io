import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { marked } from 'marked'
import headshot from './assets/img/headshot.png';
import { Buffer } from 'buffer';

// Make Buffer available globally for gray-matter
window.Buffer = Buffer;

const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
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
    background: ${props => props.$isDark ? '#1a1a1a' : '#ffffff'};
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
    text-decoration: none;
    
    &:hover {
      color: ${props => props.$isDark ? '#999' : '#666'};
    }
  }
`;

const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 60px 20px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const DarkModeToggle = styled.button<{ $isDark: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => props.$isDark ? '#2a2a2a' : '#f5f5f5'};
  border: 1px solid ${props => props.$isDark ? '#404040' : '#e5e5e5'};
  color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    background: ${props => props.$isDark ? '#333' : '#e5e5e5'};
    transform: scale(1.1);
  }
`;

const Header = styled.header`
  margin-bottom: 60px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover h1 {
    color: #666;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h1<{ $isDark: boolean }>`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  transition: color 0.3s ease;
`;

const Tagline = styled.p<{ $isDark: boolean }>`
  font-size: 16px;
  color: ${props => props.$isDark ? '#999' : '#666'};
  margin: 0;
  font-weight: 400;
  transition: color 0.3s ease;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PostLink = styled.a<{ $isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.$isDark ? '#404040' : '#e5e5e5'};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.$isDark ? '#2a2a2a' : '#fafafa'};
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

const PostTitle = styled.span<{ $isDark: boolean }>`
  font-size: 16px;
  color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  font-weight: 500;
`;

const PostDate = styled.span<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#666' : '#999'};
  font-weight: 400;
  white-space: nowrap;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Article = styled.article<{ $isDark: boolean }>`
  max-width: 100%;
  
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  }
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 16px 0;
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 12px 0;
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  }
  
  p {
    margin: 16px 0;
    line-height: 1.7;
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  }
  
  a {
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
    text-decoration: underline;
    
    &:hover {
      color: ${props => props.$isDark ? '#999' : '#666'};
    }
  }
  
  i {
    font-style: italic;
  }
`;

const ArticleDate = styled.div<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#666' : '#999'};
  margin-bottom: 40px;
`;

const Footer = styled.footer<{ $isDark: boolean }>`
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.$isDark ? '#404040' : '#e5e5e5'};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#999' : '#666'};
  
  &:hover {
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  }
`;

interface Post {
  id: number;
  title: string;
  date: string;
  dateRaw: string;
  slug: string;
  content: string;
}

// Load and parse all markdown files
const loadPosts = (): Post[] => {
  const markdownFiles = import.meta.glob('./assets/posts/*.md', { eager: true, query: '?raw', import: 'default' });
  
  const posts: Post[] = Object.entries(markdownFiles)
    .filter(([path]) => !path.includes('README.md')) // Exclude README
    .map(([_path, content], index) => {
      const { data, content: markdownContent } = matter(content as string);
      const htmlContent = marked(markdownContent);
      
      return {
        id: index + 1,
        title: data.title as string,
        date: formatDate(data.date as string),
        dateRaw: data.date as string,
        slug: data.slug as string,
        content: htmlContent as string
      };
    });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.dateRaw);
    const dateB = new Date(b.dateRaw);
    return dateB.getTime() - dateA.getTime();
  });
};

// Helper to format date nicely
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const posts = loadPosts();

const App: React.FC = () => {
  // Posts are already sorted by date in loadPosts, but ensure newest first
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.dateRaw);
    const dateB = new Date(b.dateRaw);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isDark, setIsDark] = useState(() => {
    // Try to get saved preference securely
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        // Validate that it's actually a boolean
        if (typeof parsed === 'boolean') {
          return parsed;
        }
      }
    } catch (e) {
      // localStorage might be disabled or JSON parsing failed
      console.warn('Could not read dark mode preference from localStorage');
    }
    
    // Fall back to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    
    // Default to light mode if system preference unavailable
    return false;
  });

  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDark));
    } catch (e) {
      // localStorage might be disabled in private mode
      console.warn('Could not save dark mode preference to localStorage');
    }
  }, [isDark]);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleHomeClick = () => {
    setSelectedPost(null);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <GlobalStyle $isDark={isDark} />
      <Container>
        <DarkModeToggle $isDark={isDark} onClick={toggleDarkMode}>
          {isDark ? '☼' : '☽'}
        </DarkModeToggle>
        
        <Header onClick={handleHomeClick}>
          <ProfileImage src={headshot} alt="Spencer Jones" />
          <Name $isDark={isDark}>Spencer Jones</Name>
          <Tagline $isDark={isDark}>Software Engineer, Musician</Tagline>
        </Header>

        {selectedPost ? (
          <Article $isDark={isDark}>
            <h1>{selectedPost.title}</h1>
            <ArticleDate $isDark={isDark}>{selectedPost.date}</ArticleDate>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </Article>
        ) : (
          <PostList>
            {sortedPosts.map(post => (
              <PostLink key={post.id} $isDark={isDark} onClick={() => handlePostClick(post)}>
                <PostTitle $isDark={isDark}>{post.title}</PostTitle>
                <PostDate $isDark={isDark}>{post.date}</PostDate>
              </PostLink>
            ))}
          </PostList>
        )}

        <Footer $isDark={isDark}>
          <SocialLinks>
            <SocialLink $isDark={isDark} href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
            <SocialLink $isDark={isDark} href="https://www.linkedin.com/in/spencerljones" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
            <SocialLink $isDark={isDark} href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer">
              Instagram
            </SocialLink>
            <SocialLink $isDark={isDark} href="https://bsky.app/profile/mitschlagel.bsky.social" target="_blank" rel="noopener noreferrer">
              Bluesky
            </SocialLink>
            <SocialLink $isDark={isDark} href="https://www.last.fm/user/spormcer" target="_blank" rel="noopener noreferrer">
              Last.fm
            </SocialLink>
          </SocialLinks>
        </Footer>
      </Container>
    </>
  )
}

export default App