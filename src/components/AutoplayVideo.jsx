import React, { useRef, useState, useEffect } from 'react';

export default function AutoplayVideo({
  src,
  poster,
  alt = 'Video project',
  className = '',
  videoClassName = '',
  imgClassName = '',
  isHovered = false,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Ensure DOM properties are set before playback
    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          // When approximately 50% or more visible: play muted
          if (entry.intersectionRatio >= 0.5) {
            videoRef.current.muted = true;
            videoRef.current.playsInline = true;

            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Safely handle browser autoplay policy restriction without console errors
                });
            }
          }
          // When less than approximately 20% visible: pause
          else if (entry.intersectionRatio < 0.2) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0.2, 0.5],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  // Also handle hover if passed
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered && !isPlaying) {
      video.muted = true;
      video.playsInline = true;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isHovered, isPlaying]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Poster Image: Always in DOM as fallback and instant display */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${imgClassName}`}
      />

      {/* HTML5 Video with IntersectionObserver playback control */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
          isPlaying || isHovered ? 'opacity-100' : 'opacity-0'
        } ${videoClassName}`}
      />
    </div>
  );
}
