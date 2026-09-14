import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Clock, Sparkles, Film } from 'lucide-react';
import AutoplayVideo from './AutoplayVideo';
import { videoCoordinator } from '../utils/videoCoordinator';

export default function ProjectCard({ project, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const cardRef = useRef(null);

  const isVertical = project.orientation === 'vertical';

  const togglePlayback = (e) => {
    e.stopPropagation();
    videoCoordinator.togglePlay(project.id);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
    // If sound unmuted, also ensure it's playing
    if (isMuted && !isPlaying) {
      videoCoordinator.play(project.id, true);
    }
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    if (!cardRef.current) return;

    if (!document.fullscreenElement) {
      if (cardRef.current.requestFullscreen) {
        cardRef.current.requestFullscreen();
      } else if (cardRef.current.webkitRequestFullscreen) {
        cardRef.current.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'vfx':
        return 'text-amber-300 border-amber-500/40 bg-amber-950/70';
      case 'political':
        return 'text-cyan-300 border-cyan-500/40 bg-cyan-950/70';
      case 'events':
        return 'text-emerald-300 border-emerald-500/40 bg-emerald-950/70';
      case 'digital':
      default:
        return 'text-accent-gold border-accent-gold/40 bg-cinema-900/80';
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onOpenModal(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/10 hover:border-accent-gold/60 hover:shadow-2xl hover:shadow-accent-gold/10 hover:-translate-y-1.5 flex flex-col justify-end bg-cinema-900 ${
        isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {/* Autoplay Video with IntersectionObserver and exclusive coordinator */}
      <AutoplayVideo
        id={project.id}
        src={project.videoUrl}
        poster={project.posterUrl}
        alt={project.title}
        isHovered={isHovered}
        muted={isMuted}
        onPlayChange={setIsPlaying}
        imgClassName="group-hover:scale-105"
        videoClassName="group-hover:scale-105"
      />

      {/* Dark Vignette & Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity pointer-events-none" />

      {/* Top Bar: Badges + Audio / Fullscreen Mini Controls */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${getCategoryColor(
              project.filterCategory
            )}`}
          >
            {project.categoryLabel || project.category}
          </span>
          {isPlaying && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest bg-accent-gold/20 text-accent-gold border border-accent-gold/30 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
              PLAYING
            </span>
          )}
        </div>

        {/* Quick Floating Controls (Audio & Fullscreen) */}
        <div className="flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            className={`p-1.5 rounded-full backdrop-blur-md border transition-all ${
              isMuted
                ? 'bg-black/60 border-white/15 text-cinema-300 hover:text-white hover:border-white/40'
                : 'bg-accent-gold text-black border-accent-gold shadow-md'
            }`}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleFullscreen}
            aria-label="Expand video fullscreen"
            className="p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-cinema-300 hover:text-white hover:border-white/40 transition-all"
            title="Fullscreen"
          >
            <Maximize className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Action Overlay: Discreet Play/Pause Toggle on hover */}
      <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-accent-gold flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl z-20">
        <button
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="w-full h-full flex items-center justify-center hover:text-white transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Content Info */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end pointer-events-none">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-cinema-400 mb-1">
          <Clock className="w-3 h-3 text-accent-gold" />
          <span>{project.duration}</span>
          <span>•</span>
          <span>{project.fps} FPS</span>
        </div>

        <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-accent-gold transition-colors line-clamp-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-cinema-400 mt-1 line-clamp-2 leading-relaxed hidden sm:block">
          {project.description}
        </p>

        {/* Technique Tags */}
        <div className="flex flex-wrap gap-1 mt-2.5">
          {project.techniques.slice(0, 2).map((tech, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-cinema-300 backdrop-blur-xs"
            >
              {tech}
            </span>
          ))}
          {project.techniques.length > 2 && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-cinema-400">
              +{project.techniques.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
