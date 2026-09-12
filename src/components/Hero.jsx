import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, ArrowDown, Play, Sparkles } from 'lucide-react';

export default function Hero({ onExploreWork }) {
  const [isMuted, setIsMuted] = useState(true);
  const heroVideoRef = useRef(null);

  const toggleSound = () => {
    if (!heroVideoRef.current) return;
    const nextMuted = !isMuted;
    heroVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cinema-950 pt-20 pb-16"
    >
      {/* Background Video Showreel Loop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/posters/thumb_34_Indian_Bank.jpg"
          className="w-full h-full object-cover opacity-35 sm:opacity-40 scale-105 transition-opacity duration-1000"
        >
          <source src="/VIDEOS/VFX/Indian Bank.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/60 to-cinema-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cinema-950/40 to-cinema-950" />
        <div className="absolute inset-0 film-grain opacity-60" />
      </div>

      {/* Floating Sound Toggle Pill (Top Right on desktop) */}
      <div className="absolute top-24 right-6 sm:right-10 z-20">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute background showreel' : 'Mute background showreel'}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-cinema-900/80 backdrop-blur-md border border-white/10 text-cinema-300 hover:text-white hover:border-accent-gold/40 text-xs font-mono tracking-wider transition-all duration-300 group shadow-lg"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-cinema-400 group-hover:text-red-400 transition-colors" />
              <span className="hidden sm:inline">AUDIO MUTED</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-accent-gold animate-pulse" />
              <span className="text-accent-gold font-semibold">AUDIO ON</span>
            </>
          )}
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cinema-900/90 border border-white/10 text-cinema-300 text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-inner backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
          <span>Available For High-Impact Editing</span>
        </div>

        {/* Giant Cinematic Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase mb-4 leading-none select-none drop-shadow-2xl">
          VIDEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cinema-200 to-cinema-400">EDITOR</span>
        </h1>

        {/* Secondary Title */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-cinema-100 tracking-tight max-w-3xl mb-4 font-display">
          Turning Ideas Into <span className="font-semibold text-accent-gold">Visual Stories</span>.
        </p>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-cinema-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Creative video editing, visual effects, motion graphics, and high-retention content engineered to captivate audiences and drive results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          <a
            href="#work"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-gold text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-3 group"
          >
            <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
            <span>VIEW MY WORK</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cinema-900/80 backdrop-blur-md border border-white/15 text-white font-display font-semibold text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>LET'S WORK TOGETHER</span>
          </a>
        </div>

        {/* Quick Discipline Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-cinema-400">
          <span className="px-3 py-1 rounded-md bg-cinema-900/60 border border-white/5">Digital Marketing</span>
          <span className="text-cinema-700">•</span>
          <span className="px-3 py-1 rounded-md bg-cinema-900/60 border border-white/5">Instagram Reels</span>
          <span className="text-cinema-700">•</span>
          <span className="px-3 py-1 rounded-md bg-cinema-900/60 border border-white/5">Event Highlights</span>
          <span className="text-cinema-700">•</span>
          <span className="px-3 py-1 rounded-md bg-cinema-900/60 border border-white/5">Political Campaigns</span>
          <span className="text-cinema-700">•</span>
          <span className="px-3 py-1 rounded-md bg-cinema-900/60 border border-white/5">Motion & VFX</span>
        </div>
      </div>

      {/* Scroll to explore indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none">
        <a
          href="#statement"
          aria-label="Scroll down"
          className="text-[10px] font-mono tracking-cinematic uppercase text-cinema-400 hover:text-accent-gold transition-colors flex items-center gap-1.5 animate-bounce"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
        </a>
      </div>
    </section>
  );
}
