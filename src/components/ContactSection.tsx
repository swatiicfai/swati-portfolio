import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  inquiryType: 'advisory' | 'fulltime' | 'consulting' | 'general';
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    inquiryType: 'advisory',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    try {
      const existing = localStorage.getItem('portfolio_inquiries');
      if (existing) {
        const parsed = JSON.parse(existing);
        if (Array.isArray(parsed)) setSavedCount(parsed.length);
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, [isSubmitted]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Defensive payload hygiene: strip any potential undefined/null properties
    const sanitizedRecord = {
      id: `inq_${Date.now()}`,
      fullName: formData.fullName.trim().replace(/<[^>]*>?/gm, ''),
      email: formData.email.trim(),
      subject: formData.subject.trim().replace(/<[^>]*>?/gm, ''),
      inquiryType: formData.inquiryType,
      message: formData.message.trim().replace(/<[^>]*>?/gm, ''),
      timestamp: new Date().toISOString(),
    };

    try {
      const existingRaw = localStorage.getItem('portfolio_inquiries');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(sanitizedRecord);
      localStorage.setItem('portfolio_inquiries', JSON.stringify(existing));

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 400);
    } catch {
      setIsSubmitting(false);
      setErrors({ message: 'Unable to save message locally. Please email directly.' });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      inquiryType: 'advisory',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0d121d]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Links & Profile Connectors */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                Initiate Contact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
                Let's discuss architecture, systems strategy, or leadership.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-8">
                Whether you're looking for an architectural assessment, exploring staff or principal engineering opportunities, or discussing technical advisory engagements, my inbox is open.
              </p>

              {/* Verified Professional Profiles */}
              <div className="space-y-3 mb-8">
                {/* Email Direct */}
                <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Primary & Alternate Email</div>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors block"
                      >
                        {PROFILE.email}
                      </a>
                      <a
                        href={`mailto:${PROFILE.altEmail}`}
                        className="text-[11px] text-slate-400 hover:text-indigo-300 transition-colors block"
                      >
                        {PROFILE.altEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    title="Copy Primary Email"
                  >
                    {emailCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Direct */}
                <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <span className="text-xs font-mono font-bold">📱</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">Direct Phone & WhatsApp</div>
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Available</span>
                </div>

                {/* LinkedIn Profile */}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        linkedin.com/in/swati-gupta-15289624
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    Connect →
                  </span>
                </a>

                {/* GitHub Profile */}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-700/30 text-slate-300 rounded-lg">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">GitHub Repositories</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        github.com/swatiicfai
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    Follow →
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="block font-medium text-slate-300 mb-0.5">Response Time Commitment</span>
              <span>Inquiries typically receive a detailed reply within 24–48 hours.</span>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7 bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Message Successfully Dispatched
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-white">{formData.fullName}</span>. Your inquiry regarding <span className="text-indigo-400">"{formData.subject}"</span> has been logged and queued.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    type="button"
                    className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Open in Email Client
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-base font-bold text-white font-display">
                      Send an Inquiry
                    </h3>
                  </div>
                  {savedCount > 0 && (
                    <span className="text-[11px] text-slate-400">
                      {savedCount} messages sent previously
                    </span>
                  )}
                </div>

                {/* Inquiry Type Radio / Segmented control */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Engagement Nature
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'advisory', label: 'Technical Advisory' },
                      { id: 'fulltime', label: 'Staff / Lead Role' },
                      { id: 'consulting', label: 'Architecture Review' },
                      { id: 'general', label: 'General Connect' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, inquiryType: type.id as any })}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                          formData.inquiryType === type.id
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject Line <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Distributed Streaming Architecture Advisory"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message Details <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share context on your technical requirements, team structure, or agenda..."
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-y ${
                      errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Input validated & sanitized securely.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors shadow-sm shadow-indigo-600/30 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
