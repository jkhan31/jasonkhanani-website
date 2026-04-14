import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '../components/Logo';

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto relative overflow-hidden">
    <div className="max-w-4xl relative z-10">
      {/* Role Tag */}
      <p className="text-hankoRust font-bold tracking-[0.2em] text-sm uppercase mb-4">
        Operations &amp; Product Systems
      </p>

      {/* Name Heading - Geometric Sans */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-sumiInk leading-tight mb-6 tracking-tight">
        <span className="md:hidden">Jason K<br />Hanani</span>
        <span className="hidden md:inline">Jason K Hanani</span>
      </h1>

      {/* Value Proposition */}
      <p className="text-lg md:text-xl text-sumiInk max-w-2xl leading-relaxed mb-16">
        I design and build operating systems for multi-market platforms — turning complex logistics, marketplace, and product problems into structured execution with measurable outcomes.
      </p>

      {/* Key Metric - Make Evidence Dominant */}
      <div className="mb-12 p-8 bg-hankoRust text-ricePaper inline-block rounded-2xl">
        <span className="block text-6xl md:text-7xl font-sans font-bold mb-2">€1.5M+</span>
        <span className="text-sm uppercase tracking-widest font-bold opacity-80">Quantified Impact Delivered</span>
      </div>

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

const SystemicResilience: React.FC = () => (
  <section className="bg-ricePaper py-32 border-t border-sumiInk/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-sans font-bold text-sumiInk mb-4 leading-tight">
          Reality over Theory
        </h2>
        <p className="text-lg text-sumiInk/70 max-w-2xl leading-relaxed">
          Measurable results delivered across platform operations. Each project is quantified impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Case Study 1 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-sumiInk/8 hover:shadow-md transition-shadow duration-300">
          <span className="block text-4xl font-sans font-bold text-hankoRust mb-2">€520K</span>
          <h3 className="text-lg font-sans font-bold text-sumiInk mb-3">Unit Economics Correction</h3>
          <p className="text-sm text-sumiInk/60 leading-relaxed">
            Diagnosed SKU-level cost misalignment and rebuilt the fee model. €520K recovered annually.
          </p>
        </div>

        {/* Case Study 2 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-sumiInk/8 hover:shadow-md transition-shadow duration-300">
          <span className="block text-4xl font-sans font-bold text-hankoRust mb-2">€695K</span>
          <h3 className="text-lg font-sans font-bold text-sumiInk mb-3">Retention Mechanism Launch</h3>
          <p className="text-sm text-sumiInk/60 leading-relaxed">
            Turned the return flow into a retention mechanism. €695K in revenue preserved.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-sumiInk/8 hover:shadow-md transition-shadow duration-300">
          <span className="block text-4xl font-sans font-bold text-hankoRust mb-2">60%</span>
          <h3 className="text-lg font-sans font-bold text-sumiInk mb-3">Routing Logic Automation</h3>
          <p className="text-sm text-sumiInk/60 leading-relaxed">
            Designed the routing logic that took activation from 5 days to 2.
          </p>
        </div>

        {/* Case Study 4 */}
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-sumiInk/8 hover:shadow-md transition-shadow duration-300">
          <span className="block text-4xl font-sans font-bold text-hankoRust mb-2">68%</span>
          <h3 className="text-lg font-sans font-bold text-sumiInk mb-3">AI Support Automation</h3>
          <p className="text-sm text-sumiInk/60 leading-relaxed">
            Deployed AI chatbot into seller support. 68% ticket deflection, 24/7 coverage, zero new headcount.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ExploreFurther: React.FC = () => (
  <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto bg-ricePaper border-t border-sumiInk/10">
    <div className="max-w-2xl">
      <h2 className="text-5xl font-sans font-bold text-sumiInk mb-4">Ready to dive deeper?</h2>
      <p className="text-lg text-sumiInk/70 leading-relaxed mb-12">
        Explore detailed case studies or review the complete professional experience.
      </p>
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
        <SystemicResilience />
        <ExploreFurther />
      </div>
    </>
  );
}