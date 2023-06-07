import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const BannerVideo = ({ image, height }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ height: height }}
    >
      {!isPlaying && (
        <>
          <img
            className={styles.image}
            src={require(`../../assets/images/${image}`)}
            alt={image}
          />
          <button
            className={styles.playButton}
            onClick={handlePlayVideo}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </>
      )}
      <video
        src={require('../../assets/videos/banner_video.mp4')}
        className={styles.video}
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={handlePlayVideo}
      />
    </div>
  );
};

export default BannerVideo;
