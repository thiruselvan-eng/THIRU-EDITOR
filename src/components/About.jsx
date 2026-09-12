import React from 'react';
import { Award, Film, CheckCircle2, Video, Sparkles, Target, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cinema-900/30 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-10" />

              <div className="w-16 h-16 rounded-2xl bg-cinema-900 border border-white/15 flex items-center justify-center mb-6 text-accent-gold shadow-xl">
                <Film className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold block mb-1">
                PROFILE
              </span>
              <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-2">
                THIRU
              </h3>
              <p className="text-sm font-mono text-cinema-300 mb-6">
                Video Editor & Visual Content Creator
              </p>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cinema-400">Core Focus:</span>
                  <span className="text-white font-semibold">Video Editing & Motion</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cinema-400">Specialities:</span>
                  <span className="text-white font-semibold">Reels, Campaigns, Commercials</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cinema-400">Availability:</span>
                  <span className="text-emerald-400 font-semibold">Open for Commissions</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-cinema-300 font-sans italic leading-relaxed">
                "Every edit is a calculated sequence of rhythm, emotion, and visual storytelling crafted to leave a lasting impact."
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Journey & Multi-Format Versatility */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
              DEDICATED POST-PRODUCTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-6 leading-tight">
              ABOUT THE <span className="text-accent-gold">EDITOR</span>
            </h2>

            <p className="text-base sm:text-lg text-cinema-200 font-sans leading-relaxed mb-6 font-light">
              I am a dedicated creative video editor and visual content creator specializing in shaping raw footage into compelling, high-retention visual stories.
            </p>

            <p className="text-sm sm:text-base text-cinema-400 font-sans leading-relaxed mb-8">
              My work spans a versatile spectrum of video genres — from fast-paced digital marketing reels and brand advertisements to public-scale political campaigns, grand event highlights, commercial VFX compositing, and cinematic storytelling cuts. Rather than applying a single repetitive template, I engineer custom visual pacing and acoustic rhythm for every individual brief.
            </p>

            {/* Editing Genres Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                'Digital Marketing Ads',
                'Instagram Reels & Shorts',
                'Political Campaign Videos',
                'Event & Decor Highlights',
                'VFX & Compositing',
                'Cinematic Mood Edits'
              ].map((genre, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-cinema-850 border border-white/5 text-xs font-mono text-cinema-300 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                  <span>{genre}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-accent-gold text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg shadow-accent-gold/20"
              >
                START A COLLABORATION
              </a>
              <a
                href="#work"
                className="px-6 py-3.5 rounded-full bg-cinema-850 border border-white/10 text-white font-display font-semibold text-xs tracking-wider uppercase hover:border-white/30 transition-all"
              >
                VIEW PORTFOLIO WORK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
