import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { SectionHeader } from '../components/SectionHeader';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, Search, Zap, MessageSquare, Layout, LucideIcon, ArrowLeft, ArrowRight } from 'lucide-react';
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

// Helper to parse the bold markdown from constants (e.g. "**The Diagnostic:** Text")
const DetailItem: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split('**');
  // If we find the pattern **Label** Text, render it specially
  if (parts.length >= 3) {
    return (
      <p className="text-sm text-sumiInk/80 leading-relaxed border-b border-sumiInk/5 pb-4 last:border-0">
        <strong className="text-sumiInk font-bold tracking-wide text-xs uppercase block mb-1">
          {parts[1]}
        </strong>
        {parts[2]}
      </p>
    );
  }
  // Fallback for plain text
  return <p className="text-sm text-sumiInk/80 leading-relaxed border-b border-sumiInk/5 pb-4 last:border-0">{text}</p>;
};

const CaseCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const IconComponent = getIconForStudy(study.id);

  return (
    <div className="group border-0.5 border-hankoRust/20 bg-white p-8 md:p-12 hover:border-hankoRust/50 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
      {/* Subtle background accent on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-hankoRust opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col h-full">
        {/* Icon and Title Section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <IconComponent className="w-8 h-8 text-hankoRust" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/40 group-hover:text-hankoRust transition-colors">
              {study.stealthTitle || 'System Architecture'}
            </span>
          </div>
          <h3 className="text-3xl font-serif text-sumiInk mb-4 leading-tight">
            {study.title}
          </h3>
          <p className="text-base font-serif italic text-sumiInk/60 border-l-2 border-hankoRust/30 pl-6 my-6">
            "{study.hook}"
          </p>
        </div>

        {/* Challenge → Diagnostic → Outcome Details */}
        <div className="space-y-4 mb-12 flex-grow">
          {study.details.map((detail: string, idx: number) => (
            <DetailItem key={idx} text={detail} />
          ))}
        </div>

        {/* Impact Section with Hanko Rust accent */}
        <div className="pt-8 border-t-0.5 border-hankoRust/10">
          <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/50 mb-2 block">
            System Outcome
          </span>
          <span className="text-3xl font-serif text-hankoRust font-bold">{study.impact}</span>
        </div>
      </div>
    </div>
  );
};

const Evidence: React.FC = () => {
  return (
    <>
      <Head>
        <title>Systems in Action | Jason Kester Hanani</title>
        <meta 
          name="description" 
          content="Real-world case studies with explicit Context, Diagnostic, Design decision, and Outcome labels. Quantified operational outcomes and current statuses included." 
        />
        <meta property="og:title" content="Systems in Action - Evidence" />
        <meta property="og:description" content="€1.5M+ quantified impact across e-commerce, logistics, and operations." />
        <meta property="og:url" content="https://jasonkhanani.com/evidence/" />
        <link rel="canonical" href="https://jasonkhanani.com/evidence/" />
      </Head>
      
      <div className="min-h-screen bg-ricePaper">
      {/* Back to Home Navigation */}
      <div className="px-6 pt-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-sumiInk/60 hover:text-hankoRust transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto animate-in fade-in duration-700">
        <SectionHeader
          eyebrow="Proof of Work"
          title="The Engineering Log"
          className="mb-6"
        />

        {/* The Common Thread / Adaptive Architecture Box */}
        <div className="max-w-3xl mb-16">
          <p className="text-lg text-sumiInk/70 leading-relaxed mb-4">
            Below is a catalog of systemic interventions engineered to address specific operational constraints.
          </p>

          <p className="text-sm text-sumiInk/70 leading-relaxed mb-6">
            Each case is organized with explicit labels: Context; Diagnostic/Problem; Constraints; Design/Decision; Outcome or Current Status. Outcomes described as "projected" are forecasts; other outcomes are executed results.
          </p>

          <div className="bg-white border-l-2 border-hankoRust p-6 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-hankoRust mb-2">Approach</h4>
            <p className="text-sm text-sumiInk/80 leading-relaxed">
              Run diagnostic analysis to identify failure modes, quantify impact, make system-level design decisions, and deliver implementable changes with measurable outcomes.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map(study => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>

        {/* Footer Note - Redirect to Resume */}
        <div className="mt-16 pt-8 border-t-0.5 border-sumiInk/10 text-center">
          {/* Bridge to Resume */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-sumiInk/70">
              These case studies represent specific architectural interventions.<br className="hidden md:block" />
              For the full chronological context and role responsibilities:
            </p>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-bold text-hankoRust hover:text-sumiInk transition-colors group uppercase tracking-wider"
            >
              <span>View Full Professional Chronology</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Evidence;