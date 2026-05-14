import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PalettePreview = ({ name, description, bg, text, primary, accent, neutral }: { name: string; description: string; bg: string; text: string; primary: string; accent: string; neutral: string }) => (
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
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: accent }}></div>
        <p className="text-xs text-gray-600"><strong>Accent</strong><br/>{accent}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border border-gray-300" style={{ backgroundColor: neutral }}></div>
        <p className="text-xs text-gray-600"><strong>Neutral</strong><br/>{neutral}</p>
      </div>
    </div>

    {/* Hero Preview */}
    <div className="mb-16 p-12 rounded-lg border-2" style={{ backgroundColor: bg, borderColor: primary }}>
      <p className="font-bold tracking-[0.2em] text-xs uppercase mb-8" style={{ color: accent }}>
        Business Analyst &amp; Systems Designer
      </p>
      <h1 className="text-6xl font-bold leading-tight mb-8" style={{ color: text }}>
        Jason K Hanani
      </h1>
      <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: text }}>
        I help businesses figure out what&apos;s actually broken — and design what needs to be built to fix it.
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
          <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: `${primary}08`, borderLeftColor: accent, borderLeftWidth: '4px' }}>
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
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: accent }}>
              Case Study
            </p>
            <h4 className="text-lg font-bold mb-3" style={{ color: text }}>
              {study}
            </h4>
            <p style={{ color: text, opacity: 0.7 }} className="text-sm mb-6">
              Diagnosed root cause, designed structured solution, delivered measurable outcomes.
            </p>
            <div className="flex items-center justify-between pt-4" style={{ borderTopColor: accent, borderTopWidth: '1px', opacity: 0.5 }}>
              <span className="text-sm font-bold" style={{ color: text }}>
                €{695 + idx * 100}K Impact
              </span>
              <span style={{ color: accent }} className="text-sm font-bold">
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
              Four distinct palettes exploring deep purple and burnt orange/rust dominant colors with saturated accent tones
            </p>
            <p className="text-sm text-gray-500">
              <Link href="/" className="text-blue-600 hover:underline">← Back to home</Link>
            </p>
          </div>

          {/* PURPLE DOMINANT SECTION */}
          <div className="mb-20">
            <div className="bg-white p-8 rounded-lg mb-12 border-l-8" style={{ borderColor: '#5D3A7A' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Deep Purple Dominant + Burnt Orange Accent</h2>
              <p className="text-gray-700">Rich eggplant purple as primary with saturated burnt orange accents. Creates sophisticated creativity and distinctive personality.</p>
            </div>

            {/* Purple Luxurious */}
            <PalettePreview
              name="Purple — Luxurious & Creative"
              description="Rich eggplant on warm cream with saturated burnt orange. Creates a premium, distinctive, creative feel. Best for: Standing out, premium creative positioning, bold sophistication."
              bg="#FFFBF7"
              text="#2B1B3D"
              primary="#5D3A7A"
              accent="#C45D3E"
              neutral="#E8DCC8"
            />

            {/* Purple Corporate */}
            <PalettePreview
              name="Purple — Professional & Distinctive"
              description="Muted purple on cool-neutral with burnt orange accent. Creates professional confidence while remaining distinctive. Best for: Standing out in corporate spaces, premium consulting, differentiated brand."
              bg="#F8FAFB"
              text="#3A2547"
              primary="#4A5A6F"
              accent="#C45D3E"
              neutral="#E5E7EB"
            />

            {/* Purple Sophisticated */}
            <PalettePreview
              name="Purple — Sophisticated & Bold"
              description="Medium eggplant on warm-neutral with deeper rust accent. Creates elegant boldness. Best for: Premium positioning that doesn&apos;t follow conventional corporate colors, creative problem-solving."
              bg="#FAF9F7"
              text="#362840"
              primary="#6B3F8F"
              accent="#8B4513"
              neutral="#D4CEC1"
            />
          </div>

          {/* ORANGE/RUST DOMINANT SECTION */}
          <div className="mb-20">
            <div className="bg-white p-8 rounded-lg mb-12 border-l-8" style={{ borderColor: '#C45D3E' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Burnt Orange/Rust Dominant + Cool Accents</h2>
              <p className="text-gray-700">Saturated burnt orange and rust tones as primary with cool teal or navy accents. Creates warmth, energy, and grounded confidence.</p>
            </div>

            {/* Orange Luxurious */}
            <PalettePreview
              name="Orange — Luxurious & Energetic"
              description="Saturated burnt orange on warm cream with deep teal accent. Creates premium warmth and energy. Best for: Creative consulting, dynamic brand, premium but approachable luxury."
              bg="#FFFBF5"
              text="#3D2117"
              primary="#C45D3E"
              accent="#2A7F8F"
              neutral="#E8DCC8"
            />

            {/* Orange Corporate */}
            <PalettePreview
              name="Orange — Professional & Grounded"
              description="Muted rust on cool-neutral with teal accent. Creates earthy professionalism. Best for: Consulting that feels grounded and thoughtful, established expertise, warm authority."
              bg="#F8FAFB"
              text="#4A3428"
              primary="#A0522D"
              accent="#2A7F8F"
              neutral="#E5E7EB"
            />

            {/* Orange Sophisticated */}
            <PalettePreview
              name="Orange — Sophisticated & Grounded"
              description="Rich rust on warm-neutral with deep navy accent. Creates confident earthiness. Best for: Premium positioning with grounded expertise, strategic warmth, sophisticated systems thinking."
              bg="#FAF8F7"
              text="#4A2F20"
              primary="#8B4513"
              accent="#1A3A52"
              neutral="#D4CEC1"
            />
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-4 text-lg"><strong>Which direction resonates?</strong></p>
            <p className="text-gray-600">Purple feels creative and distinctively bold. Orange/rust feels warm, grounded, and energetic. Which better represents your brand of problem-solving?</p>
          </div>
        </div>
      </div>
    </>
  );
}
