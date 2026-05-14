import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PalettePreview = ({ name, description, bg, text, primary, secondary, accent, darkText }: { name: string; description: string; bg: string; text: string; primary: string; secondary: string; accent: string; darkText: string }) => (
  <div className="mb-24 pb-16 border-b" style={{ borderColor: '#E0E0E0' }}>
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-2" style={{ color: darkText }}>{name}</h2>
      <p className="text-base max-w-2xl" style={{ color: text }}>{description}</p>
    </div>

    {/* Color Swatches */}
    <div className="grid grid-cols-5 gap-4 mb-16">
      <div>
        <div className="h-32 rounded-lg mb-3 border" style={{ backgroundColor: bg, borderColor: text }}></div>
        <p className="text-xs" style={{ color: text }}><strong>Background</strong><br/>{bg}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border" style={{ backgroundColor: darkText, borderColor: text }}></div>
        <p className="text-xs" style={{ color: text }}><strong>Dark Text</strong><br/>{darkText}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border" style={{ backgroundColor: primary, borderColor: text }}></div>
        <p className="text-xs" style={{ color: text }}><strong>Primary</strong><br/>{primary}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border" style={{ backgroundColor: secondary, borderColor: text }}></div>
        <p className="text-xs" style={{ color: text }}><strong>Secondary</strong><br/>{secondary}</p>
      </div>
      <div>
        <div className="h-32 rounded-lg mb-3 border" style={{ backgroundColor: accent, borderColor: text }}></div>
        <p className="text-xs" style={{ color: text }}><strong>Accent</strong><br/>{accent}</p>
      </div>
    </div>

    {/* Hero Preview */}
    <div className="mb-16 p-12 rounded-lg border-2" style={{ backgroundColor: bg, borderColor: primary }}>
      <p className="font-bold tracking-[0.2em] text-xs uppercase mb-8" style={{ color: secondary }}>
        Business Analyst &amp; Systems Designer
      </p>
      <h1 className="text-6xl font-bold leading-tight mb-8" style={{ color: darkText }}>
        Jason K Hanani
      </h1>
      <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: darkText }}>
        I help businesses figure out what&apos;s actually broken — and design what needs to be built to fix it.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full text-white transition-all hover:shadow-lg" style={{ backgroundColor: primary }}>
          See My Work
        </button>
        <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full transition-all" style={{ color: primary, borderColor: primary, borderWidth: '2px', backgroundColor: bg }}>
          Work With Me
        </button>
      </div>
    </div>

    {/* Methodology Preview */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-12" style={{ color: darkText }}>How I Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {['Diagnose', 'Define', 'Design', 'Deliver'].map((stage, idx) => (
          <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: bg, borderLeftColor: secondary, borderLeftWidth: '4px' }}>
            <div className="text-5xl font-bold mb-4" style={{ color: primary, opacity: 0.15 }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: darkText }}>
              {stage}
            </h4>
            <p style={{ color: text, opacity: 0.85 }}>
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
      <h3 className="text-2xl font-bold mb-8" style={{ color: darkText }}>Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Revenue Preservation', 'Logistics Optimization', 'Network Reengineering'].map((study, idx) => (
          <div key={idx} className="p-6 rounded-lg border-2" style={{ backgroundColor: bg, borderColor: `${primary}40` }}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: secondary }}>
              Case Study
            </p>
            <h4 className="text-lg font-bold mb-3" style={{ color: darkText }}>
              {study}
            </h4>
            <p style={{ color: text, opacity: 0.75 }} className="text-sm mb-6">
              Diagnosed root cause, designed structured solution, delivered measurable outcomes.
            </p>
            <div className="flex items-center justify-between pt-4" style={{ borderTopColor: accent, borderTopWidth: '1px', opacity: 0.6 }}>
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

      <div className="min-h-screen p-8" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#1A1A1A' }}>Three Palettes: Structured But Human</h1>
            <p className="text-lg mb-4" style={{ color: '#4A4A4A' }}>
              Each palette balances analytical depth with genuine warmth. Built on the principle: diagnostic insight meets human care.
            </p>
            <p className="text-sm" style={{ color: '#888888' }}>
              <Link href="/" className="hover:underline" style={{ color: '#1E3A5F' }}>← Back to home</Link>
            </p>
          </div>

          {/* PALETTE 1: DIAGNOSTIC BLUE + WARM AMBER */}
          <div className="mb-20">
            <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '8px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#1E3A5F' }}>Palette 1: Diagnostic Blue + Warm Amber</h2>
              <p style={{ color: '#4A4A4A' }} className="mb-3">
                <strong className="text-lg" style={{ color: '#1E3A5F' }}>The Analyst Who Sees What Others Miss</strong>
              </p>
              <p style={{ color: '#4A4A4A' }}>
                Deep slate blue signals analytical depth and trustworthiness. Warm amber accents the diagnostic insight—the moment clarity breaks through. For someone whose core function is finding what&apos;s broken.
              </p>
            </div>

            <PalettePreview
              name="Diagnostic Blue + Warm Amber"
              description="Slate blue dominance signals depth and credibility. Amber accents signal breakthrough insight. Teal bridges analytical and human. Warm off-white background prevents clinical coldness."
              bg="#F5F0E8"
              text="#5A5550"
              primary="#1E3A5F"
              secondary="#D4891A"
              accent="#2E8B8B"
              darkText="#2C2C2C"
            />
          </div>

          {/* PALETTE 2: FOREST GREEN + BONE */}
          <div className="mb-20">
            <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '8px', borderLeftColor: '#1E4D3B' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#1E4D3B' }}>Palette 2: Forest Green + Bone</h2>
              <p style={{ color: '#4A4A4A' }} className="mb-3">
                <strong className="text-lg" style={{ color: '#1E4D3B' }}>The Quiet Systems Builder</strong>
              </p>
              <p style={{ color: '#4A4A4A' }}>
                Deep forest green signals growth, systems, and groundedness. It reads as mature and considered, not trendy. Warm bone neutrals and dusty gold keep it human and craft-oriented. Aligns with contemplative, unhurried thinking.
              </p>
            </div>

            <PalettePreview
              name="Forest Green + Bone"
              description="Green signals growth, systems, reliability—often underused in professional branding. Warm bone and cream neutrals feel human. Dusty gold accent signals craft and care. Deep espresso dark neutral gives depth without harshness."
              bg="#FAF7F0"
              text="#5A5550"
              primary="#1E4D3B"
              secondary="#B8943F"
              accent="#E8DCC8"
              darkText="#1A1208"
            />
          </div>

          {/* PALETTE 3: CHARCOAL + MUTED TERRACOTTA */}
          <div className="mb-20">
            <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '8px', borderLeftColor: '#2D3142' }}>
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#2D3142' }}>Palette 3: Charcoal + Muted Terracotta</h2>
              <p style={{ color: '#4A4A4A' }} className="mb-3">
                <strong className="text-lg" style={{ color: '#2D3142' }}>The Bridge Builder</strong>
              </p>
              <p style={{ color: '#4A4A4A' }}>
                Charcoal is sophisticated and serious without coldness. Muted terracotta signals humanity, warmth, craft, and rootedness—distinctive for professional branding. Pale steel blue bridges analytical signal without dominance. Best for freelance positioning where the person matters.
              </p>
            </div>

            <PalettePreview
              name="Charcoal + Muted Terracotta"
              description="Charcoal reads as confident without shouting. Terracotta signals the human behind the analysis—craft, care, rootedness. Pale steel blue adds intellectual rigor. Warm grey and near-black neutrals keep it sophisticated and textured."
              bg="#F0EDE8"
              text="#5A5550"
              primary="#2D3142"
              secondary="#C4684F"
              accent="#7B9EB9"
              darkText="#1A1A1F"
            />
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#FFFFFF' }}>
            <p className="text-lg mb-4" style={{ color: '#1A1A1A' }}><strong>Framework: Structured But Human</strong></p>
            <p style={{ color: '#4A4A4A' }} className="mb-6 max-w-2xl mx-auto">
              All three palettes resolve the same tension: analytical rigor + genuine care. They avoid purely corporate coldness and purely creative chaos. Each signals a different aspect of the same truth: you think deeply and you care about outcomes.
            </p>
            <div style={{ backgroundColor: '#F5F0E8', padding: '16px', borderRadius: '8px', marginTop: '24px' }}>
              <p className="text-sm" style={{ color: '#4A4A4A' }}>
                <strong style={{ color: '#1A1A1A' }}>Recommendation:</strong> Lead with Palette 1 (Diagnostic Blue) for portfolio and professional credibility. Pull green or terracotta accents into personal content (About, Now, Writing) where human dimension matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
