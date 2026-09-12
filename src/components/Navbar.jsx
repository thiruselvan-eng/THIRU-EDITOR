import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'SHOWREEL', href: '#showreel' },
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cinema-950/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 md:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label="Thiru Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cinema-800 to-cinema-900 border border-white/15 flex items-center justify-center group-hover:border-accent-gold/60 transition-all duration-300">
            <Film className="w-5 h-5 text-accent-gold group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-accent-gold transition-colors">
              THIRU
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono tracking-widest uppercase text-cinema-400 border-l border-cinema-700 pl-2">
              Video Editor
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-cinema-900/60 backdrop-blur-md border border-white/5 rounded-full px-4 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium tracking-widest text-cinema-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/919345313552"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-cinema-900/80 border border-white/10 hover:border-emerald-500/50 text-cinema-300 hover:text-emerald-400 transition-all"
            title="WhatsApp Thiru"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-gold text-black hover:bg-white transition-all duration-300 shadow-lg hover:shadow-accent-gold/20 active:scale-95"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider bg-accent-gold text-black"
          >
            LET'S TALK
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-cinema-900 border border-white/10 text-cinema-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-cinema-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest text-cinema-200 hover:text-accent-gold py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/919345313552"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                CHAT ON WHATSAPP
              </a>
              <a
                href="tel:9345313552"
                className="w-full py-3 rounded-xl bg-cinema-800 border border-white/10 text-white text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                CALL 9345313552
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
