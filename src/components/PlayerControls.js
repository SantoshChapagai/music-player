import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const PlayerControls = () => {
  const music = useMusicPlayer();
  return (
    <div>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <button>
        <FontAwesomeIcon icon={faStepBackward} onClick={music.playPreviousTrack} />
      </button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? (<FontAwesomeIcon icon={faPause} />) : (<FontAwesomeIcon icon={faPlay} />)}
      </button>
      <button>
        <FontAwesomeIcon icon={faStepForward} onClick={music.playNextTrack} />
      </button>
    </div>
  );
};

export default PlayerControls;