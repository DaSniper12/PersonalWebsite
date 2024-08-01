import { useState } from 'react';
import { Modal, Button, Text, Grid, Slider, Group } from '@mantine/core';

// const genres = ['Science Fiction', 'Fantasy'];
const genres = ['Science Fiction'];
// const genres = ['Science Fiction', 'Mystery', 'Fantasy', 'Request a Genre'];

const IntroModal = ({ onStart }) => {
  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState('');
  const [volume, setVolume] = useState(25);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleStart = () => {
    setStep(2);
  };

  const handleGenreSelect = (selectedGenre) => {
    setGenre(selectedGenre);
    setStep(3);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handlePlaybackRateChange = (value) => {
    setPlaybackRate(value);
  };

  const handleFinalStart = () => {
    setStep(4);
    onStart(genre, volume, playbackRate);
  };

  return (
    <Modal
      opened={step < 4}
      onClose={() => {}}
      title={
        step === 1
          ? "Welcome to the eBook Reader"
          : step === 2
          ? "Choose Your Genre"
          : "Music Information"
      }
      centered
      closeOnClickOutside={false}
      closeOnEscape={false}
      withCloseButton={false}
      size="lg"
      styles={{
        content: {
          backgroundColor: "#fff8e7",
        },
        header: {
          backgroundColor: "#fff8e7",
        } 
      }}
    >
      {step === 1 ? (
        <>
          <Text>
            Welcome to Synesthesia, our immersive reading experience. Get ready
            to dive into a short story with background music to enhance your
            reading atmosphere.
          </Text>
          <Button onClick={handleStart} fullWidth mt="md">
            Let's Start
          </Button>
        </>
      ) : step === 2 ? (
        <>
          <Text size="lg" weight={500} align="center" mb="md">
            Choose your genre of short story
          </Text>
          <Grid grow>
            {genres.map((genre) => (
              <Grid.Col span={6} key={genre}>
                <Button
                  onClick={() => handleGenreSelect(genre)}
                  fullWidth
                  size="xl"
                  style={{ height: "100px" }}
                >
                  {genre}
                </Button>
              </Grid.Col>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Text size="lg" weight={500} mb="md">
            Ready to start reading?
          </Text>
          <Text mb="md">
            Background music will start playing automatically when you click
            "Start Reading". Don't worry if you don't hear it right away - it
            fades in automatically.
          </Text>
          <Text mb="md">
            You can adjust the volume and playback speed below.
          </Text>
          <Group justify="center" spacing="xl" mb="md">
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={100}
              label={null}
              style={{ width: "200px" }}
            />
            <Text>{volume}%</Text>
            <Slider
              value={playbackRate}
              onChange={handlePlaybackRateChange}
              min={0.5}
              max={2}
              step={0.1}
              label={null}
              style={{ width: "200px" }}
            />
            <Text>{playbackRate.toFixed(1)}x</Text>
          </Group>
          <Button onClick={handleFinalStart} fullWidth mt="md">
            Start Reading
          </Button>
        </>
      )}
    </Modal>
  );
};

export default IntroModal;