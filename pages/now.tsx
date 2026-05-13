import React from 'react';
import Head from 'next/head';
import { Mail } from 'lucide-react';

const NowPage = () => {
  return (
    <>
      <Head>
        <title>Now | Jason K Hanani</title>
        <meta
          name="description"
          content="What Jason is focused on right now—current projects, availability, and what's on his mind."
        />
        <meta property="og:title" content="Now - Jason K Hanani" />
        <meta property="og:url" content="https://jasonkhanani.com/now/" />
        <link rel="canonical" href="https://jasonkhanani.com/now/" />
      </Head>

      <div className="min-h-screen p-4 md:p-8 lg:p-12 animate-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-sumiInk">Now</h1>
            <p className="text-base text-sumiInk/60">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          {/* What I'm Working On */}
          <section className="mb-16 pb-12 border-b border-0.5 border-sumiInk/10">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-6">What I'm Working On</h2>
            <div className="space-y-5 text-base leading-relaxed text-sumiInk/75">
              <div>
                <h3 className="font-bold text-sumiInk mb-2">Repositioning the website</h3>
                <p>
                  Moving away from "operations manager" framing toward "diagnostic thinker and requirements designer." The work is the same, but the narrative matters—especially for freelance clients looking for scoped engagements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sumiInk mb-2">Building a writing practice</h3>
                <p>
                  Publishing process-driven content on business analysis, requirements design, and systems thinking. Goal: one substantive piece per month that demonstrates methodology and attracts the right audience.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sumiInk mb-2">Exploring new freelance models</h3>
                <p>
                  Testing shorter, scoped engagements in requirements design and business case development—something that fits between full-time commitment and one-off consulting.
                </p>
              </div>
            </div>
          </section>

          {/* What I'm Available For */}
          <section className="mb-16 pb-12 border-b border-0.5 border-sumiInk/10">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-6">Available For</h2>
            <ul className="space-y-4 text-base text-sumiInk/75">
              <li className="flex gap-3 leading-relaxed">
                <span className="text-hankoRust shrink-0 mt-0.5 font-bold">•</span>
                <span><strong>Full-time roles:</strong> Business Analysis, Product Operations, or Systems/Process Design in product-driven companies</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-hankoRust shrink-0 mt-0.5 font-bold">•</span>
                <span><strong>Freelance work:</strong> Scoped requirements design, business case development, process diagnostics, and decision framework design</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <span className="text-hankoRust shrink-0 mt-0.5 font-bold">•</span>
                <span><strong>Short-term engagements:</strong> 4-12 week projects with clear deliverables and autonomous ownership</span>
              </li>
            </ul>
          </section>

          {/* What I'm Thinking About */}
          <section className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-hankoRust mb-6">What I'm Thinking About</h2>
            <div className="space-y-5 text-base leading-relaxed text-sumiInk/75">
              <div>
                <h3 className="font-bold text-sumiInk mb-2">Requirements as a bottleneck, not a solution</h3>
                <p>
                  Why most requirements documents fail to move the needle. It's not the document format—it's that they're written without understanding the downstream cost of ambiguity.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sumiInk mb-2">How to diagnose a system</h3>
                <p>
                  What questions to ask, what data to look at, how to distinguish between visible problems and root causes. A lot of operational work is reaction. The real value is in finding the invisible leverage points.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sumiInk mb-2">Building for clarity</h3>
                <p>
                  Most processes are confusing not because they're complicated, but because they're unclear. How to design systems—product, operations, or organizational—so people know what to do without constant back-and-forth.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 border-t border-0.5 border-sumiInk/10">
            <p className="text-base text-sumiInk/75 mb-6">
              Want to talk about a project, share feedback, or just explore ideas? I'm happy to connect.
            </p>
            <a
              href="mailto:contact@jasonkhanani.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors duration-300"
            >
              <Mail size={16} /> Get In Touch
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default NowPage;
