import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, ArrowDown, Play, Sparkles, MessageSquare, Phone, Instagram, Mail, CheckCircle2 } from 'lucide-react';

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cinema-950 pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Background Video Showreel Loop delivered via Cloudinary */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/posters/thumb_34_Indian_Bank.jpg"
          className="w-full h-full object-cover opacity-25 sm:opacity-35 scale-105 transition-opacity duration-1000"
        >
          <source
            src="https://res.cloudinary.com/gz110d8f/video/upload/q_auto,f_auto/v1789401837/Indian_Bank.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Vignette & Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/70 to-cinema-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cinema-950/50 to-cinema-950" />
        <div className="absolute inset-0 film-grain opacity-50" />
      </div>

      {/* Floating Sound Toggle Pill (Top Right on desktop) */}
      <div className="absolute top-24 right-4 sm:right-8 lg:right-12 z-20">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute background showreel' : 'Mute background showreel'}
          className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-cinema-900/85 backdrop-blur-md border border-white/10 text-cinema-300 hover:text-white hover:border-accent-gold/40 text-xs font-mono tracking-wider transition-all duration-300 group shadow-xl"
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

      {/* Main Hero Content: Two-column layout on desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Editor Profile, Headline, Pitch & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Status Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cinema-900/90 border border-white/10 text-cinema-300 text-xs font-mono tracking-widest uppercase mb-5 shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <span>Available For High-Impact Editing</span>
            </div>

            {/* Giant Cinematic Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tighter text-white uppercase mb-3 leading-none select-none drop-shadow-2xl">
              VIDEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cinema-200 to-cinema-400">EDITOR</span>
            </h1>

            {/* Name & Role Secondary Subtitle */}
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-cinema-100 tracking-tight max-w-2xl mb-4 font-display">
              I'm <span className="font-extrabold text-accent-gold tracking-wide">THIRUVENGADAM</span> — Professional Video Editor & Content Creator
            </p>

            {/* Pitch & Philosophy */}
            <p className="text-sm sm:text-base md:text-lg text-cinema-300/90 max-w-xl mb-6 leading-relaxed font-sans font-light">
              Turning ideas into high-retention visual stories. Specializing in digital marketing advertisements, grand event highlights, and commercial VFX.
            </p>

            {/* Social / Direct Connect Quick Bar */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-8">
              <a
                href="https://wa.me/919345313552"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-cinema-900/85 border border-white/10 hover:border-emerald-500/60 text-cinema-300 hover:text-emerald-400 transition-all shadow-md hover:scale-105"
                title="Chat on WhatsApp (+91 93453 13552)"
              >
                <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="tel:9345313552"
                className="p-2.5 sm:p-3 rounded-full bg-cinema-900/85 border border-white/10 hover:border-accent-gold/60 text-cinema-300 hover:text-accent-gold transition-all shadow-md hover:scale-105"
                title="Call +91 93453 13552"
              >
                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="https://instagram.com/actorthiru_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-cinema-900/85 border border-white/10 hover:border-pink-500/60 text-cinema-300 hover:text-pink-400 transition-all shadow-md hover:scale-105"
                title="Instagram (@the_black_scare_crow)"
              >
                <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="mailto:thiru15102005@gmail.com"
                className="p-2.5 sm:p-3 rounded-full bg-cinema-900/85 border border-white/10 hover:border-amber-400/60 text-cinema-300 hover:text-amber-300 transition-all shadow-md hover:scale-105"
                title="Email thiru15102005@gmail.com"
              >
                <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <span className="hidden sm:inline-block text-xs font-mono text-cinema-500 ml-2">
                +91 93453 13552
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
              <a
                href="#work"
                onClick={onExploreWork}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-accent-gold text-black font-display font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-2.5 group"
              >
                <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
                <span>VIEW MY WORK (24 EDITS)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-cinema-900/90 backdrop-blur-md border border-white/15 text-white font-display font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>LET'S WORK TOGETHER</span>
              </a>
            </div>

            {/* Quick Discipline Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs font-mono text-cinema-400">
              <span className="px-3 py-1 rounded-md bg-cinema-900/80 border border-white/5">Digital Marketing</span>
              <span className="text-cinema-700 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-md bg-cinema-900/80 border border-white/5">Event Highlights</span>
              <span className="text-cinema-700 hidden sm:inline">•</span>
              <span className="px-3 py-1 rounded-md bg-cinema-900/80 border border-white/5">VFX & Commercials</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Prominent Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <div className="relative group">
              {/* Cinematic Ambient Glow Backdrops */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-gold/30 via-amber-400/20 to-accent-cyan/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              
              {/* Outer Decorative Gradient Ring */}
              <div className="relative p-1.5 sm:p-2 rounded-3xl sm:rounded-[32px] bg-gradient-to-br from-accent-gold/60 via-white/15 to-accent-cyan/40 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                
                {/* 1:1 Aspect Ratio Picture Container */}
                {/* Desktop: 340px-400px | Mobile: 240px-280px */}
                <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] aspect-square rounded-[22px] sm:rounded-[26px] overflow-hidden bg-cinema-950 border border-white/20 relative shadow-inner">
                  <img
                    src="/profile pic/thiru_profile.jpg"
                    alt="Thiruvengadam - Professional Video Editor"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105 select-none"
                    loading="eager"
                  />

                  {/* Subtle Cinematic Vignette on Portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                  {/* Overlaid Bottom Identity Bar */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Hire
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-accent-gold text-black font-display font-black text-[10px] uppercase tracking-wider shadow-lg">
                      THIRUVENGADAM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll to explore indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none">
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
