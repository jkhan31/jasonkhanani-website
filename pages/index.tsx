import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Logo } from '../components/Logo';
import { CASE_STUDIES } from '../constants';

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
  <section className="px-6 py-24 md:py-36 lg:py-48 max-w-7xl mx-auto">
    <div className="max-w-3xl">
      {/* Role Tag */}
      <p className="text-hankoRust font-bold tracking-[0.2em] text-xs uppercase mb-6">
        Business Analyst &amp; Systems Designer
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-sumiInk leading-tight mb-8 tracking-tight">
        <span className="md:hidden">Jason K<br />Hanani</span>
        <span className="hidden md:inline">Jason K Hanani</span>
      </h1>

      {/* Value Proposition */}
      <div className="max-w-2xl mb-12">
        <p className="text-lg md:text-xl text-sumiInk leading-relaxed mb-6">
          I help businesses figure out what's actually broken — and design what needs to be built to fix it. I work at the intersection of business and technology: translating messy problems into clear requirements, structured decisions, and systems that work.
        </p>
        <p className="text-base text-sumiInk/60 leading-relaxed">
          €1.5M+ in quantified impact across e-commerce operations and logistics.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 pt-4">
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
  <section className="py-24 md:py-32 border-t border-sumiInk/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20 max-w-xl">
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
            className="grid grid-cols-[4rem_1fr] md:grid-cols-[8rem_1fr] gap-x-8 md:gap-x-16 py-12 border-t border-sumiInk/10 last:border-b"
          >
            <span className="text-4xl md:text-5xl font-sans font-bold text-hankoRust/15 leading-none pt-1 tabular-nums">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-sumiInk mb-3 leading-snug">
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

const FeaturedWork: React.FC = () => {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section className="bg-ricePaper py-24 md:py-32 border-t border-sumiInk/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-sumiInk mb-4 leading-tight">
            Outcomes
          </h2>
          <p className="text-base text-sumiInk/60 leading-relaxed">
            Recent projects where diagnostic thinking and structured design delivered measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((study) => (
            <Link
              key={study.id}
              href="/work"
              className="group"
            >
              <div className="h-full flex flex-col p-6 border border-sumiInk/10 rounded-lg hover:border-hankoRust/50 hover:bg-sumiInk/5 transition-colors duration-300">
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-hankoRust mb-2">
                    Case Study
                  </p>
                  <h3 className="text-xl font-sans font-bold text-sumiInk group-hover:text-hankoRust transition-colors">
                    {study.title}
                  </h3>
                </div>
                <p className="text-sm text-sumiInk/60 leading-relaxed mb-6 flex-grow">
                  {study.diagnosis || study.details[1]?.replace(/\*\*/g, '')}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sumiInk/10">
                  <span className="text-sm font-bold text-sumiInk">
                    {study.impact}
                  </span>
                  <span className="text-hankoRust text-sm font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-sumiInk/10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => (
  <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
    <div className="max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-sans font-bold text-sumiInk mb-6 leading-tight">
        Let's solve something together
      </h2>
      <p className="text-lg text-sumiInk/70 leading-relaxed mb-8 max-w-xl">
        Whether you're looking to hire, explore a specific problem, or just explore ideas — I'm available for full-time roles, freelance engagements, and short-term projects.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/about#contact"
          className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
        >
          Get In Touch
        </Link>
        <Link
          href="/about"
          className="px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
        >
          Learn More
        </Link>
      </div>
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
        <FeaturedWork />
        <CTASection />
      </div>
    </>
  );
}
