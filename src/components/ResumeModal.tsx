import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { PROFILE, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plaintext = `
${PROFILE.name} - ${PROFILE.role}
Email: ${PROFILE.email} / ${PROFILE.altEmail} | Phone: ${PROFILE.phone}
Location: ${PROFILE.location}
GitHub: ${PROFILE.github} | LinkedIn: ${PROFILE.linkedin}

SUMMARY:
${PROFILE.bioNarrative.join('\n\n')}

EXPERIENCE:
${EXPERIENCES.map((e) => `
${e.role} | ${e.company} (${e.period})
Location: ${e.location}
${e.summary}
Outcomes:
${e.keyOutcomes.map((o) => `• ${o}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${PROFILE.education.map((ed) => `${ed.degree} - ${ed.institution} (${ed.year}), Focus: ${ed.focus}`).join('\n')}

CERTIFICATIONS:
${PROFILE.certifications.join('\n')}
    `.trim();

    navigator.clipboard.writeText(plaintext);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <h2 id="resume-title" className="text-base font-bold text-white font-display">
              Curriculum Vitae — {PROFILE.name}
            </h2>
            <span className="text-xs text-slate-400 font-mono">PDF / Printable</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close Resume"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0f17] text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white font-display mb-1">
              {PROFILE.name}
            </h1>
            <p className="text-base font-semibold text-indigo-400 mb-3">
              {PROFILE.role}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
              <span>{PROFILE.email}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.phone}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.location}</span>
              <span aria-hidden="true">·</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-indigo-400">
                github.com/swatiicfai
              </a>
              <span aria-hidden="true">·</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-indigo-400">
                linkedin.com/in/swati-gupta-15289624
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              Executive Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {PROFILE.bioNarrative[0]} {PROFILE.bioNarrative[1]}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.company} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="text-base font-bold text-white">{exp.role}</span>
                      <span className="text-slate-400 mx-1.5">·</span>
                      <span className="text-sm font-semibold text-indigo-300">{exp.company}</span>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                    {exp.keyOutcomes.map((outcome, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="text-slate-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Disciplines */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              Technical Disciplines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                  <div className="font-semibold text-white mb-1">{cat.title}</div>
                  <div className="text-slate-400">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                Education
              </h3>
              {PROFILE.education.map((ed) => (
                <div key={ed.institution} className="mb-2 text-xs">
                  <div className="font-semibold text-white">{ed.degree}</div>
                  <div className="text-slate-400">{ed.institution} · <span className="font-mono">{ed.year}</span></div>
                  <div className="text-slate-500 text-[11px]">{ed.focus}</div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                Certifications
              </h3>
              <ul className="text-xs space-y-1 text-slate-300">
                {PROFILE.certifications.map((cert) => (
                  <li key={cert}>• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
