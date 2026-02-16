import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'
import headshot from './assets/img/headshot.png';
import { Buffer } from 'buffer';
import { SiGithub, SiLinkedin, SiInstagram, SiBluesky, SiLastdotfm } from 'react-icons/si';
import NowPlaying from './components/NowPlaying';

// Make Buffer available globally for gray-matter
window.Buffer = Buffer;

// Configure marked with custom renderer for syntax highlighting
const renderer = new marked.Renderer();
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      const highlighted = hljs.highlight(text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    } catch (err) {
      console.error('Highlight.js error:', err);
    }
  }
  const highlighted = hljs.highlightAuto(text).value;
  return `<pre><code class="hljs">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });

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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderClickable = styled.div`
  cursor: pointer;
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

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
`;

const SocialIconLink = styled.a<{ $isDark: boolean }>`
  color: ${props => props.$isDark ? '#999' : '#666'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const PostLink = styled.a<{ $isDark: boolean; $index: number; $total: number }>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.$isDark ? '#404040' : '#e5e5e5'};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)'};
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

  code {
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
    padding: 2px 6px;
    border-radius: 3px;
    background: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }

  pre {
    background: ${props => props.$isDark ? '#292A30' : '#F5F5F7'};
    border: 1px solid ${props => props.$isDark ? '#404040' : '#e5e5e5'};
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 24px 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    
    code {
      background: none;
      padding: 0;
      color: ${props => props.$isDark ? '#FFFFFF' : '#1D1D1F'};
      font-size: 0.9em;
      line-height: 1.6;
      white-space: pre-wrap;
    }
  }

  /* Swift/Xcode syntax highlighting */
  pre code {
    .comment { color: ${props => props.$isDark ? '#7F8C99' : '#78C2B3'}; }
    .string { color: ${props => props.$isDark ? '#E8865E' : '#FF8170'}; }
    .keyword { color: ${props => props.$isDark ? '#FF7AB2' : '#FF7AB2'}; }
    .function { color: ${props => props.$isDark ? '#FF816F' : '#D9C97C'}; }
    .class-name,
    .type { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
    .number { color: ${props => props.$isDark ? '#B1D99D' : '#B281EB'}; }
    .operator { color: ${props => props.$isDark ? '#FFFFFF' : '#1D1D1F'}; }
    .punctuation { color: ${props => props.$isDark ? '#FFFFFF' : '#1D1D1F'}; }
    .property { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
    .builtin { color: ${props => props.$isDark ? '#30A0FC' : '#4EB0CC'}; }
    .attr-name { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
  }

  /* Support for highlight.js classes */
  pre code {
    .hljs-comment { color: ${props => props.$isDark ? '#7F8C99' : '#78C2B3'}; }
    .hljs-string { color: ${props => props.$isDark ? '#E8865E' : '#FF8170'}; }
    .hljs-keyword { color: ${props => props.$isDark ? '#FF7AB2' : '#FF7AB2'}; }
    .hljs-function { color: ${props => props.$isDark ? '#FF816F' : '#D9C97C'}; }
    .hljs-title { color: ${props => props.$isDark ? '#FF816F' : '#D9C97C'}; }
    .hljs-class { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
    .hljs-type { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
    .hljs-number { color: ${props => props.$isDark ? '#B1D99D' : '#B281EB'}; }
    .hljs-built_in { color: ${props => props.$isDark ? '#30A0FC' : '#4EB0CC'}; }
    .hljs-literal { color: ${props => props.$isDark ? '#B1D99D' : '#B281EB'}; }
    .hljs-params { color: ${props => props.$isDark ? '#FFFFFF' : '#1D1D1F'}; }
    .hljs-attr { color: ${props => props.$isDark ? '#29EEC6' : '#78C2B3'}; }
  }
`;

const ArticleDate = styled.div<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#666' : '#999'};
  margin-bottom: 40px;
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
      const htmlContent = marked.parse(markdownContent);
      
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
        
        <Header>
          <HeaderClickable onClick={handleHomeClick}>
            <ProfileImage src={headshot} alt="Spencer Jones" />
            <Name $isDark={isDark}>spencerjones.studio</Name>
            <Tagline $isDark={isDark}>Software Engineer, Musician</Tagline>
          </HeaderClickable>
          <SocialIconsContainer>
            <SocialIconLink $isDark={isDark} href="https://github.com/mitschlagel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <SiGithub />
            </SocialIconLink>
            <SocialIconLink $isDark={isDark} href="https://www.linkedin.com/in/spencerljones" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <SiLinkedin />
            </SocialIconLink>
            <SocialIconLink $isDark={isDark} href="https://www.instagram.com/mitschlagel" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SiInstagram />
            </SocialIconLink>
            <SocialIconLink $isDark={isDark} href="https://bsky.app/profile/mitschlagel.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
              <SiBluesky />
            </SocialIconLink>
            <SocialIconLink $isDark={isDark} href="https://www.last.fm/user/spormcer" target="_blank" rel="noopener noreferrer" aria-label="Last.fm">
              <SiLastdotfm />
            </SocialIconLink>
          </SocialIconsContainer>
        </Header>

        {selectedPost ? (
          <Article $isDark={isDark}>
            <h1>{selectedPost.title}</h1>
            <ArticleDate $isDark={isDark}>{selectedPost.date}</ArticleDate>
            <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </Article>
        ) : (
          <PostList>
            {sortedPosts.map((post, index) => (
              <PostLink 
                key={post.id} 
                $isDark={isDark} 
                $index={index}
                $total={sortedPosts.length}
                onClick={() => handlePostClick(post)}
              >
                <PostTitle $isDark={isDark}>{post.title}</PostTitle>
                <PostDate $isDark={isDark}>{post.date}</PostDate>
              </PostLink>
            ))}
          </PostList>
        )}

        <NowPlaying isDark={isDark} />
      </Container>
    </>
  )
}

export default App