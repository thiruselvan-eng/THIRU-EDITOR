import React, { useState, useRef } from 'react';
import { Play, Clock, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverVideoRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Delay video start slightly for performance so fast cursor passes don't trigger loading
    hoverTimeoutRef.current = setTimeout(() => {
      if (hoverVideoRef.current) {
        hoverVideoRef.current.currentTime = 0;
        hoverVideoRef.current.play().catch(() => {});
      }
    }, 250);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (hoverVideoRef.current) {
      hoverVideoRef.current.pause();
    }
  };

  const isVertical = project.orientation === 'vertical';

  return (
    <div
      onClick={() => onOpenModal(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/10 hover:border-accent-gold/60 hover:shadow-2xl hover:shadow-accent-gold/10 hover:-translate-y-1.5 flex flex-col justify-end bg-cinema-900 ${
        isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      {/* Poster Image */}
      <img
        src={project.posterUrl}
        alt={project.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Hover Preview Video (Lazy played on hover) */}
      <video
        ref={hoverVideoRef}
        src={project.videoUrl}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-accent-gold border border-white/10">
          {project.categoryLabel || project.category}
        </span>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-cinema-300 border border-white/10">
          <Clock className="w-3 h-3" />
          <span>{project.duration}</span>
        </div>
      </div>

      {/* Center Play Icon on Hover */}
      <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-accent-gold text-black flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl z-20 pointer-events-none">
        <Play className="w-6 h-6 fill-current ml-0.5" />
      </div>

      {/* Bottom Content Info */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end">
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
