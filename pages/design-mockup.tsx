import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const PalettePreview = ({ name, description, pageBg, cardBg, text, primary, secondary, accent, darkText }: { name: string; description: string; pageBg: string; cardBg: string; text: string; primary: string; secondary: string; accent: string; darkText: string }) => (
  <div className="mb-24 pb-16" style={{ backgroundColor: pageBg }}>
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-8 p-8 rounded-lg" style={{ backgroundColor: cardBg }}>
        <h2 className="text-3xl font-bold mb-2" style={{ color: darkText }}>{name}</h2>
        <p className="text-base max-w-2xl" style={{ color: text }}>{description}</p>
      </div>

      {/* Color Swatches */}
      <div className="grid grid-cols-5 gap-4 mb-16">
        <div className="p-4 rounded-lg" style={{ backgroundColor: cardBg }}>
          <div className="h-24 rounded-lg mb-3 border" style={{ backgroundColor: pageBg, borderColor: text }}></div>
          <p className="text-xs" style={{ color: text }}><strong>Page BG</strong><br/>{pageBg}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: cardBg }}>
          <div className="h-24 rounded-lg mb-3 border" style={{ backgroundColor: cardBg, borderColor: text }}></div>
          <p className="text-xs" style={{ color: text }}><strong>Card BG</strong><br/>{cardBg}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: cardBg }}>
          <div className="h-24 rounded-lg mb-3 border" style={{ backgroundColor: darkText, borderColor: text }}></div>
          <p className="text-xs" style={{ color: text }}><strong>Dark Text</strong><br/>{darkText}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: cardBg }}>
          <div className="h-24 rounded-lg mb-3 border" style={{ backgroundColor: primary, borderColor: text }}></div>
          <p className="text-xs" style={{ color: text }}><strong>Primary</strong><br/>{primary}</p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: cardBg }}>
          <div className="h-24 rounded-lg mb-3 border" style={{ backgroundColor: secondary, borderColor: text }}></div>
          <p className="text-xs" style={{ color: text }}><strong>Secondary</strong><br/>{secondary}</p>
        </div>
      </div>

      {/* Hero Preview */}
      <div className="mb-16 p-12 rounded-lg border-2" style={{ backgroundColor: cardBg, borderColor: primary }}>
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
          <button className="px-8 py-4 font-bold tracking-[0.15em] uppercase rounded-full transition-all" style={{ color: primary, borderColor: primary, borderWidth: '2px', backgroundColor: pageBg }}>
            Work With Me
          </button>
        </div>
      </div>

      {/* Methodology Preview */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-12" style={{ color: darkText }}>How I Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Diagnose', 'Define', 'Design', 'Deliver'].map((stage, idx) => (
            <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: cardBg, borderLeftColor: secondary, borderLeftWidth: '4px' }}>
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
            <div key={idx} className="p-6 rounded-lg border-2" style={{ backgroundColor: cardBg, borderColor: `${primary}40` }}>
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
  </div>
);

