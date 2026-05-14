import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PalettePreview = ({ name, description, bg, text, primary, secondary, neutral }: { name: string; description: string; bg: string; text: string; primary: string; secondary: string; neutral: string }) => (
  <div className="mb-24 pb-16 border-b border-gray-300">
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">{name}</h2>
      <p className="text-base text-gray-700 max-w-2xl">{description}</p>
    </div>

    {/* Color Swatches */}
    <div className="grid grid-cols-5 gap-4 mb-16">
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: bg }}></div>
        <p className="text-xs text-gray-600"><strong>Background</strong><br/>{bg}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: text }}></div>
        <p className="text-xs text-gray-600"><strong>Text</strong><br/>{text}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: primary }}></div>
        <p className="text-xs text-gray-600"><strong>Primary</strong><br/>{primary}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: secondary }}></div>
        <p className="text-xs text-gray-600"><strong>Secondary</strong><br/>{secondary}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: neutral }}></div>
        <p className="text-xs text-gray-600"><strong>Neutral Accent</strong><br/>{neutral}</p>
      </div>
    </div>

    {/* Hero Preview */}
    <div className="mb-16 p-12 rounded-lg border-2" style={{ backgroundColor: bg, borderColor: primary }}>
      <p className="font-bold tracking-[0.2em] text-xs uppercase mb-8" style={{ color: primary }}>
        Business Analyst &amp; Systems Designer
      </p>
      <h1 className="text-6xl font-bold leading-tight mb-8" style={{ color: text }}>
        Jason K Hanani
      </h1>
      <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: text }}>
        I help businesses figure out what's actually broken — and design what needs to be built to fix it.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full text-white transition-all hover:shadow-lg" style={{ backgroundColor: primary }}>
          See My Work
        </button>
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full transition-all" style={{ color: primary, borderColor: primary, borderWidth: '2px', backgroundColor: neutral }}>
          Work With Me
        </button>
      </div>
    </div>

    {/* Methodology Preview */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-12" style={{ color: text }}>How I Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Diagnose', 'Define', 'Design', 'Deliver'].map((stage, idx) => (
          <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: `${primary}08`, borderLeftColor: secondary, borderLeftWidth: '4px' }}>
            <div className="text-5xl font-bold mb-4" style={{ color: primary, opacity: 0.2 }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: text }}>
              {stage}
            </h4>
            <p style={{ color: text, opacity: 0.75 }}>
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
    <div>
      <h3 className="text-2xl font-bold mb-8" style={{ color: text }}>Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Revenue Preservation', 'Logistics Optimization', 'Network Reengineering'].map((study, idx) => (
          <div key={idx} className="p-6 rounded-lg border-2" style={{ backgroundColor: bg, borderColor: `${primary}30` }}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: primary }}>
              Case Study
            </p>
            <h4 className="text-lg font-bold mb-3" style={{ color: text }}>
              {study}
            </h4>
            <p style={{ color: text, opacity: 0.7 }} className="text-sm mb-6">
              Diagnosed root cause, designed structured solution, delivered measurable outcomes.
            </p>
            <div className="flex items-center justify-between pt-4" style={{ borderTopColor: secondary, borderTopWidth: '1px', opacity: 0.5 }}>
              <span className="text-sm font-bold" style={{ color: text }}>
                €{695 + idx * 100}K Impact
              </span>
              <span style={{ color: secondary }} className="text-sm font-bold">
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

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 bg-white p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Color Theory-Based Palettes</h1>
            <p className="text-lg text-gray-700 mb-4">
              Six palettes using color theory: two dominant colors (emerald & sapphire) × three moods (luxurious, corporate, sophisticated)
            </p>
            <p className="text-sm text-gray-500">
              <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
            </p>
          </div>

          {/* EMERALD DOMINANT SECTION */}
          <div className="mb-20">
            <div className="bg-white p-8 rounded-lg mb-12 border-l-8" style={{ borderColor: '#1B7E5E' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Emerald Dominant</h2>
              <p className="text-gray-700">Emerald as primary color (60%) with sapphire secondary (30%) and neutral accents (10%)</p>
            </div>

            {/* Emerald Luxurious */}
            <PalettePreview
              name="Emerald Dominant — Luxurious & Premium"
              description="High saturation, warm neutrals. Creates a rich, sophisticated luxury feel. Best for: premium positioning, upscale brand perception."
              bg="#FFFBF7"
              text="#0F2F1F"
              primary="#1B7E5E"
              secondary="#0F3A7D"
              neutral="#E8DCC8"
            />

            {/* Emerald Corporate */}
            <PalettePreview
              name="Emerald Dominant — Corporate & Trustworthy"
              description="Slightly muted saturation, cool neutrals. Creates professional trust. Best for: b2b, corporate audience, institutional confidence."
              bg="#F8FAFB"
              text="#1A2B28"
              primary="#287660"
              secondary="#1B4A7A"
              neutral="#E5E7EB"
            />

            {/* Emerald Sophisticated */}
            <PalettePreview
              name="Emerald Dominant — Sophisticated & Balanced"
              description="Medium saturation, warm-neutral background. Creates elegant balance. Best for: premium but approachable, confidence without coldness."
              bg="#FAF9F7"
              text="#1F3A34"
              primary="#2B6B5F"
              secondary="#1E4A80"
              neutral="#D4CEC1"
            />
          </div>

          {/* SAPPHIRE DOMINANT SECTION */}
          <div className="mb-20">
            <div className="bg-white p-8 rounded-lg mb-12 border-l-8" style={{ borderColor: '#0F3A85' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sapphire Dominant</h2>
              <p className="text-gray-700">Sapphire as primary color (60%) with emerald secondary (30%) and neutral accents (10%)</p>
            </div>

            {/* Sapphire Luxurious */}
            <PalettePreview
              name="Sapphire Dominant — Luxurious & Premium"
              description="High saturation sapphire, warm neutrals. Creates depth and elegance. Best for: luxury positioning, premium tech, high-end services."
              bg="#FFFBF5"
              text="#0D1B2D"
              primary="#0F3A85"
              secondary="#1B7E5E"
              neutral="#E8DCC8"
            />

            {/* Sapphire Corporate */}
            <PalettePreview
              name="Sapphire Dominant — Corporate & Trustworthy"
              description="Muted sapphire, cool neutrals. Maximum trust and professionalism. Best for: finance, enterprise, institutional authority."
              bg="#F8FAFB"
              text="#1A2B3E"
              primary="#1E4A7A"
              secondary="#2D6B5E"
              neutral="#E5E7EB"
            />

            {/* Sapphire Sophisticated */}
            <PalettePreview
              name="Sapphire Dominant — Sophisticated & Balanced"
              description="Rich sapphire, warm-neutral background. Creates intelligent calm. Best for: consultancy, systems thinking, strategic positioning."
              bg="#FAF8F7"
              text="#1A2D42"
              primary="#1B5A8C"
              secondary="#2B6B5F"
              neutral="#D4CEC1"
            />
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-4 text-lg"><strong>Which palette resonates?</strong></p>
            <p className="text-gray-600">Consider: Which dominant color feels more "you"? Which mood best represents your positioning?</p>
          </div>
        </div>
      </div>
    </>
  );
}
