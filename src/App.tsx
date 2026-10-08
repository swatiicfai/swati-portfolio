/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Animated Scroll Depth Progress Bar */}
      <ScrollProgressBar />

      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section with Split-Screen Impact */}
        <Hero
          onOpenContact={scrollToContact}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Biography & Philosophy Section */}
        <Biography />

        {/* Selected Projects Bento Grid Showcase */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Skills & Technical Taxonomy */}
        <SkillsSection />

        {/* Professional Experience & Career Chronology */}
        <ExperienceSection />

        {/* Contact & Profiles Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
