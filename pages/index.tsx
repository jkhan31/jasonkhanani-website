import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '../components/Logo';

const methodology = [
  {
    title: 'Diagnose',
    description: 'Find what\'s actually broken, not just what\'s visible.',
  },
  {
    title: 'Define',
    description: 'Translate findings into requirements, business cases, and decision frameworks.',
  },
  {
    title: 'Design',
    description: 'Architect the solution logic before it goes to engineering or execution.',
  },
  {
    title: 'Deliver',
    description: 'Coordinate stakeholders and measure what actually changed.',
  },
];

const Hero: React.FC = () => (
  <section className="px-6 py-24 md:py-32 lg:py-48 max-w-7xl mx-auto">
    <div className="max-w-4xl">
      {/* Role Tag */}
      <p className="text-hankoRust font-bold tracking-[0.2em] text-sm uppercase mb-4">
        Business Analyst &amp; Systems Designer
      </p>

      {/* Name */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-sumiInk leading-tight mb-6 tracking-tight">
        <span className="md:hidden">Jason K<br />Hanani</span>
        <span className="hidden md:inline">Jason K Hanani</span>
      </h1>

      {/* Value Proposition */}
      <div className="max-w-2xl mb-12">
        <p className="text-lg md:text-xl text-sumiInk leading-relaxed mb-4">
          I help businesses figure out what's actually broken — and design what needs to be built to fix it. I work at the intersection of business and technology: translating messy problems into clear requirements, structured decisions, and systems that work.
        </p>
        <p className="text-base text-sumiInk/70 leading-relaxed">
          4.5 years across ZALORA Group. €1.5M+ in documented outcomes across 6 markets.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/work"
          className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
        >
          See My Work
        </Link>
        <Link
          href="/about"
          className="px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
        >
          Work With Me
        </Link>
      </div>
    </div>
  </section>
);

const Methodology: React.FC = () => (
  <section className="bg-ricePaper py-24 md:py-32 border-t border-sumiInk/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-sumiInk mb-4 leading-tight">
          How I Work
        </h2>
        <p className="text-base text-sumiInk/60 leading-relaxed">
          My approach to solving complex problems and designing solutions that actually work.
        </p>
      </div>

      <div>
        {methodology.map((stage, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[4rem_1fr] md:grid-cols-[8rem_1fr] gap-x-8 md:gap-x-16 py-10 border-t border-sumiInk/10 last:border-b"
          >
            <span className="text-4xl md:text-5xl font-sans font-bold text-hankoRust/20 leading-none pt-1 tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-sumiInk mb-2 leading-snug">
                {stage.title}
              </h3>
              <p className="text-sm md:text-base text-sumiInk/60 leading-relaxed max-w-2xl">
                {stage.description}
              </p>
            </div>
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
        Full experience and context in the resume. Outcomes and problem-solving approach in the work section.
      </p>
    </div>
    <div className="flex flex-wrap gap-4">
      <Link
        href="/work"
        className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
      >
        View Work
      </Link>
      <Link
        href="/about"
        className="px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
      >
        Get In Touch
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason K Hanani | Business Analyst & Systems Designer</title>
        <meta
          name="description"
          content="Business Analyst & Systems Designer specializing in diagnostic thinking, requirements design, and solution architecture. €1.5M+ in documented impact across e-commerce platforms."
        />
        <meta property="og:title" content="Jason K Hanani | Business Analyst & Systems Designer" />
        <meta property="og:description" content="I help businesses figure out what's broken and design what needs to be built to fix it. €1.5M+ documented impact." />
        <meta property="og:url" content="https://jasonkhanani.com/" />
        <link rel="canonical" href="https://jasonkhanani.com/" />
      </Head>

      <div className="animate-in fade-in duration-1000">
        <Hero />
        <Methodology />
        <CTASection />
      </div>
    </>
  );
}
