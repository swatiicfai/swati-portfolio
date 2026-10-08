import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c13] border-t border-slate-800/80 py-14 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          <div>
            <div className="text-lg font-bold text-white font-display mb-1">
              {PROFILE.name}
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {PROFILE.role}. Enterprise software systems and open source AI engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#biography" className="hover:text-white transition-colors">Biography</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <button onClick={onOpenResume} type="button" className="hover:text-white transition-colors">Resume</button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send Email"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
