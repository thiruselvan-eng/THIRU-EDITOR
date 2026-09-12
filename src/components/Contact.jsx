import React, { useState } from 'react';
import { Phone, Mail, Instagram, MessageSquare, Send, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: 'Social Media / Reels',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi Thiru! I saw your video editor portfolio.
Name: ${formData.name || 'Not provided'}
Contact: ${formData.contact || 'Not provided'}
Project Type: ${formData.projectType}
Message: ${formData.message || 'I would like to discuss a video project.'}`;
    
    window.open(`https://wa.me/919345313552?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Video Editing Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(`Hi Thiru,

Name: ${formData.name}
Contact: ${formData.contact}
Project Type: ${formData.projectType}

Details:
${formData.message}`);

    window.location.href = `mailto:thiru15102005@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cinema-950 border-t border-white/10 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Big Headline & Direct Contact Channels */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-3 block">
              START A CONVERSATION
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase mb-6 leading-tight">
              HAVE A PROJECT <span className="text-accent-gold">IN MIND?</span>
            </h2>
            <p className="text-base sm:text-xl text-cinema-300 font-sans font-light leading-relaxed mb-10 max-w-lg">
              Let's turn your idea into a video people remember. Reach out directly through any channel below.
            </p>

            {/* Direct Channels List */}
            <div className="space-y-4 mb-10">
              {/* WhatsApp / Call */}
              <a
                href="https://wa.me/919345313552"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-400 block">
                      Fastest Response
                    </span>
                    <span className="text-base font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Chat & Call
                    </span>
                    <span className="text-xs font-mono text-cinema-400 block mt-0.5">
                      +91 93453 13552
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cinema-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Direct Phone */}
              <a
                href="tel:9345313552"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-accent-gold/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-accent-gold group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-cinema-400 block">
                      Direct Voice
                    </span>
                    <span className="text-base font-display font-bold text-white group-hover:text-accent-gold transition-colors">
                      Call 9345313552
                    </span>
                    <span className="text-xs font-mono text-cinema-400 block mt-0.5">
                      Available for project calls
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cinema-500 group-hover:text-accent-gold transition-colors" />
              </a>

              {/* Email */}
              <a
                href="mailto:thiru15102005@gmail.com"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-accent-cyan/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-cinema-400 block">
                      Official Email
                    </span>
                    <span className="text-base font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      thiru15102005@gmail.com
                    </span>
                    <span className="text-xs font-mono text-cinema-400 block mt-0.5">
                      Send briefs & footage links
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cinema-500 group-hover:text-accent-cyan transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/actorthiru_/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-cinema-400 block">
                      Instagram Profile
                    </span>
                    <span className="text-base font-display font-bold text-white group-hover:text-pink-300 transition-colors">
                      @actorthiru_
                    </span>
                    <span className="text-xs font-mono text-cinema-400 block mt-0.5">
                      Follow & Direct Message
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cinema-500 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Brief Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-accent-gold text-xs font-mono tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>QUICK BRIEF GENERATOR</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Send Project Details
              </h3>
              <p className="text-xs text-cinema-400 mb-6">
                Fill this brief to directly launch WhatsApp or Email with pre-structured project requirements.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cinema-400 mb-1.5">
                    Your Name / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Decor or Alex"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cinema-900 border border-white/10 text-white placeholder-cinema-600 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cinema-400 mb-1.5">
                    Your Contact (Phone or Email)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cinema-900 border border-white/10 text-white placeholder-cinema-600 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cinema-400 mb-1.5">
                    Project Genre
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cinema-900 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-gold transition-colors"
                  >
                    <option value="Social Media / Reels">Social Media / High-Retention Reels</option>
                    <option value="Digital Marketing & Ads">Digital Marketing & Brand Ads</option>
                    <option value="Event Highlights & Decor">Event Highlights & Decor Aftermovie</option>
                    <option value="Political Campaign Videos">Political Campaign Content Production</option>
                    <option value="VFX & Screen Replacement">VFX, Screen Replacement & Commercial</option>
                    <option value="Cinematic Mood Edit">Cinematic Mood Edit / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-cinema-400 mb-1.5">
                    Project Details / Raw Footage Scope
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your vision, timeline, or number of videos needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-cinema-900 border border-white/10 text-white placeholder-cinema-600 text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSubmitWhatsApp}
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>SEND VIA WHATSAPP</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitEmail}
                    className="py-3.5 px-4 rounded-xl bg-accent-gold hover:bg-white text-black font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    <span>SEND VIA EMAIL</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs text-center flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Action dispatched! Opening your messaging client...</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
