import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Twitter, Check, Copy } from 'lucide-react';
import { PROFILE, METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Unboxed clean metadata kicker (Zero pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-5">
              <span className="text-indigo-400">{PROFILE.role}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PROFILE.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Advisory & Leadership
              </span>
            </div>

            {/* Headline with balanced prose */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6 max-w-2xl">
              Engineering dependable enterprise systems & modern AI software architectures.
            </h1>

            {/* Narrative subhead */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Software Developer with deep expertise in enterprise application design, Microsoft technologies, and relational databases. Active open source contributor with modern credentials in Machine Learning (IEEE BLP 2025), Gen AI Academy, and AWS.
            </p>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-md shadow-indigo-600/20 whitespace-nowrap"
              >
                <span>Explore Selected Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              </button>

              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>View CV / Resume</span>
              </button>
            </div>

            {/* Verified Professional Profiles Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-10 pb-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors font-mono"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/swatiicfai</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors font-mono"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>linkedin.com/in/swati-gupta-15289624</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Claim-to-Proof Quantitative Rigor: Metrics with tabular figures */}
            <div className="w-full pt-8 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mt-0.5">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug mt-1">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Visual Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative geometric frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 via-slate-700/20 to-sky-500/20 rounded-2xl blur-sm -z-10" />

              <div className="relative bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-3">
                {/* Image slot with zero-broken-image fallback */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900">
                  {!imageError ? (
                    <img
                      src="/src/assets/images/swati_gupta_executive_portrait_1791447543430.jpg"
                      alt="Executive Portrait of Swati Gupta, Software Developer"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ${
                        imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950/40 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-3">
                        <span className="text-xl font-bold font-display text-indigo-300">SG</span>
                      </div>
                      <span className="text-base font-semibold text-white font-display">Swati Gupta</span>
                      <span className="text-xs text-slate-400 mt-1">{PROFILE.role}</span>
                    </div>
                  )}
                </div>

                {/* Card caption & direct profile actions */}
                <div className="pt-4 pb-2 px-2">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h2 className="text-base font-bold text-white font-display">{PROFILE.name}</h2>
                      <div className="text-xs text-slate-400 mt-0.5">{PROFILE.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-emerald-400 font-medium">MCA (1st Div)</div>
                      <div className="text-[11px] text-slate-400">IEEE BLP ML 2025</div>
                    </div>
                  </div>

                  {/* Direct interactive professional profiles */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={PROFILE.twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter Profile"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md transition-colors"
                      title="Copy email address"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
