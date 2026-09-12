import React from 'react';
import { ArrowRight, Lightbulb, Compass, Scissors, Wand2, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      subtitle: "Client Idea / Requirement",
      desc: "Deep diving into your objective, target platform, audience psychology, and core brand tone.",
      icon: <Lightbulb className="w-5 h-5 text-accent-gold" />
    },
    {
      num: "02",
      title: "Plan",
      subtitle: "Story & Visual Direction",
      desc: "Sorting raw footage, selecting hero takes, mapping narrative pacing, and establishing the music backbone.",
      icon: <Compass className="w-5 h-5 text-accent-cyan" />
    },
    {
      num: "03",
      title: "Edit",
      subtitle: "Cutting & Storytelling",
      desc: "Assembling the narrative cut, trimming dead air, refining micro-timing, and establishing dynamic hooks.",
      icon: <Scissors className="w-5 h-5 text-white" />
    },
    {
      num: "04",
      title: "Enhance",
      subtitle: "Color, Sound & Motion",
      desc: "Injecting bespoke color grades, audio sweetening, sound effects, kinetic subtitles, and screen VFX.",
      icon: <Wand2 className="w-5 h-5 text-accent-gold" />
    },
    {
      num: "05",
      title: "Deliver",
      subtitle: "Final Optimized Content",
      desc: "Exporting high-bitrate master files perfectly encoded for Instagram Reels, YouTube, or commercial broadcast.",
      icon: <CheckCircle className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-cinema-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
            WORKFLOW ARCHITECTURE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase mb-4">
            FROM IDEA TO <span className="text-accent-gold">FINAL CUT</span>
          </h2>
          <p className="text-sm sm:text-base text-cinema-400 font-sans leading-relaxed">
            A structured, reliable editorial pipeline that transforms raw footage into captivating visual narratives.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-white/5 hover:border-accent-gold/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-display font-black text-white/20 group-hover:text-accent-gold/40 transition-colors font-mono">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-accent-gold transition-colors">
                  {step.title}
                </h3>
                <h4 className="text-[11px] font-mono tracking-wider uppercase text-cinema-400 mb-3">
                  {step.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cinema-400 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-cinema-500">
                <span>Phase {step.num} of 05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
