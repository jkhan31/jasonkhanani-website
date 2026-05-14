import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Jason K Hanani</title>
        <meta
          name="description"
          content="Business Analyst & Systems Designer. I help businesses figure out what's broken and design solutions that work. 4.5 years across ZALORA Group, Jakarta-based."
        />
        <meta property="og:title" content="About - Jason K Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/about/" />
        <link rel="canonical" href="https://jasonkhanani.com/about/" />
      </Head>

      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-3xl mx-auto">
          {/* Opening Statement */}
          <div className="mb-20">
            <p className="text-xl leading-relaxed text-sumiInk mb-6">
              I'm a business analyst and systems designer. I work at the intersection of business and technology—diagnosing what's actually broken, designing what needs to be built, and coordinating stakeholders to turn that design into something that works.
            </p>
            <p className="text-base leading-relaxed text-sumiInk/75">
              I'm not interested in outputs. I'm interested in outcomes—what actually changed, what it cost, why it matters. If a system is broken, I want to find the root cause, not patch the symptom.
            </p>
          </div>

          {/* How I Work */}
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-8">How I Work</h2>
            <div className="space-y-4 text-base leading-relaxed text-sumiInk/75">
              <p>
                I do deep diagnostic work before recommending solutions. That means asking questions—a lot of them—looking at data, and understanding the actual constraints before designing the fix. Most business problems aren't what they first appear to be.
              </p>
              <p>
                I write requirements that engineers can actually use—not 100-page documents, but clear specifications that answer the questions someone will have when they sit down to build. If it's unclear in the requirements, it'll be ambiguous in the code.
              </p>
              <p>
                I work best when the problem is clear and I have autonomy to design the solution. I don't need constant approval loops. I need context, constraints, and deadlines—then I'll deliver something that works.
              </p>
            </div>
          </div>

          {/* Background */}
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-8">Background</h2>
            <div className="space-y-4 text-base leading-relaxed text-sumiInk/75">
              <p>
                I'm a systems thinker by training—B.S. from the University of Michigan in Industrial & Operations Engineering. That education shaped how I see problems: everything is a system, every system has constraints, and understanding the constraints is how you improve the system.
              </p>
              <p>
                I've spent the last several years working in e-commerce operations and logistics, across multi-market platforms in Southeast Asia. I've owned work spanning marketplace architecture, fulfillment systems, pricing logic, and seller operations. Over that time, I've designed and implemented solutions that delivered €1.5M+ in quantified impact.
              </p>
              <p>
                I've also worked on the product operations side, designing routing logic and network optimization for logistics networks, and in earlier-stage environments where you have to wear every hat—startup work in multiple contexts, operational roles in different industries.
              </p>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-8">What I'm Looking For</h2>
            <p className="text-base leading-relaxed text-sumiInk/75 mb-6">
              I'm currently open to two paths:
            </p>
            <ul className="space-y-3 list-none text-base text-sumiInk/75 mb-8">
              <li className="flex gap-3 leading-relaxed">
                <span className="text-hankoRust shrink-0 mt-0.5 font-bold">•</span>
                <span><strong>Full-time roles</strong> in Business Analysis, Product Operations, or Systems design—roles where I own diagnostic work, design solutions, and can measure outcomes.</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-hankoRust shrink-0 mt-0.5 font-bold">•</span>
                <span><strong>Freelance engagements</strong> in scoped requirements design, business case development, or process diagnostics—I can work with your team on specific problems and hand off clear deliverables.</span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-sumiInk/75">
              I'm remote-first and Jakarta-based. I work best on deep projects with clear ownership, not reactive fire-fighting or constant status meetings.
            </p>
          </div>

          {/* Personal */}
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-8">A Human Note</h2>
            <p className="text-base leading-relaxed text-sumiInk/75">
              I've been based in Jakarta for the last five years. I'm fascinated by systems and how people actually use them—why they break, how to fix them, what makes some processes elegant and others chaotic. Outside of work, I read a lot, spend time on the water, and work on small projects that let me think deeply about problems.
            </p>
          </div>

          {/* CTA Section */}
          <section className="py-12" id="contact">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="mailto:contact@jasonkhanani.com"
                className="flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
              >
                <Mail size={16} /> Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/jasonkhanani/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-sumiInk/30 text-sumiInk text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk hover:text-ricePaper hover:border-sumiInk transition-colors duration-300"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
