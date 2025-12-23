
import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CASE_STUDIES } from '../constants';

const CaseCard: React.FC<{ study: any }> = ({ study }) => (
  <div className="group border-0.5 border-hankoRust/20 bg-white/30 p-8 md:p-12 hover:border-hankoRust/50 transition-all duration-500">
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <span className={`text-[10px] uppercase tracking-widest font-bold mb-4 block ${
          study.persona === 'Investigator' ? 'text-hankoRust' : study.persona === 'Architect' ? 'text-foxOrange' : 'text-sage'
        }`}>
          Track: {study.persona}
        </span>
        <h3 className="text-3xl font-serif text-sumiInk mb-4 leading-tight group-hover:text-hankoRust transition-colors">
          {study.title}
        </h3>
        <p className="text-lg font-serif italic text-sumiInk/60 border-l-0.5 border-hankoRust/20 pl-6 my-6">
          {study.hook}
        </p>
      </div>

      <div className="space-y-4 mb-12 flex-grow">
        {study.details.map((detail: string, idx: number) => (
          <div key={idx} className="flex gap-4">
            <span className="text-hankoRust opacity-40 font-serif text-xs pt-1">{String(idx + 1).padStart(2, '0')}</span>
            <p className="text-sm text-sumiInk/70 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t-0.5 border-hankoRust/10">
        <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/30 mb-2 block">Direct Impact</span>
        <span className="text-2xl font-serif text-hankoRust">{study.impact}</span>
      </div>
    </div>
  </div>
);

const Evidence: React.FC = () => {
  return (
    <div className="px-6 py-24 md:py-32 max-w-7xl mx-auto animate-in fade-in duration-700">
      <SectionHeader 
        eyebrow="Evidence Vault" 
        title="Proof of Impact" 
        className="mb-6"
      />
      <p className="text-lg text-sumiInk/60 max-w-2xl mb-16">
        A collection of tactical operations and systems architecture cases. These results represent high-leverage interventions in complex environments.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-px md:bg-hankoRust/10">
        {CASE_STUDIES.map(study => (
          <CaseCard key={study.id} study={study} />
        ))}
      </div>

      <div className="mt-24 bg-sumiInk p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foxOrange via-transparent to-transparent" />
        <h3 className="text-3xl md:text-4xl font-serif text-ricePaper mb-8 relative z-10">
          Ready to audit your operations?
        </h3>
        <a 
          href="mailto:jason@khanani.com"
          className="relative z-10 inline-block px-12 py-5 bg-hankoRust text-ricePaper uppercase tracking-widest text-xs font-bold hover:bg-foxOrange transition-colors"
        >
          Book a Diagnostic Call
        </a>
      </div>
    </div>
  );
};

export default Evidence;
