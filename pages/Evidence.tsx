
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, Search, Zap, MessageSquare, Layout, LucideIcon } from 'lucide-react';
import { CaseStudy } from '../types';

// Map case study IDs to specific icons
const getIconForStudy = (id: string): LucideIcon => {
  const iconMap: { [key: string]: LucideIcon } = {
    'revenue-preservation': TrendingUp,
    'logistics-optimization': Search,
    'network-reengineering': Zap,
    'support-automation': MessageSquare,
    'pmo-standardization': Layout,
  };
  return iconMap[id] || Zap;
};

const CaseCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const IconComponent = getIconForStudy(study.id);
  
  return (
    <div className="group border-0.5 border-hankoRust/20 bg-white p-8 md:p-12 hover:border-hankoRust/50 transition-all duration-500 hover:shadow-lg">
      <div className="flex flex-col h-full">
        {/* Icon and Title Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <IconComponent className="w-8 h-8 text-hankoRust" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/40">
              {study.stealthTitle}
            </span>
          </div>
          <h3 className="text-3xl font-serif text-sumiInk mb-4 leading-tight group-hover:text-hankoRust transition-colors">
            {study.title}
          </h3>
          <p className="text-base font-serif italic text-sumiInk/60 border-l-2 border-hankoRust/30 pl-6 my-6">
            {study.hook}
          </p>
        </div>

        {/* Challenge → Diagnostic → Outcome Details */}
        <div className="space-y-6 mb-12 flex-grow">
          {study.details.map((detail: string, idx: number) => (
            <div key={idx} className="flex flex-col gap-2">
              <p className="text-sm text-sumiInk/80 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Impact Section with Hanko Rust accent */}
        <div className="pt-8 border-t-0.5 border-hankoRust/10">
          <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/30 mb-2 block">
            Outcome Impact
          </span>
          <span className="text-3xl font-serif text-hankoRust font-bold">{study.impact}</span>
        </div>
      </div>
    </div>
  );
};

const Evidence: React.FC = () => {
  return (
    <div className="min-h-screen bg-ricePaper">
      {/* Back to Home Navigation */}
      <div className="px-6 pt-8 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-sumiInk/60 hover:text-hankoRust transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto animate-in fade-in duration-700">
        <SectionHeader 
          eyebrow="Privacy-First Evidence" 
          title="Systems in Action" 
          className="mb-6"
        />
        <p className="text-lg text-sumiInk/70 max-w-3xl mb-16 leading-relaxed">
          Bridging technical diagnostics with human-centered project management. Each case demonstrates high-leverage interventions in complex operational environments.
        </p>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map(study => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t-0.5 border-sumiInk/10 text-center">
          <p className="text-sm text-sumiInk/50 italic max-w-2xl mx-auto leading-relaxed">
            Detailed company history, specific project documentation, and raw data are available via resume upon request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
