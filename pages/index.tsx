import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '../components/Logo';

const capabilities = [
  {
    title: 'Fee & Margin Architecture',
    description: 'Diagnosing unit economics and rebuilding pricing models across SKUs, lanes, and seller tiers.',
  },
  {
    title: 'Fulfillment System Design',
    description: 'Routing logic, activation flows, and warehouse network optimization for multi-market operations.',
  },
  {
    title: 'AI-Augmented Workflows',
    description: 'Deploying automation into seller support, operational tagging, and business rule systems.',
  },
  {
    title: 'Multi-Market Operations',
    description: 'Cross-border initiative coordination across 6+ markets — onboarding, compliance, and execution.',
  },
];

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto">
    <div className="max-w-4xl">
      {/* Role Tag */}
      <p className="text-hankoRust font-bold tracking-[0.2em] text-sm uppercase mb-4">
        Operations &amp; Product Systems
      </p>

      {/* Name */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-sumiInk leading-tight mb-6 tracking-tight">
        <span className="md:hidden">Jason K<br />Hanani</span>
        <span className="hidden md:inline">Jason K Hanani</span>
      </h1>

      {/* Value Proposition */}
      <p className="text-lg md:text-xl text-sumiInk max-w-2xl leading-relaxed mb-12">
        I build the systems that make multi-market platforms run — fee architecture, routing logic, AI-augmented support. €1.5M+ in documented outcomes.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
        >
          View Resume
        </Link>
        <Link
          href="/case-studies"
          className="px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  </section>
);

const Capabilities: React.FC = () => (
  <section className="bg-ricePaper py-24 md:py-32 border-t border-sumiInk/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-sumiInk mb-4 leading-tight">
          What I Build
        </h2>
        <p className="text-base text-sumiInk/60 leading-relaxed">
          Four areas where I design and own the operational layer — from diagnosis through execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="border-t border-sumiInk/10 pt-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-hankoRust/50 mb-3 block">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-sans font-bold text-sumiInk mb-2">
              {cap.title}
            </h3>
            <p className="text-sm text-sumiInk/60 leading-relaxed">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto border-t border-sumiInk/10">
    <div className="max-w-xl mb-10">
      <h2 className="text-3xl font-sans font-bold text-sumiInk mb-3">Explore the work</h2>
      <p className="text-base text-sumiInk/60 leading-relaxed">
        Full experience and context in the resume. Quantified outcomes in the case studies.
      </p>
    </div>
    <div className="flex flex-wrap gap-4">
      <Link
        href="/resume"
        className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
      >
        View Resume
      </Link>
      <Link
        href="/case-studies"
        className="px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
      >
        View Case Studies
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason K Hanani | Operations & Product Systems</title>
        <meta
          name="description"
          content="Operations & Product Systems leader delivering €1.5M+ in quantified impact across multi-market e-commerce platforms — logistics architecture, marketplace operations, and AI-augmented execution."
        />
        <meta property="og:title" content="Jason K Hanani | Operations & Product Systems" />
        <meta property="og:description" content="Operations & Product Systems leader delivering €1.5M+ in quantified impact across multi-market e-commerce platforms." />
        <meta property="og:url" content="https://jasonkhanani.com/" />
        <link rel="canonical" href="https://jasonkhanani.com/" />
      </Head>

      <div className="animate-in fade-in duration-1000">
        <Hero />
        <Capabilities />
        <CTASection />
      </div>
    </>
  );
}
