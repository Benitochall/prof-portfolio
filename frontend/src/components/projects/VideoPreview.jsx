import React, { useRef, useEffect, useState } from 'react';

const VideoPreview = ({ src, duration }) => {
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const playPreview = () => {
      if (video) {
        video.currentTime = 0; // Start from the beginning
        video.play();
      }
    };

    const stopPreview = () => {
      if (video) {
        video.pause();
      }
    };

    if (userInteracted) {
      // Play the preview if user has interacted
      playPreview();
    }


    return () => {
      stopPreview();
    };
  }, [src, duration, userInteracted]);

  const handleInteraction = () => {
    setUserInteracted(true);
  };

  return (
    <video ref={videoRef} width="344" height="150" loop onClick={handleInteraction}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPreview;
