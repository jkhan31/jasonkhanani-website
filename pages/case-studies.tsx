import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { SectionHeader } from '../components/SectionHeader';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, Search, Zap, MessageSquare, Layout, LucideIcon, ArrowRight } from 'lucide-react';
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

// Helper to parse the bold markdown from constants (e.g. "**Context:** Text")
const DetailItem: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split('**');
  // If we find the pattern **Label** Text, render it specially
  if (parts.length >= 3) {
    return (
      <p className="text-base text-sumiInk/80 leading-relaxed border-b border-sumiInk/5 pb-3 last:border-0">
        <strong className="text-sumiInk/60 font-semibold tracking-wide text-xs uppercase block mb-1">
          {parts[1]}
        </strong>
        {parts[2]}
      </p>
    );
  }
  // Fallback for plain text
  return <p className="text-base text-sumiInk/80 leading-relaxed border-b border-sumiInk/5 pb-3 last:border-0">{text}</p>;
};

const CaseCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const IconComponent = getIconForStudy(study.id);

  return (
    <div className="group border-0.5 border-hankoRust/20 bg-white rounded-xl p-6 md:p-8 hover:border-hankoRust/40 transition-all duration-500 hover:shadow-lg relative overflow-hidden">
      {/* Subtle background accent on hover */}
      <div className="absolute top-0 left-0 w-1 h-full bg-hankoRust opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-col h-full">
        {/* Icon and Title Section */}
        <div className="mb-5">
          <div className="flex justify-end mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-sumiInk/40 group-hover:text-hankoRust transition-colors">
              {study.stealthTitle || 'Platform Initiative'}
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <IconComponent className="w-6 h-6 text-hankoRust/80 shrink-0" strokeWidth={1.5} />
            <h3 className="text-2xl font-serif font-bold text-sumiInk leading-snug">
              {study.title}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-4 flex-grow">
          {study.details.map((detail: string, idx: number) => (
            <DetailItem key={idx} text={detail} />
          ))}
        </div>

        {/* Impact Section */}
        <div className="pt-3 border-t-0.5 border-hankoRust/10">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-sumiInk/50 mb-2 block">
            Impact
          </span>
          <span className="text-2xl font-serif text-hankoRust font-semibold">{study.impact}</span>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <>
      <Head>
        <title>Case Studies | Jason K Hanani</title>
        <meta
          name="description"
          content="Selected platform initiatives with measurable business impact. Context, decision, and outcome for each case."
        />
        <meta property="og:title" content="Case Studies - Jason K Hanani" />
        <meta property="og:description" content="€1.5M+ quantified impact across e-commerce, logistics, and operations." />
        <meta property="og:url" content="https://jasonkhanani.com/case-studies/" />
        <link rel="canonical" href="https://jasonkhanani.com/case-studies/" />
      </Head>

      <div className="min-h-screen bg-ricePaper">
      <div className="px-6 py-16 md:py-24 max-w-7xl mx-auto animate-in fade-in duration-700">
        <SectionHeader
          title="Case Studies"
          className="mb-6"
        />

        <div className="max-w-3xl mb-16">
          <p className="text-lg text-sumiInk/70 leading-relaxed mb-6">
            Platform initiatives with measurable impact.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map(study => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>

        {/* Footer Note - Redirect to Resume */}
        <div className="mt-16 pt-8 border-t-0.5 border-sumiInk/10 text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-sumiInk/70">
              For full role context and responsibilities:
            </p>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-bold text-hankoRust hover:text-sumiInk transition-colors group uppercase tracking-wider"
            >
              <span>View Resume</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CaseStudies;
