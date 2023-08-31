import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Track 1",
        file: "./sounds/music1.mp3",
      },
      {
        name: "Track 2",
        file: "./sounds/music2.mp3",
      },
      {
        name: "Track 3",
        file: "./sounds/music3.mp3",
      },
      {
        name: "Track 4",
        file: "./sounds/music4.mp3",
      },
      {
        name: "Track 5",
        file: "./sounds/music5.mp3",
      },
      {
        name: "Track 6",
        file: "./sounds/music6.mp3",
      },
      {
        name: "Track 7",
        file: "./sounds/music7.mp3",
      }

    ],
    currentTrackIndex: 0,
    isPlaying: false
  })

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
