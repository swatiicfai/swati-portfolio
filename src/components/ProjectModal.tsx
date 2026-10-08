import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Github, CheckCircle2, Play, Activity, Server, Zap } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive'>('overview');
  const [simulationState, setSimulationState] = useState<{
    running: boolean;
    rate: number;
    latency: number;
    health: string;
  }>({
    running: false,
    rate: 42000,
    latency: 11.8,
    health: 'Optimal',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleSimulateBurst = () => {
    setSimulationState({
      running: true,
      rate: 68500,
      latency: 14.2,
      health: 'Scaling Workers (+4)',
    });
    setTimeout(() => {
      setSimulationState({
        running: false,
        rate: 45000,
        latency: 11.4,
        health: 'Steady State (99.99%)',
      });
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#101726] border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with 3 zones & high-contrast close */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#101726]/95 backdrop-blur-md border-b border-slate-800">
          <div>
            <div className="text-xs font-medium text-slate-400">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="mx-1.5">·</span>
              <span className="text-indigo-400">{project.impactMetric} {project.impactLabel}</span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden sm:inline">Professional Link</span>
                <span className="sm:hidden">Link</span>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close Case Study"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Media Preview with fallback */}
          <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs sm:text-sm font-medium text-slate-200 drop-shadow-md">
                {project.kicker}
              </p>
            </div>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-lg border border-slate-800 max-w-xs">
            <button
              onClick={() => setActiveTab('overview')}
              type="button"
              className={`flex-1 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Architecture & Impact
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              type="button"
              className={`flex-1 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'interactive'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Inspector
            </button>
          </div>

          {activeTab === 'overview' ? (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Problem / Challenge */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  The Problem & Architectural Challenge
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  {project.caseStudy.challenge}
                </p>
              </div>

              {/* Architecture Design */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                  Architectural Solution & Design Principles
                </h3>
                <div className="space-y-2.5">
                  {project.caseStudy.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantifiable Results & Impact */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
                  Quantifiable Production Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.caseStudy.quantifiableResults.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-2" />
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized (Zero pills - clean typography with separators) */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 block mb-2 font-medium">Technologies Applied</span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="font-medium text-slate-200">{tag}</span>
                      {idx < project.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Simulation / Live Metrics Inspector */
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div>
                    <h4 className="text-sm font-semibold text-white font-display">
                      Architecture Topology & Dynamic Simulation
                    </h4>
                    <p className="text-xs text-slate-400">
                      Simulate network burst traffic against the {project.title} failover mesh.
                    </p>
                  </div>
                  <button
                    onClick={handleSimulateBurst}
                    disabled={simulationState.running}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{simulationState.running ? 'Injecting Burst...' : 'Trigger Traffic Burst'}</span>
                  </button>
                </div>

                {/* Simulated Telemetry Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Ingestion Rate</span>
                    </div>
                    <div className="text-xl font-bold font-mono tabular-nums text-white">
                      {simulationState.rate.toLocaleString()} <span className="text-xs font-sans text-slate-400 font-normal">req/s</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-sky-400" />
                      <span>p99 Delivery Latency</span>
                    </div>
                    <div className="text-xl font-bold font-mono tabular-nums text-emerald-400">
                      {simulationState.latency} <span className="text-xs font-sans text-slate-400 font-normal">ms</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Cluster Status</span>
                    </div>
                    <div className="text-sm font-semibold font-mono text-slate-200">
                      {simulationState.health}
                    </div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                    Verified Invariants
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.caseStudy.technicalHighlights.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#101726] border-t border-slate-800 text-xs">
          <span className="text-slate-400 font-medium">
            Designed & Architected by Swati Gupta
          </span>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
