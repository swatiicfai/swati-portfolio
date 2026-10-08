import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'fullstack' | 'telemetry' | 'opensource'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud', label: 'Enterprise Systems' },
    { id: 'fullstack', label: 'Intranet Platforms' },
    { id: 'opensource', label: 'Open Source Tools' },
    { id: 'telemetry', label: 'AI & Data Systems' },
  ] as const;

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Selected Works & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              Production systems architected for extreme throughput and high availability.
            </h2>
          </div>

          {/* Functional Filter Tabs (Buttons allowed for interactive filters) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {filteredProjects.map((project, index) => {
            // First item spans 7 columns, second spans 5 in desktop layout for Bento rhythm
            const isWide = index % 3 === 0;
            const colSpanClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <article
                key={project.id}
                className={`${colSpanClass} group bg-[#101726] border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/30 flex flex-col justify-between`}
              >
                {/* Media frame with zero broken image fallback */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-transparent opacity-90" />

                  {/* Impact Metric Overlay Badge (Clean text container) */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-lg px-3 py-1 text-right">
                    <span className="text-xs font-mono tabular-nums font-bold text-white block">
                      {project.impactMetric}
                    </span>
                    <span className="text-[10px] text-indigo-400 block -mt-0.5 font-medium">
                      {project.impactLabel}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata kicker (No pills!) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-indigo-400">{project.kicker}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white font-display mb-3 group-hover:text-indigo-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300/90 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies list (Clean unboxed inline text) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mb-6 pt-4 border-t border-slate-800/80">
                      {project.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span className="text-slate-300">{tag}</span>
                          {idx < project.tags.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Functional Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>Case Study & Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub source for ${project.title}`}
                          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                            title="Open Live Preview"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
