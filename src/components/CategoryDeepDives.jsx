import React from 'react';
import { Play, TrendingUp, Megaphone, Calendar, Wand2, ArrowRight } from 'lucide-react';

export default function CategoryDeepDives({ projects, onOpenModal }) {
  // Extract key sample projects for each deep dive
  const digitalProjects = projects.filter((p) => p.filterCategory === 'digital').slice(0, 4);
  const eventProjects = projects.filter((p) => p.filterCategory === 'events').slice(0, 3);
  const politicalProjects = projects.filter((p) => p.filterCategory === 'political').slice(0, 3);
  const vfxProjects = projects.filter((p) => p.filterCategory === 'vfx');

  return (
    <div className="bg-cinema-950 text-white">
      {/* 1. DIGITAL MARKETING SECTION */}
      <section id="digital-marketing" className="py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinema-900 border border-white/10 text-accent-gold text-xs font-mono tracking-widest uppercase mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>GROWTH & CONVERSIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-6 leading-tight">
                DIGITAL <span className="text-accent-gold">MARKETING</span> & REELS
              </h2>
              <p className="text-sm sm:text-base text-cinema-300 font-sans leading-relaxed mb-6">
                In today’s fast-moving social feeds, an edit must hook the viewer within the first two seconds and sustain interest until the final call to action.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Instagram Reels & YouTube Shorts with retention-driven pacing',
                  'Product & Brand Advertisements with kinetic 3D typography',
                  'Educational & Consultant masterclasses with infographic splits',
                  'Academy & Retail store walkthrough promotional campaigns'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-cinema-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#work"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-accent-gold hover:text-white transition-colors"
              >
                <span>EXPLORE ALL 19 MARKETING EDITS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Video Grid Preview */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {digitalProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenModal(p)}
                  className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent-gold/60 transition-all hover:scale-102"
                >
                  <img
                    src={p.posterUrl}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-mono text-accent-gold truncate">
                      {p.duration}
                    </span>
                    <h4 className="text-xs font-display font-bold text-white line-clamp-2 leading-tight mt-0.5">
                      {p.title}
                    </h4>
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-accent-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. POLITICAL CAMPAIGN SECTION */}
      <section id="political-campaigns" className="py-24 sm:py-32 bg-cinema-900/30 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinema-900 border border-white/10 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
              <Megaphone className="w-3.5 h-3.5" />
              <span>HIGH-IMPACT MESSAGING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-4 leading-tight">
              POLITICAL <span className="text-accent-cyan">CAMPAIGNS</span>
            </h2>
            <p className="text-sm sm:text-base text-cinema-300 font-sans leading-relaxed">
              Professional campaign video editing and content production engineered for mass communication, public meetings, constituency street rallies, voter connect drives, and social media dispatches.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-cinema-400">
              Note: Presented strictly as video editing & campaign visual content production.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {politicalProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onOpenModal(p)}
                className="group relative aspect-[9/16] max-h-[480px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent-cyan/60 transition-all hover:scale-102 bg-cinema-900"
              >
                <img
                  src={p.posterUrl}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-mono text-accent-cyan mb-1">
                    CAMPAIGN REEL • {p.duration}
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white line-clamp-2 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-cinema-400 mt-1 line-clamp-2">
                    {p.description}
                  </p>
                </div>
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-accent-cyan text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EVENT VIDEO & HIGHLIGHTS SECTION */}
      <section id="events" className="py-24 sm:py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinema-900 border border-white/10 text-accent-gold text-xs font-mono tracking-widest uppercase mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>MOMENTS & CELEBRATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight">
                EVENTS & <span className="text-accent-gold">HIGHLIGHTS</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-cinema-300 max-w-md font-sans leading-relaxed">
              Showcasing grandeur, ambient stage lighting, luxury floral decor, and celebration aftermovies with cinematic vertical glide pans and color grading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onOpenModal(p)}
                className="group relative aspect-[9/16] max-h-[480px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent-gold/60 transition-all hover:scale-102 bg-cinema-900"
              >
                <img
                  src={p.posterUrl}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-mono text-accent-gold mb-1">
                    ANAND DECOR LUXURY HIGHLIGHT • {p.duration}
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white line-clamp-2 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-cinema-400 mt-1 line-clamp-2">
                    {p.description}
                  </p>
                </div>
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-accent-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VFX & MOTION GRAPHICS */}
      <section id="vfx" className="py-24 sm:py-32 bg-cinema-900/40 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Card */}
            <div className="lg:col-span-7">
              {vfxProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenModal(p)}
                  className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer border border-white/15 hover:border-accent-gold/60 transition-all shadow-2xl bg-black"
                >
                  <img
                    src={p.posterUrl}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-mono text-accent-gold mb-1">
                      16:9 WIDESCREEN COMMERCIAL
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      {p.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-accent-gold text-black flex items-center justify-center opacity-90 group-hover:scale-110 transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* VFX Breakdown */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinema-900 border border-white/10 text-accent-gold text-xs font-mono tracking-widest uppercase mb-4">
                <Wand2 className="w-3.5 h-3.5" />
                <span>VISUAL COMPOSITING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase mb-6 leading-tight">
                VFX & <span className="text-accent-gold">MOTION</span>
              </h2>
              <p className="text-sm sm:text-base text-cinema-300 font-sans leading-relaxed mb-6">
                Integrating visual effects, monitor screen replacements, clean tracking, and title motion design to produce broadcast-grade commercial advertising.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Screen Replacement VFX',
                  'Motion Graphics Overlays',
                  'Commercial Color Grading',
                  'Multi-Cam Continuity Cuts',
                  'Dynamic Audio Sweetening',
                  'Custom Lower-Thirds'
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-cinema-850 border border-white/5 text-xs font-mono text-cinema-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
