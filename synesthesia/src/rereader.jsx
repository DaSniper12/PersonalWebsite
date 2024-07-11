import { useState, useEffect, useRef } from 'react';
import { ReactReader } from 'react-reader';
import { Slider, Text, Group, Button } from '@mantine/core';
import StarlitDreams from './assets/Starlit-Dreams.mp3';
import StarlitDreams1 from './assets/Starlit-Dreams-1.mp3';
import betterbgmusic from './assets/better-bg-music.wav';
import TheLastQuestion from './assets/the-last-question.epub?url';


const backgroundMusic = [betterbgmusic];

const EbookReactReader = ({ epubUrl }) => {
  const [location, setLocation] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);
  const [volume, setVolume] = useState(25); // Change initial value to 50 (%)

  const playMusic = async () => {
    if (!audioEnabled || !audioRef.current) return;

    // const musicTime = Math.round(Math.random() * (10 - 5 + 1) + 5) * 60 * 1000; // 5-10 minutes
    const musicTime = Math.round(Math.random() *  2 + 3) * 60 * 1000; // 5-10 minutes
    const startTime = Date.now();
    console.log('musicTime', musicTime)

    while (Date.now() - startTime < musicTime) {
      const randomIndex = Math.floor(Math.random() * backgroundMusic.length);
      audioRef.current.src = backgroundMusic[randomIndex];
      audioRef.current.volume = 0; // Start with volume at 0

      try {
        await audioRef.current.play();
        
        // Fade in over 10 seconds
        const fadeInDuration = 30000; // 10 seconds
        const startVolume = 0;
        const endVolume = volume / 100;
        const startTime = Date.now();

        const fadeInterval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          if (elapsedTime < fadeInDuration) {
            const newVolume = startVolume + (endVolume - startVolume) * (elapsedTime / fadeInDuration);
            audioRef.current.volume = newVolume;
          } else {
            audioRef.current.volume = endVolume;
            clearInterval(fadeInterval);
          }
        }, 50); // Update every 50ms for smooth transition

        await new Promise(resolve => {
          audioRef.current.onended = () => {
            clearInterval(fadeInterval);
            resolve();
          };
        });
      } catch (error) {
        console.error('Error playing audio:', error);
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

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  const handleEnableAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = volume / 100;
    }
    setAudioEnabled(true);
  };

  useEffect(() => {
    if (audioEnabled) {
      // Initial delay of 1 minute
      // const initialDelay = 60 * 1000;
      const initialDelay = 30 * 1000;
      // const initialDelay = 1 * 1;
      timeoutRef.current = setTimeout(playMusic, initialDelay);
    }
    return () => {
      clearTimeout(timeoutRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioEnabled]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div>
      {!audioEnabled && (
        <Group
          position="center"
          style={{ margin: "10px auto", width: "fit-content" }}
        >
          <Button onClick={handleEnableAudio} color="blue">
            Enable Background Music
          </Button>
        </Group>
      )}
      {audioEnabled && (
        <Group
          position="center"
          spacing="xl"
          style={{ margin: "10px auto", width: "fit-content" }}
        >
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            min={0}
            max={100}
            label={null}
            style={{ width: "200px" }}
          />
          <Text>{volume}%</Text>
        </Group>
      )}
      <div
        style={{
          height: "90vh",
          width: "85vw",
          margin: "0 auto",
        }}
      >
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
      </div>
    </div>
  );
};

export default EbookReactReader;
