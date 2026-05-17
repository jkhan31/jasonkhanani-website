import React from 'react';
import Head from 'next/head';
import Badge from '../components/Badge';
import Callout from '../components/Callout';
import SectionLabel from '../components/SectionLabel';
import NoteCard from '../components/NoteCard';
import ProgressBar from '../components/ProgressBar';

export default function ComponentsShowcase() {
  return (
    <>
      <Head>
        <title>Design Components Showcase | Jason K Hanani</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-sans font-bold text-darkText mb-4">Design Components Showcase</h1>
        <p className="text-bodyText mb-16">Visual reference for the design system components built for jasonkhanani.com</p>

        {/* Badges Section */}
        <section className="mb-20">
          <SectionLabel label="Badge Component" color="amber" />
          <div className="flex flex-wrap gap-4">
            <Badge type="fit" label="Fit Score: 8.5 / 10" animated={true} />
            <Badge type="deadline" label="Deadline: End of June" />
            <Badge type="remote" label="Fully Remote · EOR" />
            <Badge type="tag" label="Python" />
            <Badge type="tag" label="SQL" />
            <Badge type="tag" label="Tableau" count="3" />
          </div>
          <p className="text-bodyText text-sm mt-6">
            Badges support 4 color types (fit, deadline, remote, tag) with optional animations and counts.
          </p>
        </section>

        {/* Callout Section */}
        <section className="mb-20">
          <SectionLabel label="Callout Component" color="blue" />

          <div className="mb-8">
            <h3 className="text-lg font-bold text-darkText mb-3">Blue Callout (Info)</h3>
            <Callout type="blue" label="Positioning Note">
              Your brand has repositioned to <strong>"Business Analyst & Systems Designer"</strong> — right for freelance work and analyst roles. For Product Operations roles, lead with seniority and cross-functional coordination experience.
            </Callout>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-darkText mb-3">Amber Callout (Warning/Reminder)</h3>
            <Callout type="amber" label="Grounding Reminder">
              You have a website with six quantified case studies, a brand positioning document, and two resume versions. <strong>This is not someone who isn't ready.</strong> The evidence is at jasonkhanani.com.
            </Callout>
          </div>

          <p className="text-bodyText text-sm">
            Callouts use a 2.5px left border with brand colors. Support monospace labels and optional icons.
          </p>
        </section>

        {/* Section Labels */}
        <section className="mb-20">
          <SectionLabel label="Section Labels" color="green" />

          <div className="space-y-8">
            <div>
              <SectionLabel label="Default Label" color="default" />
              <p className="text-bodyText">Default color (muted grey for secondary info)</p>
            </div>
            <div>
              <SectionLabel label="Blue Label" color="blue" />
              <p className="text-bodyText">Blue for serious/primary content</p>
            </div>
            <div>
              <SectionLabel label="Amber Label" color="amber" />
              <p className="text-bodyText">Amber for emphasis/actions</p>
            </div>
            <div>
              <SectionLabel label="Green Label" color="green" />
              <p className="text-bodyText">Green for validated/positive states</p>
            </div>
          </div>
        </section>

        {/* Note Cards */}
        <section className="mb-20">
          <SectionLabel label="Note Card Component" />

          <div className="grid md:grid-cols-2 gap-6">
            <NoteCard label="Key Insight">
              The root cause was invisible in aggregate metrics. Breaking costs down by SKU and lane level revealed where the policy was most misaligned.
            </NoteCard>
            <NoteCard label="Action Item">
              Update resume summary to <strong>Product Operations</strong> framing with diagnostic methodology language retained throughout.
            </NoteCard>
            <NoteCard label="Learning">
              Automation works best when it replaces a clear constraint rather than trying to improve an already-good process.
            </NoteCard>
            <NoteCard label="Design Pattern">
              Use monospace labels on everything. Generous padding (1.2rem+) for breathing room. High contrast text for readability.
            </NoteCard>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="mb-20">
          <SectionLabel label="Progress Bar Component" />

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Application Checklist Progress</h3>
              <ProgressBar current={5} total={7} label="Progress" color="blue" />
              <ul className="text-sm text-bodyText space-y-2 mt-4">
                <li>✓ Resume summary updated</li>
                <li>✓ Website added to header</li>
                <li>✓ PMO bullets refined</li>
                <li>✓ Cover note finalized</li>
                <li>✓ PDF saved and ready</li>
                <li>⏳ Application submitted</li>
                <li>⏳ LinkedIn signal (optional)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Website Completion</h3>
              <ProgressBar current={8} total={10} label="Tasks Complete" color="amber" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-darkText mb-4">Design System Coverage</h3>
              <ProgressBar current={5} total={5} label="Components Built" color="green" />
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-20">
          <SectionLabel label="Design Principles" />

          <div className="space-y-4 text-bodyText">
            <p><strong>Color Psychology:</strong> Amber = action/emphasis, Blue = serious/primary, Green = validated/positive</p>
            <p><strong>Typography:</strong> Serif headings only (Source Serif 4), sans-serif body (Inter 300/400), monospace labels (DM Mono)</p>
            <p><strong>Micro-Details:</strong> 0.5px borders, generous padding (1.2rem+), monospace labels everywhere, strategic opacity</p>
            <p><strong>Precision:</strong> 2.5px left-border callouts, rounded-sm corners, consistent tracking-widest on labels</p>
            <p><strong>Breathing Room:</strong> Spacing between sections (py-24, py-32), clear visual hierarchy</p>
          </div>
        </section>

        <div className="border-t border-darkText/10 pt-12">
          <p className="text-bodyText text-sm">
            These components are ready to be integrated across all pages. They follow the design reference aesthetic from the RemoFirst application brief and maintain consistency with the jasonkhanani.com brand identity.
          </p>
        </div>
      </div>
    </>
  );
}