export default function DesignMockup() {
  return (
    <>
      <Head>
        <title>Design Mockup | Jason K Hanani</title>
      </Head>

      <div style={{ backgroundColor: '#F0F0F0' }}>
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="mb-16 p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#1A1A1A' }}>Palette 1: Background Color Variations</h1>
            <p className="text-lg mb-4" style={{ color: '#4A4A4A' }}>
              Diagnostic Blue + Warm Amber with different background approaches. Comparing page backgrounds and card distinction.
            </p>
            <p className="text-sm" style={{ color: '#888888' }}>
              <Link href="/" className="hover:underline" style={{ color: '#1E3A5F' }}>← Back to home</Link>
            </p>
          </div>
        </div>

        {/* OPTION 1: CURRENT (WARM OFF-WHITE) */}
        <div className="border-b-4" style={{ borderColor: '#E0E0E0' }}>
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '4px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>Option 1: Current (Warm Off-White)</h2>
              <p style={{ color: '#666666' }}>Page: #F5F0E8 | Cards: White</p>
              <p className="text-sm mt-2" style={{ color: '#888888' }}>Current version — warm, slightly tan/orangish undertone. Good for warmth, may feel dated.</p>
            </div>
          </div>
          <PalettePreview
            name="Warm Off-White Background"
            description="Warm toned background with white cards. Good contrast between page and cards."
            pageBg="#F5F0E8"
            cardBg="#FFFFFF"
            text="#5A5550"
            primary="#1E3A5F"
            secondary="#D4891A"
            accent="#2E8B8B"
            darkText="#2C2C2C"
          />
        </div>

        {/* OPTION 2: LIGHT NEUTRAL OFF-WHITE */}
        <div className="border-b-4" style={{ borderColor: '#E0E0E0' }}>
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '4px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>Option 2: Light Neutral Off-White</h2>
              <p style={{ color: '#666666' }}>Page: #F8F7F5 | Cards: White</p>
              <p className="text-sm mt-2" style={{ color: '#888888' }}>Cooler, more neutral tone. Reduces warmth while staying off-white. Cleaner feel.</p>
            </div>
          </div>
          <PalettePreview
            name="Light Neutral Off-White"
            description="Neutral off-white background with white cards. Cooler than Option 1, more minimal."
            pageBg="#F8F7F5"
            cardBg="#FFFFFF"
            text="#5A5550"
            primary="#1E3A5F"
            secondary="#D4891A"
            accent="#2E8B8B"
            darkText="#2C2C2C"
          />
        </div>

        {/* OPTION 3: VERY LIGHT GREY-WHITE */}
        <div className="border-b-4" style={{ borderColor: '#E0E0E0' }}>
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '4px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>Option 3: Very Light Grey-White</h2>
              <p style={{ color: '#666666' }}>Page: #F5F5F5 | Cards: White</p>
              <p className="text-sm mt-2" style={{ color: '#888888' }}>Almost pure light grey. Very clean, minimal. Maximum distinction between page and cards.</p>
            </div>
          </div>
          <PalettePreview
            name="Very Light Grey-White"
            description="Light grey page background with white cards. Cleanest look, strong card separation."
            pageBg="#F5F5F5"
            cardBg="#FFFFFF"
            text="#5A5550"
            primary="#1E3A5F"
            secondary="#D4891A"
            accent="#2E8B8B"
            darkText="#2C2C2C"
          />
        </div>

        {/* OPTION 4: SUBTLE CARD TINT VARIATION */}
        <div className="border-b-4" style={{ borderColor: '#E0E0E0' }}>
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#FAFAF9', borderLeftWidth: '4px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>Option 4: Subtle Distinction (Light Grey Page + Off-White Cards)</h2>
              <p style={{ color: '#666666' }}>Page: #F8F8F7 | Cards: #FEFDFB</p>
              <p className="text-sm mt-2" style={{ color: '#888888' }}>Minimal contrast between page and cards. Subtle distinction. Very sophisticated, less card pop.</p>
            </div>
          </div>
          <PalettePreview
            name="Subtle Page-Card Distinction"
            description="Very light grey page with slightly warmer white cards. Subtle but elegant distinction."
            pageBg="#F8F8F7"
            cardBg="#FEFDFB"
            text="#5A5550"
            primary="#1E3A5F"
            secondary="#D4891A"
            accent="#2E8B8B"
            darkText="#2C2C2C"
          />
        </div>

        {/* OPTION 5: STRONG DISTINCTION */}
        <div>
          <div className="max-w-7xl mx-auto px-8 py-12">
            <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF', borderLeftWidth: '4px', borderLeftColor: '#1E3A5F' }}>
              <h2 className="text-2xl font-bold" style={{ color: '#1E3A5F' }}>Option 5: Strong Card Pop (White Page + Off-White Cards)</h2>
              <p style={{ color: '#666666' }}>Page: #FFFFFF | Cards: #FAFAF8</p>
              <p className="text-sm mt-2" style={{ color: '#888888' }}>Pure white page with light off-white cards. Unusual inversion. Cards feel grounded against bright background.</p>
            </div>
          </div>
          <PalettePreview
            name="Strong Card Distinction (Inverted)"
            description="White page background with light off-white cards. Inverted approach—cards slightly darker than background."
            pageBg="#FFFFFF"
            cardBg="#FAFAF8"
            text="#5A5550"
            primary="#1E3A5F"
            secondary="#D4891A"
            accent="#2E8B8B"
            darkText="#2C2C2C"
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1E3A5F' }}>Summary</h3>
            <div className="space-y-4" style={{ color: '#4A4A4A' }}>
              <p><strong>Option 1 (Current):</strong> Warmest, most traditional. Feels slightly dated/tan.</p>
              <p><strong>Option 2:</strong> Sweet spot — off-white without warmth. Clean but soft.</p>
              <p><strong>Option 3:</strong> Cleanest, most minimal. Strong card pop. Most modern.</p>
              <p><strong>Option 4:</strong> Most sophisticated. Subtle distinction. Requires careful typography.</p>
              <p><strong>Option 5:</strong> Unusual. Strong visual separation. Cards feel grounded and important.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
