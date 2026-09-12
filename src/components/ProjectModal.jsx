import React, { useEffect } from 'react';
import CustomVideoPlayer from './CustomVideoPlayer';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Film, Layers, Monitor, Sliders, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({
  project,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-2xl animate-fade-in select-none">
      {/* Dimmed backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-cinema-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row">
        {/* Close Button Top-Right */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-accent-gold hover:text-black hover:scale-110 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Stage Area (Left / Center) */}
        <div className="lg:w-3/5 bg-black flex items-center justify-center relative p-2 sm:p-4 min-h-[360px] lg:min-h-[580px]">
          <div className="w-full h-full max-h-[75vh] flex items-center justify-center">
            <CustomVideoPlayer
              key={project.id}
              src={project.videoUrl}
              poster={project.posterUrl}
              title={project.title}
              aspectRatio={project.aspectRatio}
              autoPlay={true}
              className="max-h-[70vh] shadow-2xl"
            />
          </div>

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Details Sidebar Area (Right) */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[75vh] lg:max-h-none border-t lg:border-t-0 lg:border-l border-white/10 bg-cinema-850">
          <div>
            {/* Category & Orientation Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-cinema-400 bg-white/5 border border-white/10">
                {project.aspectRatio}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 leading-snug">
              {project.title}
            </h2>

            {/* About The Edit */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cinema-400 mb-2">
                ABOUT THE EDIT
              </h4>
              <p className="text-sm text-cinema-300 font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Editing Focus Techniques */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cinema-400 mb-3 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-accent-gold" />
                <span>EDITING FOCUS & TECHNIQUES</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cinema-800 border border-white/10 text-xs font-mono text-cinema-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Metadata */}
            <div className="p-4 rounded-2xl bg-cinema-900/80 border border-white/5 grid grid-cols-2 gap-3 text-xs font-mono mb-6">
              <div>
                <span className="text-cinema-500 block text-[10px] uppercase">Resolution</span>
                <span className="text-cinema-200 font-semibold">{project.resolution}</span>
              </div>
              <div>
                <span className="text-cinema-500 block text-[10px] uppercase">Duration</span>
                <span className="text-cinema-200 font-semibold">{project.duration}</span>
              </div>
              <div>
                <span className="text-cinema-500 block text-[10px] uppercase">Framerate</span>
                <span className="text-cinema-200 font-semibold">{project.fps} FPS</span>
              </div>
              <div>
                <span className="text-cinema-500 block text-[10px] uppercase">Format</span>
                <span className="text-cinema-200 font-semibold">MP4 / H.264</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 py-3.5 rounded-xl bg-accent-gold text-black font-display font-bold text-xs tracking-widest uppercase hover:bg-white transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-accent-gold/20"
            >
              <span>INQUIRE ABOUT THIS EDIT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
