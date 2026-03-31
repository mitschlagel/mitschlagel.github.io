import './App.css'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { Buffer } from 'buffer';
import { SiGithub, SiLinkedin, SiInstagram, SiBluesky, SiLastdotfm } from 'react-icons/si';
import { BsCircleHalf } from 'react-icons/bs';
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

const palette = {
  // Kanso Ink (dark) base
  inkBg0: '#14171d',
  inkBg1: '#1f1f26',
  inkBg2: '#22262D',
  inkBg3: '#393B44',
  inkBg4: '#4b4e57',
  // Kanso Pearl (light) base
  pearlWhite0: '#f2f1ef',
  pearlWhite1: '#e2e1df',
  pearlWhite2: '#dddddb',
  pearlWhite3: '#cacac7',
  // Accents
  blue3: '#8ba4b0',
  blue: '#7FB4CA',
  pearlBlue4: '#4d699b',
  pearlBlue5: '#5d57a3',
};

const theme = {
  light: {
    bg: palette.pearlWhite0,
    text: '#545464',
    mutedText: '#6D6D69',
    border: palette.pearlWhite3,
    surface: palette.pearlWhite1,
    interactiveSurface: palette.pearlWhite2,
    accent: palette.pearlBlue4,
    accentHover: palette.pearlBlue5,
    accentSoft: '#c7d7e0',
    glowA: 'rgba(77, 105, 155, 0.10)',
    glowB: 'rgba(93, 87, 163, 0.08)',
    codeInlineBg: palette.pearlWhite2,
    codeBlockBg: palette.pearlWhite1,
    codeBlockText: '#545464'
  },
  dark: {
    bg: palette.inkBg0,
    text: '#C5C9C7',
    mutedText: '#A4A7A4',
    border: palette.inkBg3,
    surface: palette.inkBg1,
    interactiveSurface: palette.inkBg2,
    accent: palette.blue3,
    accentHover: palette.blue,
    accentSoft: '#2D4F67',
    glowA: 'rgba(147, 138, 169, 0.12)',
    glowB: 'rgba(139, 164, 176, 0.10)',
    codeInlineBg: palette.inkBg1,
    codeBlockBg: palette.inkBg1,
    codeBlockText: '#C5C9C7'
  }
};

type ThemeMode = keyof typeof theme;
type ThemeToken = keyof (typeof theme)['light'];

const colorToken = (isDark: boolean, token: ThemeToken): string => {
  const mode: ThemeMode = isDark ? 'dark' : 'light';
  return theme[mode][token];
};

const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    background:
      radial-gradient(circle at 12% 0%, ${props => colorToken(props.$isDark, 'glowA')} 0%, transparent 42%),
      radial-gradient(circle at 88% 8%, ${props => colorToken(props.$isDark, 'glowB')} 0%, transparent 38%),
      ${props => colorToken(props.$isDark, 'bg')};
    color: ${props => colorToken(props.$isDark, 'text')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Alegreya', serif;
  }

  code, pre, kbd, samp {
    font-family: 'Source Code Pro', monospace;
  }

  a {
    color: ${props => colorToken(props.$isDark, 'accent')};
    text-decoration: none;
    
    &:hover {
      color: ${props => colorToken(props.$isDark, 'accentHover')};
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
  background: transparent;
  border: none;
  color: ${props => colorToken(props.$isDark, 'mutedText')};
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    color: ${props => colorToken(props.$isDark, 'accent')};
    transform: translateY(-1px) scale(1.05);
    text-shadow: 0 0 10px ${props => colorToken(props.$isDark, 'accentSoft')};
  }

  &:focus-visible {
    outline: 2px solid ${props => colorToken(props.$isDark, 'accent')};
    outline-offset: 4px;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Header = styled.header<{ $isDark: boolean }>`
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderClickable = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  
  &:hover h1 {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Name = styled.h1<{ $isDark: boolean }>`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  color: ${props => colorToken(props.$isDark, 'accent')};
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 0 8px 0;
  }
`;

const Tagline = styled.p<{ $isDark: boolean }>`
  font-size: 16px;
  color: ${props => colorToken(props.$isDark, 'mutedText')};
  margin: 0;
  font-weight: 400;
  transition: color 0.3s ease;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 0;
  padding-top: 16px;
  align-items: center;
  align-self: flex-start;

  @media (max-width: 768px) {
    padding-top: 0;
    align-self: auto;
    justify-content: center;
    margin-top: 16px;
  }
`;

const SocialIconLink = styled.a<{ $isDark: boolean }>`
  color: ${props => colorToken(props.$isDark, 'mutedText')};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${props => colorToken(props.$isDark, 'accent')};
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
  border-bottom: 1px solid ${props => colorToken(props.$isDark, 'border')};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => colorToken(props.$isDark, 'interactiveSurface')};
    box-shadow: inset 3px 0 0 ${props => colorToken(props.$isDark, 'accent')};
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
  color: ${props => colorToken(props.$isDark, 'text')};
  font-weight: 500;
