import React from 'react';
import { Film, ArrowUp, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cinema-950 border-t border-white/10 pt-16 pb-12 text-cinema-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cinema-900 border border-white/10 flex items-center justify-center text-accent-gold">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-display font-black tracking-wider text-white block">
                THIRU
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-cinema-400">
                Video Editor & Visual Content Creator
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <a href="#hero" className="hover:text-white transition-colors">HOME</a>
            <a href="#work" className="hover:text-white transition-colors">WORK</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-xl bg-cinema-900 border border-white/10 text-cinema-300 hover:text-white hover:border-accent-gold/40 transition-all flex items-center gap-2"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase hidden sm:inline">TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p className="text-cinema-500">
            © 2026 Thiru. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-cinema-400">
            <a
              href="https://www.instagram.com/actorthiru_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@actorthiru_</span>
            </a>
            <span>•</span>
            <a
              href="mailto:thiru15102005@gmail.com"
              className="hover:text-accent-gold transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>thiru15102005@gmail.com</span>
            </a>
            <span>•</span>
            <a
              href="tel:9345313552"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>9345313552</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
