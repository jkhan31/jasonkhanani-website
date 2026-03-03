import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '../components/Logo';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
      <Logo size="xl" />
    </div>
    <div className="max-w-4xl relative z-10">
      {/* Professional Title Tag */}
      <p className="text-hankoRust font-bold tracking-[0.3em] text-[20px] uppercase mb-2 flex items-center">
        Operations &amp; Product Analytics
      </p>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-sumiInk leading-tight mt-2 mb-6 tracking-tight">
        Jason K Hanani
      </h2>

      {/* The Body Copy */}
      <p className="text-xl md:text-2xl text-sumiInk/70 max-w-2xl font-serif leading-relaxed mb-16 mt-2">
        I improve how multi-market platforms operate — through structured diagnostics, system-level redesign, and cross-functional execution.
      </p>

      <div className="flex flex-wrap gap-8">
        <Link
          href="/resume"
          className="px-10 py-5 rounded-lg bg-hankoRust text-ricePaper text-[14px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          View Resume
        </Link>
        <Link
          href="/case-studies"
          className="px-10 py-5 rounded-lg border-0.5 border-hankoRust text-hankoRust text-[14px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  </section>
);

const SystemicResilience: React.FC = () => (
  <section className="bg-sumiInk text-ricePaper py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-hankoRust/5 skew-x-12 transform origin-top-right pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="text-5xl font-serif mb-8 leading-tight">
          <span className="italic text-foxOrange">Reality</span> over <br />
          <span className="text-ricePaper/50">Theory.</span>
        </h2>
        <p className="text-lg text-ricePaper leading-relaxed mb-8 max-w-md">
          Measurable results delivered across platform operations.
        </p>
        
        <div className="bg-hankoRust/20 border border-hankoRust/30 p-6 inline-block backdrop-blur-sm">
          <span className="block text-4xl font-serif font-bold text-foxOrange mb-1">€1.5M+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-ricePaper">Quantified Impact Delivered</span>
        </div>
      </div>

      <div className="space-y-12 border-l border-ricePaper/10 pl-12">
        <div>
          <h3 className="text-2xl font-serif text-foxOrange mb-3">Unit Economics Correction</h3>
          <p className="text-base text-ricePaper leading-relaxed">
            Realigned shipping fee logic with cost structure.<br />
            €520K annual cost savings
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-foxOrange mb-3">Retention Mechanism Launch</h3>
          <p className="text-base text-ricePaper leading-relaxed">
            Transformed return flow into retained revenue.<br />
            €695K revenue preserved
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-foxOrange mb-3">Routing Logic Automation</h3>
          <p className="text-base text-ricePaper leading-relaxed">
            Eliminated manual configuration bottlenecks at scale.<br />
            60% reduction in route activation lead time
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-foxOrange mb-3">AI Support Automation Rollout</h3>
          <p className="text-base text-ricePaper leading-relaxed">
            Expanded 24/7 self-service coverage without additional headcount.<br />
            68% ticket deflection
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ExploreFurther: React.FC = () => (
  <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto bg-ricePaper">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-serif text-sumiInk mb-6">Explore Further</h2>
      <p className="text-lg text-sumiInk/70 leading-relaxed mb-12">
        Explore detailed case breakdowns or review full professional experience.
      </p>
      <div className="flex flex-wrap gap-8">
        <Link
          href="/resume"
          className="px-10 py-5 rounded-lg bg-hankoRust text-ricePaper text-[14px] font-bold tracking-[0.3em] uppercase hover:bg-foxOrange transition-all duration-500 shadow-xl active:scale-95"
        >
          View Resume
        </Link>
        <Link
          href="/case-studies"
          className="px-10 py-5 rounded-lg border-0.5 border-hankoRust text-hankoRust text-[14px] font-bold tracking-[0.3em] uppercase hover:text-foxOrange hover:border-foxOrange transition-all duration-300"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason K Hanani | Industrial Engineer & Systems Architect</title>
        <meta 
          name="description" 
          content="Industrial Engineer & Systems Architect. Reverse-engineering bottlenecks with deep diagnostics and first-principles thinking. €1.5M+ quantified impact." 
        />
        <meta property="og:title" content="Jason K Hanani - Systems Architect" />
        <meta property="og:description" content="Turning messy operations into clear systems." />
        <meta property="og:url" content="https://jasonkhanani.com/" />
        <link rel="canonical" href="https://jasonkhanani.com/" />
      </Head>
      
      <div className="animate-in fade-in duration-1000">
        <Hero />
        <SystemicResilience />
        <ExploreFurther />
      </div>
    </>
  );
}