`;

const PostDate = styled.span<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => colorToken(props.$isDark, 'accent')};
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
    color: ${props => colorToken(props.$isDark, 'text')};
  }
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 16px 0;
    color: ${props => colorToken(props.$isDark, 'text')};
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 12px 0;
    color: ${props => colorToken(props.$isDark, 'text')};
  }
  
  p {
    margin: 16px 0;
    line-height: 1.7;
    color: ${props => colorToken(props.$isDark, 'text')};
  }
  
  a {
    color: ${props => colorToken(props.$isDark, 'accent')};
    text-decoration: underline;
    
    &:hover {
      color: ${props => colorToken(props.$isDark, 'accentHover')};
    }
  }
  
  i {
    font-style: italic;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9em;
    padding: 2px 6px;
    border-radius: 3px;
    background: ${props => colorToken(props.$isDark, 'codeInlineBg')};
  }

  pre {
    background: ${props => colorToken(props.$isDark, 'codeBlockBg')};
    border: 1px solid ${props => colorToken(props.$isDark, 'border')};
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 24px 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    
    code {
      background: none;
      padding: 0;
      color: ${props => colorToken(props.$isDark, 'codeBlockText')};
      font-size: 0.9em;
      line-height: 1.6;
      white-space: pre-wrap;
    }
  }

  /* Kanso syntax highlighting */
  pre code {
    .comment { color: ${props => props.$isDark ? '#717C7C' : '#9F9F99'}; }
    .string { color: ${props => props.$isDark ? '#98BB6C' : '#6f894e'}; }
    .keyword { color: ${props => props.$isDark ? '#938AA9' : '#b35b79'}; }
    .function { color: ${props => props.$isDark ? '#7FB4CA' : '#4d699b'}; }
    .class-name,
    .type { color: ${props => props.$isDark ? '#7AA89F' : '#597b75'}; }
    .number { color: ${props => props.$isDark ? '#DCA561' : '#cc6d00'}; }
    .operator { color: ${props => props.$isDark ? '#C5C9C7' : '#545464'}; }
    .punctuation { color: ${props => props.$isDark ? '#C5C9C7' : '#545464'}; }
    .property { color: ${props => props.$isDark ? '#7AA89F' : '#597b75'}; }
    .builtin { color: ${props => props.$isDark ? '#E46876' : '#c84053'}; }
    .attr-name { color: ${props => props.$isDark ? '#DCA561' : '#77713f'}; }
  }

  /* Support for highlight.js classes */
  pre code {
    .hljs-comment { color: ${props => props.$isDark ? '#717C7C' : '#9F9F99'}; }
    .hljs-string { color: ${props => props.$isDark ? '#98BB6C' : '#6f894e'}; }
    .hljs-keyword { color: ${props => props.$isDark ? '#938AA9' : '#b35b79'}; }
    .hljs-function { color: ${props => props.$isDark ? '#7FB4CA' : '#4d699b'}; }
    .hljs-title { color: ${props => props.$isDark ? '#7FB4CA' : '#4d699b'}; }
    .hljs-class { color: ${props => props.$isDark ? '#7AA89F' : '#597b75'}; }
    .hljs-type { color: ${props => props.$isDark ? '#7AA89F' : '#597b75'}; }
    .hljs-number { color: ${props => props.$isDark ? '#DCA561' : '#cc6d00'}; }
    .hljs-built_in { color: ${props => props.$isDark ? '#E46876' : '#c84053'}; }
    .hljs-literal { color: ${props => props.$isDark ? '#DCA561' : '#cc6d00'}; }
    .hljs-params { color: ${props => props.$isDark ? '#C5C9C7' : '#545464'}; }
    .hljs-attr { color: ${props => props.$isDark ? '#DCA561' : '#77713f'}; }
  }
`;

const ArticleDate = styled.div<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => colorToken(props.$isDark, 'mutedText')};
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
          <BsCircleHalf aria-hidden="true" />
        </DarkModeToggle>
        
        <Header $isDark={isDark}>
          <HeaderClickable onClick={handleHomeClick}>
            <Name $isDark={isDark}>spencerjones.studio</Name>
            <Tagline $isDark={isDark}>software engineer, musician</Tagline>
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
