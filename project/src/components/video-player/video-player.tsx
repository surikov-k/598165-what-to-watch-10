import React, {useEffect, useRef, useState} from 'react';
import {MovieType} from '../../types/movie';

type VideoPlayerProps = {
  movie: MovieType,
  isPlaying: boolean
  isMuted?: boolean
  width: number,
  height: number,
}

function VideoPlayer({
  movie,
  isPlaying,
  isMuted = true,
  width,
  height
}: VideoPlayerProps) {

  const {previewImage, previewVideoLink} = movie;

  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current?.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying && !isLoading) {
      timerRef.current = setTimeout(() => videoRef.current?.play(), 1000) as unknown as number;
      return;
    }
    clearTimeout(timerRef.current);
    videoRef.current?.load();
  }, [isLoading, isPlaying]);


  return (
    <video
      muted={isMuted}
      ref={videoRef}
      poster={previewImage}
      src={previewVideoLink}
      width={width}
      height={height}
    >
    </video>
  );
}

export default VideoPlayer;
