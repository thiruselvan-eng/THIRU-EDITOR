import React from 'react';
import { Award, Film, CheckCircle2, Video, Sparkles, Target, Compass, Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cinema-900/30 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Card with Authentic Profile Photo */}
          <div className="lg:col-span-5">
            <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Background gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-10" />

              {/* Profile Photo Frame */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden mb-6 border border-white/15 shadow-2xl group">
                <img
                  src="/profile pic/thiru_profile.jpg"
                  alt="Thiru - Video Editor"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Corner Status Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available For Projects
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-accent-gold text-black font-display font-bold text-[10px] uppercase tracking-wider">
                    VERIFIED EDITOR
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-accent-gold block mb-1">
                LEAD POST-PRODUCTION SPECIALIST
              </span>
              <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight mb-1">
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
                  <span className="text-white font-semibold">Reels, Campaigns, Events, VFX</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cinema-400">Deliverables:</span>
                  <span className="text-white font-semibold">9:16 Social + 16:9 Broadcast</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cinema-400">Turnaround:</span>
                  <span className="text-accent-gold font-semibold">Fast & High-Precision</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-cinema-300 font-sans italic leading-relaxed">
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
