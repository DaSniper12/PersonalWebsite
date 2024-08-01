import { useState, useEffect, useRef } from 'react';
import { ReactReader } from 'react-reader';
import { Slider, Text, ActionIcon, Menu, Select, Group, HoverCard, Grid } from '@mantine/core';
import { IconAdjustmentsHorizontal, IconPlayerPause, IconPlayerPlay, IconVolume, IconPlayerTrackNext } from '@tabler/icons-react';
import StarlitDreams from './assets/Starlit-Dreams.mp3';
import StarlitDreams1 from './assets/Starlit-Dreams-1.mp3';
import betterbgmusic from './assets/better-bg-music.wav';
import TheLastQuestion from './assets/the-last-question.epub?url';
import IntroModal from './IntroModal';
import FantasyStory from './assets/fantasy-story.txt';
import ChauSara from './assets/Chau-Sara-Evolution.mp3';

const backgroundMusic = [
  { value: 'chauSara', label: 'Chau Sara', src: ChauSara },
  { value: 'betterbgmusic', label: 'Better Background Music', src: betterbgmusic },
  { value: 'starlitDreams', label: 'Starlit Dreams', src: StarlitDreams },
  { value: 'starlitDreams1', label: 'Starlit Dreams 1', src: StarlitDreams1 },
];

const EbookReactReader = ({ epubUrl }) => {
  const [location, setLocation] = useState(0);
  const [showReader, setShowReader] = useState(false);
  const [volume, setVolume] = useState(25);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [storyContent, setStoryContent] = useState('');
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(backgroundMusic[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    // const musicTime = Math.round(Math.random() * (10 - 5 + 1) + 5) * 60 * 1000; // 5-10 minutes
    const musicTime = Math.round(Math.random() *  2 + 3) * 60 * 1000; // 5-10 minutes
    const startTime = Date.now();

    while (Date.now() - startTime < musicTime) {
      const randomIndex = Math.floor(Math.random() * backgroundMusic.length);
      setCurrentSong(backgroundMusic[randomIndex]);
      audioRef.current.src = backgroundMusic[randomIndex].src;
      audioRef.current.volume = 0;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
        
        const fadeInDuration = 30000;
        const startVolume = 0;
        const endVolume = volume / 100;
        const fadeStartTime = Date.now();

        const fadeInterval = setInterval(() => {
          const elapsedTime = Date.now() - fadeStartTime;
          if (elapsedTime < fadeInDuration) {
            const newVolume = startVolume + (endVolume - startVolume) * (elapsedTime / fadeInDuration);
            audioRef.current.volume = newVolume;
          } else {
            audioRef.current.volume = endVolume;
            clearInterval(fadeInterval);
          }
        }, 50);

        await new Promise(resolve => {
          audioRef.current.onended = () => {
            clearInterval(fadeInterval);
            setIsPlaying(false);
            resolve();
          };
        });
      } catch (error) {
        console.error('Error playing audio:', error);
        setIsPlaying(false);
        break;
      }
    }

    scheduleNextPlay();
  };

  const scheduleNextPlay = () => {
    // const nextPlayDelay = Math.round(Math.random() * (7 - 5 + 1) + 5) * 60 * 1000; // 5-7 minutes
    // const nextPlayDelay = Math.round(Math.random() * 3 + 5) * 60 * 1000; // 5-7 minutes
    const nextPlayDelay = Math.round(Math.random() * 2 + 2) * 60 * 1000; // 2-4 minutes
    timeoutRef.current = setTimeout(playMusic, nextPlayDelay);
  };

  const handleStart = async (genre, initialVolume, initialPlaybackRate) => {
    setShowReader(true);
    setVolume(initialVolume);
    setPlaybackRate(initialPlaybackRate);
    setSelectedGenre(genre);
    
    if (genre === 'Fantasy') {
      const response = await fetch(FantasyStory);
      const text = await response.text();
      setStoryContent(text);
    }
    
    audioRef.current = new Audio();
    audioRef.current.volume = initialVolume / 100;
    audioRef.current.playbackRate = initialPlaybackRate;
    
    const initialDelay = 30 * 1000;
    timeoutRef.current = setTimeout(playMusic, initialDelay);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const handlePlaybackRateChange = (value) => {
    setPlaybackRate(value);
    if (audioRef.current) {
      audioRef.current.playbackRate = value;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongChange = (value) => {
    const newSong = backgroundMusic.find(song => song.value === value);
    setCurrentSong(newSong);
    if (audioRef.current) {
      audioRef.current.src = newSong.src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div>
      <IntroModal onStart={handleStart} />
      {showReader && (
        <>
          <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
            <HoverCard width={600} shadow="md" position="left" withArrow closeDelay={500}>
              <HoverCard.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconAdjustmentsHorizontal size={24} />
                </ActionIcon>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Grid align="center">
                  <Grid.Col span={3}>
                    <Group>
                      <IconVolume size={20} />
                      <Slider
                        value={volume}
                        onChange={handleVolumeChange}
                        min={0}
                        max={100}
                        label="Volume"
                        style={{ flex: 1 }}
                      />
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Group>
                      <IconPlayerTrackNext size={20} />
                      <Slider
                        value={playbackRate}
                        onChange={handlePlaybackRateChange}
                        min={0.5}
                        max={2}
                        step={0.1}
                        label="Playback Rate"
                        style={{ flex: 1 }}
                      />
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={1}>
                    <Group>
                      <ActionIcon
                        onClick={togglePlayPause}
                        variant="subtle"
                      >
                        {isPlaying ? (
                          <IconPlayerPause size={24} />
                        ) : (
                          <IconPlayerPlay size={24} />
                        )}
                      </ActionIcon>
                    </Group>
                  </Grid.Col>
                  <Grid.Col span={5}>
                      <Select
                        data={backgroundMusic}
                        value={currentSong.value}
                        onChange={handleSongChange}
                        style={{ width: "100%" }}
                      />
                  </Grid.Col>
                </Grid>
              </HoverCard.Dropdown>
            </HoverCard>
          </div>
          <div
            style={{
              height: "90vh",
              width: "85vw",
              margin: "0 auto",
            }}
          >
            {selectedGenre === "Fantasy" ? (
              <div
                style={{
                  whiteSpace: "pre-wrap",
                  overflowY: "auto",
                  height: "100%",
                  width: "750px",
                  margin: "0 auto",
                  backgroundColor: "#fff8e7",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "black",
                }}
              >
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                  A Witch's Guide to Escape: A Practical Compendium of Portal
                  Fantasies
                </h2>
                {storyContent}
              </div>
            ) : (
              <ReactReader
                url={TheLastQuestion}
                location={location}
                locationChanged={(epubcfi) => setLocation(epubcfi)}
                epubOptions={{
                  flow: "scrolled-doc",
                  manager: "continuous",
                  allowScriptedContent: true,
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EbookReactReader;