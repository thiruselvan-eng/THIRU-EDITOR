import React from 'react';
import { Sliders, Cpu, Sparkles, CheckCircle2, Scissors, Music, Palette, Type, Wand2, Video } from 'lucide-react';

export default function Skills() {
  const editorialSkills = [
    { name: "Video Editing", icon: <Scissors className="w-4 h-4" />, level: "Core Craft" },
    { name: "Storytelling & Narrative", icon: <Video className="w-4 h-4" />, level: "Narrative Arc" },
    { name: "Color Grading & LUTs", icon: <Palette className="w-4 h-4" />, level: "Mood & Tone" },
    { name: "Sound Design & Audio Mix", icon: <Music className="w-4 h-4" />, level: "Acoustic Impact" },
    { name: "Kinetic Typography", icon: <Type className="w-4 h-4" />, level: "Retention Text" },
    { name: "Motion Graphics", icon: <Sparkles className="w-4 h-4" />, level: "Visual Elements" },
    { name: "VFX & Compositing", icon: <Wand2 className="w-4 h-4" />, level: "Screen VFX" },
    { name: "Social Media Reels", icon: <Scissors className="w-4 h-4" />, level: "9:16 Vertical" },
    { name: "Promotional Editing", icon: <Video className="w-4 h-4" />, level: "Call To Action" },
    { name: "Cinematic Slow-Motion", icon: <Palette className="w-4 h-4" />, level: "Aesthetic Pacing" },
  ];

  const technicalWorkflow = [
    { label: "Pacing & Rhythm", desc: "Syncing cuts tightly to musical cues and natural speech cadence." },
    { label: "High-Retention Hooks", desc: "Front-loading visual curiosity within the initial 2-3 seconds." },
    { label: "Audio Sweetening", desc: "Dialogue clarity, dynamic compression, sound effects, and ambient beds." },
    { label: "Color Correction", desc: "Balancing skin tones, establishing uniform saturation, and luxury grading." },
    { label: "Multi-Camera Assembly", desc: "Syncing multi-angle footage, dialogue switching, and cutaway continuity." },
    { label: "Format Optimization", desc: "Tailoring delivery codecs for Instagram Reels, YouTube, and broadcast." }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-cinema-900/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
            TECHNICAL DISCIPLINE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase mb-4">
            EDITING <span className="text-accent-gold">SKILLS</span>
          </h2>
          <p className="text-sm sm:text-base text-cinema-400 font-sans leading-relaxed">
            A comprehensive editorial toolset combining psychological viewer engagement with technical video engineering.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {editorialSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-cinema-850 border border-white/5 hover:border-accent-gold/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-accent-gold mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-accent-gold transition-colors leading-snug">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono text-cinema-400 mt-1 block">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Workflow Principles */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10">
          <div className="mb-6 flex items-center gap-3">
            <Sliders className="w-5 h-5 text-accent-gold" />
            <h3 className="text-lg font-display font-bold text-white tracking-wide uppercase">
              Editorial Standards & Workflow Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalWorkflow.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs sm:text-sm font-display font-bold text-white">
                    {item.label}
                  </h4>
                  <p className="text-xs text-cinema-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
