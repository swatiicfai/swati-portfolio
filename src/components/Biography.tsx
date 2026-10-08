import React, { useState } from 'react';
import { Award, BookOpen, Cpu, ShieldCheck, Terminal, Users } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Biography: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'leadership' | 'credentials'>('philosophy');

  return (
    <section id="biography" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0d121d]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Engineering Biography
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
            Building systems that endure scale, network partitions, and organizational growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            {PROFILE.bioNarrative.map((paragraph, index) => (
              <p key={index} className="text-slate-300/95">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1 font-medium">Core Architecture Focus</span>
                  <span className="text-slate-200 font-medium">Enterprise .NET, Relational Database Modeling, Machine Learning (IEEE BLP), Agentic Systems</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1 font-medium">Industry Domains</span>
                  <span className="text-slate-200 font-medium">Enterprise Operations, Intranet Platforms, Cloud Automation, Developer Tooling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Deep-Dive Tabs */}
          <div className="lg:col-span-6 bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
            {/* Functional Filter Tabs (Buttons allowed for interactive state switcher) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl mb-6 border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('philosophy')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'philosophy'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Philosophy
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('leadership')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'leadership'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Leadership
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('credentials')}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'credentials'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Credentials
              </button>
            </div>

            {/* Tab 1: Architecture Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">01. Design for Failure as the Steady State</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Distributed networks are inherently unreliable. I design systems with idempotent transactions, adaptive backpressure, circuit breakers, and automatic degraded fallbacks so business workflows continue uninterrupted during cluster brownouts.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">02. Observability Precedes Optimization</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    You cannot reliably scale what you cannot quantify. Every microservice must expose structured logs, distributed OpenTelemetry trace contexts, and standard Prometheus metrics before touching production environments.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">03. Zero-Trust Security by Default</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Internal networks must never be trusted implicitly. Service-to-service communication requires mutual TLS, cryptographically signed SPIFFE identities, and least-privilege token authentication.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Leadership & RFC Culture */}
            {activeTab === 'leadership' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">01. RFC-Driven Architectural Clarity</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Pioneered the Request-for-Comments (RFC) process across multiple engineering organizations, facilitating transparent trade-off analyses, security reviews, and asynchronous consensus before writing code.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">02. Engineering Sponsorship & Mentorship</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Actively mentored 18+ senior and staff software engineers, running weekly architecture roundtables, systems design deep-dives, and production incident post-mortems with blameless learning cultures.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white font-display">03. Cross-Functional Engineering Velocity</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Bridged the gap between product managers, security teams, and platform infrastructure engineers to eliminate deployment friction and accelerate continuous deployment safely.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Credentials & Education */}
            {activeTab === 'credentials' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">Academic Degrees</h3>
                  <div className="space-y-3">
                    {PROFILE.education.map((edu) => (
                      <div key={edu.institution} className="border-l-2 border-indigo-500/60 pl-3 py-0.5">
                        <div className="text-sm font-semibold text-white">{edu.degree}</div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {edu.institution} · <span className="font-mono tabular-nums">{edu.year}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{edu.focus}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">Certifications</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {PROFILE.certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
