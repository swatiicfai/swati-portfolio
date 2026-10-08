import React, { useState } from 'react';
import { Search, Server, Cloud, Layout, Database, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === cat.id;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  const categoryIcons: Record<string, React.ReactNode> = {
    'cloud-infra': <Cloud className="w-4 h-4 text-indigo-400" />,
    'backend-systems': <Server className="w-4 h-4 text-sky-400" />,
    'frontend-architecture': <Layout className="w-4 h-4 text-emerald-400" />,
    'data-observability': <Database className="w-4 h-4 text-amber-400" />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0d121d]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            Technical Proficiency & Taxonomy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight mb-4">
            Specialized engineering capabilities backed by rigorous production battle-testing.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Every technology listed has been deployed, operated, and maintained under real customer traffic loads.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Interactive Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., Kubernetes, Rust, React, Kafka)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#101726] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    {categoryIcons[category.id] || <Server className="w-4 h-4 text-indigo-400" />}
                    <h3 className="text-lg font-bold text-white font-display">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">
                    {category.description}
                  </p>

                  {/* Skills List with Tabular Figures and Production Evidence */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-xl transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-slate-400">
                            <span className="text-indigo-400 font-medium">{skill.level}</span>
                            <span aria-hidden="true">·</span>
                            <span>{skill.years} Yrs Exp</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              type="button"
              className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 underline font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
