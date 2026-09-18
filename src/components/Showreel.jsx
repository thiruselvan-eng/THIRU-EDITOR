import React, { useState } from 'react';
import CustomVideoPlayer from './CustomVideoPlayer';
import { FEATURED_SHOWREELS } from '../data/projects';
import { Sparkles, CheckCircle2, Sliders, Film } from 'lucide-react';

export default function Showreel() {
  const [selectedShowreel, setSelectedShowreel] = useState(FEATURED_SHOWREELS[0]);

  return (
    <section id="showreel" className="relative py-24 sm:py-32 bg-cinema-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinema-900 border border-white/10 text-accent-gold text-xs font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED HIGHLIGHT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase">
              FEATURED <span className="text-accent-gold">SHOWREEL</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cinema-400 max-w-md font-sans leading-relaxed">
            A curated showcase demonstrating multi-camera dialogue continuity, screen compositing, high-retention pacing, and commercial grade color science.
          </p>
        </div>

        {/* Featured Video Player Area */}
        <div className="glass-panel p-3 sm:p-5 rounded-3xl border border-white/10 shadow-2xl mb-8">
          <div className="max-w-5xl mx-auto">
            <CustomVideoPlayer
              key={selectedShowreel.id}
              src={selectedShowreel.videoUrl}
              poster={selectedShowreel.posterUrl}
              title={selectedShowreel.title}
              aspectRatio={selectedShowreel.aspectRatio}
              className="w-full shadow-2xl"
            />
          </div>

          {/* Active Reel Meta Bar */}
          <div className="mt-6 px-2 sm:px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider uppercase bg-accent-gold/15 text-accent-gold border border-accent-gold/30">
                  {selectedShowreel.category}
                </span>
                <span className="text-xs font-mono text-cinema-400">
                  {selectedShowreel.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {selectedShowreel.title}
              </h3>
              <p className="text-xs sm:text-sm text-cinema-300 mt-1 max-w-2xl">
                {selectedShowreel.description}
              </p>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-accent-gold text-xs font-display font-bold tracking-wider uppercase transition-all duration-300 shadow-md shrink-0"
            >
              REQUEST SIMILAR EDIT
            </a>
          </div>
        </div>

        {/* Showreel Selector Tabs */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-cinema-400 mb-4 flex items-center gap-2">
            <Film className="w-4 h-4 text-accent-gold" />
            <span>SWITCH FEATURED CUT:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_SHOWREELS.map((reel) => {
              const isActive = selectedShowreel.id === reel.id;
              return (
                <button
                  key={reel.id}
                  onClick={() => setSelectedShowreel(reel)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-3 border ${
                    isActive
                      ? 'bg-cinema-850 border-accent-gold shadow-lg shadow-accent-gold/10'
                      : 'bg-cinema-900/60 border-white/5 hover:border-white/20 hover:bg-cinema-850'
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                    <img
                      src={reel.posterUrl}
                      alt={reel.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-accent-gold/30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-accent-gold animate-ping" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-mono tracking-wider uppercase text-accent-gold truncate">
                      {reel.category}
                    </p>
                    <p className="text-xs font-display font-bold text-white truncate mt-0.5">
                      {reel.title}
                    </p>
                    <p className="text-[11px] font-mono text-cinema-400 mt-1">
                      {reel.aspectRatio}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
