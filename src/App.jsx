import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroStatement from './components/IntroStatement';
import Showreel from './components/Showreel';
import WorkGallery from './components/WorkGallery';
import CategoryDeepDives from './components/CategoryDeepDives';
import Services from './components/Services';
import Skills from './components/Skills';
import Process from './components/Process';
import About from './components/About';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PROJECTS_DATA } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-cinema-950 text-cinema-100 font-sans selection:bg-accent-gold selection:text-black">
      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onExploreWork={() => {}} />

        {/* 2. Editorial Philosophy Statement */}
        <IntroStatement />

        {/* 3. Featured Flagship Showreel */}
        <Showreel />

        {/* 4. Selected Work Gallery (All 24 Projects) */}
        <WorkGallery
          projects={PROJECTS_DATA}
          onOpenModal={handleOpenModal}
        />

        {/* 5. Category Deep Dives (Marketing, Events, VFX) */}
        <CategoryDeepDives
          projects={PROJECTS_DATA}
          onOpenModal={handleOpenModal}
        />

        {/* 6. Core Services: What I Can Create */}
        <Services />

        {/* 7. Editorial Skills & Technical Standards */}
        <Skills />

        {/* 8. Creative Process: From Idea to Final Cut */}
        <Process />

        {/* 9. About The Editor */}
        <About />

        {/* 10. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 11. High-Impact Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cinematic Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </div>
  );
}
