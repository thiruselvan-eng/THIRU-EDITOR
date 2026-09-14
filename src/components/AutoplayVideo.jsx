import React, { useRef, useState, useEffect } from 'react';
import { videoCoordinator } from '../utils/videoCoordinator';
import { getOptimizedVideoUrl } from '../data/projects';

export default function AutoplayVideo({
  id,
  src,
  poster,
  alt = 'Video project',
  className = '',
  videoClassName = '',
  imgClassName = '',
  isHovered = false,
  muted = true,
  onPlayChange = null,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoadedData, setHasLoadedData] = useState(false);

  const videoId = id || src;
  const optimizedSrc = getOptimizedVideoUrl(src);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    video.muted = muted;
    video.playsInline = true;

    const handleStateChange = (playing) => {
      setIsPlaying(playing);
      if (onPlayChange) onPlayChange(playing);
    };

    videoCoordinator.register(videoId, container, video, handleStateChange);

    return () => {
      videoCoordinator.unregister(videoId);
    };
  }, [videoId, muted, onPlayChange]);

  // Handle hover priority
  useEffect(() => {
    if (isHovered && !isPlaying) {
      videoCoordinator.play(videoId, true);
    }
  }, [isHovered, isPlaying, videoId]);

  // Sync muted prop if changed externally
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-cinema-950 ${className}`}
    >
      {/* Poster Image */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 select-none ${imgClassName} ${
          isPlaying && hasLoadedData ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Optimized Cloudinary Video */}
      <video
        ref={videoRef}
        src={optimizedSrc}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setHasLoadedData(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none select-none ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        } ${videoClassName}`}
      />
    </div>
  );
}
