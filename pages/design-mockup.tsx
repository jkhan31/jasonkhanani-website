import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PalettePreview = ({ name, bg, text, accent1, accent2, accent3 }: { name: string; bg: string; text: string; accent1: string; accent2: string; accent3: string }) => (
  <div className="mb-20 pb-12 border-b border-gray-200">
    <h2 className="text-3xl font-bold mb-6 text-gray-900">{name}</h2>

    {/* Color Swatches */}
    <div className="grid grid-cols-5 gap-4 mb-12">
      <div>
        <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: bg }}></div>
        <p className="text-xs text-gray-600">Background<br/>{bg}</p>
      </div>
      <div>
        <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: text }}></div>
        <p className="text-xs text-gray-600">Text<br/>{text}</p>
      </div>
      <div>
        <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: accent1 }}></div>
        <p className="text-xs text-gray-600">Accent 1<br/>{accent1}</p>
      </div>
      <div>
        <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: accent2 }}></div>
        <p className="text-xs text-gray-600">Accent 2<br/>{accent2}</p>
      </div>
      <div>
        <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: accent3 }}></div>
        <p className="text-xs text-gray-600">Accent 3<br/>{accent3}</p>
      </div>
    </div>

    {/* Hero Preview */}
    <div className="mb-12 p-8 rounded-lg" style={{ backgroundColor: bg }}>
      <p className="font-bold tracking-[0.2em] text-xs uppercase mb-6" style={{ color: accent1 }}>
        Business Analyst &amp; Systems Designer
      </p>
      <h1 className="text-5xl font-bold leading-tight mb-8" style={{ color: text }}>
        Jason K Hanani
      </h1>
      <p className="text-lg leading-relaxed mb-6 max-w-2xl" style={{ color: text }}>
        I help businesses figure out what's actually broken — and design what needs to be built to fix it.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full text-white transition-colors" style={{ backgroundColor: accent1 }}>
          See My Work
        </button>
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full" style={{ color: text, borderColor: text, borderWidth: '1px' }}>
          Work With Me
        </button>
      </div>
    </div>

    {/* Methodology Preview */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-8" style={{ color: text }}>How I Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Diagnose', 'Define', 'Design', 'Deliver'].map((stage, idx) => (
          <div key={idx} style={{ backgroundColor: `${bg}`, borderTopColor: accent2, borderTopWidth: '1px', paddingTop: '1rem' }}>
            <div className="text-4xl font-bold mb-3" style={{ color: accent1, opacity: 0.15 }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: text }}>
              {stage}
            </h4>
            <p style={{ color: text, opacity: 0.7 }}>
              {stage === 'Diagnose' && "Find what's actually broken, not just what's visible."}
              {stage === 'Define' && "Translate findings into requirements and decision frameworks."}
              {stage === 'Design' && "Architect the solution logic before it goes to engineering."}
              {stage === 'Deliver' && "Coordinate stakeholders and measure what actually changed."}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Featured Work Card Preview */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-8" style={{ color: text }}>Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Revenue Preservation', 'Logistics Optimization', 'Network Reengineering'].map((study, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg border"
            style={{ backgroundColor: bg, borderColor: `${accent1}40` }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: accent1 }}>
              Case Study
            </p>
            <h4 className="text-xl font-bold mb-4" style={{ color: text }}>
              {study}
            </h4>
            <p style={{ color: text, opacity: 0.7 }} className="text-sm mb-6">
              Diagnosed root cause, designed structured solution, delivered measurable outcomes.
            </p>
            <div className="flex items-center justify-between pt-4" style={{ borderTopColor: `${accent2}30`, borderTopWidth: '1px' }}>
              <span className="text-sm font-bold" style={{ color: text }}>
                €{695 + idx * 100}K Impact
              </span>
              <span style={{ color: accent1 }} className="text-sm font-bold">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function DesignMockup() {
  return (
    <>
      <Head>
        <title>Design Mockup | Jason K Hanani</title>
      </Head>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Color Palette Mockups</h1>
            <p className="text-lg text-gray-600">See how each palette looks applied across the site</p>
            <p className="text-sm text-gray-500 mt-4">
              <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
            </p>
          </div>

          {/* Option 1: Deep Warm Earth */}
          <PalettePreview
            name="Option 1: Deep Warm Earth (Recommended)"
            bg="#F5F1EC"
            text="#2B2520"
            accent1="#6B4423"
            accent2="#4A6B5F"
            accent3="#2C3E50"
          />

          {/* Option 2: Warm Rich Earth */}
          <PalettePreview
            name="Option 2: Warm Rich Earth"
            bg="#FAF8F3"
            text="#3E3835"
            accent1="#8B5A2B"
            accent2="#556B5A"
            accent3="#3D5A6C"
          />

          {/* Option 3: Earthy Modern */}
          <PalettePreview
            name="Option 3: Earthy Modern"
            bg="#F9F6F1"
            text="#1F1B17"
            accent1="#7A5D4A"
            accent2="#5B7A6B"
            accent3="#34495E"
          />

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Which palette do you prefer?</p>
            <p className="text-sm text-gray-500">
              Visit <code className="bg-gray-200 px-2 py-1 rounded">/design-mockup</code> and share your choice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
