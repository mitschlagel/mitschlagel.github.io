import { useState, useEffect } from 'react';
import styled from 'styled-components';

const NowPlayingContainer = styled.div<{ $isDark: boolean }>`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const NowPlayingContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const NowPlayingLabel = styled.span<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#999' : '#666'};
  white-space: nowrap;
`;

const AlbumArt = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 3px;
  object-fit: cover;
  flex-shrink: 0;
`;

const TrackName = styled.span<{ $isDark: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.$isDark ? '#e5e5e5' : '#1a1a1a'};
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${props => props.$isDark ? '#999' : '#666'};
    }
  }
`;

const ArtistName = styled.span<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#999' : '#666'};
`;

const NotPlaying = styled.div<{ $isDark: boolean }>`
  font-size: 14px;
  color: ${props => props.$isDark ? '#666' : '#999'};
`;

interface Track {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
  nowPlaying: boolean;
}

interface NowPlayingProps {
  isDark: boolean;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ isDark }) => {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchNowPlaying = async () => {
    try {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
      const username = import.meta.env.VITE_LASTFM_USERNAME;
      
      if (!apiKey || !username) {
        console.error('Last.fm API key or username not configured');
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
      );
      
      const data = await response.json();
      
      if (data.recenttracks?.track?.[0]) {
        const latestTrack = data.recenttracks.track[0];
        const nowPlaying = latestTrack['@attr']?.nowplaying === 'true';
        
        setTrack({
          name: latestTrack.name,
          artist: latestTrack.artist['#text'] || latestTrack.artist,
          album: latestTrack.album['#text'],
          albumArt: latestTrack.image[3]['#text'] || latestTrack.image[2]['#text'], // Large or medium
          url: latestTrack.url,
          nowPlaying
        });
      } else {
        setTrack(null);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Last.fm data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null;
  }

  if (!track) {
    return (
      <NowPlayingContainer $isDark={isDark}>
        <NotPlaying $isDark={isDark}>Not listening to anything right now</NotPlaying>
      </NowPlayingContainer>
    );
  }

  return (
    <NowPlayingContainer $isDark={isDark}>
      <NowPlayingContent>
        <NowPlayingLabel $isDark={isDark}>
          {track.nowPlaying ? 'Now Playing' : 'Last Played'}
        </NowPlayingLabel>
        {track.albumArt && <AlbumArt src={track.albumArt} alt={`${track.album} album art`} />}
        <TrackName $isDark={isDark}>
          <a href={track.url} target="_blank" rel="noopener noreferrer">
            {track.name}
          </a>
        </TrackName>
        <ArtistName $isDark={isDark}>{track.artist}</ArtistName>
      </NowPlayingContent>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
