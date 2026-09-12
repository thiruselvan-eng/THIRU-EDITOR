import React from 'react';
import { Eye, Heart, Sparkles, Activity, Layers, Zap } from 'lucide-react';

export default function IntroStatement() {
  const pillars = [
    {
      icon: <Heart className="w-5 h-5 text-accent-gold" />,
      title: "Emotion",
      desc: "Evoking the exact feeling a narrative demands, from high-octane hype to quiet cinematic intimacy."
    },
    {
      icon: <Activity className="w-5 h-5 text-accent-cyan" />,
      title: "Pacing & Rhythm",
      desc: "Every cut lands precisely on the beat, accelerating tension or letting crucial moments breathe."
    },
    {
      icon: <Eye className="w-5 h-5 text-white" />,
      title: "Audience Attention",
      desc: "Engineering hooks and seamless transitions that keep viewers watching past the 3-second drop-off."
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-gold" />,
      title: "Visual Identity",
      desc: "Curating bespoke color palettes, typography, and motion treatments aligned with brand guidelines."
    }
  ];

  return (
    <section id="statement" className="relative py-24 sm:py-32 bg-cinema-950 overflow-hidden border-t border-b border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow */}
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold">
            EDITORIAL PHILOSOPHY
          </span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-center text-white uppercase max-w-4xl mx-auto mb-8 leading-tight">
          EDITING IS MORE THAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-white to-cinema-200">CUTTING CLIPS.</span>
        </h2>

        {/* Short Statement Paragraph */}
        <p className="text-base sm:text-xl text-cinema-300 font-light text-center max-w-3xl mx-auto leading-relaxed mb-16">
          True editing is the art of psychological persuasion and emotional choreography. It blends rhythm, sound design, color grading, and visual storytelling to transform raw footage into an unforgettable experience.
        </p>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accent-gold/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-accent-gold/40 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-cinema-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
