import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { CATEGORIES } from '../data/projects';
import { Filter, Search, Sparkles } from 'lucide-react';

export default function WorkGallery({ projects, onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesCategory =
        activeCategory === 'all' || proj.filterCategory === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.techniques.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="work" className="py-24 sm:py-32 bg-cinema-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-cinematic uppercase text-accent-gold mb-2 block">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase">
              SELECTED <span className="text-accent-gold">WORK</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cinema-400 max-w-md font-sans leading-relaxed">
            Explore 35 authentic editing projects across social reels, digital ads, event highlights, political campaign content, and visual effects.
          </p>
        </div>

        {/* Filter Navigation Bar + Search Input */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-accent-gold text-black border-accent-gold font-bold shadow-lg shadow-accent-gold/20'
                      : 'bg-cinema-900/80 text-cinema-300 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-cinema-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-cinema-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search edits, VFX, color grade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cinema-900/90 border border-white/10 text-white placeholder-cinema-500 text-xs font-sans focus:outline-none focus:border-accent-gold/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cinema-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-cinema-900/40 rounded-3xl border border-white/5">
            <p className="text-cinema-400 text-base mb-2">No projects found matching your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-mono uppercase text-accent-gold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
