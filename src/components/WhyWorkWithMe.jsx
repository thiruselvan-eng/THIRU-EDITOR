import React from 'react';
import { Sparkles, Eye, Scissors, Layers, Sliders, Smartphone, Flame } from 'lucide-react';

export default function WhyWorkWithMe() {
  const reasons = [
    {
      icon: <Sparkles className="w-5 h-5 text-accent-gold" />,
      title: "Creative Storytelling",
      desc: "Transforming dry, disconnected clips into an emotionally coherent narrative that guides the viewer's attention purposefully."
    },
    {
      icon: <Eye className="w-5 h-5 text-accent-gold" />,
      title: "Obsessive Attention to Detail",
      desc: "Meticulous frame-accurate cut points, audio phase alignment, dialogue leveling, and artifact-free masking."
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-gold" />,
      title: "Strong Visual & Color Sense",
      desc: "Curating harmonious grading palettes that evoke the intended psychological warmth, prestige, or intensity."
    },
    {
      icon: <Scissors className="w-5 h-5 text-accent-gold" />,
      title: "Multiple Editing Styles",
      desc: "Fluidly adapting between snappy social reels, grand wedding elegance, broadcast commercials, and political dispatches."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-accent-gold" />,
      title: "Social-Media-Focused Strategy",
      desc: "Built-in understanding of aspect ratios, vertical safe zones, kinetic text placement, and feed retention patterns."
    },
    {
      icon: <Sliders className="w-5 h-5 text-accent-gold" />,
      title: "Bespoke Customization",
      desc: "No automated presets or generic cookie-cutter transitions. Every video is custom-cut to match the creator's exact voice."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-cinema-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
            CLIENT ADVANTAGE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase mb-4">
            WHY WORK <span className="text-accent-gold">WITH ME</span>
          </h2>
          <p className="text-sm sm:text-base text-cinema-400 font-sans leading-relaxed">
            The difference between forgettable footage and an unforgettable cut is the intention behind every second.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-accent-gold/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-cinema-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent-gold/40 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide group-hover:text-accent-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-cinema-400 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
