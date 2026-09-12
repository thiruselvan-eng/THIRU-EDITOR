import React from 'react';
import { Film, Smartphone, ShoppingBag, Megaphone, PartyPopper, Wand2, Clapperboard, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Film className="w-6 h-6 text-accent-gold" />,
      title: "Video Editing",
      description: "Professional editing for different types of content, ensuring rhythm, narrative continuity, and visual polish."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent-gold" />,
      title: "Social Media Content",
      description: "High-retention Instagram Reels, short-form videos, and engaging promotional edits crafted to stop the scroll."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-accent-gold" />,
      title: "Digital Marketing Videos",
      description: "Creative promotional and advertising content designed for commercial brands, retail showrooms, and academies."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-accent-gold" />,
      title: "Political Campaign Videos",
      description: "Campaign-focused visual content, constituency rallies, speeches, voter awareness reels, and campaign anthems."
    },
    {
      icon: <PartyPopper className="w-6 h-6 text-accent-gold" />,
      title: "Event Videos",
      description: "Event highlights, stage decorations, wedding setups, celebrations, and high-energy aftermovies."
    },
    {
      icon: <Wand2 className="w-6 h-6 text-accent-gold" />,
      title: "VFX & Motion Graphics",
      description: "Visual effects, screen replacements, compositing, kinetic typography, and animated graphics."
    },
    {
      icon: <Clapperboard className="w-6 h-6 text-accent-gold" />,
      title: "Cinematic Videos",
      description: "Story-driven, mood-focused, and visually engaging edits with rich color grading and atmospheric sound design."
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-cinema-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
            CORE CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase mb-4">
            WHAT I CAN <span className="text-accent-gold">CREATE</span>
          </h2>
          <p className="text-sm sm:text-base text-cinema-400 font-sans leading-relaxed">
            Every project receives bespoke editorial attention tailored to its target audience, platform format, and emotional narrative.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-accent-gold/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cinema-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent-gold/50 transition-all duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide group-hover:text-accent-gold transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-cinema-400 leading-relaxed font-sans">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cinema-400 group-hover:text-accent-gold transition-colors">
                <span>Tailored Production</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}

          {/* Quick Custom Inquiries Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cinema-900 via-cinema-850 to-cinema-900 border border-accent-gold/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-accent-gold mb-2 block">
                CUSTOM BRIEF?
              </span>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Need a Specialised Format?
              </h3>
              <p className="text-sm text-cinema-300 leading-relaxed">
                Whether you need a full campaign batch, high-frequency reels, or special broadcast delivery, let's discuss your timeline and deliverables.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-accent-gold text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-lg"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
