import { useContext } from 'react';
import { MusicContext } from '../contexts/MusicContext';

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);


  const togglePlay = () => {
    console.log('toggle is playing');
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState({ ...state, isPlaying: !state.isPlaying });
  };

  const playTrack = (index) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  };

  const playPreviousTrack = () => {
    let newIndex = (state.currentTrackIndex - 1 + state.tracks.length) % state.tracks.length;
    playTrack(newIndex);
  };

  const playNextTrack = () => {
    let newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  };

  return {
    togglePlay,
    playTrack,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    TrackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export { useMusicPlayer };