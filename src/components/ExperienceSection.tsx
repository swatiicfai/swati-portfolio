import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Career Milestones & Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            A decade of progressive technical leadership and platform engineering.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Leading engineering organizations through high-velocity architecture transformations and scale inflection points.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-[17px] before:w-0.5 before:bg-slate-800 before:pointer-events-none">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-10 md:pl-12 group"
            >
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-2.5 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

              <div className="bg-[#101726] border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-400">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono tabular-nums">
                    <span>{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm text-slate-300/90 leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Measurable Outcomes */}
                <div className="space-y-2 mb-6">
                  {exp.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Unboxed Technologies list (No pills) */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="text-slate-500 font-medium">Stack:</span>
                    {exp.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300 font-medium">{tech}</span>
                        {idx < exp.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
