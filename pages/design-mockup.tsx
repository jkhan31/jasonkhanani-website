import React from 'react';
import { ArrowRight, TrendingUp, MessageSquare } from 'lucide-react';

const DesignMockup = () => {
  return (
    <div className="min-h-screen bg-ricePaper pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-sumiInk mb-4">
            Design Mockup: Before &amp; After
          </h1>
          <p className="text-lg text-sumiInk/60 max-w-2xl">
            Visual comparison of the redesign proposal. The left side shows the current design, the right side shows the new direction.
          </p>
        </div>

        {/* Section 1: Hero */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-sumiInk mb-12 pb-6 border-b border-sumiInk/10">
            1. Hero Section
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* BEFORE */}
            <div className="border border-sumiInk/10 rounded-xl overflow-hidden">
              <div className="bg-ricePaper px-6 py-24 md:py-32">
                <p className="text-hankoRust font-bold tracking-[0.2em] text-sm uppercase mb-6">
                  Business Analyst &amp; Systems Designer
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-sumiInk leading-tight mb-8 tracking-tight">
                  Jason K<br />Hanani
                </h1>
                <div className="max-w-2xl mb-12">
                  <p className="text-lg md:text-xl text-sumiInk leading-relaxed mb-6">
                    I help businesses figure out what's actually broken — and design what needs to be built to fix it.
                  </p>
                  <p className="text-base text-sumiInk/60 leading-relaxed">
                    €1.5M+ in quantified impact across e-commerce operations and logistics.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-sumiInk transition-colors">
                    See My Work
                  </button>
                </div>
              </div>
              <div className="bg-sumiInk/5 px-6 py-4">
                <p className="text-xs text-sumiInk/60 font-mono">CURRENT STATE</p>
              </div>
            </div>

            {/* AFTER */}
            <div className="border-2 border-hankoRust rounded-xl overflow-hidden">
              <div className="bg-gradient-to-b from-ricePaper to-warmSand px-6 py-20 md:py-28">
                <p className="text-hankoRust font-bold tracking-[0.3em] text-xs uppercase mb-8">
                  Business Analyst &amp; Systems Designer
                </p>
                <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tight">
                  <span className="text-hankoRust">Jason</span> K<br /><span className="text-hankoRust">Hanani</span>
                </h1>
                <div className="max-w-2xl mb-12">
                  <div className="border-l-4 border-hankoRust pl-6 mb-6">
                    <p className="text-lg md:text-xl text-sumiInk leading-relaxed font-semibold">
                      I help businesses figure out what's actually broken — and design what needs to be built to fix it.
                    </p>
                  </div>
                  <div className="text-base text-sumiInk/70 leading-relaxed">
                    <span className="text-hankoRust font-bold">€</span><span className="text-sumiInk font-bold">1.5M+</span> in quantified impact across e-commerce operations and logistics.
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-hankoRust text-ricePaper text-sm font-bold tracking-[0.15em] uppercase rounded-full hover:bg-rustAccent85 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102">
                    See My Work
                  </button>
                </div>
              </div>
              <div className="bg-hankoRust/10 px-6 py-4">
                <p className="text-xs text-hankoRust font-mono font-bold">✓ NEW DESIGN</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-warmSand/30 border border-hankoRust/20 rounded-lg p-6">
            <p className="text-sm text-sumiInk/70"><strong>Key Changes:</strong> Gradient background (ricePaper → warmSand), larger typography (96px), first word of name in rust color, bordered value proposition, separated impact metric with accent color</p>
          </div>
        </section>

        {/* Section 2: Methodology */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-sumiInk mb-12 pb-6 border-b border-sumiInk/10">
            2. Methodology Section ("How I Work")
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* BEFORE */}
            <div className="border border-sumiInk/10 rounded-xl overflow-hidden">
              <div className="bg-ricePaper px-6 py-16">
                <div className="mb-12 max-w-xl">
                  <h3 className="text-4xl font-sans font-bold text-sumiInk mb-4">How I Work</h3>
                  <p className="text-base text-sumiInk/60">My approach to solving complex problems and designing solutions that actually work.</p>
                </div>
                <div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="grid grid-cols-[4rem_1fr] gap-8 py-8 border-t border-sumiInk/10">
                      <span className="text-4xl font-sans font-bold text-hankoRust/15 leading-none pt-1">{String(i).padStart(2, '0')}</span>
                      <div>
                        <h4 className="text-xl font-sans font-bold text-sumiInk mb-2">Step {i}</h4>
                        <p className="text-sm text-sumiInk/60">Description of methodology step would go here.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sumiInk/5 px-6 py-4">
                <p className="text-xs text-sumiInk/60 font-mono">CURRENT STATE</p>
              </div>
            </div>

            {/* AFTER */}
            <div className="border-2 border-hankoRust rounded-xl overflow-hidden">
              <div className="bg-warmSand px-6 py-16">
                <div className="mb-12 max-w-xl">
                  <h3 className="text-4xl font-sans font-bold text-sumiInk mb-4">How I Work</h3>
                  <p className="text-base text-sumiInk/60">My approach to solving complex problems and designing solutions that actually work.</p>
                </div>
                <div>
                  {[
                    { title: 'Diagnose', color: 'warmSand' },
                    { title: 'Define', color: 'lightStone' },
                    { title: 'Design', color: 'warmSand' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[4rem_1fr] gap-8 py-8 px-6 rounded-lg mb-3 border-l-4 border-hankoRust ${item.color === 'lightStone' ? 'bg-lightStone' : 'bg-warmSand'}`}
                    >
                      <span className="text-4xl font-sans font-bold text-hankoRust/30 leading-none pt-1">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="text-xl font-sans font-bold text-hankoRust mb-2">{item.title}</h4>
                        <p className="text-sm text-sumiInk/70">Description of methodology step would go here with more visible color hierarchy.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-hankoRust/10 px-6 py-4">
                <p className="text-xs text-hankoRust font-mono font-bold">✓ NEW DESIGN</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-warmSand/30 border border-hankoRust/20 rounded-lg p-6">
            <p className="text-sm text-sumiInk/70"><strong>Key Changes:</strong> Section background (warmSand), alternating card backgrounds (warmSand + lightStone), left border accent (hankoRust), title color (first words in rust), more visible index numbers, rounded corners, stronger visual progression</p>
          </div>
        </section>

        {/* Section 3: Featured Work */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-sumiInk mb-12 pb-6 border-b border-sumiInk/10">
            3. Featured Work / Outcomes Section
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* BEFORE */}
            <div className="border border-sumiInk/10 rounded-xl overflow-hidden">
              <div className="bg-ricePaper px-6 py-16">
                <div className="mb-12 max-w-xl">
                  <h3 className="text-4xl font-sans font-bold text-sumiInk mb-4">Outcomes</h3>
                  <p className="text-base text-sumiInk/60">Recent projects where diagnostic thinking delivered results.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Revenue Preservation', impact: '€695K' },
                    { title: 'Cost Optimization', impact: '€520K' },
                    { title: 'Support Automation', impact: '68% Deflection' }
                  ].map((card, i) => (
                    <div key={i} className="border border-sumiInk/10 rounded-lg p-6 hover:border-hankoRust/50 hover:bg-sumiInk/5 transition-colors">
                      <h4 className="text-lg font-bold text-sumiInk mb-3">{card.title}</h4>
                      <p className="text-sm text-sumiInk/60 mb-4">Brief description of the project and problem solved.</p>
                      <p className="text-sm font-bold text-sumiInk">{card.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sumiInk/5 px-6 py-4">
                <p className="text-xs text-sumiInk/60 font-mono">CURRENT STATE (Invisible section—same background!)</p>
              </div>
            </div>

            {/* AFTER */}
            <div className="border-2 border-hankoRust rounded-xl overflow-hidden">
              <div className="bg-lightStone px-6 py-16">
                <div className="mb-12 max-w-xl">
                  <h3 className="text-4xl font-sans font-bold text-sumiInk mb-4">Outcomes</h3>
                  <p className="text-base text-sumiInk/60">Recent projects where diagnostic thinking delivered results.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Featured Card (First) */}
                  <div className="md:col-span-2 bg-hankoRust text-ricePaper rounded-lg p-8 hover:shadow-lg hover:scale-102 transition-all duration-300 shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider mb-3 text-ricePaper/80">Featured Case Study</p>
                    <h4 className="text-2xl font-bold mb-4">Revenue Preservation</h4>
                    <p className="text-ricePaper/90 mb-6 text-sm leading-relaxed">Returns were treated as a cost center. We redesigned the system to treat returns as a retention opportunity.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-ricePaper/20">
                      <span className="font-bold text-lg">€695K Revenue Preserved</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Secondary Cards */}
                  <div className="bg-ricePaper border-2 border-sumiInk/15 rounded-lg p-6 hover:border-hankoRust hover:shadow-md transition-all duration-300">
                    <h4 className="text-lg font-bold text-sumiInk mb-3">Cost Optimization</h4>
                    <p className="text-sm text-sumiInk/60 mb-4">Flat discount logic was hiding true cost variations across transactions.</p>
                    <p className="text-hankoRust font-bold">€520K Savings</p>
                  </div>

                  <div className="bg-ricePaper border-2 border-sumiInk/15 rounded-lg p-6 hover:border-hankoRust hover:shadow-md transition-all duration-300">
                    <h4 className="text-lg font-bold text-sumiInk mb-3">Support Automation</h4>
                    <p className="text-sm text-sumiInk/60 mb-4">Human availability was the constraint. AI removed that bottleneck entirely.</p>
                    <p className="text-hankoRust font-bold">68% Deflection</p>
                  </div>
                </div>
              </div>
              <div className="bg-hankoRust/10 px-6 py-4">
                <p className="text-xs text-hankoRust font-mono font-bold">✓ NEW DESIGN</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-warmSand/30 border border-hankoRust/20 rounded-lg p-6">
            <p className="text-sm text-sumiInk/70"><strong>Key Changes:</strong> Section background (lightStone—NOW VISIBLE!), featured card promoted (larger, hankoRust bg, white text), secondary cards have stronger borders (sumiInk/15), first card has shadow and hover scale effect, impact metrics in rust color, visual hierarchy through size and color</p>
          </div>
        </section>

        {/* Section 4: Footer */}
        <section className="mb-32">
          <h2 className="text-3xl font-sans font-bold text-sumiInk mb-12 pb-6 border-b border-sumiInk/10">
            4. Footer
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* BEFORE */}
            <div className="border border-sumiInk/10 rounded-xl overflow-hidden">
              <div className="bg-sumiInk text-ricePaper pt-16 pb-8 px-6">
                <div className="grid grid-cols-2 gap-16 mb-12">
                  <div>
                    <h3 className="text-3xl font-sans font-bold mb-3">Jason K Hanani</h3>
                    <p className="text-xs font-bold tracking-widest text-sageBridge mb-6">BUSINESS ANALYST &amp; SYSTEMS DESIGNER</p>
                    <p className="text-ricePaper/60 text-sm">For inquiries, reach out via email or LinkedIn.</p>
                  </div>
                  <div className="pt-8">
                    <p className="text-xs font-bold tracking-widest text-sageBridge mb-4">GET IN TOUCH</p>
                    <a href="mailto:" className="text-ricePaper text-lg hover:text-sageBridge transition-colors">
                      contact@jasonkhanani.com
                    </a>
                  </div>
                </div>
                <div className="pt-6 border-t border-ricePaper/10 text-[10px] text-ricePaper/40">
                  <p>© 2026 Jason K Hanani</p>
                </div>
              </div>
              <div className="bg-sumiInk/80 px-6 py-4">
                <p className="text-xs text-ricePaper/60 font-mono">CURRENT STATE</p>
              </div>
            </div>

            {/* AFTER */}
            <div className="border-2 border-hankoRust rounded-xl overflow-hidden">
              <div className="bg-sumiInk text-ricePaper pt-16 pb-8 px-6">
                <div className="grid grid-cols-2 gap-16 mb-12">
                  <div>
                    <h3 className="text-3xl font-sans font-bold mb-3">Jason K Hanani</h3>
                    <p className="text-xs font-bold tracking-widest text-sageBridge mb-6">BUSINESS ANALYST &amp; SYSTEMS DESIGNER</p>
                    <p className="text-ricePaper/60 text-sm">For inquiries, reach out via email or LinkedIn.</p>
                  </div>
                  <div className="pt-8">
                    <p className="text-xs font-bold tracking-widest text-sageBridge mb-4">GET IN TOUCH</p>
                    <a href="mailto:" className="text-ricePaper text-lg hover:text-ricePaper hover:underline transition-all flex items-center gap-2 group">
                      <span>contact@jasonkhanani.com</span>
                      <span className="text-hankoRust">↗</span>
                    </a>
                    <div className="mt-6 pt-6 border-t border-ricePaper/20">
                      <a href="#" className="text-sageBridge text-xs font-bold tracking-widest hover:text-ricePaper transition-colors flex items-center gap-2">
                        <span>LinkedIn</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-ricePaper/10 text-[10px] text-ricePaper/40">
                  <p>© 2026 Jason K Hanani</p>
                </div>
              </div>
              <div className="bg-hankoRust/10 px-6 py-4">
                <p className="text-xs text-hankoRust font-mono font-bold">✓ NEW DESIGN</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-warmSand/30 border border-hankoRust/20 rounded-lg p-6">
            <p className="text-sm text-sumiInk/70"><strong>Key Changes:</strong> Icons in hankoRust (gives pop to dark background), secondary text in sageBridge instead of ricePaper/60, arrow icon links, underline hover state for email, slight gradient overlay option, better visual distinction between primary and secondary actions</p>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-warmSand border-2 border-hankoRust rounded-xl p-12">
          <h2 className="text-3xl font-sans font-bold text-sumiInk mb-6">Design Principles in Action</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sumiInk/70">
            <div>
              <h3 className="font-bold text-sumiInk mb-2">Color Strategy</h3>
              <ul className="text-sm space-y-2">
                <li>✓ warmSand for methodology (introduction stage)</li>
                <li>✓ lightStone for featured work (outcomes stage)</li>
                <li>✓ hankoRust for featured card (emphasis)</li>
                <li>✓ sageBridge for secondary actions (trust)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sumiInk mb-2">Visual Hierarchy</h3>
              <ul className="text-sm space-y-2">
                <li>✓ Larger typography (96px hero, 56px section heads)</li>
                <li>✓ Distinct section backgrounds (create visual breaks)</li>
                <li>✓ Featured card promotion (larger + contrasting color)</li>
                <li>✓ Stronger hover states (shadow + scale + color)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignMockup;
